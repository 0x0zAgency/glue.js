import fs from 'fs';


let packages = {};
let cache = {};
let isLoading = false;

export const isDebug = () => {
  return process.env.GLUE_DEBUG === "true";
};


//require module
export const requireModule = async (nodeModule) => {

    if (isDebug())
        console.log('requireModule', nodeModule);

    let foundModule = await import(nodeModule);
    foundModule = foundModule.default || foundModule;
    
    packages[nodeModule] = foundModule;
    cache[nodeModule] = nodeModule;
    return foundModule;
}

export const reloadPackage = async (pkg) => {
    let key;
    let foundValue;
    Object.keys(cache).forEach((value) => {
        if (cache[value] == pkg) {
            key = cache[value];
            foundValue = value;
        }
    });

    if (!key) return;
    if (!foundValue) return;

    delete packages[key];

    if(require.cache[foundValue])
        delete require.cache[foundValue];
    
    return await requireModule(foundValue);
}

/**
 * 
 * @param {*} nodeModule 
 * @returns 
 */
export const get = async (nodeModule) => {
    
    if (Object.values(packages).length === 0)
        await loadPackages();

    return await import(nodeModule);
}

/**
 * @param {string} key 
 * @returns {(import)} import
 */
export const getSync = (key) => {

    return packages[key];
}

export const reloadPackages = async () => {
    Object.keys(cache).forEach((key) => {
        let nodeModule = cache[key];

        delete packages[nodeModule];

        if (require.cache[nodeModule])
            delete require.cache[nodeModule];
    })
    cache = {};
    await loadPackages();
}

export const loadPackages = async () => {
    let packages = JSON.parse(fs.readFileSync(process.cwd() + '/package.json'));
    if (!packages.glue) return;
    
    let keys = Object.keys(packages.glue);
    for (let i = 0; i < keys.length; i++) {

        if (!packages.glue[keys[i]]) {

            if (isDebug())
                console.log('loadPackages', keys[i], 'ignored');
    
            continue;
        }

        if (isDebug())
            console.log('loadPackages', keys[i]);

        await requireModule(keys[i]);  
    }
}

export default packages;



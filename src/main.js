/**
 * @type {import("./utils/wrapper.mjs")}
 */
let wrapper;

/**
 *
 * @param {*} nodeModule
 * @returns {Promise<import(any)>}
 */
module.exports.get = async (nodeModule) => {
  wrapper = await import("./utils/wrapper.mjs");
  await wrapper.loadPackages();
  return wrapper.get(nodeModule);
};

module.exports.load = async () => {
  wrapper = await import("./utils/wrapper.mjs");
  await wrapper.loadPackages();
  return wrapper;
};

/**
 * @type {import("./utils/wrapper.mjs")}
 */
module.exports.wrapper = async () => {
  if (wrapper) return wrapper;
  wrapper = await import("./utils/wrapper.mjs");
  await wrapper.loadPackages();
  return wrapper;
};

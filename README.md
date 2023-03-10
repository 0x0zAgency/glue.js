# glue.js

glue.js is a library to help with implementation of ESM modules into commonJS or typescript environments. glue.js dynamically loads ESM modules for you based on configuration inside of your `package.json`. Its an insanely light weight package which depends on nothing.

### Catches

- You cannot run glue top level you will need call the load method on glue for this to work.
- Import types have to be specified manually.

## Installation

`npm i jsglue`

Note: glue.js is currently only works on **node**.

## Usage

glue.js can enable integrations which were before quite tricky. Take for example integration of the library `ipfs-core`. This is an ESM module and thus will break in most environments where having `type: "module"` in the package.json is not possible or any common js file.

Simply add the following to your package.json to be able to use it anywhere.

```json
  "glue": {
    "ipfs-core": true
  },
```

Then, in your script, or at the top of your _express.js main file_. Simply add the following lines.

```js
const glue = require("glue-js");

(async () => {
  let wrapper = await glue.load();
  /**
   * @type {import('ipfs-core')}
   **/
  let ipfsCore = wrapper.getSync("ipfs-core");
})()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .then(() => {
    process.exit(0);
  });
```

## Credits

- Llydia Cross
- Kae Bowen (GitHub Workflows)

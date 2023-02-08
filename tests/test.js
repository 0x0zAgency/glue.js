const glue = require("../index");

(async () => {
  let wrapper = await glue.wrapper();
  let ipfsCore = await wrapper.get("ipfs-core");
  console.log(ipfsCore);
})();

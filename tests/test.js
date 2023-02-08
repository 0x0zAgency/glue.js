const glue = require("../index");

(async () => {
  let ipfsCore = await glue.wrapper().getSync("ipfs-core");

  console.log(ipfsCore);
  let ipfs = await ipfsCore.create();
  console.log(ipfs);
})();

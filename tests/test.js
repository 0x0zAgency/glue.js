const glue = require("../index");

(async () => {
  let ipfsCore = (await glue.load()).getSync("ipfs-core");

  console.log(ipfsCore);
  let ipfs = await ipfsCore.create();
  console.log(ipfs);
})();

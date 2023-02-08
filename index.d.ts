declare module "jsglue" {
  /**
   * Use '@type' to get the definition of the module
   *
   * @example
   * ```js
   * const { get, load } = require('jsglue')
   * await load();
   *
   * //@type {import('ipfs-core')}
   * const ipfs = await get('ipfs-core')
   * ```
   * @param nodeModule
   */
  export function get(nodeModule: string): Promise<any>;
  export function load(): Promise<typeof import("./src/utils/wrapper.mjs")>;
  export function wrapper(): Promise<typeof import("./src/utils/wrapper.mjs")>;
}

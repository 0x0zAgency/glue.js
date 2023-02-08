declare module "jsglue" {
  export function get(nodeModule: string): Promise<import(any)>;
  export function load(): Promise<import("./src/utils/wrapper.mjs")>;
  export function wrapper(): Promise<import("./src/utils/wrapper.mjs")>;
}

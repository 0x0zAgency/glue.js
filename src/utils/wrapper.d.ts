declare module "wrapper" {
  export function loadPackages(): Promise<void>;
  export function reloadPackages(): Promise<void>;
  export function requireModule(nodeModule: string): Promise<any>;
  export function reloadPackage(nodeModule: string): Promise<any>;
  export function get(nodeModule: string): Promise<any>;
  export function getSync(nodeModule: string): any;
  export function isDebug(): boolean;
}

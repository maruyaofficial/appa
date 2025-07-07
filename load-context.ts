import { type PlatformProxy } from "wrangler";

type GetLoadContextArgs = {
  request: Request;
 
export function getLoadContext({ context }: GetLoadContextArgs) {
  return context;
}

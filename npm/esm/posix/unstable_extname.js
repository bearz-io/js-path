// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
import { extname as stableExtname } from "./extname.js";
import { fromFileUrl } from "./from_file_url.js";
/**
 * Return the extension of the `path` with leading period.
 *
 * Note: Hashes and query parameters are ignore when constructing a URL.
 *
 * @experimental **UNSTABLE**: New API, yet to be vetted.
 *
 * @example Usage
 *
 * ```ts
 * import { extname } from "@bearz/path/posix/unstable-extname";
 * import { equal } from "@bearz/assert";
 *
 * equal(extname("/home/user/Documents/file.ts"), ".ts");
 * equal(extname("/home/user/Documents/"), "");
 * equal(extname("/home/user/Documents/image.png"), ".png");
 * equal(extname(new URL("file:///home/user/Documents/file.ts")), ".ts");
 * equal(extname(new URL("file:///home/user/Documents/file.ts?a=b")), ".ts");
 * equal(extname(new URL("file:///home/user/Documents/file.ts#header")), ".ts");
 * ```
 *
 * @param path The path to get the extension from.
 * @returns The extension (ex. for `file.ts` returns `.ts`).
 */
export function extname(path) {
    if (path instanceof URL) {
        path = fromFileUrl(path);
    }
    return stableExtname(path);
}

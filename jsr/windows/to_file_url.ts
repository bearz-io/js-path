// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.

import { encodeWhitespace } from "../_common/to_file_url.ts";
import { isAbsolute } from "./is_absolute.ts";

/**
 * Converts a path string to a file URL.
 *
 * @example Usage
 * ```ts
 * import { toFileUrl } from "@bearz/path/windows/to-file-url";
 * import { equal } from "@bearz/assert";
 *
 * equal(toFileUrl("\\home\\foo"), new URL("file:///home/foo"));
 * equal(toFileUrl("C:\\Users\\foo"), new URL("file:///C:/Users/foo"));
 * equal(toFileUrl("\\\\127.0.0.1\\home\\foo"), new URL("file://127.0.0.1/home/foo"));
 * ```
 * @param path The path to convert.
 * @throws TypeError if the path is not absolute.
 * @throws TypeError if the hostname is invalid.
 * @returns The file URL.
 */
export function toFileUrl(path: string): URL {
    if (!isAbsolute(path)) {
        throw new TypeError(`Path must be absolute: received "${path}"`);
    }
    const [, hostname, pathname] = path.match(
        /^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/,
    )!;
    const url = new URL("file:///");
    url.pathname = encodeWhitespace(pathname!.replace(/%/g, "%25"));
    if (hostname !== undefined && hostname !== "localhost") {
        url.hostname = hostname;
        if (!url.hostname) {
            throw new TypeError(`Invalid hostname: "${url.hostname}"`);
        }
    }
    return url;
}

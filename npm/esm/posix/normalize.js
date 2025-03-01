// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
import { assertArg } from "../_common/normalize.js";
import { normalizeString } from "../_common/normalize_string.js";
import { isPosixPathSeparator } from "./_util.js";
/**
 * Normalize the `path`, resolving `'..'` and `'.'` segments.
 * Note that resolving these segments does not necessarily mean that all will be eliminated.
 * A `'..'` at the top-level will be preserved, and an empty path is canonically `'.'`.
 *
 * @example Usage
 * ```ts
 * import { normalize } from "@bearz/path/posix/normalize";
 * import { equal } from "@bearz/assert";
 *
 * const path = normalize("/foo/bar//baz/asdf/quux/..");
 * equal(path, "/foo/bar/baz/asdf");
 * ```
 *
 * @example Working with URLs
 *
 * Note: This function will remove the double slashes from a URL's scheme.
 * Hence, do not pass a full URL to this function. Instead, pass the pathname of
 * the URL.
 *
 * ```ts
 * import { normalize } from "@bearz/path/posix/normalize";
 * import { equal } from "@bearz/assert";
 *
 * const url = new URL("https://deno.land");
 * url.pathname = normalize("//std//assert//.//mod.ts");
 * equal(url.href, "https://deno.land/std/assert/mod.ts");
 *
 * url.pathname = normalize("std/assert/../async/retry.ts");
 * equal(url.href, "https://deno.land/std/async/retry.ts");
 * ```
 *
 * Note: If you are working with file URLs,
 * use the new version of `normalize` from `@bearz/path/posix/unstable-normalize`.
 *
 * @param path The path to normalize.
 * @returns The normalized path.
 */
export function normalize(path) {
    assertArg(path);
    const isAbsolute = isPosixPathSeparator(path.charCodeAt(0));
    const trailingSeparator = isPosixPathSeparator(path.charCodeAt(path.length - 1));
    // Normalize the path
    path = normalizeString(path, !isAbsolute, "/", isPosixPathSeparator);
    if (path.length === 0 && !isAbsolute) {
        path = ".";
    }
    if (path.length > 0 && trailingSeparator) {
        path += "/";
    }
    if (isAbsolute) {
        return `/${path}`;
    }
    return path;
}

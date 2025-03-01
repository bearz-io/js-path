// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
import { isWindows } from "./_os.js";
import { resolve as posixResolve } from "./posix/resolve.js";
import { resolve as windowsResolve } from "./windows/resolve.js";
/**
 * Resolves path segments into a path.
 *
 * @example Usage
 * ```ts
 * import { resolve } from "@bearz/path/resolve";
 * import { equal } from "@bearz/assert";
 *
 * if (Deno.build.os === "windows") {
 *   equal(resolve("C:\\foo", "bar", "baz"), "C:\\foo\\bar\\baz");
 *   equal(resolve("C:\\foo", "C:\\bar", "baz"), "C:\\bar\\baz");
 * } else {
 *   equal(resolve("/foo", "bar", "baz"), "/foo/bar/baz");
 *   equal(resolve("/foo", "/bar", "baz"), "/bar/baz");
 * }
 * ```
 *
 * @param pathSegments Path segments to process to path.
 * @returns The resolved path.
 */
export function resolve(...pathSegments) {
    return isWindows ? windowsResolve(...pathSegments) : posixResolve(...pathSegments);
}

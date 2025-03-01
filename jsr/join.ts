// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.

import { isWindows } from "./_os.ts";
import { join as posixJoin } from "./posix/join.ts";
import { join as windowsJoin } from "./windows/join.ts";

/**
 * Joins a sequence of paths, then normalizes the resulting path.
 *
 * @example Usage
 * ```ts
 * import { join } from "@bearz/path/join";
 * import { equal } from "@bearz/assert";
 *
 * if (Deno.build.os === "windows") {
 *   equal(join("C:\\foo", "bar", "baz\\quux", "garply", ".."), "C:\\foo\\bar\\baz\\quux");
 * } else {
 *   equal(join("/foo", "bar", "baz/quux", "garply", ".."), "/foo/bar/baz/quux");
 * }
 * ```
 *
 * Note: If you are working with file URLs,
 * use the new version of `join` from `@bearz/path/unstable-join`.
 *
 * @param paths Paths to be joined and normalized.
 * @returns The joined and normalized path.
 */
export function join(...paths: string[]): string {
    return isWindows ? windowsJoin(...paths) : posixJoin(...paths);
}

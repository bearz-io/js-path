/**
 * Verifies whether provided path is absolute.
 *
 * @example Usage
 * ```ts
 * import { isAbsolute } from "@bearz/path/windows/is-absolute";
 * import { assert, assertFalse } from "@bearz/assert";
 *
 * assert(isAbsolute("C:\\foo\\bar"));
 * assertFalse(isAbsolute("..\\baz"));
 * ```
 *
 * @param path The path to verify.
 * @returns `true` if the path is absolute, `false` otherwise.
 */
export declare function isAbsolute(path: string): boolean;

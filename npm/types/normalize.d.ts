/**
 * Normalize the path, resolving `'..'` and `'.'` segments.
 *
 * Note: Resolving these segments does not necessarily mean that all will be
 * eliminated. A `'..'` at the top-level will be preserved, and an empty path is
 * canonically `'.'`.
 *
 * @example Usage
 * ```ts
 * import { normalize } from "@bearz/path/normalize";
 * import { equal } from "@bearz/assert";
 *
 * if (Deno.build.os === "windows") {
 *   equal(normalize("C:\\foo\\bar\\..\\baz\\quux"), "C:\\foo\\baz\\quux");
 * } else {
 *   equal(normalize("/foo/bar/../baz/quux"), "/foo/baz/quux");
 * }
 * ```
 *
 * Note: If you are working with file URLs,
 * use the new version of `normalize` from `@bearz/path/unstable-normalize`.
 *
 * @param path Path to be normalized
 * @returns The normalized path.
 */
export declare function normalize(path: string): string;

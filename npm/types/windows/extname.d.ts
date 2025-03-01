/**
 * Return the extension of the `path` with leading period.
 *
 * @example Usage
 * ```ts
 * import { extname } from "@bearz/path/windows/extname";
 * import { equal } from "@bearz/assert";
 *
 * const ext = extname("file.ts");
 * equal(ext, ".ts");
 * ```
 *
 * Note: If you are working with file URLs,
 * use the new version of `extname` from `@bearz/path/windows/unstable-extname`.
 *
 * @param path The path to get the extension from.
 * @returns The extension of the `path`.
 */
export declare function extname(path: string): string;

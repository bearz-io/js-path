/**
 * Return the extension of the path with leading period (".").
 *
 * @example Usage
 * ```ts
 * import { extname } from "@bearz/path/extname";
 * import { equal } from "@bearz/assert";
 *
 * if (Deno.build.os === "windows") {
 *   equal(extname("C:\\home\\user\\Documents\\image.png"), ".png");
 * } else {
 *   equal(extname("/home/user/Documents/image.png"), ".png");
 * }
 * ```
 *
 * Note: If you are working with file URLs,
 * use the new version of `extname` from `@bearz/path/unstable-extname`.
 *
 * @param path Path with extension.
 * @returns The file extension. E.g. returns `.ts` for `file.ts`.
 */
export declare function extname(path: string): string;

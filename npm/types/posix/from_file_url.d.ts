/**
 * Converts a file URL to a path string.
 *
 * @example Usage
 * ```ts
 * import { fromFileUrl } from "@bearz/path/posix/from-file-url";
 * import { equal } from "@bearz/assert";
 *
 * equal(fromFileUrl(new URL("file:///home/foo")), "/home/foo");
 * ```
 *
 * @param url The file URL to convert.
 * @returns The path string.
 */
export declare function fromFileUrl(url: URL | string): string;

/**
 * Resolves path segments into a `path`.
 *
 * @example Usage
 * ```ts
 * import { resolve } from "@bearz/path/windows/resolve";
 * import { equal } from "@bearz/assert";
 *
 * const resolved = resolve("C:\\foo\\bar", "..\\baz");
 * equal(resolved, "C:\\foo\\baz");
 * ```
 *
 * @param pathSegments The path segments to process to path
 * @returns The resolved path
 */
export declare function resolve(...pathSegments: string[]): string;

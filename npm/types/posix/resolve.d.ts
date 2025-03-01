/**
 * Resolves path segments into a `path`.
 *
 * @example Usage
 * ```ts
 * import { resolve } from "@bearz/path/posix/resolve";
 * import { equal } from "@bearz/assert";
 *
 * const path = resolve("/foo", "bar", "baz/asdf", "quux", "..");
 * equal(path, "/foo/bar/baz/asdf");
 * ```
 *
 * @param pathSegments The path segments to resolve.
 * @returns The resolved path.
 */
export declare function resolve(...pathSegments: string[]): string;

// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
import { CHAR_COLON } from "@bearz/chars/constants";
import { assertPath } from "../_common/assert_path.js";
import { isPathSeparator, isWindowsDeviceRoot } from "./_util.js";
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
export function isAbsolute(path) {
    assertPath(path);
    const len = path.length;
    if (len === 0) {
        return false;
    }
    const code = path.charCodeAt(0);
    if (isPathSeparator(code)) {
        return true;
    } else if (isWindowsDeviceRoot(code)) {
        // Possible device root
        if (len > 2 && path.charCodeAt(1) === CHAR_COLON) {
            if (isPathSeparator(path.charCodeAt(2))) {
                return true;
            }
        }
    }
    return false;
}

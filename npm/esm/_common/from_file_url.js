// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
export function assertArg(url) {
    url = url instanceof URL ? url : new URL(url);
    if (url.protocol !== "file:") {
        throw new TypeError(`URL must be a file URL: received "${url.protocol}"`);
    }
    return url;
}

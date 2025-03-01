// Copyright 2018-2025 the Deno authors. MIT license.

import { test } from "@bearz/testing";
import { equal } from "@bearz/assert";
import * as windows from "./windows/mod.ts";

test("path::windows.parse() parses UNC root only path", () => {
    const parsed = windows.parse("\\\\server\\share");
    equal<unknown>(parsed, {
        base: "\\",
        dir: "\\\\server\\share",
        ext: "",
        name: "",
        root: "\\\\server\\share",
    });
});

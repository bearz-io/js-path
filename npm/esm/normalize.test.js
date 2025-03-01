// Copyright 2018-2025 the Deno authors. MIT license.
import { test } from "@bearz/testing";
import { equal } from "@bearz/assert";
import * as windows from "./windows/mod.js";
import * as posix from "./posix/mod.js";
import { normalize as windowsUnstableNormalize } from "./windows/unstable_normalize.js";
import { normalize as posixUnstableNormalize } from "./posix/unstable_normalize.js";
test(`path::normalize() returns "." if input is empty`, function () {
    equal(posix.normalize(""), ".");
    equal(windows.normalize(""), ".");
});
test("path::posix.normalize() normalizes posix specific paths", () => {
    equal(posix.normalize("/foo/bar//baz/asdf/quux/.."), "/foo/bar/baz/asdf");
    equal(
        posixUnstableNormalize(new URL("file:///foo/bar//baz/asdf/quux/..")),
        "/foo/bar/baz/asdf/",
    );
});
test("path::windows.normalize() normalizes windows specific paths", () => {
    equal(windows.normalize("//server/share/dir/file.ext"), "\\\\server\\share\\dir\\file.ext");
    equal(
        windowsUnstableNormalize(new URL("file:///C:/foo/bar/../baz/quux")),
        "C:\\foo\\baz\\quux",
    );
});

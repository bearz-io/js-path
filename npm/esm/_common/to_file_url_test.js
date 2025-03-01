// Copyright 2018-2025 the Deno authors. MIT license.
import { equal } from "@bearz/assert";
import { test } from "@bearz/testing";
import { encodeWhitespace } from "./to_file_url.js";
test("path::encodeWhitespace()", () => {
    equal(encodeWhitespace("foo"), "foo");
    equal(encodeWhitespace("foo\tbar"), "foo%09bar");
    equal(encodeWhitespace("foo\nbar"), "foo%0Abar");
    equal(encodeWhitespace("foo\vbar"), "foo%0Bbar");
    equal(encodeWhitespace("foo\fbar"), "foo%0Cbar");
    equal(encodeWhitespace("foo\rbar"), "foo%0Dbar");
    equal(encodeWhitespace("foo bar"), "foo%20bar");
    equal(encodeWhitespace("foo\u0009bar"), "foo%09bar");
    equal(encodeWhitespace("foo\u000Abar"), "foo%0Abar");
    equal(encodeWhitespace("foo\u000Bbar"), "foo%0Bbar");
    equal(encodeWhitespace("foo\u000Cbar"), "foo%0Cbar");
    equal(encodeWhitespace("foo\u000Dbar"), "foo%0Dbar");
    equal(encodeWhitespace("foo\u0020bar"), "foo%20bar");
    equal(encodeWhitespace("foo\ufeffbar"), "foo﻿bar");
});

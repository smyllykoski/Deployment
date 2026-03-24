/**
 * get.test.js
 * ---------------------------------------------------------
 * Unit tests for src/get.js
 *
 * Purpose:
 *  - Verify `get(object, path, [defaultVale])` correctly resolves
 *    deeply nested values using mixed dot notation ("a.b.c.") and
 *    bracket notation ("a.b[0].c")
 *
 * Why this matters:
 *  - deep-path accessors are error prone as a missing segment can
 *    cause undefined values or TypeErrors if not properly guarded.
 *  - many applications rely on safe deep-path lookups for configuration,
 *    user data and loosely structured JSON.
 *  - a reliable `get()` implementation needs to:
 *    - correctly tokenize mixed dot + bracket paths
 *    - return a fallback only when path is truly missing
 *    - not treat falsy values (0, "", false) as missing
 *
 * Test principles:
 *  - confirm correct path parsing
 *  - confirm fallback handling only on missing paths
 *  - confirm falsy but valid values are returned as is
 *  - protect agains regressions
 *
 * Author: Sini Myllykoski
 * Date: 24.3.2026
 */

import { expect } from "chai";
import get from "../src/get.js";

// complex nested object used in tests
const obj = {
  a: {
    b: [
      { c: 42 }, // deep path a.b[0].c -> 42
    ],
    d: 0, // falsy but valid value
  },
};

describe("get(object, path, [defaultValue])", () => {
  // ensure the path parser handles deep path correctly
  // confirm array access [0] functions with nested objects
  // correct result (42) confirms logic works
  it("reads deep path with bracket and dot notation", () => {
    expect(get(obj, "a.b[0].c")).to.equal(42);
  });

  it("returns default when path is missing", () => {
    // Missing paths should not throw errors and must return
    // provided fallback
    // ensure function is safe to use
    expect(get(obj, "a.x.y", "fallback")).to.equal("fallback");
  });

  it("returns falsy values (does not coerce to default)", () => {
    // many incorrect `get` implementation use loose checks like
    // `if (!value)` which would replace 0, "", or false with
    // defaults. This test ensures `0` is a valid existing
    // value. Important for numerical fata validation and value
    // configuration.
    expect(get(obj, "a.d", "fallback")).to.equal(0);
  });
});

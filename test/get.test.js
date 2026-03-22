/**
 * get.test.js
 * ---------------------------------------------------------
 * Unit tests for src/get.js
 *
 * Purpose:
 *  - Verify deep-path reading with dot + bracket notation.
 *  - Confirm default value is returned only when path is missing,
 *    but falsy values (for example 0) are not replaced unintentionally.
 *
 * Author: Sini Myllykoski
 * Date: 22.3.2026
 */

import { expect } from "chai";
import get from "../src/get.js";

describe("get(object, path, [defaultValue])", () => {
  const obj = { a: { b: [{ c: 42 }], d: 0 } };

  it("reads deep path with bracket and dot notation", () => {
    // If the path is parsed correctly, returns 42
    expect(get(obj, "a.b[0].c")).to.equal(42);
  });

  it("returns default when path is missing", () => {
    // Missing path -> returns default
    expect(get(obj, "a.x.y", "fallback")).to.equal("fallback");
  });

  it("returns falsy values (does not coerce to default)", () => {
    // Ensure falsy value (0) is not interpreted as missing.
    expect(get(obj, "a.d", "fallback")).to.equal(0);
  });
});

/**
 * toString.test.js
 * ---------------------------------------------------------
 * Tests for src/toString.js
 *
 * Note:
 *  - In this library toString(null) returns string "null" (NOT empty string).
 *  - Also toString(undefined) can return "undefined" (checked below).
 *  - Tests have been written specifically according to the implementation of this library.
 *
 * Author: Sini Myllykoski
 * Date: 23.3.2026
 */

import { expect } from "chai";
import toString from "../src/toString.js";

describe("toString(value) — library-specific behavior", () => {
  it('nullish -> string labels (e.g., "null", "undefined")', () => {
    // Library implementation: null -> "null"
    expect(toString(null)).to.equal("null");

    // Test what happens to undefined:
    // Implementation should return "undefined".
    expect(toString(undefined)).to.equal("undefined");
  });

  it("numbers and booleans", () => {
    expect(toString(123)).to.equal("123");
    expect(toString(true)).to.equal("true");
    expect(toString(false)).to.equal("false");
  });

  it("arrays and objects produce a string", () => {
    const arr = toString([1, 2]);
    const obj = toString({ a: 1 });
    expect(arr).to.be.a("string");
    expect(obj).to.be.a("string");
  });
});

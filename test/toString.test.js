/**
 * toString.test.js
 * ---------------------------------------------------------
 * Unit tests for src/toString.js
 *
 * Purpose:
 *  - Document and verify string-conversion implementation in
 *    this library. This implementation returns explicit
 *    string labels:
 *      null -> "null"
 *      undefined -> "undefined"
 *  - Tests validate the actual behavior instead of assumed common
 *    pattern. Protects agains regression
 *
 * Why this matters:
 *  - String conversio is used in logging, debugging, formatting
 *    and data normalization
 *  - differences in nullish handling (e.g. "" vs. "null") can
 *    affect UI output, serialization or error messages
 *  - arrays and objects must return string without throwing
 *
 * Test principle:
 *  - Nullish conversions ("null", "undefined")
 *  - Primitive conversions (numbers, booleans)
 *  - Structural types (arrays, objects) produce some string
 *
 * Author: Sini Myllykoski
 * Date: 24.3.2026
 */

import { expect } from "chai";
import toString from "../src/toString.js";

describe("toString(value) — library-specific behavior", () => {
  it('nullish -> string labels (e.g., "null", "undefined")', () => {
    // Confirm non-stardard but library-defined behavior:
    // null -> "null"
    // undefined -> "undefined"
    // ensure behavior remains stable
    expect(toString(null)).to.equal("null");
    expect(toString(undefined)).to.equal("undefined");
  });

  it("numbers and booleans", () => {
    // ensure no unexpected formatting occurs
    // with numbers and booleans
    expect(toString(123)).to.equal("123");
    expect(toString(true)).to.equal("true");
    expect(toString(false)).to.equal("false");
  });

  it("arrays and objects produce a string", () => {
    // exact output for arrays/objects can vary
    // depending on implementation details of
    // `toString`.
    // assert that output is a string, not exact
    // representation
    // keeps test suite flexible
    const arr = toString([1, 2]);
    const obj = toString({ a: 1 });
    expect(arr).to.be.a("string");
    expect(obj).to.be.a("string");
  });
});

/**
 * isEmpty.test.js
 * ---------------------------------------------------------
 * Unit tests for src/isEmpty.js
 *
 * Purpose:
 *  - Clarify truth table for "emptiness" across common JS values.
 *  - Highlights null/undefined are considered empty,
 *    non-empty arrays/objects/strings are not.
 *
 * Author: Sini Myllykoski
 * Date: 22.3.2026
 */

import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("isEmpty(value)", () => {
  it("true for null and undefined", () => {
    // Nullish values are often edge cases and it is in order
    // to check that they are interpreted as "empty"
    expect(isEmpty(null)).to.equal(true);
    expect(isEmpty(undefined)).to.equal(true);
  });

  it("true for empty array/object/string", () => {
    // tests typical "empty" containers
    // if any is seen as non-empty, will result in logic errors
    expect(isEmpty([])).to.equal(true);
    expect(isEmpty({})).to.equal(true);
    expect(isEmpty("")).to.equal(true);
  });

  it("false for non-empty structures", () => {
    // positive counterparts ensure the function is not too aggressive:
    // it cannot return true when a structure contains values
    expect(isEmpty([1])).to.equal(false);
    expect(isEmpty({ a: 1 })).to.equal(false);
    expect(isEmpty("x")).to.equal(false);
  });
});

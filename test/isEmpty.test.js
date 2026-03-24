/**
 * isEmpty.test.js
 * ---------------------------------------------------------
 * Unit tests for src/isEmpty.js
 *
 * Purpose:
 *  - Define and verify library's interpretation of "emptiness"
 *    in common JS values,. Goal is to ensure that the function
 *    handles nullish values, empty containers and non-empty
 *    data in a deterministic and consistent manner.
 *
 * Why this matters:
 *  - Many applications uses `isEmpty()` as a guard condition
 *    for input validation, early returns or conditional
 *    rendering.
 *  - Misinterpreting values like `0`, `false`, or `""` can
 *    cause logic errors ("falsy" != "empty")
 *  - Nullish values (null, undefined) are normally considered
 *    empty because they do not contain meaningful data
 *  - arrays, objects, and strings require inspection of
 *    size/content
 *
 * Test principles:
 *  - Confirm nullish -> true
 *  - Confirm empty containers -> true
 *  - Confirm non-empty containers -> false
 *  - Ensure function does not incorrectly classify values
 *    based only on truthiness.
 *
 * Author: Sini Myllykoski
 * Date: 24.3.2026
 */

import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("isEmpty(value)", () => {
  it("true for null and undefined", () => {
    // Null and undefined represent absence of data
    // Many utility libraries treat these as "empty"
    // Ensure implementation does not throw or treat them
    // as objects
    expect(isEmpty(null)).to.equal(true);
    expect(isEmpty(undefined)).to.equal(true);
  });

  it("true for empty array/object/string", () => {
    // canonical "empty" container types
    // ensure size/content inspection behaves correctly:
    // [] -> empty array
    // {} -> no enumerable keys
    // "" -> string of length zero
    // If any incorrectly return false (non-empty),
    // calling code could assume required data exists
    // when it does not
    expect(isEmpty([])).to.equal(true);
    expect(isEmpty({})).to.equal(true);
    expect(isEmpty("")).to.equal(true);
  });

  it("false for non-empty structures", () => {
    // ensure the function does not rely only on
    // boolean coercion
    // boolean([1]) -> true (OK)
    // boolean({ a: 1 }) -> true (OK)
    // boolean("x") -> true (OK)
    // structural evaluation:
    // isEmpty([1]) -> false (correct)
    // confirm correct behavior for:
    // - array with elements
    // - object with keys
    // - string with characters
    expect(isEmpty([1])).to.equal(false);
    expect(isEmpty({ a: 1 })).to.equal(false);
    expect(isEmpty("x")).to.equal(false);
  });
});

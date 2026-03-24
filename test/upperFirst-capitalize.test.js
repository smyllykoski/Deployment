/**
 * upperFirst-capitalize.test.js
 * ---------------------------------------------------------
 * Unit tests for
 *  - src/upperFirst.js
 *  - src/capitalize.js
 *
 * Purpose:
 *  - validate two related string-normalization helpers
 *    - upperFirst(input): only the first letter is
 *      capitalized, the rest remain as originally
 *      (or according to implementation)
 *    - capitalize(input): first letter capitalized,
 *      force the rest lowercase
 *
 * Why this matters:
 *  - functions are widely used in UI formatting,
 *    user facing messages and name/title normalization
 *  - incorrect case logic causes inconsistency in UX,
 *    especially when dealing with mixed-case or
 *    user input data
 *  - this test suite documents intended logic and
 *    protects against regression
 *
 * Test principles:
 *  - Correct capitalization of first letter
 *  - Preservation or normalizatio of the rest of the
 *    characters
 *  - Stability of empty and single-character inputs
 *
 *
 * Author: Sini Myllykoski
 * Date: 24.3.2026
 */

import { expect } from "chai";
import upperFirst from "../src/upperFirst.js";
import capitalize from "../src/capitalize.js";

// upperFirst

describe("upperFirst(input)", () => {
  it("uppercases only the first character (document actual behavior)", () => {
    // confirm core function of upperFirst():
    // input: "hello"
    // output "Hello"
    // ensure only first character changed
    expect(upperFirst("hello")).to.equal("Hello");
  });

  it("handles empty and single-character strings", () => {
    // edge cases must not throw errors or output anything
    // unexpected
    // empty string should remain empty
    // single-character should be uppercased
    expect(upperFirst("")).to.equal("");
    expect(upperFirst("x")).to.equal("X");
  });
});

// capitalize

describe("capitalize(input)", () => {
  it("uppercases first, lowercases the rest", () => {
    // confirm stricter normalization than upperFirst():
    // input: "hELLO"
    // output: "Hello"
    // enforces consistent output formatting
    expect(capitalize("hello")).to.equal("Hello");
    expect(capitalize("hELLO")).to.equal("Hello");
  });

  it("handles empty and single-character strings", () => {
    // ensure safe behavior for minimal inputs
    // capitalize("") -> ""
    // capitalize("x") -> "X"
    expect(capitalize("")).to.equal("");
    expect(capitalize("x")).to.equal("X");
  });
});

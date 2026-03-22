/**
 * add.test.js
 * ---------------------------------------------------------
 * Unit tests for src/add.js
 *
 * Purpose:
 *  - Verify that 'add' performs numeric addition correctly.
 *  - Exercise a few cases so the behavior is clear to readers.
 *
 * Why these tests:
 *  - Addition is simple, but the tests reveal the project structure (ESM imports)
 *    and give quick smoke test for CI and nyc coverage.
 *
 * Author: Sini Myllykoski
 * Date: 22.3.2026
 */

import { expect } from "chai";
import add from "../src/add.js";

describe("add", () => {
  it("adds two positive numbers", () => {
    // The sum of two positives must be a mathematical sum.
    expect(add(2, 3)).to.equal(5);
  });

  it("works with negatives", () => {
    // Handling negative values: ensure the function does not do for example string concatenation.
    expect(add(-2, 3)).to.equal(1);
  });

  it("handles zeros", () => {
    // Zeroes oftern reveal a wrong implementation (for example falsy).
    expect(add(0, 0)).to.equal(0);
  });
});

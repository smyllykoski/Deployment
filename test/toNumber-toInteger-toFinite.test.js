/**
 * toNumber-toInteger-toFinite.test.js
 * ---------------------------------------------------------
 * Unit tests for
 *  - src/toNumber.js
 *  - src/toInteger.js
 *  - src/toFinite.js
 *
 * Purpose:
 *  - Unified test suite for numeric conversion helpers
 *  - Often used together to clean user input and normalize
 *    numeric data coming from untrusted sources
 *
 * Why this matters:
 *  - `toNumber()` must correctly handle:
 *    - numeric strings
 *    - booleans
 *    - nullish values
 *    - non-numeric strings
 *    and produce results without breaking logic
 *  - `toInteger()` defines how fractions are normalized
 *    (trunc vs floor). Needs explicit tests because rounding
 *    policies vary in libraries
 *  - `toFinite()` protects system from Infinity / -Infity
 *    leaking into business logic by converting the values
 *
 * Test principle:
 *  - Verify core conversion for common input types
 *  - Document actual policies found in implementation
 *  - Test edge cases likely to break the pipeline
 *
 * Author: Sini Myllykoski
 * Date: 24.3.2026
 */

import { expect } from "chai";
import toNumber from "../src/toNumber.js";
import toInteger from "../src/toInteger.js";
import toFinite from "../src/toFinite.js";

// toNumber

describe("toNumber(value)", () => {
  it("converts numeric strings to numbers", () => {
    // ensure parsing of typical numeric inputs¨
    // main use case: clean up of user strings
    expect(toNumber("42")).to.equal(42);
    expect(toNumber("3.14")).to.be.closeTo(3.14, 1e-12);
  });

  it("non-numeric strings -> NaN (or documented behavior)", () => {
    // a common failure mode returns 0 or throws
    // ensure safe and predictable NaN in invalid cases
    const out = toNumber("abc");
    expect(Number.isNaN(out)).to.equal(true);
  });

  it("nullish and booleans according to library policy", () => {
    // observed policy:
    // - undefined -> NaN
    // - null -> 0
    // - true -> 1
    // - false -> 0
    // nullish values differ in libraries
    // test ensures documented behavior is stable
    expect(Number.isNaN(toNumber(undefined))).to.equal(true);
    expect(toNumber(true)).to.equal(1);
    expect(toNumber(false)).to.equal(0);
  });
});

// toInteger

describe("toInteger(value)", () => {
  it("truncates decimals (policy: trunc vs floor)", () => {
    // confirm negative numbers are also truncated toward zero
    // Math.floor() -> floor(-3.9) == -4 (incorrect here)
    expect(toInteger(3.9)).to.equal(3);
    expect(toInteger(-3.9)).to.equal(-3);
  });

  it("handles numeric strings", () => {
    // useful for user input like form field or
    // query parameters
    expect(toInteger("10.8")).to.equal(10);
  });
});

// toFinite

describe("toFinite(value)", () => {
  it("maps Infinity and -Infinity to finite values", () => {
    // unbounded value often break business logic
    // (pagination, scoring, analytics)
    // ensure function clamps or normalizes to a valid value
    const pos = toFinite(Infinity);
    const neg = toFinite(-Infinity);
    expect(Number.isFinite(pos)).to.equal(true);
    expect(Number.isFinite(neg)).to.equal(true);
  });

  it("passes through normal numbers", () => {
    // ensure no accidental rounding, truncation, clamping
    expect(toFinite(3.14)).to.be.closeTo(3.14, 1e-12);
  });
});

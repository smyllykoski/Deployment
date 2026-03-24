/**
 * defaultTo-defaultToAny.test.js
 * ---------------------------------------------------------
 * Unit tests for
 *  - src/defaultTo.js
 *  - src/defaultToAny.js
 *
 * Current:
 *  - "NaN on invalid -> use default": not valid in this library.
 *  - Discovery: defaultTo(NaN, 5) returned NaN and not default.
 *  - Conclusion: library interprets only nullish values (null, undefined) as missing but not NaN.
 *
 * Solution:
 *  - Expected (skip): policy variant which would use default also for NaN
 *  - Library-specific: tests for the actual policy of the library
 *  - GitHub issues (issue #4) for reporting (ref. course assignment requirements).
 *
 * Author: Sini Myllykoski
 * Date: 24.3.2026
 */

import { expect } from "chai";
import defaultTo from "../src/defaultTo.js";
import defaultToAny from "../src/defaultToAny.js";

// As reference, not the policy of this library
describe.skip("defaultTo / defaultToAny — expected policy (skipped)", () => {
  it("defaultTo uses default for nullish/NaN (policy-variant)", () => {
    expect(defaultTo(null, 5)).to.equal(5);
    expect(defaultTo(undefined, 5)).to.equal(5);
    // policy variant (NOT the actual library behavior):
    expect(defaultTo(NaN, 5)).to.equal(5);
  });

  it("defaultToAny returns first valid non-nullish/NaN value (policy-variant)", () => {
    // policy variant would skip NaN
    expect(defaultToAny(undefined, null, NaN, "ok")).to.equal("ok");
  });
});

// Actual policy of the library: only nullish -> default, NaN is not missing
describe("defaultTo / defaultToAny — library-specific behavior", () => {
  it("defaultTo: uses default for nullish, preserves NaN", () => {
    expect(defaultTo(null, 5)).to.equal(5);
    expect(defaultTo(undefined, 5)).to.equal(5);

    // Current policy of the library according to fail log:
    const nanOut = defaultTo(NaN, 5);
    expect(Number.isNaN(nanOut)).to.equal(true); // NOT replaced by default
  });

  it("defaultTo: keeps valid values", () => {
    expect(defaultTo(0, 5)).to.equal(0);
    expect(defaultTo("", "x")).to.equal("");
    expect(defaultTo(false, true)).to.equal(false);
  });

  it('defaultToAny: returns first non-nullish value (NaN is "value")', () => {
    // If NaN is interpreted as a valued, not missing, returns NaN
    const res = defaultToAny(undefined, null, NaN, "ok");
    expect(Number.isNaN(res)).to.equal(true);

    // If the first is an actually defined value:
    expect(defaultToAny(undefined, 0, "x")).to.equal(0);
  });
});

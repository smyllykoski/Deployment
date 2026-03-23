/**
 * endsWith.test.js
 * ---------------------------------------------------------
 * Tests for src/endsWith.js
 *
 * Purpose: enforces the handling of suffix and position parameter
 *
 * Author: Sini Myllykoski
 * Date: 23.3.2026
 */

import { expect } from "chai";
import endsWith from "../src/endsWith.js";

describe("endsWith(string, target, [position])", () => {
  it("basic suffix matching", () => {
    expect(endsWith("hello", "lo")).to.equal(true);
    expect(endsWith("hello", "he")).to.equal(false);
  });

  it("respects position parameter (document policy)", () => {
    // If position means the limit where the string reaches
    expect(endsWith("hello", "he", 2)).to.equal(true); // 'he' vs 'he'
    expect(endsWith("hello", "lo", 4)).to.equal(false); // 'hell' does not end in 'lo'
  });
});

/**
 * toNumber-toInteger-toFinite.test.js
 * ---------------------------------------------------------
 * Tests for src/toNumber.js, src/toInteger.js, src/toFinite.js
 *
 * Purpose:
 *  - Unified numeric conversion (string->number, nullish, booleans)
 *  - toInteger: trunc/floor? (document discovered policy)
 *  - toFinite: Infinity/-Infinity -> finite value (document policy)
 *
 * Author: Sini Myllykoski
 * Date: 23.3.2026
 */

import { expect } from "chai";
import toNumber from "../src/toNumber.js";
import toInteger from "../src/toInteger.js";
import toFinite from "../src/toFinite.js";

describe("toNumber(value)", () => {
  it("converts numeric strings", () => {
    expect(toNumber("42")).to.equal(42);
    expect(toNumber("3.14")).to.be.closeTo(3.14, 1e-12);
  });

  it("non-numeric strings -> NaN (or documented behavior)", () => {
    const out = toNumber("abc");
    expect(Number.isNaN(out)).to.equal(true);
  });

  it("nullish and booleans (document actual policy)", () => {
    // null -> 0
    expect(Number.isNaN(toNumber(undefined))).to.equal(true);
    expect(toNumber(true)).to.equal(1);
    expect(toNumber(false)).to.equal(0);
  });
});

describe("toInteger(value)", () => {
  it("truncates decimals (document policy: trunc vs floor)", () => {
    // Usually trunc: 3.9->3, -3.9->-3
    expect(toInteger(3.9)).to.equal(3);
    expect(toInteger(-3.9)).to.equal(-3);
  });

  it("handles numeric strings", () => {
    expect(toInteger("10.8")).to.equal(10);
  });
});

describe("toFinite(value)", () => {
  it("maps Infinity and -Infinity to finite values", () => {
    const pos = toFinite(Infinity);
    const neg = toFinite(-Infinity);
    expect(Number.isFinite(pos)).to.equal(true);
    expect(Number.isFinite(neg)).to.equal(true);
  });

  it("passes through normal numbers", () => {
    expect(toFinite(3.14)).to.be.closeTo(3.14, 1e-12);
  });
});

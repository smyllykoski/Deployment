/**
 * upperFirst-capitalize.test.js
 * ---------------------------------------------------------
 * Tests for src/upperFirst.js and src/capitalize.js
 *
 * Purpose:
 *  - upperFirst: only the first letter is capitalized, the rest remain as originally (or according to implementation)
 *  - capitalize: first letter capitalized, the rest of the letters are lowercase
 *
 *
 * Author: Sini Myllykoski
 * Date: 23.3.2026
 */

import { expect } from "chai";
import upperFirst from "../src/upperFirst.js";
import capitalize from "../src/capitalize.js";

describe("upperFirst(input)", () => {
  it("uppercases only the first character (document actual behavior)", () => {
    // Implementation converts only the 1st character:
    expect(upperFirst("hello")).to.equal("Hello");
  });

  it("handles empty and single-character strings", () => {
    expect(upperFirst("")).to.equal("");
    expect(upperFirst("x")).to.equal("X");
  });
});

describe("capitalize(input)", () => {
  it("uppercases first, lowercases the rest", () => {
    expect(capitalize("hello")).to.equal("Hello");
    expect(capitalize("hELLO")).to.equal("Hello");
  });

  it("handles empty and single-character strings", () => {
    expect(capitalize("")).to.equal("");
    expect(capitalize("x")).to.equal("X");
  });
});

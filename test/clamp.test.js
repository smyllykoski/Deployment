/**
 * clamp.test.js
 * ---------------------------------------------------------
 * Unit tests for src/clamp.js
 *
 * IMPORTANT:
 *  - In this library the clamp singature appears to be (min, max, value)
 *    instead of Lodash (value, min, max).
 *  - Tests are written according to the library implementation.
 *
 * Why these tests:
 *  - Document the correct signature (makes future maintenance easier).
 *  - Cover three basic scenarios:
 *      1) value within range [min, max]
 *      2) value under min -> return min
 *      3) value over max -> return max
 *
 * Author: Sini Myllykoski
 * Date: 22.3.2026
 */

import { expect } from "chai";
import clamp from "../src/clamp.js";

describe("clamp(min, max, value)", () => {
  it("returns value when within [min,max]", () => {
    // Document "happy path": no conversions until the value is within the range
    expect(clamp(1, 10, 5)).to.equal(5);
  });

  it("returns min when below", () => {
    // Min: if the value < min, the function "slices" the value to min.
    expect(clamp(0, 10, -1)).to.equal(0);
  });

  it("returns max when above", () => {
    // Max: if value > max, the function "slices" the value to max.
    expect(clamp(0, 10, 11)).to.equal(10);
  });
});

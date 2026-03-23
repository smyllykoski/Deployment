/**
 * difference.test.js
 * ---------------------------------------------------------
 * Tests for src/difference.js
 *
 * Purpose: subtract the values from the first table which are not in the other table
 *
 * Author: Sini Myllykoski
 * Date: 23.3.2026
 */

import { expect } from "chai";
import difference from "../src/difference.js";

describe("difference(array, values)", () => {
  it("filters out values present in the second array", () => {
    expect(difference([1, 2, 3], [2])).to.deep.equal([1, 3]);
    expect(difference([1, 2, 2, 3], [2])).to.deep.equal([1, 3]); // duplicates deleted
  });

  it("edge cases", () => {
    expect(difference([], [1])).to.deep.equal([]);
    expect(difference([1, 2], [])).to.deep.equal([1, 2]);
  });
});

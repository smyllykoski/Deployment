/**
 * difference.test.js
 * ---------------------------------------------------------
 * Tests for src/difference.js
 *
 * Purpose:
 *  - verify that `difference(array, values)` returns a new array
 *    containing only the elements from the first array which do not
 *    appear in the second array
 *
 * Why this function matters:
 *  - "set difference" is one of the most common list operations
 *  - typically used for filtering, computing deltas, or determining
 *    removed/remaining values
 *  - bugs in this function can cause data loss or incorrect filtering,
 *    which makes it important to test:
 *      - simple match filtering
 *      - duplicates
 *      - empty-array edge cases
 *
 * Expectations (based on implementation in src/difference.js):
 *  - If a value exists in the second array, all occurrences of that
 *    value must be removed from the first array
 *  - order of remaining elements is preserved
 *  - if second array is empty, first array is returned as is
 *  - if first array is empty, result must be [].
 *
 *
 * Author: Sini Myllykoski
 * Date: 24.3.2026
 */

import { expect } from "chai";
import difference from "../src/difference.js";

describe("difference(array, values)", () => {
  it("filters out values present in the second array", () => {
    // confirms primary behavior
    // ensures all duplicates are removed
    // confirms filtering does not remove only the first match
    // result preserves order of remaining elements
    expect(difference([1, 2, 3], [2])).to.deep.equal([1, 3]);
    expect(difference([1, 2, 2, 3], [2])).to.deep.equal([1, 3]); // duplicates deleted
  });

  it("edge cases", () => {
    // ensures non-overlapping arrays return original data
    // ensures empty input is a safe operation
    // edge cases:
    // - first array empty -> always []
    // - second array empty -> return first array exactly
    expect(difference([], [1])).to.deep.equal([]);
    expect(difference([1, 2], [])).to.deep.equal([1, 2]);
  });
});

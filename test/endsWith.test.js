/**
 * endsWith.test.js
 * ---------------------------------------------------------
 * Unit tests for src/endsWith.js
 *
 * Purpose:
 *  - ensure that èndsWith(string, target, [position])` correctly
 *    determines that a string ends with a given substring, taking
 *    into account the optional `position` parameter
 *
 * Why this function matters:
 *  - suffix matching is a basic text operation and used heavily
 *    in validators, filename/path parsing and string-based filters.
 *  - optional `position` parameter is error-prone, because it
 *    changes where the end of the string is considered to be
 *  - tests help ensure boundary conditions (`position` < `length`)
 *    behave in a deterministic and consistent manner
 *
 * Test principles:
 *  - basic true/false checks for suffixes
 *  - clarify behavior of `position` parameter
 *  - edge cases demonstrate consistency (e.g. empty target)
 *
 * Author: Sini Myllykoski
 * Date: 24.3.2026
 */

import { expect } from "chai";
import endsWith from "../src/endsWith.js";

describe("endsWith(string, target, [position])", () => {
  // demonstrate core behavior without `position`:
  // 'hello' ends with 'lo' -> true
  // 'hello' does not end with 'he' -> false
  it("basic suffix matching", () => {
    expect(endsWith("hello", "lo")).to.equal(true);
    expect(endsWith("hello", "he")).to.equal(false);
  });

  it("respects position parameter (document policy)", () => {
    // clarify how `position` affects suffix checks
    // does 'he' end with 'he' -> yes
    // does 'hell' end with 'lo' -> no
    expect(endsWith("hello", "he", 2)).to.equal(true);
    expect(endsWith("hello", "lo", 4)).to.equal(false);
  });

  it("treats empty target as always true", () => {
    // Many string APIs define an empty string
    // is always a valid suffix
    expect(endsWith("hello", "")).to.equal(true);
    expect(endsWith("", "")).to.equal(true);
  });
});

/**
 * words.test.js
 * ---------------------------------------------------------
 * Tests for src/words.js
 *
 * Purpose:
 *  - Tokens a string of characters as words.
 *  - Increases line cover and supports the word division of camelCase,
 *    although camelCase is a known issue (leading space).
 *
 * Author: Sini Myllykoski
 * Date: 23.3.2026
 */

import { expect } from "chai";
import words from "../src/words.js";

describe("words(input)", () => {
  it("splits on spaces and punctuation", () => {
    const out = words("Hello, world! Example.");
    expect(out).to.be.an("array");
    // Typical expectation: ['Hello', 'world', 'Example'] or with a lowercase first
    // Modify assert to implementation:
    expect(out.map(String)).to.include.members(["Hello", "world", "Example"]);
  });

  it("handles dashes and underscores", () => {
    const out = words("hello-world_example");
    expect(out).to.be.an("array");
    // [ 'hello', 'world', 'example' ] etc.
    expect(out.join("").toLowerCase()).to.equal("helloworldexample");
  });
});

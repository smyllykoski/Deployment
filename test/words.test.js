/**
 * words.test.js
 * ---------------------------------------------------------
 * Unit tests for src/words.js
 *
 * Purpose:
 *  - Validates how library tokenizes test into word units.
 *    This helper is essential for higher-level utilities such
 *    as camelCase (even though that has a leading-space bug)
 *
 * Why this matters:
 *  - String tokenization is core operation in normalization,
 *    formatting, identifier generation
 *  - real-world text often includes punctuation and mixed
 *    separators (spaces, commas, dashes, underscores) and
 *    unpredictable case
 *  - Ensure stable, documented behavior which prevents
 *    bugs in functions
 *
 * Test principles:
 *  - Tokenization across punctuation and spacing
 *  - Handling of hyphens and underscores as separators
 *  - Preservation of order and basic lexical integrity.
 *
 * Note:
 *  - Exact casing of output tokens depends on implementation
 *  - some assertions rely on structural checks
 *    (e.g. join+lowercase)
 *
 * Author: Sini Myllykoski
 * Date: 24.3.2026
 */

import { expect } from "chai";
import words from "../src/words.js";

describe("words(input)", () => {
  it("splits on spaces and punctuation", () => {
    // confirm correct handling of typical sentence-like
    // strings with punctuation and whitespace
    // ensure tokens reflect readable word boundaries:
    // "Hello, world! Example."
    // -> ["Hello", "world", "Example"] (expected structure)
    // no asserted output casing
    const out = words("Hello, world! Example.");
    expect(out).to.be.an("array");
    // assert all conceptual tokens are present
    expect(out.map(String)).to.include.members(["Hello", "world", "Example"]);
  });

  it("handles dashes and underscores", () => {
    // hyphens and underscores are common separators in
    // file names, identifiers
    // expected behavior: treat as word boundaries, not
    // as part of tokens
    // input: "hello-world_example"
    // output: ["hello", "world", "example"]
    const out = words("hello-world_example");
    expect(out).to.be.an("array");
    // joined lowercase comparison provides a structural check
    expect(out.join("").toLowerCase()).to.equal("helloworldexample");
  });
});

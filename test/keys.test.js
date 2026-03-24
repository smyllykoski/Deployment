/**
 * keys.test.js
 * ---------------------------------------------------------
 * Unit tests for src/keys.js
 *
 * Purpose:
 *  - Validate how the library retrieves enumerable property names
 *    from different input types, like objects, empty objects,
 *    and non-object values such as null or undefined.
 *
 * Why this matters:
 *  - `keys()` utility is often used in loops, validators and
 *    transformations. Its behavior should be predictable both in
 *    structured and edge case inputs.
 *  - JS primitives (null, undefines, numbers, strings) cannot have
 *    enumerable keys but different utility libraries handle them
 *    differently (e.g. return [], wrap primitives, throw errors).
 *  - Documenting this library's behavior ensures consistent use and
 *    prevents bugs when iterating properties.
 *
 * Test principle:
 *  - Confirm correct extraction of enumberable properties from
 *    objects
 *  - Verify behavior for empty objects
 *  - Document how implementation handles non-object inputs
 *
 *
 * Author: Sini Myllykoski
 * Date: 24.3.2026
 */

import { expect } from "chai";
import keys from "../src/keys.js";

describe("keys(object)", () => {
  it("returns own enumerable property names", () => {
    // verify core behavior: extract property names
    // sorting ensures comparison regardless of enumeration
    // order
    const obj = { a: 1, b: 2 };
    const out = keys(obj);
    expect(out).to.be.an("array");
    expect(out.sort()).to.deep.equal(["a", "b"]);
  });

  it("returns an empty array for an empty object", () => {
    // ensure the function does not add inherited properties
    // or treat `{}` as having implicit values.
    expect(keys({})).to.deep.equal([]);
  });

  it("handles non-objects (document actual behavior)", () => {
    // `null` and `undefined` cannot be converted to objects
    // many utility libraries choose to return an empty array
    // this documents the behavior actually implemented in this
    // library
    expect(keys(null)).to.deep.equal([]);
    expect(keys(undefined)).to.deep.equal([]);
  });
});

/**
 * keys.test.js
 * ---------------------------------------------------------
 * Tests for src/keys.js
 *
 * Purpose:
 *  - Nostaa funktiopeittoa testaamalla perus-object utilin.
 *  - Dokumentoi miten kirjasto käsittelee ei-objekti syötteet (null/primitive).
 *
 * Huom:
 *  - Jos implementaatio käyttäytyy eri tavalla esimerkiksi primitiiveille
 *    (palauttaa tyhjän taulukon, tai converttoi objektiksi), säädä assertit.
 *
 * Author: Sini Myllykoski
 * Date: 23.3.2026
 */

import { expect } from "chai";
import keys from "../src/keys.js";

describe("keys(object)", () => {
  it("returns own enumerable property names", () => {
    const obj = { a: 1, b: 2 };
    const out = keys(obj);
    expect(out).to.be.an("array");
    expect(out.sort()).to.deep.equal(["a", "b"]); // järjestetään varmuuden vuoksi
  });

  it("handles empty object", () => {
    expect(keys({})).to.deep.equal([]);
  });

  it("handles non-objects (document actual behavior)", () => {
    // Moni kirjasto palauttaa [] tai converttoi wrapperin kautta (esim. String('x')).
    // Sovita tarvittaessa:
    expect(keys(null)).to.deep.equal([]);
    expect(keys(undefined)).to.deep.equal([]);
  });
});

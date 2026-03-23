## Issue #004: defaultTo / defaultToAny: policy (docs/enhancement)

### Summary

``defaultTo(value, defaultValue)` and `defaultToAny(value, ...defaults)` appear to treat **only nullish values** (null, undefined) as “missing”, **not** NaN.

### Reproduction (from our probe test)

Input:

```js
defaultTo(null, 5); // -> 5  (as expected)
defaultTo(undefined, 5); // -> 5
defaultTo(NaN, 5); // -> NaN (kept as-is)

defaultToAny(undefined, null, NaN, "ok"); // -> NaN (kept as first non-nullish)
```

### Expected

Is this behavior intentional? If yes, could the README explicitly state:

- nullish-only policy (null/undefined)
- NaN is considered a value, not “missing”
- examples for both functions

### Reproduction

- A skipped expected-spec (to be enabled when fixed)
- A skipped policy variant spec for reference

### Notes

- Test environment: Node 18, Mocha 11.7.5, Chai 6.2.2
- We will skip compact in coverage for now to proceed with CI+Coveralls.

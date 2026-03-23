## Issue #003: compact returns unexpected result (bug report)

### Summary

`compact(array)` returns an unexpected result for mixed falsy/truthy input.

### Reproduction (from our probe test)

Input:

```js
const input = [0, 1, false, 2, "", 3, null, undefined, NaN, -1];
console.log("compact(input) =>", compact(input));
```

Observed (examples from test logs):

- Output is missing 1
- Output contains unexpected artifacts such as "-1": 1 (non-standard structure)

### Expected

A classic “compact” typically removes falsy values (false, 0, "", null, undefined, NaN) and keeps truthy ones:

```js
compact([0, 1, false, 2, '', 3, null, undefined, NaN]) -> [1, 2, 3]
```

If this library intentionally follows a different policy, the rules should be clarified.

### Reproduction

Please see CI logs from the probe test. The test suite includes:

- A probe block printing raw outputs
- A skipped expected-spec (to be enabled when fixed)

### Notes

- Test environment: Node 18, Mocha 11.7.5, Chai 6.2.2
- We will skip compact in coverage for now to proceed with CI+Coveralls.

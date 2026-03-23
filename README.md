# Deployment – Test Automation & Coverage

[![Coverage Status](https://coveralls.io/repos/github/smyllykoski/Deployment/badge.svg?branch=main)](https://coveralls.io/github/smyllykoski/Deployment?branch=main)

This repository contains Task VIII - Deployment for AT00BY10-3012 Ohjelmistojen ylläpito ja testaus course. 

This task implements unit tests, test coverage, continuous integration (CI) and documentation for the provided JavaScript library.

The purpose of this task is to:
- build a functional test automation project
- reach a minimum of a 60 % test coverage
- report the discovered bugs to GitHub Issue system
- integrate GitHub Actions and Coveralls
- document the process in a clear and systematic manner

## Project contents

### Unit tests (Mocha + Chai)
All tests are located in `test/` directory

The tests cover extensively:
- basic functions: `add`, `clamp`, `compact`, `difference`, `endsWith`, `get`, `keys`, `toFinite`, `toInteger`, `toNumber`, `toString`,
- string operations: `capitalize`, `upperFirst`, `camelCase`, `words`
- structural tools: `chunk`, `defaultTo`, `defaultToAny`, `isEmpty`
- documented issues using probe tests: `chunk`, `camelCase`, `compact`

All tests are written using ESM syntax and commented in detail.

## Test coverage (c8 + Coveralls)

Coverage is created using c8 (`npm run coverage`)

This generates:
- `coverage/lcov.info` - for Coveralls
- `text-summary` - shown in CI logs

Current coverage:
- **Statements:** ~68 %  
- **Branches:** ~65 %  
- **Functions:** ~62 %  
- **Lines:** ~68 %

## CI (GitHub Actions)
CI workflow is located in `.github/workflows/ci.yml`

CI is responsible for:
- installing dependencies
- running the tests
- generating the coverage
- forwarding the coverage report to Coveralls

Workflow supports also `workflow_dispatch`: CI can be manually initiated in GitHub Actions view.

## Observed bugs and Issue reports
Several abnormal or broken functions were observed during the project.
These have been documented in detail using probe tests.

### Significant bugs
| Module | Description | Issue # |
|--------|-------------|-------|
| **chunk** | returns incorrect structure (null values, incorrect order) | [Issue #1](https://github.com/smyllykoski/Deployment/issues/1) |
| **camelCase** | returns leading space -> incorrect token | [Issue #2](https://github.com/smyllykoski/Deployment/issues/2) |
| **compact** | expected values missing (e.g. `1`), contains odd keys | [Issue #3](https://github.com/smyllykoski/Deployment/issues/3) |

### Policy anomalies (not a bug, but unclear)
| Module | Description | Issue # |
|--------|-------------|---------|
| **defaultTo/ defaultToAny** | NaN is interpreted as value, not missing -> documented issue | [Issue #4](https://github.com/smyllykoski/Deployment/issues/4)

## Test philosophy
Tests have been categorized to three levels for the incorrect functions:
### 1 **Probe tests**
- output the acutal behavior to CI logs (does not break the pipeline)
### 2 **Expected-spec** 
- describes how the function *should* behave (when the bug is fixed)
### 3 **Library-specific-spec**
- tests which correspond to the actual behavior of the library

## How to run the project locally
1. Install dependencies
    ```bash
    npm install
    ```
2. Run tests
   ```bash
   npm test
   ```
3. Run coverage
   ```bash
   npm run coverage
   ```
4. View coverage report:
   - text in console
   - HTML report in `coverage/index.html`
  
## Conclusion
- extensive test suite
- minimum of 60 % test coverage exceeded
- well documented bugs
- clear CI + Coveralls integration
- commented tests make maintenance easier
- result: not a product-ready library as such, but all in all very good for testing and analysis purposes

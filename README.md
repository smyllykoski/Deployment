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
  
This exceeds the task requirement of a minimum of 60 %.

## CI (GitHub Actions)
CI workflow is located in `.github/workflows/ci.yml`

CI is responsible for:
- installing dependencies
- running the tests
- generating the coverage
- forwarding the coverage report to Coveralls

Workflow supports also `workflow_dispatch`: CI can be manually initiated in GitHub Actions view.


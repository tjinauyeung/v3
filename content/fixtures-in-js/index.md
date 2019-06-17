---
title: Fixtures in JS
date: 2019-06-17
description: How to generate fixtures in your JS projects
path: /articles/fixtures-in-js/
---

Having gone through the phase learning to test to seeing the value of testing and approaching the "I actually like testing" phase, I found some useful tools that help enjoy testing a bit more.

### Fixtures

Fixtures is data that is fixed and can be used for testing. Fixtures help us separate test logic and test data, and if done well, it creates more robust tests. The key is to use randomized data so that it mimics real world data more closely.

A test fixture is a fixed state of a set of objects used as a baseline for running tests. The purpose of a test fixture is to ensure that there is a well known and fixed environment in which tests are run so that results are repeatable. Examples of fixtures:

- Preparation of input data and setup/creation of fake or mock objects
- Loading a database with a specific, known set of data
- Copying a specific known set of files creating a test fixture will create a set of objects initialized to certain states.

The tools to use for this is [chance.js](https://www.chance.com) and [faker](https://www.faker.com/).

### Chance.js

Chance.js is a simple library for generating random data.

For example creating a User mock can be done like so:

```js
const Chance = require("Chance");

const chance = new Chance();

const MOCK_USER = {
  name: chance.name(),
  age: chance.age(),
  email: chance.email(),
  sex: chance.oneOf(["m", "f"])
};
```

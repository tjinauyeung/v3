---
title: Randomize your mock data with Chance.js
date: 2019-07-09
description: How random data can make your tests more effective.
path: /articles/randomize-your-mock-data-with-chance/
image: cover.jpg
---

![cover image](./cover.jpg)

Ever since I've started using more [TDD](https://en.wikipedia.org/wiki/Test-driven_development) I've encountered different patterns to make the process more effective, easy and fun. In this article I like to share with you a helpful tool for testing with random generated data: **Chance.js**.

### Why should you randomise your mock data?

When you test your app you'll often end up needing mock data. The more this mock data resembles the production data the more effective your test becomes. In case you're hardcoding your test data, it will miss the variety it can have in the real world. Additionally, the data you enter will be biased, potentially leaving undiscovered bugs due to untested (edge) cases.

Real data is varied and could contain characters that may not play nice with your code, such as apostrophes, or unicode characters from other languages. Testing with more realistic sample data can help you catch more bugs and make your app more robust.

### Available random data generators (JS)

In JS land we have a few libraries that generate random data:

- [Faker.js](https://github.com/marak/Faker.js/)
- [Chance.js](https://chancejs.com/)

Both libraries tackle the same problem and have similar APIs; so you may use them interchangably. For this article we will be discussing **Chance.js**.

### Chance.js

Chance.js is a JS library for generating random data. It contains many helper methods for generating random data. For instance:

- `chance.name()`: generates random name
- `chance.email()`: generates random email
- `chance.age()`: generates random number between 0 and 120
- `chance.country()`: generates random country code
- `chance.oneOf([])`: randomly picks one of values provided
-  *[and many more...](https://chancejs.com/)*

I want to show you how to set up Chance.js and provide a simple `spec` file example on how to use `chance`.

___

### Start using Chance.js

To get started open up the terminal and input the following:

```bash
npm install chance --save-dev
```

For Typescript projects we'll need to install additional TS definitions:

```bash
npm install @types/chance --save-dev
```

The `--save-dev` flag will install the library as a `devDependency`. This will prevent the package from being installed in production. In addition, make sure not to import the library in your application code. Otherwise you'll bloat your application size by including the library in your bundle.

```ts
// example.spec.js
import Chance from 'chance';

const chance = new Chance(); // instantiate
```

Chance needs to be initialised with the `new` keyword before the methods can be used. Afterwards, we can generate data by invoking methods `chance`.

```ts
// example.spec.js
import Chance from 'chance';

const chance = new Chance(); // instantiate

const mockUser = {
  email: chance.email() // generate random email
  password: chance.hash() // generate random hash
};
```

Most `chance` methods accept an options object as parameter. For example; `chance.name({gender: 'male'})` will generate male-only names. Check out the [API docs](https://chancejs.com/person/name.html) to get the full list of methods and their options. 

___

### Example: AgeValidator

Let us go through a more concrete example for using Chance.js. Say we have a `AgeValidator` object which a method called `isAdult` which has the following requirements:

- accepts `user` object as argument
- returns `true` if the user has age 18 and over
- returns `false` if the user has age under 18

How can this be implemented with the help of Chance.js?

#### Step 1. Set up Chance and the mock data

```ts
// age-validator.spec.js

import AgeValidator from "./age-validator";
import Chance from "chance";

const chance = new Chance();

// highlight-start
const user = {
  name: chance.name(),
  age: chance.age()
};
// highlight-end
```

#### Step 2. Add the test for adult users

`chance.age` accepts a `type` option which which returns the age matching type: child, teen, adult, senior. In our case we use `chance.age({type: "adult"})` which returns a random number between 18 — 65:

```ts
// age-validator.spec.js

import AgeValidator from "./age-validator";
import Chance from "chance";

const chance = new Chance();

const user = {
  name: chance.name(),
  age: chance.age()
};

// highlight-start
describe("AgeValidator", () => {
  describe("isAdult", () => {
    it("returns true if age is 18 and over", () => {
      const adult = {
        ...user,
        age: chance.age({ type: "adult" })
      };
      expect(adult.age >= 18).toBe(true);
      expect(AgeValidator.isAdult(adult)).toBe(true);
    });
  });
});
// highlight-end
```

#### Step 3. Add the test for child users

To test for child users we can simply use `chance.age({type: "child"})` which returns a random number between 0 — 12:

```ts
// age-validator.spec.js

import AgeValidator from "./age-validator";
import Chance from "chance";

const chance = new Chance();

const user = {
  name: chance.name(),
  age: chance.age()
};

describe("AgeValidator", () => {
  describe("isAdult", () => {
    it("returns true if age is 18 and over", () => {
      const adult = {
        ...user,
        age: chance.age({ type: "adult" })
      };
      expect(adult.age >= 18).toBe(true);
      expect(AgeValidator.isAdult(adult)).toBe(true);
    });

    // highlight-start
    it("returns true if age under 18", () => {
      const child = {
        ...user,
        age: chance.age({ type: "child" })
      };
      expect(child.age < 18).toBe(true);
      expect(AgeValidator.isAdult(child)).toBe(false);
    });
    // highlight-end
  });
});
```

#### Step 4. Implement `AgeValidator` object

Finally, we'll need to implement the actual `AgeValidator` class in order to let the test pass:

```ts
// age-validator.js

const AgeValidator = {
  isAdult: user => user.age >= 18
};

export default AgeValidator;
```

I've made a [github repository](https://github.com/tjinauyeung/chance-js-article-code-example) with the code in case you want to run it on your own machine. Check out the README.md for further instructions.

___

### Drawbacks

We've discussed the benefits of having random sample data and gone through some examples to make your tests more effective and your app more robust. As with all technical choices we make there are some drawbacks as well.

- **Additional dependency**:
You'll add another dependency to your project, which increases the overhead.

- **Running tests can produce different results**:
Because we're working with random values running the test can potentially produce different results. When this happens, make sure to fix the code that you're testing against immediately.

Even though there are some caveats to using randomised data, the improvement in mock data quality and potential to catch more bugs outweigh the costs in my opinion.

### Summary

When testing your app we can randomise our sample data to more mimic the production environment. This will make for more effective testing and help increase the reliability of your app. Chance.js is a JS library for generating random data. It contains many helper methods for generating random data. For instance:

- `chance.name()`: generates random name
- `chance.email()`: generates random email
- `chance.age()`: generates random number between 0 and 120
- `chance.country()`: generates random country code
- `chance.oneOf([])`: randomly picks one of values provided
- *many more...*

Check out the [Chance.js API docs](https://chancejs.com/) to get the full docs. For an example application on how to use Chance.js check out the following [github repository](https://github.com/tjinauyeung/chance-js-article-code-example).

I hope this article helps you in your testing workflow. In the upcoming articles I'll write how to further refactor your test files by creating fixtures / helper functions to extract your mocks.

import * as S from "@effect/schema/Schema";
import { expect } from "vitest";
import * as Fake from "effect-schema-compilers/Faker";
import * as F from "@faker-js/faker";

export const testValues = <I, A>(
  schema: S.Schema<I, A>,
  valid: I[],
  invalid: I[]
) => {
  const is = S.is(schema);

  valid.forEach((val) => {
    const valid = is(val);
    if (!valid) {
      console.log(`Expected ${val} to be valid`);
    }
    expect(valid).to.be.true;
  });
  invalid.forEach((val) => {
    const valid = is(val);
    if (valid) {
      console.log(`Expected ${val} to be invalid`);
    }
    expect(is(val)).to.be.false;
  });
};

export const assertValidFakeValue = <I, A>(schema: S.Schema<I, A>) => {
  const is = S.is(schema);
  const fake = Fake.to(schema)(F.faker);

  const valid = is(fake);
  if (!valid) {
    console.log(fake);
  }
  expect(valid).to.be.true;
};

import * as S from "@effect/schema/Schema"
import { expect } from "vitest";

export const testValues = <I, A>(schema: S.Schema<I, A>, valid: I[], invalid: I[]) => {
    const is = S.is(schema);

    valid.forEach(val => expect(is(val)).to.be.true)
    invalid.forEach(val => expect(is(val)).to.be.false)
}
import { describe, it, expect } from "vitest";
import * as S from "@effect/schema/Schema";
import { pipe } from "@effect/data/Function";
import * as _ from "../src/Number";

describe("Number", () => {
    it("u8", () => {
        const schema = pipe(S.number, _.u8);
        const p = S.parse(schema);

        expect(p(0)).toBe(0)
    })
})

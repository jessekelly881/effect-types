import { describe, it, expect } from "vitest";
import * as S from "@effect/schema/Schema";
import * as _ from "../src/Boolean";

describe("Boolean", () => {
    it("booleanFromString", () => {
        const parse = S.parse(_.booleanFromString(S.string))

        expect(parse("true")).toBe(true)
        expect(parse("yes")).toBe(true)
        expect(parse("1")).toBe(true)
        expect(parse("on")).toBe(true)

        expect(parse("false")).toBe(false)
        expect(parse("no")).toBe(false)
        expect(parse("0")).toBe(false)
        expect(parse("false")).toBe(false)
    })
})

import { describe, it, expect } from "vitest";
import * as S from "@effect/schema/Schema";
import * as _ from "../src/Boolean";
import { pipe } from "@effect/data/Function";

describe("Boolean", () => {
    it("parseFuzzy", () => {
        const parse = S.parse(_.parseFuzzy(S.string))

        expect(parse("true")).toBe(true)
        expect(parse("Yes")).toBe(true)
        expect(parse("1")).toBe(true)
        expect(parse("on")).toBe(true)
        expect(parse("OK")).toBe(true)

        expect(parse("false")).toBe(false)
        expect(parse("No")).toBe(false)
        expect(parse("0")).toBe(false)
        expect(parse("false")).toBe(false)
    })
})

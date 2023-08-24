import { describe, it, expect } from "vitest";
import * as S from "@effect/schema/Schema";
import * as _ from "../src/Boolean";

describe("Boolean", () => {
    it("parseFuzzy", () => {
        const decode = S.decodeSync(_.FuzzyBoolean)

        expect(decode("true")).toBe(true)
        expect(decode("Yes")).toBe(true)
        expect(decode("1")).toBe(true)
        expect(decode("on")).toBe(true)
        expect(decode("OK")).toBe(true)

        expect(decode("false")).toBe(false)
        expect(decode("No")).toBe(false)
        expect(decode("0")).toBe(false)
        expect(decode("false")).toBe(false)
    })
})

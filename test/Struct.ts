import { describe, it, expect } from "vitest";
import * as S from "@effect/schema/Schema";
import { pipe } from "@effect/data/Function"
import * as _ from "../src/Struct";

describe("Struct", () => {
    it("mapKeyNames / s", () => {
        const s = pipe(S.struct({ b: S.string }), _.mapKeyNames(() => "a"))
        const p = S.parse(s);
        const d = S.decode(s);
        const e = S.encode(s);
        
        expect(() => p({})).toThrow()
        expect(p({ b: "1" })).toEqual({ a: "1" })
        expect(d({ b: "1" })).toEqual({ a: "1" })
        expect(e({ a: "1"})).toEqual({ a: "1" })
    })

    it("mapKeyNames / s > s", () => {
        const s = pipe(S.struct({ b: S.struct({ inner: S.number }) }), _.mapKeyNames(() => "a"))
        const p = S.parse(s);
        const d = S.decode(s);
        const e = S.encode(s);
        
        expect(() => p({})).toThrow()
        expect(p({ b: { inner: 1 } })).toEqual({ a: { inner: 1 } })

        expect(d({ b: { inner: 1 } })).toEqual({ a: { inner: 1 } })
        expect(e({ a: { inner: 1 } })).toEqual({ a: { inner: 1 } })
    })

    it("camelCase / s", () => {
        const s = pipe(S.struct({ a_b: S.string }), _.camelCase())
        const p = S.parse(s);
        S.getPropertySignatures(S.to(s)).aB

        expect(p({ a_b: "test" })).toEqual({ "aB": "test" })
    })

    it("camelCase / s > s", () => {
        const s = pipe(S.struct({ a_b: S.struct({ a_b: S.string }) }), _.camelCase())
        const p = S.parse(s);
        S.getPropertySignatures(S.to(s)).aB

        expect(p({ a_b: { a_b: "test" }})).toEqual({ "aB": { a_b: "test" } })
    })
})

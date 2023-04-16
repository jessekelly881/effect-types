import { describe, it, expect } from "vitest";
import * as S from "@effect/schema/Schema";
import { pipe } from "@effect/data/Function"
import * as _ from "../src/Struct";
import * as I from "../src/internal"

describe("Struct", () => {
    it("mapKeyNames / s", () => {
        const s = pipe(S.struct({ b: S.string }), _.mapKeyNames(() => "a"))
        const p = S.parse(s);
        const d = S.decode(s);
        const e = S.encode(s);
        
        expect(() => p({})).toThrow()
        expect(p({ b: "1" })).toEqual({ a: "1" })
    })

    it("mapKeyNames/ composed", () => {
        const s = pipe(S.struct({ x: S.string }), _.mapKeyNames(() => "a"), _.mapKeyNames(() => "b"))
        const p = S.parse(s);
        
        expect(pipe({ x: 1 }, I.mapKeys(() => "a"), I.mapKeys(() => "b"))).toEqual({ b: 1 })
        expect(() => p({})).toThrow()
        expect(p({ x: "1" })).toEqual({ b: "1" })
    })

    it("mapKeyNames / s > s", () => {
        const s = pipe(S.struct({ b: S.struct({ inner: S.number }) }), _.mapKeyNames(() => "a"))
        const p = S.parse(s);
        const d = S.decode(s);
        const e = S.encode(s);
        
        expect(() => p({})).toThrow()
        expect(p({ b: { inner: 1 } })).toEqual({ a: { inner: 1 } })
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

    it("lowercase / s", () => {
        const s = pipe(S.struct({ NODE_ENV: S.string }), _.lowercase(), _.camelCase());
        const p = S.parse(s);

        expect(p({ NODE_ENV: "env" })).toEqual({ nodeEnv: "env" })

    })
})
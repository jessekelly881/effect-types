import { describe, it, expect } from "vitest";
import * as S from "@effect/schema/Schema";
import * as _ from "../src/Struct";

describe("Struct", () => {
    it("camelCase/ number", () => {
        const schema = _.camelCase(S.number)
        const p = S.parse(schema)

        expect(p(1)).toEqual(1)
    })

    it("camelCase/ tuple", () => {
        const schema = _.camelCase(S.tuple(S.number))
        const p = S.parse(schema)

        expect(p([1])).toEqual([1])
    })

    it("camelCase/ struct", () => {
        const schema = _.camelCase(S.struct({ a_b: S.number }))
        const p = S.parse(schema)

        expect(p({ a_b: 1 })).toEqual({ aB: 1 })
    })

    it("camelCase/ struct in tuple", () => {
        const schema = _.camelCase(S.tuple(S.struct({ a_b: S.number })))
        const p = S.parse(schema)

        expect(p([{ a_b: 1 }])).toEqual([{ aB: 1 }])
    })

    it("camelCase/ deep struct", () => {
        const schema = _.camelCase(S.struct({
            a_b: S.struct({
                c_d: S.struct({
                    e_f: S.number
                })
            })
        }))

        const p = S.parse(schema)

        expect(p({ a_b: { c_d: { e_f: 1 } } })).toEqual({ aB: { cD: { eF: 1 } } })
    })

})

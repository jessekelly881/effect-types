import { describe, it, expect } from "vitest";
import * as S from "@effect/schema/Schema";
import * as _ from "../src/Struct";

describe("Struct", () => {
    it("camelCaseDeep/ number", () => {
        const schema = _.camelCaseDeep(S.number)
        const p = S.parse(schema)

        expect(p(1)).toEqual(1)
    })

    it("camelCaseDeep/ tuple", () => {
        const schema = _.camelCaseDeep(S.tuple(S.number))
        const p = S.parse(schema)

        expect(p([1])).toEqual([1])
    })

    it("camelCaseDeep/ struct", () => {
        const schema = _.camelCaseDeep(S.struct({ a_b: S.number }))
        const p = S.parse(schema)

        expect(p({ a_b: 1 })).toEqual({ aB: 1 })
    })

    it("camelCaseDeep/ struct in tuple", () => {
        const schema = _.camelCaseDeep(S.tuple(S.struct({ a_b: S.number })))
        const p = S.parse(schema)

        expect(p([{ a_b: 1 }])).toEqual([{ aB: 1 }])
    })

    it("camelCaseDeep/ deep struct", () => {
        const schema = _.camelCaseDeep(S.struct({
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

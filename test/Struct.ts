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

    it("snakeCase/ struct", () => {
        const schema = _.snakeCase(S.struct({ aB: S.number }))
        const p = S.parse(schema)

        expect(p({ aB: 1 })).toEqual({ "a_b": 1 })
    })

    it("snakeCase/ struct in tuple", () => {
        const schema = _.snakeCase(S.tuple(S.struct({ aB: S.number })))
        const p = S.parse(schema)

        expect(p([{ aB: 1 }])).toEqual([{ "a_b": 1 }])
    })

    it("snakeCase/ deep struct", () => {
        const schema = _.snakeCase(S.struct({
            aB: S.struct({
                "c-d": S.struct({
                    "e_f": S.number
                })
            })
        }))

        const p = S.parse(schema)

        expect(p({ aB: { "c-d": { "e_f": 1 } } })).toEqual({ "a_b": { "c_d": { "e_f": 1 } } })
    })

})

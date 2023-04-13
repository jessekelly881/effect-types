import { Call, Strings } from "hotscript";
import { describe, it, expect } from "vitest";
import * as _ from "../../src/internal/string";

describe("internal/string", () => {
    it("toCamelCase", () => {
        expect(_.camelCase("")).toBe("")
        expect(_.camelCase("a")).toBe("a")
        expect(_.camelCase("aB")).toBe("aB")
        expect(_.camelCase("a_B")).toBe("aB")
        expect(_.camelCase("A_B")).toBe("AB")
        expect(_.camelCase("A_bc")).toBe("ABc")
        expect(_.camelCase("keb-ab")).toBe("kebAb")
        expect(_.camelCase("keb-ab_case")).toBe("kebAbCase")
    })

    it("snakeCase", () => {
        expect(_.snakeCase("")).toBe("")
        expect(_.snakeCase("a")).toBe("a")
        expect(_.snakeCase("aB")).toBe("a_b")
        // TODO: Broken at the type level
        // expect(_.snakeCase("a_B")).toBe("a__b")
        // expect(_.snakeCase("A_B")).toBe("a__b")
        expect(_.snakeCase("A_bc")).toBe("a_bc")
        expect(_.snakeCase("keb-ab")).toBe("keb_ab")
        expect(_.snakeCase("keb-ab_case")).toBe("keb_ab_case")
    })

    it("toLowerCase", () => {
        expect(_.lowercase("")).toBe("")
        expect(_.lowercase("a")).toBe("a")
        expect(_.lowercase("A")).toBe("a")
        expect(_.lowercase("aB")).toBe("ab")
        expect(_.lowercase("A_bC")).toBe("a_bc")
    })
})
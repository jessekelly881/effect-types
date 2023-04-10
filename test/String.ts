import { describe, it, expect } from "vitest";
import * as S from "@effect/schema/Schema";
import { pipe } from "@effect/data/Function";
import * as _ from "../src/String";

describe("String", () => {
    it("hex", () => {
        const schema = pipe(S.string, _.hex());
        const p = S.parse(schema);

        expect(p("0xff")).toBe("0xff")
        expect(p("0xff")).toBe("0xff")
    })
})

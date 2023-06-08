import { describe, it, expect } from "vitest";
import { testValues } from "./common";
import * as _ from "../src/Number";

describe("Number", () => {
    it("U8", () => testValues(
        _.U8, 
        [0, 1, 2 ** 8 - 1], 
        [-1, 2 ** 16]
    ))
})

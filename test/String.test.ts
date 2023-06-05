import { describe, it, expect } from "vitest";
import * as _ from "../src/String";
import { testValues } from "./common";

describe("String", () => {
    it("Ascii", () => testValues(
        _.Ascii, 
        ['foobar', '0987654321', 'test@example.com', '1234abcDEF'], 
        ['ｆｏｏbar', 'ｘｙｚ０９８', '１２３456', 'ｶﾀｶﾅ']
    ))

    it("Hexadecimal", () => testValues(
        _.Hexadecimal, 
        ['deadBEEF', 'ff0044', '0xff0044', '0XfF0044', '0x0123456789abcDEF'], 
        ['abcdefg', '', '..', '0xa2h', '0xa20x']
    ))

    it("Octal", () => testValues(
        _.Octal, 
        ['076543210', '0o01234567'], 
        ['abcdefg', '012345678', '012345670c', '00c12345670c', '', '..']
    ))
})

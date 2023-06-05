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

    it("SemVer", () => testValues(
        _.SemVer, 
        ['0.0.4', '1.2.3', '10.20.30', '1.1.2-prerelease+meta', '1.1.2+meta', '1.1.2+meta-valid', '1.0.0-alpha', '1.0.0-beta'], 
        ['alpha..', 'beta', '1.0.0-alpha_beta', '-alpha.', '1.0.0-alpha..', '1.0.0-alpha..1', '1.0.0-alpha...1']
    ))

    it("Uppercase", () => testValues(
        _.Uppercase, 
        ['ABC', 'ABC123', 'ALL CAPS IS FUN.', '   .'], 
        ['fooBar', '123abc']
    ))

    it("Lowercase", () => testValues(
        _.Lowercase, 
        ['abc', 'abc123', 'this is lowercase.', 'tr竪s 端ber'], 
        ['fooBar', '123A']
    ))

    it("Cron", () => testValues(
        _.Cron, 
        [
            "0 0 0 1 1 * 1",
            "0 0 0 1 1 * 1,2",
            "0 0 0 1 1 * 1,2,3",
            "0 0 0 1 * * 1/4",
            "0 0 0 * * 0 1-4",
            "0 0 0 * * * 2/4",
            "0 0 * * * * *",
            "@annually",
            "@yearly",
            "@every 5s"
        ], 
        ["5ms", "0", "@today"]
    ))
})

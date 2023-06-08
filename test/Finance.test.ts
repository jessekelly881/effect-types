import { describe, it, expect } from "vitest";
import * as _ from "../src/Finance";
import { assertValidFakeValue, testValues } from "./common";


describe("Finance", () => {
    it("BIC", () => {
        testValues(
            _.BIC, 
            ['SBICKEN1345', 'SBICKEN1', 'SBICKENY', 'SBICKEN1YYP', 'SBICXKN1YYP'], 
            ['SBIC23NXXX', 'S23CKENXXXX', 'SBICKENXX', 'SBICKENXX9', 'SBICKEN13458', 'SBICKEN', 'SBICXK']
        )

        assertValidFakeValue(_.BIC)
    })

    it("EthereumAddress", () => {
        testValues(
            _.EthereumAddress, 
            [
                '0x0000000000000000000000000000000000000001',
                '0x683E07492fBDfDA84457C16546ac3f433BFaa128',
                '0x88dA6B6a8D3590e88E0FcadD5CEC56A7C9478319',
                '0x8a718a84ee7B1621E63E680371e0C03C417cCaF6',
                '0xFCb5AFB808b5679b4911230Aa41FfCD0cd335b42'
            ], 
            [
                '0xGHIJK05pwm37asdf5555QWERZCXV2345AoEuIdHt',
                '0xFCb5AFB808b5679b4911230Aa41FfCD0cd335b422222',
                '0xFCb5AFB808b5679b4911230Aa41FfCD0cd33',
                '0b0110100001100101011011000110110001101111',
                '683E07492fBDfDA84457C16546ac3f433BFaa128',
                '1C6o5CDkLxjsVpnLSuqRs1UBFozXLEwYvU',
            ]
        )

        assertValidFakeValue(_.EthereumAddress)
    })

    it("BitcoinAddress", () => {
        testValues(
            _.BitcoinAddress, 
            [
                '1MUz4VMYui5qY1mxUiG8BQ1Luv6tqkvaiL',
                '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
                'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
                '14qViLJfdGaP4EeHnDyJbEGQysnCpwk3gd',
                '35bSzXvRKLpHsHMrzb82f617cV4Srnt7hS',
                '17VZNX1SN5NtKa8UQFxwQbFeFc3iqRYhemt',
                'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4'
            ], 
            [
                '4J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
                '0x56F0B8A998425c53c75C4A303D4eF987533c5597',
                'pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g',
                '17VZNX1SN5NlKa8UQFxwQbFeFc3iqRYhem',
                'BC1QW508D6QEJXTDG4Y5R3ZARVAYR0C5XW7KV8F3T4',
            ]
        )

        assertValidFakeValue(_.BitcoinAddress)
    })
})
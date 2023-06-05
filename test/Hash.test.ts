import { describe, it, expect } from "vitest";
import * as _ from "../src/Hash";
import { testValues } from "./common";


describe("Hash", () => {
    it("MD5", () => testValues(
        _.MD5, 
        [
            'd94f3f016ae679c3008de268209132f2',
            '751adbc511ccbe8edf23d486fa4581cd',
            '88dae00e614d8f24cfd5a8b3f8002e93',
            '0bf1c35032a71a14c2f719e5a14c1e96'
        ], 
        [
            'KYT0bf1c35032a71a14c2f719e5a14c1',
            'q94375dj93458w34',
            '39485729348',
            '%&FHKJFvk'
        ]
    ))
})
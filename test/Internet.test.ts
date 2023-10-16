import { describe, it } from "vitest";
import { assertValidFakeValue, testValues } from "./common";
import * as _ from "../src/Internet";

describe("Internet", () => {
  it("MagnetURI", () =>
    testValues(
      _.MagnetURI,
      [
        "magnet:?xt.1=urn:sha1:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456&xt.2=urn:sha1:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456",
        "magnet:?xt=urn:btih:ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234&dn=helloword2000&tr=udp://helloworld:1337/announce",
        "magnet:?xt=urn:btih:ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234&dn=foo",
        "magnet:?xt=urn:btih:ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234&dn=&tr=&nonexisting=hello world",
        "magnet:?xt=urn:md5:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456",
        "magnet:?xt=urn:tree:tiger:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456",
        "magnet:?xt=urn:ed2k:ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234",
        "magnet:?tr=udp://helloworld:1337/announce&xt=urn:btih:ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234",
        "magnet:?xt=urn:btmh:1220caf1e1c30e81cb361b9ee167c4aa64228a7fa4fa9f6105232b28ad099f3a302e",
      ],
      [
        ":?xt=urn:btih:ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234",
        "xt=urn:btih:ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234",
        "magneta:?xt=urn:btih:ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234",
        "magnet:?xt=uarn:btih:ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234",
        "magnet:?xt=urn:btihz",
        "magnet::?xt=urn:btih:UHWY2892JNEJ2GTEYOMDNU67E8ICGICYE92JDUGH",
        "magnet:?xt:btih:ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "magnet:?xt:urn:nonexisting:ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234",
        "magnet:?xt.2=urn:btih:ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234",
        "magnet:?xt=urn:ed2k:ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234567890123456789ABCD",
        "magnet:?xt=urn:btmh:1120caf1e1c30e81cb361b9ee167c4aa64228a7fa4fa9f6105232b28ad099f3a302e",
        "magnet:?ttxt=urn:btmh:1220caf1e1c30e81cb361b9ee167c4aa64228a7fa4fa9f6105232b28ad099f3a302e",
      ]
    ));

  it("IPv4", () => {
    testValues(
      _.IPv4,
      [
        "127.0.0.1",
        "0.0.0.0",
        "255.255.255.255",
        "1.2.3.4",
        "255.0.0.1",
        "0.0.1.1",
      ],
      [
        "::1",
        "2001:db8:0000:1:1:1:1:1",
        "::ffff:127.0.0.1",
        "137.132.10.01",
        "0.256.0.256",
        "255.256.255.256",
      ]
    );

    assertValidFakeValue(_.IPv4);
  });

  it("IPv6", () => {
    testValues(
      _.IPv6,
      [
        "2001:db8:0000:1:1:1:1:1",
        "2001:db8:3:4::192.0.2.33",
        "2001:41d0:2:a141::1",
        "::ffff:127.0.0.1",
      ],
      [
        "127.0.0.1",
        "0.0.0.0",
        "::1banana",
        "::1::",
        "1:",
        ":1",
        ":1:1:1::2",
        "1:1:1:1:1:1:1:1:1:1:1:1:1:1:1:1",
        "::11111",
      ]
    );

    assertValidFakeValue(_.IPv6);
  });
});

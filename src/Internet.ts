import * as S from "@effect/schema/Schema";
import { u8 } from "./Number";
import * as Fake from "effect-schema-compilers/dist/faker";
import { pipe } from "effect/Function";


/**
 * A port number
 * @category datatypes
 * @since 1.0.0
 */
export const port = (annotations?: S.FilterAnnotations<number>) => u8({
    message: () => `a port number`,
    identifier: "Port",
    description: `A port number`,
    ...annotations
});

/**
 * A port number
 * @category datatypes
 * @since 1.0.0
 */
export const Port = pipe(S.number, port(), S.brand("Port"));

/**
 * @category brands
 * @since 1.0.0
 */
export type Port = S.Schema.To<typeof Port>



/**
 * @category datatypes
 * @since 1.0.0
 */
export const HttpMethod = pipe(
    S.literal("GET", "POST", "PUT", "DELETE", "PATCH"), 
    S.identifier("HttpMethod")
)

/**
 * @category brands
 * @since 1.0.0
 */
export type HttpMethod = S.Schema.To<typeof HttpMethod>



/**
 * @category datatypes
 * @since 1.0.0
 */
export const Protocol = pipe(
    S.literal("http", "https"),
    S.identifier("Protocol")
)

/**
 * @category brands
 * @since 1.0.0
 */
export type Protocol = S.Schema.To<typeof Protocol>



const magnetURIRegex = /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;

/**
 * A port number
 * @category datatypes
 * @since 1.0.0
 */
export const magnetUri = (annotations?: S.FilterAnnotations<string>) => S.pattern(magnetURIRegex, {
    message: () => `a magnet uri`,
    identifier: "MagnetURI",
    description: `A magnet uri`,
    ...annotations
});

/**
 * A port number
 * @category datatypes
 * @since 1.0.0
 */
export const MagnetURI = pipe(S.string, magnetUri(), S.brand("MagnetURI"));

/**
 * @category brands
 * @since 1.0.0
 */
export type MagnetURI = S.Schema.To<typeof MagnetURI>



const IPv4SegmentFormat = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
const IPv4AddressFormat = `(${IPv4SegmentFormat}[.]){3}${IPv4SegmentFormat}`;
const IPv4AddressRegExp = new RegExp(`^${IPv4AddressFormat}$`);

/**
 * An ipv4 address
 * @category datatypes
 * @since 1.0.0
 */
export const ipv4 = (annotations?: S.FilterAnnotations<string>) => S.pattern(IPv4AddressRegExp, {
    message: () => `an ipv4 address`,
    identifier: "IPv4",
    description: `An ipv4 address`,
    ...annotations
});

/**
 * An ipv4 address
 * @category datatypes
 * @since 1.0.0
 */
export const IPv4 = pipe(
    S.string, 
    ipv4(), 
    Fake.faker(f => f.internet.ipv4()),
    S.identifier("IPv4"), 
    S.brand("IPv4")
);

/**
 * @category brands
 * @since 1.0.0
 */
export type IPv4 = S.Schema.To<typeof IPv4>
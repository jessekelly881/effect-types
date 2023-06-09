import * as S from "@effect/schema/Schema";
import { u8 } from "./Number";
import { pipe } from "@effect/data/Function";


/**
 * A port number
 * @category datatypes
 * @since 1.0.0
 */
export const port = (annotations?: S.AnnotationOptions<number>) => u8({
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
export type Port = S.To<typeof Port>



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
export type HttpMethod = S.To<typeof HttpMethod>



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
export type Protocol = S.To<typeof Protocol>



const magnetURIRegex = /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;

/**
 * A port number
 * @category datatypes
 * @since 1.0.0
 */
export const magnetUri = (annotations?: S.AnnotationOptions<string>) => S.pattern(magnetURIRegex, {
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
export type MagnetURI = S.To<typeof MagnetURI>
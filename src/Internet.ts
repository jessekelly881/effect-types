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
export const HttpMethod = S.literal("GET", "POST", "PUT", "DELETE", "PATCH")

/**
 * @category brands
 * @since 1.0.0
 */
export type HttpMethod = S.To<typeof HttpMethod>



/**
 * @category datatypes
 * @since 1.0.0
 */
export const Protocol = S.literal("http", "https")

/**
 * @category brands
 * @since 1.0.0
 */
export type Protocol = S.To<typeof Protocol>
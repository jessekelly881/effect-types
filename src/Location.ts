import * as S from "@effect/schema/Schema";
import { pipe } from "effect/Function";


/**
 * @category filters
 * @since 1.0.0
 */
export const latitude = S.between(-90, 90)

/**
 * @category datatype
 * @since 1.0.0
 */
export const Latitude = pipe(S.number, latitude, S.brand("Latitude"))

/**
 * @category brands
 * @since 1.0.0
 */
export type Latitude = S.To<typeof Latitude>



/**
 * @category filters
 * @since 1.0.0
 */
export const longitude = S.between(-180, 180);

/**
 * @category datatype
 * @since 1.0.0
 */
export const Longitude = pipe(S.number, longitude, S.brand("Longitude"))

/**
 * @category brands
 * @since 1.0.0
 */
export type Longitude = S.To<typeof Longitude>
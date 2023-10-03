import * as S from "@effect/schema/Schema";


/**
 * @category datatypes
 * @since 1.0.0
 */
export const Sex = S.literal("male", "female")

/**
 * @category brands
 * @since 1.0.0
 */
export type Sex = S.Schema.To<typeof Sex>
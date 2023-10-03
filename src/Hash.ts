import * as S from "@effect/schema/Schema";
import { pipe } from "effect/Function";


/**
 * A valid md5 hash
 * @since 1.0.0
 * @category filter
 */
export const md5 = <A extends string>() => S.pattern<A>(/^[a-f0-9]{32}$/, {
  message: () => `a md5 hash`,
  identifier: `MD5`,
  description: "A valid md5 hash",
});

/**
 * A valid md5 hash
 * @since 1.0.0
 * @category datatype
 */
export const MD5 = S.string.pipe(md5(), S.brand("MD5"));

/**
 * @since 1.0.0
 * @category brand
 */
export type MD5 = S.To<typeof MD5>
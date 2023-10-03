import * as S from "@effect/schema/Schema";
import { pipe } from "effect/Function";


/**
 * @since 1.0.0
 * @category filter
 */
export const hexColor = <A extends string>() => S.pattern<A>(/^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i, {
  message: () => `a hex color`,
  identifier: `HexColor`,
  description: "A hex color",
});

/**
 * @since 1.0.0
 * @category datatype
 */
export const HexColor = pipe(S.string, hexColor(), S.brand("HexColor"));

/**
 * @since 1.0.0
 * @category brand
 */
export type HexColor = S.To<typeof HexColor>
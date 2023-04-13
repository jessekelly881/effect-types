import { pipe } from "@effect/data/Function";
import * as S from "@effect/schema/Schema";
import * as I from "@effect/schema/internal/common";
import * as PR from "@effect/schema/ParseResult";
import type { Arbitrary } from "@effect/schema/Arbitrary"
import { ArbitraryHookId } from "@effect/schema/Arbitrary";


const asciiRegex = /^[\x00-\x7F]*$/;

/**
 * @since 1.0.0
 * @category filter
 */
export const ascii = <A extends string>() => S.pattern<A>(asciiRegex, {
  message: () => "a string containing only ASCII characters",
  identifier: "Ascii",
  description: "A string containing only ASCII characters",
});

/**
 * @since 1.0.0
 * @category filter
 */
export const alpha = <A extends string>() => S.pattern<A>(/^[A-Za-z]+$/, {
  message: () => "an alphabetic string",
  identifier: "Alpha",
  description: "A string containing only alphabetic characters",
});

/**
 * @since 1.0.0
 * @category filter
 */
export const alphaNumeric = <A extends string>() => S.pattern<A>(/^[A-Za-z0-9]+$/, {
  message: () => "an alphanumeric string",
  identifier: "AlphaNumeric",
  description: "A string containing only alphanumeric characters",
});

//-----------------------------------
// Hex
//-----------------------------------

/**
 * @since 1.0.0
 * @category ids
 */
export const HexTypeId = "@effect-types/String/HexTypeId"

/**
 * @since 1.0.0
 * @category filter
 */
export const hex = <A extends string>(options?: S.AnnotationOptions<A>) =>
  S.pattern<A>(/^(0x|0h)?[0-9A-F]+$/i, {
    typeId: HexTypeId,
    message: () => "a hexadecimal number",
    identifier: "Hexadecimal",
    description: "A string containing a valid hexadecimal number",
    ...options
  });

/**
 * @since 1.0.0
 * @category constructors
 */
export const Hex: S.Schema<string> = pipe(
  S.string,
  hex(),
  S.annotations({
    [ArbitraryHookId]: (): Arbitrary<string> => (fc) => fc.hexaString()
  })
)

/**
 * @since 1.0.0
 * @category parsers
 */
export const numberFromHex: S.Schema<string, number> = S.transformResult(
  pipe(S.string, hex()),
  S.number,
  (s) => {
    const n = parseInt(s, 16);
    return isNaN(n) ? PR.failure(PR.type(numberFromHex.ast, s)) : PR.success(n);
  },
  (n) => PR.success(n.toString(16))
)

// intFromHexadecimal :: string -> number


/**
 * @since 1.0.0
 * @category filter
 */
export const hexColor = <A extends string>() =>
  S.pattern<A>(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
    message: () => "a hex color code",
    identifier: "HexColor",
    description: "A string containing a valid hex color code",
  });

/**
 * @since 1.0.0
 * @category filter
 */
export const lowercase = <A extends string>() =>
  S.filter<A>((str) => str.toLowerCase() === str, {
    message: () => "a lowercase string",
    identifier: "Lowercase",
    description: "A string containing only lowercase characters",
  });
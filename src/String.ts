import * as S from "@effect/schema/Schema";
import { pipe } from "@effect/data/Function";
import multilineRegexp from "./common";


/**
 * @since 1.0.0
 * @category filter
 */
export const ascii = <A extends string>() => S.pattern<A>(/^[\x00-\x7F]+$/, {
  message: () => `an ascii string`,
  identifier: `Ascii`,
  description: "A string containing only ascii characters",
});

/**
 * @since 1.0.0
 * @category datatype
 */
export const Ascii = pipe(S.string, ascii(), S.brand("Ascii"));

/**
 * @since 1.0.0
 * @category brand
 */
export type Ascii = S.To<typeof Ascii>



/**
 * @since 1.0.0
 * @category filter
 */
export const hexadecimal = <A extends string>() => S.pattern<A>(/^(0x|0h)?[0-9A-F]+$/i, {
  message: () => `a hexadecimal string`,
  identifier: `Hexadecimal`,
  description: "A hexadecimal",
});

/**
 * @since 1.0.0
 * @category datatype
 */
export const Hexadecimal = pipe(S.string, hexadecimal(), S.brand("Hexadecimal"));

/**
 * @since 1.0.0
 * @category brand
 */
export type Hexadecimal = S.To<typeof Hexadecimal>



/**
 * @since 1.0.0
 * @category filter
 */
export const octal = <A extends string>() => S.pattern<A>(/^(0o)?[0-7]+$/i, {
  message: () => `a octal string`,
  identifier: `Octal`,
  description: "A octal value",
});

/**
 * @since 1.0.0
 * @category datatype
 */
export const Octal = pipe(S.string, octal(), S.brand("Octal"));

/**
 * @since 1.0.0
 * @category brand
 */
export type Octal = S.To<typeof Octal>



/**
 * An uppercase string
 * @since 1.0.0
 * @category filter
 */
export const uppercase = <A extends string>() =>
  S.filter<A>((s) => s === s.toUpperCase(), {
    message: () => `an uppercase string`,
    identifier: `Uppercase`,
    description: "An uppercase string",
  });

/**
 * An uppercase string
 * @since 1.0.0
 * @category datatype
 */
export const Uppercase = pipe(S.string, uppercase(), S.brand("Uppercase"));

/**
 * @since 1.0.0
 * @category brand
 */
export type Uppercase = S.To<typeof Uppercase>



const semVerRegex = multilineRegexp([
  '^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)',
  '(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))',
  '?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$',
], 'i');

/**
 * Semantic Version Number
 * @since 1.0.0
 * @category filter
 */
export const semVer = <A extends string>() => S.pattern<A>(semVerRegex, {
  message: () => `a semver string`,
  identifier: `Semver`,
  description: "A semver",
});

/**
 * Semantic Version Number
 * @since 1.0.0
 * @category datatype
 */
export const SemVer = pipe(S.string, semVer(), S.brand("SemVer"));

/**
 * @since 1.0.0
 * @category brand
 */
export type SemVer = S.To<typeof SemVer>



/**
 * A lowercase string
 * @since 1.0.0
 * @category filter
 */
export const lowercase = <A extends string>() =>
  S.filter<A>((s) => s === s.toLowerCase(), {
    message: () => `a lowercase string`,
    identifier: `Lowercase`,
    description: "A lowercase string",
  });

/**
 * A lowercase string
 * @since 1.0.0
 * @category datatype
 */
export const Lowercase = pipe(S.string, lowercase(), S.brand("Lowercase"));

/**
 * @since 1.0.0
 * @category brand
 */
export type Lowercase = S.To<typeof Lowercase>



/**
 * An md5 hash string
 * @since 1.0.0
 * @category filter
 */
export const md5 = <A extends string>() => S.pattern<A>(/^[a-f0-9]{32}$/, {
  message: () => `a md5 hash`,
  identifier: `MD5`,
  description: "An md5 hash",
});

/**
 * An md5 hash string
 * @since 1.0.0
 * @category datatype
 */
export const MD5 = pipe(S.string, md5(), S.brand("MD5"));

/**
 * @since 1.0.0
 * @category brand
 */
export type MD5 = S.To<typeof MD5>

import * as S from "@effect/schema/Schema";
import { pipe } from "effect/Function";
import multilineRegexp from "./common";
import { Faker } from "effect-schema-compilers";

/**
 * @since 1.0.0
 * @category filter
 */
export const ascii = <A extends string>() =>
  S.pattern<A>(/^[\x00-\x7F]+$/, {
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
export type Ascii = S.Schema.To<typeof Ascii>;

/**
 * @since 1.0.0
 * @category filter
 */
export const hexadecimal = <A extends string>() =>
  S.pattern<A>(/^(0x|0h)?[0-9A-F]+$/i, {
    message: () => `a hexadecimal string`,
    identifier: `Hexadecimal`,
    description: "A hexadecimal",
  });

/**
 * @since 1.0.0
 * @category datatype
 */
export const Hexadecimal = pipe(
  S.string,
  hexadecimal(),
  Faker.faker((f) => f.string.hexadecimal()),
  S.brand("Hexadecimal")
);

/**
 * @since 1.0.0
 * @category brand
 */
export type Hexadecimal = S.Schema.To<typeof Hexadecimal>;

/**
 * @since 1.0.0
 * @category filter
 */
export const octal = <A extends string>() =>
  S.pattern<A>(/^(0o)?[0-7]+$/i, {
    message: () => `a octal string`,
    identifier: `Octal`,
    description: "A octal value",
  });

/**
 * @since 1.0.0
 * @category datatype
 */
export const Octal = pipe(
  S.string,
  octal(),
  Faker.faker((f) => f.string.octal()),
  S.brand("Octal")
);

/**
 * @since 1.0.0
 * @category brand
 */
export type Octal = S.Schema.To<typeof Octal>;

const semVerRegex = multilineRegexp(
  [
    "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)",
    "(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))",
    "?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$",
  ],
  "i"
);

/**
 * Semantic Version Number
 * @since 1.0.0
 * @category filter
 */
export const semVer = <A extends string>() =>
  S.pattern<A>(semVerRegex, {
    message: () => `a semver string`,
    identifier: `Semver`,
    description: "A semver",
  });

/**
 * Semantic Version Number
 * @since 1.0.0
 * @category datatype
 */
export const SemVer = pipe(
  S.string,
  semVer(),
  Faker.faker((f) => f.system.semver()),
  S.brand("SemVer")
);

/**
 * @since 1.0.0
 * @category brand
 */
export type SemVer = S.Schema.To<typeof SemVer>;

const cronRegex =
  /^((((\d+,)+\d+|(\d+(\/|-|#)\d+)|\d+L?|\*(\/\d+)?|L(-\d+)?|\?|[A-Z]{3}(-[A-Z]{3})?) ?){5,7})$|(@(annually|yearly|monthly|weekly|daily|hourly|reboot))|(@every (\d+(ns|us|µs|ms|s|m|h))+)/;

/**
 * A cron string
 * @since 1.0.0
 * @category filter
 */
export const cron = <A extends string>() =>
  S.pattern<A>(cronRegex, {
    message: () => `a cron string`,
    identifier: `Cron`,
    description: "A cron string",
  });

/**
 * A cron string
 * @since 1.0.0
 * @category datatype
 */
export const Cron = pipe(
  S.string,
  cron(),
  Faker.faker((f) => f.system.cron()),
  S.brand("Cron")
);

/**
 * @since 1.0.0
 * @category brand
 */
export type Cron = S.Schema.To<typeof Cron>;

const slugRegex = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;

/**
 * @since 1.0.0
 * @example dolores-illo-est, illo-ratione
 * @category filter
 */
export const slug = <A extends string>() =>
  S.pattern<A>(slugRegex, {
    message: () => `a slug`,
    identifier: `Slug`,
    description: "A slug",
  });

/**
 * @example dolores-illo-est, illo-ratione
 * @since 1.0.0
 * @category datatype
 */
export const Slug = pipe(
  S.string,
  slug(),
  Faker.faker((f) => f.lorem.slug()),
  S.brand("Slug")
);

/**
 * @since 1.0.0
 * @category brand
 */
export type Slug = S.Schema.To<typeof Slug>;

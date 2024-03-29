import * as S from "@effect/schema/Schema";
import { flow, pipe } from "effect/Function";


const unsignedMax = (n: number) => 2 ** n - 1;
const signedMin = (n: number) => -(2 ** (n - 1));
const signedMax = (n: number) => 2 ** (n - 1) - 1;

const u = (n: number) => (annotations?: S.FilterAnnotations<number>) =>
  flow(
    S.int(),
    S.between(0, unsignedMax(n), {
      message: () => `an unsigned ${n} bit integer`,
      identifier: `U${n}`,
      description: `An unsigned ${n} bit integer`,
      ...annotations
    })
  );

const i = (n: number) => (annotations?: S.FilterAnnotations<number>) =>
  flow(
    S.int(),
    S.between(signedMin(n), signedMax(n), {
      message: () => `a signed ${n} bit integer`,
      identifier: `I${n}`,
      description: `A signed ${n} bit integer`,
    })
  );



/**
 * An unsigned 8 bit integer
 * @category filters
 * @since 1.0.0
 */
export const u8 = u(8);

/**
 * An unsigned 8 bit integer
 * @category datatypes
 * @since 1.0.0
 */
export const U8 = pipe(S.number, u8(), S.brand("U8"));

/**
 * @category brands
 * @since 1.0.0
 */
export type U8 = S.Schema.To<typeof U8>



/**
 * An unsigned 16 bit integer
 * @category filters
 * @since 1.0.0
 */
export const u16 = u(16);

/**
 * An unsigned 16 bit integer
 * @category datatypes
 * @since 1.0.0
 */
export const U16 = pipe(S.number, u16(), S.brand("U16"));

/**
 * @category brands
 * @since 1.0.0
 */
export type U16 = S.Schema.To<typeof U16>



/**
 * An unsigned 32 bit integer
 * @category filters
 * @since 1.0.0
 */
export const u32 = u(32);

/**
 * An unsigned 32 bit integer
 * @category datatypes
 * @since 1.0.0
 */
export const U32 = pipe(S.number, u32(), S.brand("U32"));

/**
 * @category brands
 * @since 1.0.0
 */
export type U32 = S.Schema.To<typeof U32>



/**
 * An unsigned 64 bit integer
 * @category filters
 * @since 1.0.0
 */
export const u64 = u(64);

/**
 * An unsigned 64 bit integer
 * @category datatypes
 * @since 1.0.0
 */
export const U64 = pipe(S.number, u64(), S.brand("U64"));

/**
 * @category brands
 * @since 1.0.0
 */
export type U64 = S.Schema.To<typeof U64>



/**
 * A signed 8 bit integer
 * @category filters
 * @since 1.0.0
 */
export const i8 = i(8);

/**
 * A signed 8 bit integer
 * @category datatypes
 * @since 1.0.0
 */
export const I8 = pipe(S.number, i8(), S.brand("I8"));

/**
 * @category brands
 * @since 1.0.0
 */
export type I8 = S.Schema.To<typeof I8>



/**
 * A signed 16 bit integer
 * @category filters
 * @since 1.0.0
 */
export const i16 = i(16);

/**
 * A signed 16 bit integer
 * @category datatypes
 * @since 1.0.0
 */
export const I16 = pipe(S.number, i16(), S.brand("I16"));

/**
 * @category brands
 * @since 1.0.0
 */
export type I16 = S.Schema.To<typeof I16>



/**
 * A signed 32 bit integer
 * @category filters
 * @since 1.0.0
 */
export const i32 = i(32);

/**
 * A signed 32 bit integer
 * @category datatypes
 * @since 1.0.0
 */
export const I32 = pipe(S.number, i32(), S.brand("I32"));

/**
 * @category brands
 * @since 1.0.0
 */
export type I32 = S.Schema.To<typeof I32>



/**
 * A signed 64 bit integer
 * @category filters
 * @since 1.0.0
 */
export const i64 = i(64);

/**
 * A signed 64 bit integer
 * @category datatypes
 * @since 1.0.0
 */
export const I64 = pipe(S.number, i64(), S.brand("I64"));

/**
 * @category brands
 * @since 1.0.0
 */
export type I64 = S.Schema.To<typeof I64>



/**
 * A "safe" number, i.e. a number between Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER
 * @category filters
 * @since 1.0.0
 */
export const safe = (annotations?: S.FilterAnnotations<number>) => S.between(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, {
	identifier: 'Safe',
	...annotations
});

/**
 * A "safe" number, i.e. a number between Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER
 * @category datatype
 * @since 1.0.0
 */
export const Safe = pipe(S.number, safe(), S.brand("Safe"))

/**
 * @category brands
 * @since 1.0.0
 */
export type Safe = S.Schema.To<typeof Safe>



/**
 * @category filters
 * @since 1.0.0
 */
export const positiveInt = flow(S.int(), S.positive())

/**
 * @category datatype
 * @since 1.0.0
 */
export const PositiveInt = pipe(S.number, positiveInt, S.brand("PositiveInt"))

/**
 * @category brands
 * @since 1.0.0
 */
export type PositiveInt = S.Schema.To<typeof PositiveInt>



/**
 * @category filters
 * @since 1.0.0
 */
export const negativeInt = flow(S.int(), S.negative())

/**
 * @category datatype
 * @since 1.0.0
 */
export const NegativeInt = pipe(S.number, negativeInt, S.brand("NegativeInt"))

/**
 * @category brands
 * @since 1.0.0
 */
export type NegativeInt = S.Schema.To<typeof NegativeInt>

export const NumberFromBoolean = S.transform(
  S.boolean,
  S.number,
  (b) => (b ? 1 : 0),
  (n) => n !== 0
);

export const FuzzyNumber = S.union(S.number, S.NumberFromString, NumberFromBoolean)
import * as S from "@effect/schema/Schema";
import { flow, pipe } from "@effect/data/Function";

/*
 * An ordering, -1, 0, 1
 * @since 1.0.0
 */
export const ordering = S.literal(-1, 0, 1);

const unsignedMax = (n: number) => 2 ** n - 1;

const u = (n: number) =>
  flow(
    S.int(),
    S.between(0, unsignedMax(n), {
      message: () => `an unsigned ${n} bit integer`,
      identifier: `U${n}`,
      description: `An unsigned ${n} bit integer`,
    })
  )

const signedMin = (n: number) => -(2 ** (n - 1));
const signedMax = (n: number) => 2 ** (n - 1) - 1;

const i = (n: number) => flow(
    S.int(), 
    S.between(signedMin(n), signedMax(n), {
      message: () => `a signed ${n} bit integer`,
      identifier: `I${n}`,
      description: `A signed ${n} bit integer`,
    }
));

/*
 * An unsigned 8 bit integer
 * @since 1.0.0
 */
export const u8 = u(8);

/*
 * An unsigned 16 bit integer
 * @since 1.0.0
 */
export const u16 = u(16);

/*
 * An unsigned 32 bit integer
 * @since 1.0.0
 */
export const u32 = u(32);

/*
 * An unsigned 64 bit integer
 * @since 1.0.0
 */
export const u64 = u(64);

/*
 * A signed 8 bit integer
 * @since 1.0.0
 */
export const i8 = i(8);

/*
 * A signed 16 bit integer
 * @since 1.0.0
 */
export const i16 = i(16);

/*
 * A signed 32 bit integer
 * @since 1.0.0
 */
export const i32 = i(32);

/*
 * A signed 64 bit integer
 * @since 1.0.0
 */
export const i64 = i(64);

/*
 * A "safe" number, i.e. a number between Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER
 * @since 1.0.0
 */
export const safe = S.between(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

export const latitude = S.between(-90, 90);
export const longitude = S.between(-180, 180);

export const natural = flow(S.int(), S.positive());
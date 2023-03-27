import * as S from "@effect/schema/Schema";
import { pipe } from "@effect/data/Function";

/*
 * An ordering, -1, 0, 1
 * @since 1.0.0
 */
export const ordering = S.literal(-1, 0, 1);

const u = (n: number) => pipe(S.number, S.int(), S.between(0, 2 ** n - 1));
const i = (n: number) => pipe(S.number, S.int(), S.between(-(2 ** (n - 1)), 2 ** (n - 1) - 1));

export const u8 = u(8);
export const u16 = u(16);
export const u32 = u(32);
export const u64 = u(64);

export const i8 = i(8);
export const i16 = i(16);
export const i32 = i(32);
export const i64 = i(64);

export const safe = S.between(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

export const latitude = S.between(-90, 90);
export const longitude = S.between(-180, 180);
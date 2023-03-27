import * as S from "@effect/schema/Schema";
import * as A from "@effect/data/ReadonlyArray";
import * as Str from "@effect/data/String";
import * as PR from "@effect/schema/ParseResult"
import { pipe } from "@effect/data/Function";

const truthyValues = [
  "1",
  "true",
  "True",
  "TRUE",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
];

const falsyValues = [
  "0",
  "false",
  "False",
  "FALSE",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF",
];

export const booleanFromString = <I>(self: S.Schema<I, string>): S.Schema<I, boolean> => {
  const schema: S.Schema<I, boolean> = S.transformResult(
    self,
    S.boolean,
    (s) => {
      if (A.contains(Str.Equivalence)(truthyValues, s)) {
        return PR.success(true);
      }
      if (A.contains(Str.Equivalence)(falsyValues, s)) {
        return PR.success(false);
      }

      return PR.failure(PR.type(schema.ast, s));
    },
    (n) => PR.success(String(n))
  );
  return schema
}
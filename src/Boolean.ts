import * as S from "@effect/schema/Schema";
import * as A from "@effect/data/ReadonlyArray";
import * as Str from "@effect/data/String";
import * as PR from "@effect/schema/ParseResult"
import { pipe } from "@effect/data/Function";

const truthyValues = ["1", "true", "yes", "on", "ok"];
const falsyValues = ["0", "false", "no", "off"];

/*
 * Parses a boolean from a string using a predefined set of truthy and falsy values. E.g. "yes", "no", "on", "off", "1", "0"
 * @since 1.0.0 
 */
export const parseFuzzy = <I>(self: S.Schema<I, string>): S.Schema<I, boolean> => {
  const schema: S.Schema<I, boolean> = S.transformResult(
    self,
    S.boolean,
    (s) => {
      if (A.contains(Str.Equivalence)(truthyValues, s.toLowerCase())) {
        return PR.success(true);
      }
      if (A.contains(Str.Equivalence)(falsyValues, s.toLowerCase())) {
        return PR.success(false);
      }

      return PR.failure(PR.type(schema.ast, s));
    },
    (n) => PR.success(String(n))
  );
  return schema
}
import * as AST from "@effect/schema/AST";
import * as S from "@effect/schema/Schema";
import { Call, Objects as Obj } from "hotscript";
import { pipe, identity } from "@effect/data/Function";
import * as O from "@effect/data/Option";
import * as RA from "@effect/data/ReadonlyArray";
import * as I from "./internal/common";

type CamelCaseDeep<A> = Call<Obj.CamelCaseDeep, A>;
type SnakeCaseDeep<A> = Call<Obj.SnakeCaseDeep, A>;

function toCamelCase(str: string): string {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

const toSnakeCase = (str: string) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("_");

const _mapKeys = (map: (_: string) => string) => {
  const go = (ast: AST.AST): AST.AST => {
    switch (ast._tag) {
      case "Tuple":
        return AST.createTuple(
          ast.elements.map((e) => AST.createElement(e.type, false)),
          ast.rest,
          ast.isReadonly
        );
      case "TypeLiteral":
        return AST.createTypeLiteral(
          ast.propertySignatures.map((f) =>
            AST.createPropertySignature(
              map(f.name.valueOf().toString()),
              f.type,
              false,
              f.isReadonly,
              f.annotations
            )
          ),
          ast.indexSignatures
        );
      case "Union":
        return AST.createUnion(ast.types.map((member) => go(member)));
      case "Lazy":
        return AST.createLazy(() => go(ast.f()));
      default:
        return ast;
    }
  };

  return go;
};

/*
 * Maps the keys of an object to camelCase. E.g. { a_b: 1 } => { aB: 1 }
 *
 * @since 1.0.0
 * @category transformers
 */
export const camelCase = <A, I>(self: S.Schema<I, A>): S.Schema<I, CamelCaseDeep<A>> =>
  S.transform(self, S.make(_mapKeys(toCamelCase)(self.ast)), (self) => I.mapKeysDeep(toCamelCase)(self), identity);

/*
 * Maps the keys of an object to snake-case. E.g. { a_b: 1 } => { "a-b": 1 }
 *
 * @since 1.0.0
 * @category transformers
 */
export const snakeCase = <A, I>(self: S.Schema<I, A>): S.Schema<I, SnakeCaseDeep<A>> =>
  S.transform(self, S.make(_mapKeys(toSnakeCase)(self.ast)), (self) => I.mapKeysDeep(toSnakeCase)(self), identity);

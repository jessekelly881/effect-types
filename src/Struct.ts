import * as AST from "@effect/schema/AST";
import * as S from "@effect/schema/Schema";
import { Pipe, Call, Objects as Obj, Strings } from "hotscript";
import { pipe, identity } from "@effect/data/Function";
import * as O from "@effect/data/Option";
import * as RA from "@effect/data/ReadonlyArray";
import * as I from "./internal";

type CamelCase<A> = Call<Obj.CamelCase, A>;
type SnakeCase<A> = Call<Obj.SnakeCase, A>;
type Lowercase<A> = Call<Obj.MapKeys<Strings.Lowercase>, A>;

const _mapKeyNames = (map: (_: string) => string) => {
  const go = (ast: AST.AST): AST.AST => {
    switch (ast._tag) {
      case "TypeLiteral":
        console.log(map.name)
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

/**
 * Given a map, maps the key names of an object.
 * @since 1.0.0
 */
export const mapKeyNames = <A, B>(map: (_: string) => string) =>
  <I>(self: S.Schema<I, A>): S.Schema<I, B> =>
    S.transform(
      self,
      S.make(_mapKeyNames(map)(S.to(self).ast)),
      (self) => I.mapKeys(map)(self),
      identity
    );

/**
 * Maps the key names of an object to camelCase
 * @since 1.0.0
 */
export const camelCase = <A>() => mapKeyNames<A, CamelCase<A>>(I.camelCase)

/**
 * Lowercases the key names of an object
 * @since 1.0.0
 */
export const lowercase = <A>() => mapKeyNames<A, Lowercase<A>>(I.lowercase)
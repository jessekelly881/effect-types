import * as AST from "@effect/schema/AST";
import * as S from "@effect/schema/Schema";
import { Call, Objects as Obj } from "hotscript";
import { pipe, identity } from "@effect/data/Function";
import * as O from "@effect/data/Option";
import * as RA from "@effect/data/ReadonlyArray";
import * as I from "./internal";

type CamelCase<A> = Call<Obj.CamelCase, A>;
type SnakeCase<A> = Call<Obj.SnakeCase, A>;

export const _mapKeyNames = (map: (_: string) => string) => {
  const go = (ast: AST.AST): AST.AST => {
    switch (ast._tag) {
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

export const mapKeyNames = <A, B>(map: (_: string) => string) =>
  <I>(self: S.Schema<I, A>): S.Schema<I, B> =>
    S.transform(
      self,
      S.make(_mapKeyNames(map)(self.ast)),
      (self) => I.mapKeys(map)(self),
      identity
    );

export const camelCase = <A>() => mapKeyNames<A, CamelCase<A>>(I.camelCase)
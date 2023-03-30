import * as AST from "@effect/schema/AST";
import * as S from "@effect/schema/Schema";
import { Call, Objects as Obj } from "hotscript";
import { pipe, identity } from "@effect/data/Function";
import * as O from "@effect/data/Option";
import * as RA from "@effect/data/ReadonlyArray";

type CamelCaseDeep<A> = Call<Obj.CamelCaseDeep, A>;

function toCamelCase(str: string): string {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

const mapCamelCaseDeep = <A>(a: A): CamelCaseDeep<A> => {
  if(typeof a === "object") {
    if(Array.isArray(a)) {
      return a.map(mapCamelCaseDeep) as any
    } else {
      return Object.fromEntries(
        Object.entries(a).map(([k, v]) => [toCamelCase(k), mapCamelCaseDeep(v)])
      ) as any
    }
  }

  return a as any;
}

export const _camelCaseDeep = (ast: AST.AST): AST.AST => {
  switch (ast._tag) {
    case "Tuple":
      return AST.createTuple(
        ast.elements.map((e) => AST.createElement(e.type, false)),
        ast.rest,
        ast.isReadonly
      )
    case "TypeLiteral":
      return AST.createTypeLiteral(
        ast.propertySignatures.map((f) =>
          AST.createPropertySignature(toCamelCase(f.name.valueOf().toString()), f.type, false, f.isReadonly, f.annotations)
        ),
        ast.indexSignatures
      )
    case "Union":
      return AST.createUnion(ast.types.map((member) => _camelCaseDeep(member)))
    case "Lazy":
      return AST.createLazy(() => _camelCaseDeep(ast.f()))
    default:
      return ast
  }
}

export const camelCaseDeep = <A, I>(self: S.Schema<I, A>): S.Schema<I, CamelCaseDeep<A>> =>
  S.transform(self, S.make(_camelCaseDeep(self.ast)), (self) => mapCamelCaseDeep(self), identity);
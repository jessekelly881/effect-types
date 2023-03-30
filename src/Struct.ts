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

const mapCamelCase = <A>(a: A): CamelCaseDeep<A> => {
  if(typeof a === "object") {
    if(Array.isArray(a)) {
      return a.map(mapCamelCase) as any
    } else {
      return Object.fromEntries(
        Object.entries(a).map(([k, v]) => [toCamelCase(k), mapCamelCase(v)])
      ) as any
    }
  }

  return a as any;
}

const _camelCase = (ast: AST.AST): AST.AST => {
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
      return AST.createUnion(ast.types.map((member) => _camelCase(member)))
    case "Lazy":
      return AST.createLazy(() => _camelCase(ast.f()))
    default:
      return ast
  }
}

/*
 * Maps the keys of an object to camelCase. E.g. { a_b: 1 } => { aB: 1 }
 *
 * @since 1.0.0
 * @category transformers
 */
export const camelCase = <A, I>(self: S.Schema<I, A>): S.Schema<I, CamelCaseDeep<A>> =>
  S.transform(self, S.make(_camelCase(self.ast)), (self) => mapCamelCase(self), identity);
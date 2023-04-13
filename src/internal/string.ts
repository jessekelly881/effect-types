import { Pipe, Call, Strings } from "hotscript";

export function camelCase<Str extends string>(str: Str): Pipe<Str, [Strings.CamelCase]> {
    return str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()) as any;
}

export function lowercase<Str extends string>(str: Str): Pipe<Str, [Strings.Lowercase]> {
    return str.toLowerCase() as any;
}

// TODO: Broken at the type level for capitalized keys. E.g. "a_B"
export function snakeCase <Str extends string>(str: Str): Pipe<Str, [Strings.SnakeCase]> {
  return str ? str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(s => s.toLowerCase())
    .join("_") : str as any;
}
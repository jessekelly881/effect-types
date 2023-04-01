import * as S from "@effect/schema/Schema";

const ascii = <A extends string>() => S.filter<A>(
  (s) => /^[\x00-\x7F]*$/.test(s),
  {
    message: () => "a string containing only ASCII characters",
    identifier: "Ascii",
    jsonSchema: { pattern: /^[\x00-\x7F]*$/ },
    description: "A string containing only ASCII characters",
  }
);

const alphaNumeric = <A extends string>() =>
  S.filter<A>(
    (s) => /^[a-zA-Z0-9]*$/.test(s),
    {
      message: () => "a string containing only alphanumeric characters",
      identifier: "AlphaNumeric",
      jsonSchema: { pattern: "^[a-zA-Z0-9]*$" },
      description: "A string containing only alphanumeric characters",
    }
  );
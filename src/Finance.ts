import * as S from "@effect/schema/Schema";
import { identity, pipe } from "effect/Function";
import { Faker } from "effect-schema-compilers";

/**
 * A Business Identifier Code (BIC)
 * @see https://en.wikipedia.org/wiki/ISO_9362
 * @category filters
 * @since 1.0.0
 */
export const bic = <A extends string>() =>
  S.pattern<A>(/^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/, {
    message: () => `a BIC`,
    identifier: `BIC`,
    description: "A Business Identifier Code (BIC)",
  });

/**
 * A Business Identifier Code (BIC)
 * @see https://en.wikipedia.org/wiki/ISO_9362
 * @category datatype
 * @since 1.0.0
 */
export const BIC = pipe(
  S.string,
  bic(),
  Faker.faker((f) => f.finance.bic()),
  S.brand("BIC")
);

/**
 * @category brands
 * @since 1.0.0
 */
export type BIC = S.Schema.To<typeof BIC>;

/**
 * @category filters
 * @since 1.0.0
 */
export const ethereumAddress = <A extends string>() =>
  S.pattern<A>(/^(0x)[0-9a-f]{40}$/i, {
    message: () => `an Ethereum address`,
    identifier: `EthereumAddress`,
    description: "An Ethereum address",
  });

/**
 * @category datatype
 * @since 1.0.0
 */
export const EthereumAddress = pipe(
  S.string,
  ethereumAddress(),
  Faker.faker((f) => f.finance.ethereumAddress()),
  S.brand("EthereumAddress")
);

/**
 * @category brands
 * @since 1.0.0
 */
export type EthereumAddress = S.Schema.To<typeof EthereumAddress>;

const bitcoinAddressRegex =
  /^(bc1)[a-z0-9]{25,39}$|^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;

/**
 * @category filters
 * @since 1.0.0
 */
export const bitcoinAddress = <A extends string>() =>
  S.pattern<A>(bitcoinAddressRegex, {
    message: () => `a Bitcoin address`,
    identifier: `BitcoinAddress`,
    description: "A Bitcoin address",
  });

/**
 * @category datatype
 * @since 1.0.0
 */
export const BitcoinAddress = pipe(
  S.string,
  bitcoinAddress(),
  Faker.faker((f) => f.finance.bitcoinAddress()),
  S.brand("BitcoinAddress")
);

/**
 * @category brands
 * @since 1.0.0
 */
export type BitcoinAddress = S.Schema.To<typeof BitcoinAddress>;

const cardNumberRegex =
  /^(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14}|^(81[0-9]{14,17}))$/;

/**
 * Removes dashes(-) and spaces from string
 */
export const sanitizeCardNumber =
  () =>
  <I, A extends string>(self: S.Schema<I, A>): S.Schema<I, A> =>
    S.transform(
      self,
      S.to(self),
      (s) => s.replace(/[- ]+/g, "").toLocaleLowerCase() as A,
      identity
    );

/**
 * @category filters
 * @since 1.0.0
 */
export const creditCardNumber = <A extends string>() =>
  S.pattern<A>(cardNumberRegex, {
    message: () => `a credit card number`,
    identifier: `CreditCardNumber`,
    description: "A credit card number",
  });

/**
 * @category datatype
 * @since 1.0.0
 */
export const CreditCardNumber = pipe(
  S.string,
  sanitizeCardNumber(),
  creditCardNumber(),
  Faker.faker((f) => f.finance.creditCardNumber()),
  S.brand("CreditCardNumber")
);

/**
 * @category brands
 * @since 1.0.0
 */
export type CreditCardNumber = S.Schema.To<typeof CreditCardNumber>;

import * as S from "@effect/schema/Schema";
import { pipe } from "@effect/data/Function";
import * as Fake from "effect-schema-compilers/dist/faker";



/**
 * A Business Identifier Code (BIC)
 * @see https://en.wikipedia.org/wiki/ISO_9362
 * @category filters
 * @since 1.0.0
 */
export const bic = <A extends string>() => S.pattern<A>(/^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/, {
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
	Fake.faker(f => f.finance.bic()),
	S.brand("BIC")
)

/**
 * @category brands
 * @since 1.0.0
 */
export type BIC = S.To<typeof BIC>



/**
 * @category filters
 * @since 1.0.0
 */
export const ethereumAddress = <A extends string>() => S.pattern<A>(/^(0x)[0-9a-f]{40}$/i, {
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
	Fake.faker(f => f.finance.ethereumAddress()),
	S.brand("EthereumAddress")
)

/**
 * @category brands
 * @since 1.0.0
 */
export type EthereumAddress = S.To<typeof EthereumAddress>
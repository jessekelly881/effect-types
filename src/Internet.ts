import * as S from "@effect/schema/Schema";
import { u8 } from "./Number";
import { Faker } from "effect-schema-compilers";
import { pipe } from "effect/Function";

/**
 * A port number
 * @category datatypes
 * @since 1.0.0
 */
export const port = (annotations?: S.FilterAnnotations<number>) =>
  u8({
    message: () => `a port number`,
    identifier: "Port",
    description: `A port number`,
    ...annotations,
  });

/**
 * A port number
 * @category datatypes
 * @since 1.0.0
 */
export const Port = pipe(S.number, port(), S.brand("Port"));

/**
 * @category brands
 * @since 1.0.0
 */
export type Port = S.Schema.To<typeof Port>;

/**
 * @category datatypes
 * @since 1.0.0
 */
export const HttpMethod = pipe(
  S.literal("GET", "POST", "PUT", "DELETE", "PATCH"),
  S.identifier("HttpMethod")
);

/**
 * @category brands
 * @since 1.0.0
 */
export type HttpMethod = S.Schema.To<typeof HttpMethod>;

/**
 * @category datatypes
 * @since 1.0.0
 */
export const Protocol = pipe(
  S.literal("http", "https"),
  S.identifier("Protocol")
);

/**
 * @category brands
 * @since 1.0.0
 */
export type Protocol = S.Schema.To<typeof Protocol>;

const magnetURIRegex =
  /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;

/**
 * A port number
 * @category datatypes
 * @since 1.0.0
 */
export const magnetUri = (annotations?: S.FilterAnnotations<string>) =>
  S.pattern(magnetURIRegex, {
    message: () => `a magnet uri`,
    identifier: "MagnetURI",
    description: `A magnet uri`,
    ...annotations,
  });

/**
 * A port number
 * @category datatypes
 * @since 1.0.0
 */
export const MagnetURI = pipe(S.string, magnetUri(), S.brand("MagnetURI"));

/**
 * @category brands
 * @since 1.0.0
 */
export type MagnetURI = S.Schema.To<typeof MagnetURI>;

const IPv4SegmentFormat =
  "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
const IPv4AddressFormat = `(${IPv4SegmentFormat}[.]){3}${IPv4SegmentFormat}`;
const IPv4AddressRegExp = new RegExp(`^${IPv4AddressFormat}$`);

/**
 * An ipv4 address
 * @category datatypes
 * @since 1.0.0
 */
export const ipv4 = (annotations?: S.FilterAnnotations<string>) =>
  S.pattern(IPv4AddressRegExp, {
    message: () => `an ipv4 address`,
    identifier: "IPv4",
    description: `An ipv4 address`,
    ...annotations,
  });

/**
 * An ipv4 address
 * @category datatypes
 * @since 1.0.0
 */
export const IPv4 = pipe(
  S.string,
  ipv4(),
  Faker.faker((f) => f.internet.ipv4()),
  S.identifier("IPv4"),
  S.brand("IPv4")
);

/**
 * @category brands
 * @since 1.0.0
 */
export type IPv4 = S.Schema.To<typeof IPv4>;

const IPv6SegmentFormat = "(?:[0-9a-fA-F]{1,4})";
const IPv6AddressRegExp = new RegExp(
  "^(" +
    `(?:${IPv6SegmentFormat}:){7}(?:${IPv6SegmentFormat}|:)|` +
    `(?:${IPv6SegmentFormat}:){6}(?:${IPv4AddressFormat}|:${IPv6SegmentFormat}|:)|` +
    `(?:${IPv6SegmentFormat}:){5}(?::${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,2}|:)|` +
    `(?:${IPv6SegmentFormat}:){4}(?:(:${IPv6SegmentFormat}){0,1}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,3}|:)|` +
    `(?:${IPv6SegmentFormat}:){3}(?:(:${IPv6SegmentFormat}){0,2}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,4}|:)|` +
    `(?:${IPv6SegmentFormat}:){2}(?:(:${IPv6SegmentFormat}){0,3}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,5}|:)|` +
    `(?:${IPv6SegmentFormat}:){1}(?:(:${IPv6SegmentFormat}){0,4}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,6}|:)|` +
    `(?::((?::${IPv6SegmentFormat}){0,5}:${IPv4AddressFormat}|(?::${IPv6SegmentFormat}){1,7}|:))` +
    ")(%[0-9a-zA-Z-.:]{1,})?$"
);

/**
 * An ipv4 address
 * @category datatypes
 * @since 1.0.0
 */
export const ipv6 = (annotations?: S.FilterAnnotations<string>) =>
  S.pattern(IPv6AddressRegExp, {
    message: () => `an ipv6 address`,
    identifier: "IPv6",
    description: `An ipv6 address`,
    ...annotations,
  });

/**
 * An ipv4 address
 * @category datatypes
 * @since 1.0.0
 */
export const IPv6 = pipe(
  S.string,
  ipv6(),
  Faker.faker((f) => f.internet.ipv6()),
  S.identifier("IPv6"),
  S.brand("IPv6")
);

/**
 * @category brands
 * @since 1.0.0
 */
export type IPv6 = S.Schema.To<typeof IPv6>;

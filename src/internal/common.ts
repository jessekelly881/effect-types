/*
 * @since 1.0.0
 */

/* @internal */
export const mapKeysDeep = (fn: (_: string) => string) => <A, R>(a: A): R => {
  if(typeof a === "object") {
    if(Array.isArray(a)) {
      return a.map(mapKeysDeep(fn)) as any
    } else {
      return Object.fromEntries(
        Object.entries(a).map(([k, v]) => [fn(k), mapKeysDeep(fn)(v)])
      ) as any
    }
  }

  return a as any;
}

export default {}
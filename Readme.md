# Effect schema extras

A collection of types, transforms, filters, compilers, and helpers for @effect/schema 
organized by data type.

## Types

### Boolean

#### parseFuzzy

### Struct

#### camelCaseDeep

Maps the keys of a struct to camel case.

### Number

- u8: [0, 255]
- u16: [0, 65535]
- u32: [0, 4294967295]
- u64: [0, 18446744073709551615]

- i8: [-128, 127]
- i16: [-32768, 32767]
- i32: [-2147483648, 2147483647]
- i64: [-9223372036854775808, 9223372036854775807]

- safe: [-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]

- latitude: [-90, 90]
- longitude: [-180, 180]
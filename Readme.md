# Effect schema extras

A collection of types, transforms, filters, compilers, and helpers for @effect/schema 
organized by data type.

## Types

### Boolean

- parseFuzzy: string -> boolean

### Number

- [x] U8: [0, 255]
- [x] U16: [0, 65535]
- [x] U32: [0, 4294967295]
- [x] U64: [0, 18446744073709551615]

- [x] I8: [-128, 127]
- [x] I16: [-32768, 32767]
- [x] I32: [-2147483648, 2147483647]
- [x] I64: [-9223372036854775808, 9223372036854775807]

- [x] Safe: [-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
- [x] PositiveInt
- [x] NegativeInt

### String
- [x] Ascii
- [x] Hexadecimal
- [x] Octal
- [x] Uppercase
- [x] Lowercase
- [x] SemVer
- [x] Cron

### Color
- [x] HexColor

### Finance
- [x] BIC
- [x] EtheriumAddress
- [ ] BitcoinAddress

### Hash
- [x] MD5

### Internet 
- [x] Port
- [x] HttpMethod (GET, PATCH, ...)
- [x] Protocol (http | https)

### Location
- [x] Longitude (-180, 180)
- [x] Latitude (-90, 90)

### Person
- [x] Sex (male | female)

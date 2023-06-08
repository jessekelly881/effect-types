# Effect types

A collection of types, transforms, filters, compilers, and helpers for @effect/schema 
organized by data type. Designed to be tightly integrated with other projects in the ecosystem.

## Todo
- Integrate with [effect-schema-compilers](https://github.com/jessekelly881/effect-schema-compilers) to include well defined compiler targets for each type. 
- Extend collection of types. Currently using fakerjs and validatorjs for reference. 

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
- [x] BitcoinAddress

### Hash
- [x] MD5

### Internet 
- [x] Port
- [x] HttpMethod (GET, PATCH, ...)
- [x] Protocol (http | https)
- [x] MagnetURI

### Location
- [x] Longitude (-180, 180)
- [x] Latitude (-90, 90)

### Person
- [x] Sex (male | female)

## Credits
This library depends heavily on the work done on the [validator.js](https://github.com/validatorjs/validator.js) project and while it is not a direct dependency of this project, a significant amount of code has been borrowed for validating string types. 

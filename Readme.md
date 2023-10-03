# Effect types

A collection of types, and helpers for @effect/schema organized by data type. Designed to be tightly integrated with other projects in the ecosystem.

## Todo
- Integrate with [effect-schema-compilers](https://github.com/jessekelly881/effect-schema-compilers) to include well defined compiler targets for each type. 
- Extend collection of types. Currently using fakerjs and validatorjs for reference. 

## Types

### Boolean

```ts
import * as B from "effect-types/dist/Boolean";
import * as S from "@effect/schema/Schema";
import { pipe } from "effect/Function";

B.FuzzyBoolean // true | false , 0 | 1 , yes | no , on | off

pipe(S.string, B.fuzzyBoolean())
```

### Number

```ts
import * as N from "effect-types/dist/Number";
import * as S from "@effect/schema/Schema";
import { pipe } from "effect/Function";

// data types
N.U8 // Schema<number, number & Brand<"U8">>
N.U16
N.U32
N.U64
N.I8 // [-128, 127]
N.I16
N.I32
N.I64
N.Safe // [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
N.PositiveInt
N.NegativeInt

// filters
pipe(S.number, N.u8()) // [0, 255]
pipe(S.number, N.u16())
pipe(S.number, N.u32())
pipe(S.number, N.u64())
pipe(S.number, N.i8())
pipe(S.number, N.i16())
pipe(S.number, N.i32())
pipe(S.number, N.i64())
pipe(S.number, N.safe())
pipe(S.number, N.positiveInt())
pipe(S.number, N.negativeInt())
```

### String

```ts
import * as Str from "effect-types/dist/String";
import * as S from "@effect/schema/Schema";
import { pipe } from "effect/Function";

// data types
Str.Ascii 
Str.Hexadecimal
Str.Octal
Str.SemVer
Str.Cron
Str.Slug // e.g. foo-bar-foo

// filters
pipe(S.string, Str.ascii())
pipe(S.string, Str.hexadecimal())
pipe(S.string, Str.octal())
pipe(S.string, Str.semVer())
pipe(S.string, Str.cron())
pipe(S.string, Str.slug())
```

### Color

```ts
import * as C from "effect-types/dist/Color";
import * as S from "@effect/schema/Schema";
import { pipe } from "effect/Function";

// data types
C.HexColor

// filters
pipe(S.string, C.hexColor())
```

### Finance

```ts
import * as F from "effect-types/dist/Finance";
import * as S from "@effect/schema/Schema";
import { pipe } from "effect/Function";

// data types
F.BIC // Business Identifier Codes (BIC)
F.EtheriumAddress
F.BitcoinAddress

// filters
pipe(S.string, F.bic())
pipe(S.string, F.etheriumAddress())
pipe(S.string, F.bitcoinAddress())
```


### Hash

```ts
import * as H from "effect-types/dist/Hash";
import * as S from "@effect/schema/Schema";
import { pipe } from "effect/Function";

// data types
H.MD5

// filters
pipe(S.string, H.md5())
```

### Internet 

```ts
import * as I from "effect-types/dist/Internet";
import * as S from "@effect/schema/Schema";
import { pipe } from "effect/Function";

// data types
I.Port
I.HttpMethod // GET, PATCH, ...
I.Protocol // http | https
I.MagnetURI
I.IPv4
I.IPv6

// filters
pipe(S.number. I.port())
pipe(S.string. I.magnetUri())
pipe(S.string. I.ipv4())
pipe(S.string. I.ipv6())
```

### Location

```ts
import * as L from "effect-types/dist/Location";
import * as S from "@effect/schema/Schema";
import { pipe } from "effect/Function";

// data types
L.Longitude
L.Latitude

// filters
pipe(S.number, L.longitude())
pipe(S.number, L.latitude())
```

### Person

```ts
import * as P from "effect-types/dist/Person";

// data types
P.Sex // male | female
```

## Credits
This library depends heavily on the work done on the [validator.js](https://github.com/validatorjs/validator.js) project and while it is not a direct dependency of this project, a significant amount of code has been borrowed for validating string types. 

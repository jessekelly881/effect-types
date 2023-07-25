import * as Brand from '@effect/data/Brand'

type Int = number & Brand.Brand<'Int'>

const Int = Brand.refined<Int>(
    (n) => Number.isInteger(n),
    (n) => Brand.error(`Expected ${n} to be an integer`)
  )
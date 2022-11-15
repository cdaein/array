# @daeinc/array

Array utilities.

## Installation

```sh
npm i @daeinc/array
```

then,

```js
import { fillAndMap, ... } from "@daeinc/array";
```

## Functions

```ts
const accumulate: (arr: number[], precision?: number) => number[];

const addToArray: <T>(
  arr: T[],
  entry: T,
  newArrayLen: number,
  mode?: "first" | "last"
) => T[];

const fillAndMap: <T>(n: number, fn: (el: null, idx: number) => T) => T[];

const getNonZeroIndices: (arr: number[]) => number[];

const interpolateArray: (
  arrStart: number[],
  arrTarget: number[],
  t: number
) => number[];

const isAllOne: (arr: number[]) => boolean;

const isAllZero: (arr: number[]) => boolean;

const isAnyOne: (arr: number[]) => boolean;

const isAnyZero: (arr: number[]) => boolean;

const unwrapArrayOfObjects: (
  arr: {
    [key: string]: any;
  }[],
  objKey: string
) => any[];
//# sourceMappingURL=index.d.ts.map
```

## To dos

- test

## License

MIT

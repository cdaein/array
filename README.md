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

### accumulate

```ts
const accumulate: (arr: number[], precision?: number) => number[];
```

Takes in a number array and returns a new array with values accumulated. For example, the input array `[1, 2, 3, 4]` will return `[1, 3, 6, 10]`. It also takes an optional parameter `precision`(default=4) to compensate for float rounding error. The original values are used while summing, but the return values will be rounded.

### addToArray

```ts
const addToArray: <T>(
  arr: T[],
  entry: T,
  newArrayLen: number,
  mode?: "first" | "last"
) => T[];
```

Adds a new element to array in-place while limiting how many to keep history. The mode `first` will insert at the beginning of the array.

### fillAndMap

```ts
const fillAndMap: <T>(n: number, fn: (el: null, idx: number) => T) => T[];
```

Creates a new array with given length and maps values

### getNonZeroIndices

```ts
const getNonZeroIndices: (arr: number[]) => number[];
```

Check for elements with non-zero values and return indices.

### interpolateArray

```ts
const interpolateArray: (
  arrStart: number[],
  arrTarget: number[],
  t: number
) => number[];
```

Interpolates between two 1-dimensional arrays of same size.

### isAllOne

```ts
const isAllOne: (arr: number[]) => boolean;
```

Returns `true` if all elements of input array is `1`.

### isAllZero

```ts
const isAllZero: (arr: number[]) => boolean;
```

Returns `true` if all elements of input array is `0`.

### isAnyOne

```ts
const isAnyOne: (arr: number[]) => boolean;
```

Returns `true` if any element of input array is `1`.

### isAnyZero

```ts
const isAnyZero: (arr: number[]) => boolean;
```

Returns `true` if any element of input array is `0`.

### unwrapArrayOfObjects

```ts
const unwrapArrayOfObjects: (
  arr: {
    [key: string]: any;
  }[],
  objKey: string
) => any[];
```

A helper function to get object values inside an array. All objects must have same keys present. For example, when the input array is `[ {name: val1}, {name: val2} ]`, calling `unwrapArrayOfObjects(arr, "name")` will return `[val1, val2]`.

## To dos

- test

## License

MIT

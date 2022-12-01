import { mix, roundF } from "@daeinc/math";

/**
 * accumulate array values. ex. [50,50,50] => [50,100,150]
 * use original value while summing, but return value will be rounded
 *
 * TEST: float rounding error needs more testing
 *
 * @param arr
 * @returns
 */
export const accumulate = (arr: number[], precision = 4) => {
  const result = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    result.push(sum);
  }
  return result.map((val) => roundF(val, 4));
};

/**
 * add to array in-place while limiting how many to keep history.
 *
 * "first" will insert at beginning of array.
 * @param arr array to keep history
 * @param entry value to add to history
 * @param newArrayLen how many elements to keep
 * @param mode insert where? "first" (default) | "last"
 * @returns updated array
 */
export const addToArray = <T>(
  arr: T[],
  entry: T,
  newArrayLen: number,
  mode: "first" | "last" = "first"
) => {
  // add
  if (mode === "first") arr.unshift(entry); // add new one to beginning
  else if (mode === "last") arr.push(entry); // add new one to end
  // remove
  if (arr.length > newArrayLen) {
    if (mode === "first") arr.pop(); // remove last (oldest)
    else if (mode === "last") arr.shift(); // remove first (oldest)
  }
  return arr;
};

/**
 * create a new array with given length and maps values
 * @param n length of generated array
 * @param fn callback function that goes into map(fn)
 * @returns new array with mapped values
 */
export const fillAndMap = <T>(
  n: number,
  fn: (el: null, idx: number) => T
): T[] => {
  if (n > 0) {
    return Array(n).fill(null).map(fn);
  }
  throw new Error("fillAndMap(): n must be greater than zero");
};

/**
 * check for elements with non-zero value and return indices
 * @param arr array to evaluate
 * @returns array of indices with non-zero values
 */
export const getNonZeroIndices = (arr: number[]): number[] => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) result.push(i);
  }
  return result;
};

/**
 * interpolates between two 1d array of any size. for now, numbers only.
 *
 * TODO:
 * - expand to take object, nested aray/ojbects. recursive.
 * @param arrStart array to start from
 * @param arrTarget array to interpolate to
 * @param t 0..1
 * @returns 1d array
 */
export const interpolateArray = (
  arrStart: number[],
  arrTarget: number[],
  t: number
) => {
  if (arrStart.length === 0 || arrTarget.length === 0)
    throw new Error("interpolateArray(): arrays cannot be empty");
  if (arrStart.length !== arrTarget.length)
    throw new Error("interpolateArray(): length must be same");
  return Array(arrStart.length)
    .fill(0)
    .map((_, i) => {
      return mix(arrStart[i], arrTarget[i], t);
    });
};

/**
 * check if all values of array is one.
 * @param arr array to evaluate
 * @returns true if all values are one
 */
export const isAllOne = (arr: number[]) => arr.every((el) => el === 1);

/**
 * check if all values of array is zero.
 * @param arr array to evaluate
 * @returns true if all values are zero
 */
export const isAllZero = (arr: number[]) => arr.every((el) => el === 0);

/**
 * check if any value of array is one
 * @param arr array to evaluate
 * @returns true if any value is one.
 */
export const isAnyOne = (arr: number[]) => arr.some((el) => el === 1);

/**
 * check if any value of array is zero
 * @param arr array to evaluate
 * @returns true if any value is zero.
 */
export const isAnyZero = (arr: number[]) => arr.some((el) => el === 0);

/**
 * convert object key:value pairs into simple array of values
 * @param obj
 * @param keys array of string keys. order is preserved.
 * @returns
 */
export const objectToArray = <T>(obj: { [key: string]: T }, keys: string[]) => {
  return keys.map((key) => obj[key]);
};

/**
 * helper function to get object values inside an array. all objects must have same keys present.
 *
 * ex. [{name: val1},{name: val2}] => fn(arr, "name") => [val1, val2]
 * @param arr array of objects
 * @param objKey key string of object inside source array
 * @returns array
 */
export const unwrapArrayOfObjects = <T>(
  arr: { [key: string]: T }[],
  objKey: string
) => {
  return Array(arr.length)
    .fill(null)
    .map((_, i) => {
      if (arr[i][objKey] !== undefined) {
        return arr[i][objKey];
      } else {
        throw new Error(
          "unwrapArrayOfObjects(): all objects must have keys present"
        );
      }
    });
};

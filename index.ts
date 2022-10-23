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
 * helper function to get object values inside an array. all objects must have same keys present.
 *
 * ex. [{name: val1},{name: val2}] => fn(arr, "name") => [val1, val2]
 * @param arr array of objects
 * @param objKey key string of object inside source array
 * @returns array
 */
export const unwrapArrayOfObjects = (
  arr: { [key: string]: any }[],
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

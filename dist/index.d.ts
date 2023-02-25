/**
 * accumulate array values. ex. [50,50,50] => [50,100,150]
 * use original value while summing, but return value will be rounded
 *
 * TEST: float rounding error needs more testing
 *
 * @param arr
 * @returns
 */
declare const accumulate: (arr: number[], precision?: number) => number[];
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
declare const addToArray: <T>(arr: T[], entry: T, newArrayLen: number, mode?: "first" | "last") => T[];
/**
 * create a new array with given length and maps values
 * @param n length of generated array
 * @param fn callback function that goes into map(fn)
 * @returns new array with mapped values
 */
declare const fillAndMap: <T>(n: number, fn: (el: null, idx: number) => T) => T[];
/**
 * check for elements with non-zero value and return indices
 * @param arr array to evaluate
 * @returns array of indices with non-zero values
 */
declare const getNonZeroIndices: (arr: number[]) => number[];
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
declare const interpolateArray: (arrStart: number[], arrTarget: number[], t: number) => number[];
/**
 * check if all values of array is one.
 * @param arr array to evaluate
 * @returns true if all values are one
 */
declare const isAllOne: (arr: number[]) => boolean;
/**
 * check if all values of array is zero.
 * @param arr array to evaluate
 * @returns true if all values are zero
 */
declare const isAllZero: (arr: number[]) => boolean;
/**
 * check if any value of array is one
 * @param arr array to evaluate
 * @returns true if any value is one.
 */
declare const isAnyOne: (arr: number[]) => boolean;
/**
 * check if any value of array is zero
 * @param arr array to evaluate
 * @returns true if any value is zero.
 */
declare const isAnyZero: (arr: number[]) => boolean;
/**
 * convert object key:value pairs into simple array of values
 * @param obj
 * @param keys array of string keys. order is preserved.
 * @returns
 */
declare const objectToArray: <T>(obj: {
    [key: string]: T;
}, keys: string[]) => T[];
/**
 * helper function to get object values inside an array. all objects must have same keys present.
 *
 * ex. [{name: val1},{name: val2}] => fn(arr, "name") => [val1, val2]
 * @param arr array of objects
 * @param objKey key string of object inside source array
 * @returns array
 */
declare const unwrapArrayOfObjects: <T>(arr: {
    [key: string]: T;
}[], objKey: string) => T[];

export { accumulate, addToArray, fillAndMap, getNonZeroIndices, interpolateArray, isAllOne, isAllZero, isAnyOne, isAnyZero, objectToArray, unwrapArrayOfObjects };

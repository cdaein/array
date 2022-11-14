/**
 * accumulate array values. ex. [50,50,50] => [50,100,150]
 *
 * TEST: float rounding error needs more testing
 *
 * @param arr
 * @returns
 */
export declare const accumulate: (arr: number[], precision?: number) => number[];
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
export declare const addToArray: <T>(arr: T[], entry: T, newArrayLen: number, mode?: "first" | "last") => T[];
/**
 * create a new array with given length and maps values
 * @param n length of generated array
 * @param fn callback function that goes into map(fn)
 * @returns new array with mapped values
 */
export declare const fillAndMap: <T>(n: number, fn: (el: null, idx: number) => T) => T[];
/**
 * check for elements with non-zero value and return indices
 * @param arr array to evaluate
 * @returns array of indices with non-zero values
 */
export declare const getNonZeroIndices: (arr: number[]) => number[];
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
export declare const interpolateArray: (arrStart: number[], arrTarget: number[], t: number) => number[];
/**
 * check if all values of array is one.
 * @param arr array to evaluate
 * @returns true if all values are one
 */
export declare const isAllOne: (arr: number[]) => boolean;
/**
 * check if all values of array is zero.
 * @param arr array to evaluate
 * @returns true if all values are zero
 */
export declare const isAllZero: (arr: number[]) => boolean;
/**
 * check if any value of array is one
 * @param arr array to evaluate
 * @returns true if any value is one.
 */
export declare const isAnyOne: (arr: number[]) => boolean;
/**
 * check if any value of array is zero
 * @param arr array to evaluate
 * @returns true if any value is zero.
 */
export declare const isAnyZero: (arr: number[]) => boolean;
/**
 * helper function to get object values inside an array. all objects must have same keys present.
 *
 * ex. [{name: val1},{name: val2}] => fn(arr, "name") => [val1, val2]
 * @param arr array of objects
 * @param objKey key string of object inside source array
 * @returns array
 */
export declare const unwrapArrayOfObjects: (arr: {
    [key: string]: any;
}[], objKey: string) => any[];
//# sourceMappingURL=index.d.ts.map
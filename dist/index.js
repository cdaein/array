"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapArrayOfObjects = exports.isAnyZero = exports.isAnyOne = exports.isAllZero = exports.isAllOne = exports.getNonZeroIndices = exports.fillAndMap = exports.addToArray = void 0;
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
const addToArray = (arr, entry, newArrayLen, mode = "first") => {
    // add
    if (mode === "first")
        arr.unshift(entry); // add new one to beginning
    else if (mode === "last")
        arr.push(entry); // add new one to end
    // remove
    if (arr.length > newArrayLen) {
        if (mode === "first")
            arr.pop(); // remove last (oldest)
        else if (mode === "last")
            arr.shift(); // remove first (oldest)
    }
    return arr;
};
exports.addToArray = addToArray;
/**
 * create a new array with given length and maps values
 * @param n length of generated array
 * @param fn callback function that goes into map(fn)
 * @returns new array with mapped values
 */
const fillAndMap = (n, fn) => {
    if (n > 0) {
        return Array(n).fill(null).map(fn);
    }
    throw new Error("fillAndMap(): n must be greater than zero");
};
exports.fillAndMap = fillAndMap;
/**
 * check for elements with non-zero value and return indices
 * @param arr array to evaluate
 * @returns array of indices with non-zero values
 */
const getNonZeroIndices = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0)
            result.push(i);
    }
    return result;
};
exports.getNonZeroIndices = getNonZeroIndices;
/**
 * check if all values of array is one.
 * @param arr array to evaluate
 * @returns true if all values are one
 */
const isAllOne = (arr) => arr.every((el) => el === 1);
exports.isAllOne = isAllOne;
/**
 * check if all values of array is zero.
 * @param arr array to evaluate
 * @returns true if all values are zero
 */
const isAllZero = (arr) => arr.every((el) => el === 0);
exports.isAllZero = isAllZero;
/**
 * check if any value of array is one
 * @param arr array to evaluate
 * @returns true if any value is one.
 */
const isAnyOne = (arr) => arr.some((el) => el === 1);
exports.isAnyOne = isAnyOne;
/**
 * check if any value of array is zero
 * @param arr array to evaluate
 * @returns true if any value is zero.
 */
const isAnyZero = (arr) => arr.some((el) => el === 0);
exports.isAnyZero = isAnyZero;
/**
 * helper function to get object values inside an array. all objects must have same keys present.
 *
 * ex. [{name: val1},{name: val2}] => fn(arr, "name") => [val1, val2]
 * @param arr array of objects
 * @param objKey key string of object inside source array
 * @returns array
 */
const unwrapArrayOfObjects = (arr, objKey) => {
    return Array(arr.length)
        .fill(null)
        .map((_, i) => {
        if (arr[i][objKey] !== undefined) {
            return arr[i][objKey];
        }
        else {
            throw new Error("unwrapArrayOfObjects(): all objects must have keys present");
        }
    });
};
exports.unwrapArrayOfObjects = unwrapArrayOfObjects;
//# sourceMappingURL=index.js.map
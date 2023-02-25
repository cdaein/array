import { describe, expect, test } from "@jest/globals";
import {
  accumulate,
  addToArray,
  fillAndMap,
  getNonZeroIndices,
  interpolateArray,
  isAllOne,
  isAllZero,
  isAnyOne,
  isAnyZero,
  unwrapArrayOfObjects,
} from "./index";

describe("accumulate()", () => {
  test("adds up values in array", () => {
    expect(accumulate([50, 100, 150])).toEqual([50, 150, 300]);
    expect(accumulate([50, 50, 50])).toEqual([50, 100, 150]);
  });
  test("handles float rounding error", () => {
    expect(accumulate([2.3, 2.4])).toEqual([2.3, 4.7]);
  });
});

describe("addToArray()", () => {
  test("adds new elements of number type to input array in place", () => {
    const arr = [0, 1, 2];
    addToArray(arr, 3, 3, "last");
    expect(arr).toEqual([1, 2, 3]);
    addToArray(arr, 4, 4, "last");
    expect(arr).toEqual([1, 2, 3, 4]);
  });
  test("adds new elements of string type and returns input array", () => {
    const arr = ["one", "two", "three"];
    expect(addToArray(arr, "zero", arr.length)).toEqual(["zero", "one", "two"]);
  });
});

describe("fillAndMap()", () => {
  test("creates a new array and map values", () => {
    expect(fillAndMap(3, (_, i) => i * 2)).toEqual([0, 2, 4]);
    expect(fillAndMap(5, (_, i) => i * 1)).toEqual([0, 1, 2, 3, 4]);
    expect(fillAndMap(3, () => "a")).toEqual(["a", "a", "a"]);
  });
});

describe("getNonZeroIndices()", () => {
  const arr1 = [4, 3, 0, 1];
  const arr2 = [0, 0, 0];
  test("returns all indices with non zero value", () => {
    expect(getNonZeroIndices(arr1)).toEqual([0, 1, 3]);
  });
  test("returns 0-length array with all zero values", () => {
    expect(getNonZeroIndices(arr2)).toEqual([]);
  });
});

describe("interpolateArray()", () => {
  const arr1 = [0, 10, 20, 30];
  const arr2 = [10, 20, 30, 40];

  test("throws error when either arr length is 0", () => {
    expect(() => interpolateArray([], arr2, 0.0)).toThrow(
      "arrays cannot be empty"
    );
    expect(() => interpolateArray(arr1, [], 0.0)).toThrow(
      "arrays cannot be empty"
    );
  });
  test("throws error when arrays don't have same length", () => {
    expect(() => interpolateArray(arr1, arr1.slice(1, 3), 0.0)).toThrow(
      "length must be same"
    );
    expect(() => interpolateArray(arr2.slice(0, 3), arr2, 0.0)).toThrow(
      "length must be same"
    );
  });
  test("returns pathStart at t=0", () => {
    expect(interpolateArray(arr1, arr2, 0.0)).toStrictEqual(arr1);
  });
  test("returns pathTarget at t=1", () => {
    expect(interpolateArray(arr1, arr2, 1.0)).toStrictEqual(arr2);
  });
  test("returns in-between values at any t=0..1", () => {
    expect(interpolateArray(arr1, arr2, 0.5)).toStrictEqual([5, 15, 25, 35]);
  });
});

describe("isAllOne()", () => {
  const arr1 = [1, 0, 1, 0.0];
  const arr2 = [1, 1, 1];
  test("returns correct boolean value", () => {
    expect(isAllOne(arr1)).toEqual(false);
    expect(isAllOne(arr2)).toEqual(true);
  });
});

describe("isAllZero()", () => {
  const arr1 = [0, 0, 0, 0.0];
  const arr2 = [0, 0, 1, 0];
  test("returns correct boolean value", () => {
    expect(isAllZero(arr1)).toEqual(true);
    expect(isAllZero(arr2)).toEqual(false);
  });
});

describe("isAnyOne()", () => {
  const arr1 = [1.0, 0, 0, 0];
  const arr2 = [1.0001, 0, 0, 0];
  test("returns correct boolean value", () => {
    expect(isAnyOne(arr1)).toEqual(true);
    expect(isAnyOne(arr2)).toEqual(false);
  });
});

describe("isAnyZero()", () => {
  const arr1 = [1.0, 0, 0, 0];
  const arr2 = [1.0001, 0.05, 10, -8];
  test("returns correct boolean value", () => {
    expect(isAnyZero(arr1)).toEqual(true);
    expect(isAnyZero(arr2)).toEqual(false);
  });
});

describe("unwrapArrayOfObjects()", () => {
  const arr1 = [{ name: "a" }, { name: "b" }, { name: "c" }];
  // const arr2 = [
  //   { name: "a" },
  //   { name: "b", city: "lima" },
  //   { name: "c", city: "bogota" },
  // ];
  const arr3 = [{ val: 3 }, { val: 2 }];
  test("handles array with single key objects", () => {
    expect(unwrapArrayOfObjects(arr1, "name")).toEqual(["a", "b", "c"]);
    expect(unwrapArrayOfObjects(arr3, "val")).toEqual([3, 2]);
  });
  test("throws error with array of incompatible keys", () => {
    expect(() => unwrapArrayOfObjects(arr1, "city")).toThrow(
      "all objects must have keys present"
    );
    // expect(() => unwrapArrayOfObjects(arr2, "city")).toThrow(
    //   "all objects must have keys present"
    // );
  });
});

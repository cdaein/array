import { roundF, mix } from '@daeinc/math';

// index.ts
var accumulate = (arr, precision = 4) => {
  const result = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    result.push(sum);
  }
  return result.map((val) => roundF(val, precision));
};
var addToArray = (arr, entry, newArrayLen, mode = "first") => {
  if (mode === "first")
    arr.unshift(entry);
  else if (mode === "last")
    arr.push(entry);
  if (arr.length > newArrayLen) {
    if (mode === "first")
      arr.pop();
    else if (mode === "last")
      arr.shift();
  }
  return arr;
};
var fillAndMap = (n, fn) => {
  if (n > 0) {
    return Array(n).fill(null).map(fn);
  }
  throw new Error("fillAndMap(): n must be greater than zero");
};
var getNonZeroIndices = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0)
      result.push(i);
  }
  return result;
};
var interpolateArray = (arrStart, arrTarget, t) => {
  if (arrStart.length === 0 || arrTarget.length === 0)
    throw new Error("interpolateArray(): arrays cannot be empty");
  if (arrStart.length !== arrTarget.length)
    throw new Error("interpolateArray(): length must be same");
  return Array(arrStart.length).fill(0).map((_, i) => {
    return mix(arrStart[i], arrTarget[i], t);
  });
};
var isAllOne = (arr) => arr.every((el) => el === 1);
var isAllZero = (arr) => arr.every((el) => el === 0);
var isAnyOne = (arr) => arr.some((el) => el === 1);
var isAnyZero = (arr) => arr.some((el) => el === 0);
var objectToArray = (obj, keys) => {
  return keys.map((key) => obj[key]);
};
var unwrapArrayOfObjects = (arr, objKey) => {
  return Array(arr.length).fill(null).map((_, i) => {
    if (arr[i][objKey] !== void 0) {
      return arr[i][objKey];
    } else {
      throw new Error(
        "unwrapArrayOfObjects(): all objects must have keys present"
      );
    }
  });
};

export { accumulate, addToArray, fillAndMap, getNonZeroIndices, interpolateArray, isAllOne, isAllZero, isAnyOne, isAnyZero, objectToArray, unwrapArrayOfObjects };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map
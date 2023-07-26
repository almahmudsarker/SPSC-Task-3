function findNumWithTargetSum(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;
  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const output = findNumWithTargetSum(inputArray, targetValue);
console.log(output);

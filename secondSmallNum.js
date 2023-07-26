function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Must contain two elements";
  }
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }
  if (secondSmallest === Infinity) {
    return "Error: All elements are the same";
  }
  return secondSmallest;
}
const inputArray = [5, 2, 9, 1, 5, 6];
const result = findSecondSmallest(inputArray);
console.log(result);
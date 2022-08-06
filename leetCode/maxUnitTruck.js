// 1710. Maximum Units on a Truck
const maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let boxCount = 0;
  let remainingSpace = truckSize;

  for (let i = 0; i < boxTypes.length; i++) {
    let singleBoxType = boxTypes[i];

    if (remainingSpace === 0) return boxCount;

    if (singleBoxType[0] < remainingSpace) {
      boxCount += singleBoxType[0] * singleBoxType[1];
      remainingSpace -= singleBoxType[0];
    } else {
      boxCount += remainingSpace * singleBoxType[1];
      remainingSpace = 0;
    }
  }
  return boxCount;
};

console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10));
// function MostFreeTime(strArr) {
//   var calcT = (num) =>
//     strArr
//       .map((a) => a.split("-")[num])
//       .map(
//         (a) =>
//           Number(a.slice(0, 2) * 60) +
//           Number(a.slice(3, 5)) +
//           (a.slice(5, 7) === "PM" && a.slice(0, 2) !== "12" ? 12 * 60 : 0)
//       )
//       .sort((a, b) => a - b);
//   var start = calcT(0);
//   var end = calcT(1);
//   var diff = [];
//   for (var i = 0; i < start.length; i++) {
//     diff.push(start[i + 1] - end[i] || 0);
//   }
//   diff = diff.sort((a, b) => b - a);
//   var diffMinutes = diff[0] % 60;
//   var diffHours = (diff[0] - diffMinutes) / 60 || 0;
//   diffHours =
//     String(diffHours).length < 2 ? "0" + String(diffHours) : diffHours;
//   diffMinutes =
//     String(diffMinutes).length < 2 ? "0" + String(diffMinutes) : diffMinutes;
//   return diffHours + ":" + diffMinutes;
// }



function timeToMins(t) {
  return ((t[5] === 'P' ? 12 : 0) + t.substring(0, 2) * 1 % 12) * 60 + t.substring(3, 5)*1;
}
function minsToTime(m) {
  var h = Math.floor(m / 60);
  m = m % 60;
  return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
}

function MostFreeTime(strArr) { 
  var apts = [];
  for (var i = 0; i < strArr.length; i += 1) {
    var s = strArr[i].split('-');
    console.log(s)
    apts.push([timeToMins(s[0]), timeToMins(s[1])]);
  }
  console.log(apts)
  apts.sort(function (a, b) {
    return a[0] - b[0];
  });
  var f = 0;
  for (i = 0; i < apts.length - 1; i += 1) {
    f = Math.max(f, apts[i + 1][0] - apts[i][1]);
  }
  return minsToTime(f);
}


const strArr = ["12:15PM-02:00PM","09:00AM-10:00AM","10:30AM-12:00PM"];
const strArr1 = ["12:15PM-02:00PM","09:00AM-12:11PM","02:02PM-04:00PM"]
console.log(MostFreeTime(strArr));
// console.log(MostFreeTime(strArr1));

// 1360. Number of Days Between Two Dates

var daysBetweenDates = function (date1, date2) {
  const data1 = new Date(date1);
  const data2 = new Date(date2);
  const diff = Math.abs(data2.getTime() - data1.getTime());
  const msInDay = 1000 * 3600 * 24;
  return diff / msInDay;
};

console.log(daysBetweenDates("2019/06/28", "2019/06/30"));

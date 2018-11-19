var moment = require('moment');

var now = moment();

var dates = [
  "Sat Dec 02 19:31:20 +0000 2017",
  "Sat Jan 10 17:44:32 +0000 2009"
];

dates.forEach((creation,idx) => {
  var cdate = moment(creation, "ddd MMM DD HH:mm:ss Z YYYY");
  var duration = moment.duration(now.diff(cdate));

  console.log(cdate.format());
  console.log(duration.asHours().toFixed(0) + " hours");
  console.log(duration.asDays().toFixed(0) + " days");
  console.log(duration.asMonths().toFixed(0) + " months");
  console.log(duration.asYears().toFixed(0) + " years");
  console.log();
});

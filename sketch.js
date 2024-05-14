var h2 = document.querySelector(".calender-picture h2");
var h3 = document.querySelector(".calender-picture h3");

var monthArr =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December",
];
var dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

var day31MonthArr=[
    "January",
    "March",
    "May",
    "July",
    "August",
    "October",
    "December",
];
var d = new Date();
var obj= getDate();

function getDate(){
    var month= d.getMonth();
    month=monthArr[month]

    var day= d.getDay();
    day=dayArr[day];

    var date = d.getDate();

    h2.innerHTML =date+", "+day;
    h3.innerHTML = month;

    return{m:month, dy: day, dt: date, yr:d.getFullYear()};

}
function generatecalender(){
    var days;

    if(obj.m ==="February" && obj.yr % 4 ! == 0){
        days = 28;
    } else if (obj.m === "february" && obj.yr % 4 !==0){
        days =29;
    } else if (day31MonthArr.includes(obj.m)){
        days =31;
    } else {
        days =30;
    }


    var LocalDayArr=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",

    ];

    var startOfMonth= moment().clone().startOfMonth("month").format("dddd")

    var dayIndex =localDayArr.indexOf(startOfMonth);
    for(var j=0; j<day)
}
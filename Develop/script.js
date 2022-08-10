function timeUpdate(){
    var todayNow=moment();
    $("#currentDay").text(todayNow.format("dddd, MMMM Do YYYY, h:mm.ss"));

}
// Calls the timeUpdate function for the current day, date , and time to be updated in the header
timeUpdate();


// Saves the information typed in text area to local storage at that specific time
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
})
// tracks the current hour
function timeCounter(){
var timeNow =moment().hour();


// color codes the scheduler depending on time, present, past, or future
$(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    
    if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

    }
})

}
// Get item from local storage if any
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

timeCounter();


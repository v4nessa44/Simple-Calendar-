// const timeBlocksEl = document.querySelector('.time-blocks');
const currentDayEl = document.getElementById('currentDay');
const saveBtns = document.querySelectorAll('.save-btn');

// Display current day at the top of the calendar
const currentDay = moment().format('dddd, MMMM Do YYYY');
currentDayEl.textContent = currentDay;


// Saving task to localStorage on click of the saveButton
$(".saveBtn").on("click",function(){
console.log($(this).siblings("textarea").val())
console.log($(this).parent("div").attr("id"))
localStorage.setItem($(this).parent("div").attr("id"), $(this).siblings("textarea").val())
})


// Grabbing text values form local storage and filling them in appropriate time blocks

var description = document.querySelectorAll(".description")
for (let i = 0; i < description.length; i++) {
  let index = i+9
  description[i].textContent = localStorage.getItem("hour-"+index)
}


// Setting color of the div based on the current time

var timeBlocks = document.querySelectorAll(".time-block")
for (let i = 0; i < timeBlocks.length; i++) {
  if(moment().format('HH') > timeBlocks[i].id.split("-")[1]){
    timeBlocks[i].classList.add("past")
    console.log("past")
  }
  if(moment().format('HH') < timeBlocks[i].id.split("-")[1]){
    timeBlocks[i].classList.add("future")
    console.log("future")
  }
  if(moment().format('HH') === timeBlocks[i].id.split("-")[1]){
    timeBlocks[i].classList.add("present")
    console.log("present")
  }
}

// // Save event to local storage
// function saveEvent(hour, event) {
//   localStorage.setItem(`event-${hour}`, event);
// }

// // Get saved event from local storage
// function getSavedEvent(hour) {
//   return localStorage.getItem(`event-${hour}`) || '';
// }



var hours = [
  '9AM',
  '10AM',
  '11AM',
  '12PM',
  '1PM',
  '2PM',
  '3PM',
  '4PM',
  '5PM',
];

var rootEl = $('#root');
for (var i = 0; i < hours.length; i++) {
  var hoursEl = $('<div>'); 
}

// {
//   rootEl.html `
//   <div id="hour-9" class="row time-block past">
//         <div id="current-time" class="col-2 col-md-1 hour text-center py-3">9AM</div>
//         <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
//         <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//           <i class="fas fa-save" aria-hidden="true"></i>
//         </button>
//       </div>
//   `

  

// var timeBlockEl = $('<div>'); 
var textAreaEl = $('<textarea>');
// var buttonEl = $('<button>');

// timeBlockEl.text(hours);

// timeBlockEl.addClass('border-bottom-right-radius', '15px');
// timeBlockEl.addClass('background-color', '#06aed5')
// timeBlockEl.css('col-2 col-md-1 hour text-center py-3');
// textAreaEl.css("col-8 col-md-10 description border-top: 1px solid white");
// textAreaEl.css('background', 'transparent','padding', '10px');
// buttonEl.addClass("col-2 col-md-1");
// buttonEl.css('border-left', '1px solid black');
// buttonEl.css('padding-top', '80px');
// buttonEl.css('border-top-right-radius', '15px');
// buttonEl.css('border-bottom-right-radius', '15px'); 
// buttonEl.css('background-color', '#06aed5'); 

// rootEl.append(textAreaEl);
// rootEl.append(buttonEl);


  var hoursEl = $('<div>');

  hoursEl.text(hours[i]);
  hoursEl.addClass('my-4');
  hoursEl.css("col-2 col-md-1");
  hoursEl.css('border-left', '1px solid black');
  hoursEl.css('padding-top', '80px');
  hoursEl.css('border-top-right-radius', '15px');
  hoursEl.css('border-bottom-right-radius', '15px'); 
  hoursEl.addClass('button','background-color', '#06aed5');
  hoursEl.css('col-2 col-md-1 hour text-center py-3');
  hoursEl.addClass("textarea","col-8 col-md-10 description border-top: 1px solid white");
  hoursEl.addClass('button','background', 'transparent','padding', '10px'); 
  hoursEl.addClass('border-bottom-right-radius', '15px');
  hoursEl.addClass('background-color', '#06aed5')
  hoursEl.addClass('col-2 col-md-1 hour text-center py-3'); 

  console.log(hoursEl);

  rootEl.append(hoursEl);

  textAreaEl.append(hoursEl);



var currentDate = dayjs();
$('#currentDay').text(currentDate.format('MMM D, YYYY'));
console.log(currentDate);


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

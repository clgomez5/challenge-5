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
    var timeBlockEl = $('<div>');
  
  var timeBlockEl = $('<div>'); 
  var textAreaEl = $('<textarea>');
  var buttonEl = $('<button>');
  
  // timeBlockEl.text(hours);
  
  // timeBlockEl.css('border-bottom-right-radius', '15px');
  // timeBlockEl.css('background-color', '#06aed5');
  // timeBlockEl.css('col-2 col-md-1 hour text-center py-3');
  // textAreaEl.addClass("col-8 col-md-10 description border-top: 1px solid white");
  // textAreaEl.css('background', 'transparent','padding', '10px');
  // buttonEl.addClass("col-2 col-md-1");
  // buttonEl.css('border-left', '1px solid black');
  // buttonEl.css('padding-top', '80px');
  // buttonEl.css('border-top-right-radius', '15px');
  // buttonEl.css('border-bottom-right-radius', '15px'); 
  // buttonEl.css('background-color', '#06aed5'); 
  
  rootEl.append(textAreaEl);
  rootEl.append(buttonEl);
  
//   for (var i = 0; i < hours.length; i++) {
//     var timeBlockEl = $('<div>');
  
    timeBlockEl.text(hours[i]);
    // timeBlockEl.addClass('my-1');
    timeBlockEl.addClass('textarea', 'col-8 col-md-10 description border-top: 1px solid white');
    timeBlockEl.css("col-2 col-md-1");
    // timeBlockEl.css('border-left', '1px solid black');
    // timeBlockEl.css('padding-top', '80px');
    // timeBlockEl.css('border-top-right-radius', '15px');
    // timeBlockEl.css('border-bottom-right-radius', '15px'); 
    timeBlockEl.addClass('button','background-color', '#06aed5');
    timeBlockEl.css('col-2 col-md-1 hour text-center py-3');
    timeBlockEl.css("col-8 col-md-10 description border-top: 1px solid white");
    timeBlockEl.addClass('button','background', 'transparent','padding', '10px');
    textAreaEl.addClass("col-8 col-md-10 description border-top: 1px solid white");
    textAreaEl.css('background', 'transparent','padding', '10px'); 
    buttonEl.addClass("col-2 col-md-1");
  buttonEl.css('border-left', '1px solid black');
  buttonEl.css('padding-top', '80px');
  buttonEl.css('border-top-right-radius', '15px');
  buttonEl.css('border-bottom-right-radius', '15px'); 
  buttonEl.css('background-color', '#06aed5'); 
  
    console.log(timeBlockEl);
  
    rootEl.append(timeBlockEl);
  
  }
  
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
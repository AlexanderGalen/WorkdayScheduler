// first go through and style each time slot depending on if it's in the past present or future
let currentHour = parseInt(moment().format("HH"));
let timeBlocks = $(".time-block");

// loop through our time blocks and compare their data-hour attribute to the current hour, and populate them from localstorage
for (let i = 0; i < timeBlocks.length; i++) {
    const timeBlock = $(timeBlocks[i]);
    const timeBlockHour = timeBlock.attr("data-hour");
    // get the textarea child of this timeblock to apply our style to later
    const timeBlockInput = timeBlock.find(".time-block-input");

    // get saved value from localstorage for this hour and fill the textArea with it
    const savedValue = localStorage.getItem(timeBlockHour)
    timeBlockInput.val(savedValue);
 
    // if it's in the past
    if(timeBlockHour < currentHour) {
        timeBlockInput.addClass("past")
    }
    // if it's the present hour
    else if(timeBlockHour == currentHour) {
        timeBlockInput.addClass("present")
    }
    // if it's in the future
    else if(timeBlockHour > currentHour) {
        timeBlockInput.addClass("future")
    }
}


// add event listener to each save button
let saveButtons = $(".save-btn").click(function() {
    // check which hour was saved via data-hour attr
    const savedHour = $(this).attr("data-hour");
    // get value of the textArea to save it
    const textToSave = $(`#${savedHour}`).val();

    // save text into localstorage under a key for the saved hour
    localStorage.setItem(savedHour, textToSave);

})

// first go through and style each time slot depending on if it's in the past present or future
let currentHour = parseInt(moment().format("HH"));
let timeBlocks = $(".time-block");


// loop through our time blocks and compare their data-hour attribute to the current hour
for (let i = 0; i < timeBlocks.length; i++) {
    const timeBlock = $(timeBlocks[i]);
    const timeBlockHour = timeBlock.attr("data-hour");
    // get the textarea child of this timeblock to apply our style to later
    const timeBlockInput = timeBlock.find(".time-block-input");
 
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
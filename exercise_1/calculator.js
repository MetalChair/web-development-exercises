// When this script loads, query the page for all DOM elements with the class
// "calc-buttton". Save them into a constant variable
const all_buttons = document.querySelectorAll(".calc-button");

// Do the same as above. QuerySelectorAll returns EVERY instance on the page but
// whereas querySelector only returns the first. There's only one display on the
// page though so we don't care to get more information
const display =  document.querySelector(".calc-display")

//Go through all the buttons we've just retrieved and add an event listener
all_buttons.forEach(button => {

    //This tells the browser to listen on "click" events on this object
    //See documentation here: 
    //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    button.addEventListener('click', (event) => {

        //Code here will run every time a button is clicked.
        //Open your console and click buttons, see what information is returned
        //from this event
        console.log(event)

        // We use a trick here and utilize custom tags in the HTML of the page.
        // Look at the calc-buttons in the HTML file. Notice each button has a
        // unique attribute called "data-val". Any attribute on a DOM element
        // starting with "data-" is custom, and can be used to store data.
        // We access it like this:
        //Event.target gets us the DOM element that triggered the event
        // dataset will return a set of all attributes starting with "data-" on
        // the tag
        // val is the name I've given to describe what each button's value is
        console.log(event.target.dataset)
    
    })
})

//Display a value in the input tag.
function displayValue(valueToDisplay) {
    display.value = valueToDisplay;
}

displayValue("8008")
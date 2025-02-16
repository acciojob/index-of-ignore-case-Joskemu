// Get the input field element by its id
const fnameInput = document.getElementById('fname');

// Add an event listener to the input field that triggers when the user leaves the field (onblur event)
fnameInput.addEventListener('blur', function() {
    // Convert the text inside the input to uppercase when the field loses focus
    fnameInput.value = fnameInput.value.toUpperCase();
});

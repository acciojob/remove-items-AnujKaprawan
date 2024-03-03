// Get the button element
var button = document.querySelector('input[type="button"]');

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Get the select element
    var select = document.getElementById('colorSelect');
    
    // Get the selected option
    var selectedOption = select.options[select.selectedIndex];
    
    // Remove the selected option from the list
    select.removeChild(selectedOption);
});

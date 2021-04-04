const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switcc Theme
function switchTheme(event) {
    console.log(event);
    
}

// Event Liastener
toggleSwitch.addEventListener('change', switchTheme);
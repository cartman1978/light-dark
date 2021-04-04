const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switcc Theme
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
}

// Event Liastener
toggleSwitch.addEventListener('change', switchTheme);
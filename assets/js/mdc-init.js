// Immediately invoke this function to set theme before page renders
(function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

// Your existing toggle function
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    document.getElementById("theme-switch").innerText = newTheme === 'dark' ? "light_mode" : "dark_mode";
    localStorage.setItem('theme', newTheme);
}

// Update the theme switch icon when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    document.getElementById("theme-switch").innerText = 
        currentTheme === 'dark' ? "light_mode" : "dark_mode";
});
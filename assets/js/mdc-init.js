function toggleTheme (){
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    document.getElementById("theme-switch").innerText = newTheme === 'dark' ? "light_mode" : "dark_mode";
    localStorage.setItem('theme', newTheme);
}
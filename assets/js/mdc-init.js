document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('theme-switch');

    // Initialize theme
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeSwitch.selected = true;
            themeSwitch.querySelector('[slot="label"]').textContent = 'Light Mode';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            themeSwitch.selected = false;
            themeSwitch.querySelector('[slot="label"]').textContent = 'Dark Mode';
        }
    }

    // Toggle theme - fixed version
    themeSwitch.addEventListener('click', function () {
        // Use setTimeout to ensure we check the value AFTER the click is processed
        setTimeout(() => {
            if (themeSwitch.selected) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeSwitch.querySelector('[slot="label"]').textContent = 'Light Mode';
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeSwitch.querySelector('[slot="label"]').textContent = 'Dark Mode';
            }
        }, 0);
    });

    initTheme();
});
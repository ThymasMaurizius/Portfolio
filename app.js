document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('mode-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }

    toggleButton.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.documentElement.classList.contains('dark-mode')) {
            theme = 'dark';
            toggleButton.textContent = 'Switch to Light Mode';
        } else {
            toggleButton.textContent = 'Switch to Dark Mode';
        }
        localStorage.setItem('theme', theme);
    });
});

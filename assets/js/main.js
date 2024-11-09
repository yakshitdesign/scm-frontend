document.addEventListener('DOMContentLoaded', () => {
    const mainToggleButton = document.getElementById('main-theme-toggle');
    const dropdownToggleButton = document.getElementById('dropdown-theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    const userMenuButton = document.getElementById('user-menu-button');
    const userMenu = document.getElementById('user-menu');
    const sidebarContainer = document.getElementById('sidebar-container');
    const menuModalButton = document.getElementById('menu-modal');
    const menuCloseButton = document.getElementById('menu-close');
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const themeToggle = document.getElementById('themeToggle');
    const themeToggleIcon = document.getElementById('themeToggleIcon');
    const notificationButton = document.getElementById('notificationButton');
    const notificationDropdown = document.getElementById('notificationDropdown');

    // Set initial theme
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
    }

    // Set initial logo visibility based on theme
    updateLogoVisibility(currentTheme);

    // Function to toggle theme
    const toggleTheme = () => {
        const newTheme = document.documentElement.classList.toggle('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        updateLogoVisibility(newTheme);
    };

    // Main theme toggle button
    if (mainToggleButton) {
        mainToggleButton.addEventListener('click', toggleTheme);
    }

    // Dropdown theme toggle button
    if (dropdownToggleButton) {
        dropdownToggleButton.addEventListener('click', toggleTheme);
    }

    // Dropdown toggle
    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener('click', (event) => {
            event.stopPropagation();
            dropdownMenu.classList.toggle('active');
        });

        // Theme toggle within dropdown
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const newTheme = document.documentElement.classList.toggle('dark') ? 'dark' : 'light';
                localStorage.setItem('theme', newTheme);
                themeToggleIcon.classList.toggle('translate-x-4');
                updateLogoVisibility(newTheme);
            });
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove('active');
            }
        });
    }

    if (userMenuButton && userMenu) {
        userMenuButton.addEventListener('click', (event) => {
            event.stopPropagation();
            userMenu.classList.toggle('hidden');
        });

        document.addEventListener('click', (event) => {
            if (!userMenuButton.contains(event.target) && !userMenu.contains(event.target)) {
                userMenu.classList.add('hidden');
            }
        });
    }

    // Toggle sidebar for mobile
    if (menuModalButton) {
        menuModalButton.addEventListener('click', () => {
            console.log('Menu button clicked');
            sidebarContainer.classList.toggle('hidden');
            sidebarContainer.classList.toggle('active');
            console.log('Sidebar hidden state:', sidebarContainer.classList.contains('hidden'));
        });
    } else {
        console.error('Menu modal button not found');
    }

    // Close sidebar when close button is clicked
    if (menuCloseButton) {
        menuCloseButton.addEventListener('click', () => {
            sidebarContainer.classList.add('hidden');
            sidebarContainer.classList.remove('active');
        });
    }

    // Toggle notification dropdown
    if (notificationButton && notificationDropdown) {
        notificationButton.addEventListener('click', (event) => {
            event.stopPropagation();
            notificationDropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (!notificationButton.contains(event.target) && !notificationDropdown.contains(event.target)) {
                notificationDropdown.classList.add('hidden');
            }
        });
    }
});

// Sidebar Toggle Function for Desktop
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
    const currentTheme = localStorage.getItem('theme') || 'light';
    updateLogoVisibility(currentTheme);

    // Update visibility of "Other" text and dot
    const sidebarItems = document.querySelectorAll('#sidebar-item');
    sidebarItems.forEach(item => {
        const otherText = item.querySelector('#main-text');
        const dot = item.querySelector('#dot');

        if (sidebar.classList.contains('collapsed')) {
            otherText.classList.add('hidden');
            dot.classList.remove('hidden');
        } else {
            otherText.classList.remove('hidden');
            dot.classList.add('hidden');
        }
    });
}

// Sidebar Toggle Function for Mobile
function toggleMobileSidebar() {
    const sidebarContainer = document.getElementById('sidebar-container');
    const sidebar = document.getElementById('sidebar');

    // Ensure the sidebar is expanded when opened
    sidebar.classList.remove('collapsed');

    // Toggle visibility and off-canvas styles
    sidebarContainer.classList.toggle('active');
}

// Function to update logo visibility based on theme and sidebar state
function updateLogoVisibility(theme) {
    const sidebar = document.getElementById('sidebar');
    const isCollapsed = sidebar.classList.contains('collapsed');
    const fullLogos = document.querySelectorAll('.logo-full-light, .logo-full-dark');
    const iconLogos = document.querySelectorAll('.logo-icon-light, .logo-icon-dark');

    fullLogos.forEach(logo => {
        logo.classList.toggle('hidden', isCollapsed || (theme === 'dark' ? !logo.classList.contains('logo-full-dark') : !logo.classList.contains('logo-full-light')));
    });

    iconLogos.forEach(logo => {
        logo.classList.toggle('hidden', !isCollapsed || (theme === 'dark' ? !logo.classList.contains('logo-icon-dark') : !logo.classList.contains('logo-icon-light')));
    });
}

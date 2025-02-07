// Toggle Navigation Menu
document.getElementById("nav-toggle").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("show");
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for fixed navbar if needed
                behavior: 'smooth'
            });
        }

        // Close Menu After Clicking a Link (for mobile usability)
        document.getElementById("nav-menu").classList.remove("show");
    });
});


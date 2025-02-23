// Language Toggle (FR/EN)
document.querySelector(".lang-switch a").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Language switching functionality can be implemented here.");
});
document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation links in header and footer
    const navLinks = document.querySelectorAll("nav ul li a");

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Get target section ID from the href attribute (remove "#")
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll smoothly to the target section
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for header height
                    behavior: "smooth"
                });
            }
        });
    });
});

// Script untuk interaksi sederhana pada CV Website

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling saat klik pada navbar
    const navLinks = document.querySelectorAll(".nav-link");
    
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Mengatur offset jika navbar fixed
                    behavior: "smooth"
                });
            }
        });
    });

    // Efek sederhana saat hover pada kartu portofolio
    const portfolioCards = document.querySelectorAll(".card");

    portfolioCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.classList.add("shadow-lg");
            card.style.transition = "all 0.3s ease-in-out";
        });

        card.addEventListener("mouseout", () => {
            card.classList.remove("shadow-lg");
        });
    });
});
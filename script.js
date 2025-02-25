document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const contactButton = document.getElementById("contact-button");
    const contactInfo = document.getElementById("contact-info");
    const linkedinButton = document.getElementById("linkedin-button");
    const linkedinInfo = document.getElementById("linkedin-info");
    
    sections.forEach(section => {
        section.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });

    contactButton.addEventListener("click", function() {
        contactInfo.classList.toggle("visible");
    });

    linkedinButton.addEventListener("click", function() {
        linkedinInfo.classList.toggle("visible");
    });
});

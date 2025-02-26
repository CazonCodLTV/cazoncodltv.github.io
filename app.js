document.addEventListener("DOMContentLoaded", () => {
    // Cursor Effect
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    const cursorTrail = document.createElement("div");
    cursorTrail.classList.add("cursor-trail");
    document.body.appendChild(cursorTrail);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        cursorTrail.style.left = `${e.clientX}px`;
        cursorTrail.style.top = `${e.clientY}px`;
    });

    document.addEventListener("mousedown", () => {
        cursor.style.transform = "scale(0.8)";
        cursorTrail.style.transform = "scale(1.2)";
    });

    document.addEventListener("mouseup", () => {
        cursor.style.transform = "scale(1)";
        cursorTrail.style.transform = "scale(1)";
    });

    // Mobile Navbar Toggle
    const toggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        toggle.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const helpBox = document.querySelector(".help-box");
    const closeBtn = document.querySelector(".help-close");

    closeBtn.addEventListener("click", () => {
        helpBox.classList.add("hidden");
    });

    // Restart shake animation every 5 seconds
    setInterval(() => {
        if (!helpBox.classList.contains("hidden")) {
            helpBox.style.animation = "none"; // Reset animation
            void helpBox.offsetWidth; // Trigger reflow
            helpBox.style.animation = "shake 0.5s ease-in-out"; // Apply shake again
        }
    }, 5000);
});
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("saladPopup");
    const closePopup = document.getElementById("closePopup");

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});

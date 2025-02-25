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

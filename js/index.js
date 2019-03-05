// signup modal click button
document.querySelectorAll(".content-pick .btn").forEach(function(b) {
    b.addEventListener('click', (e) => document.getElementById("modal").classList.toggle("hide"));
});

// signup modal close on x and background
document.getElementById("modal-close")
    .addEventListener('click', (e) => {
        document.getElementById("modal").classList.toggle("hide");
        e.stopPropagation();
    });

document.getElementById("modal")
    .addEventListener('click', (e) => {
        const modal = document.getElementById("modal");
        if (e.target == modal) {
            modal.classList.toggle("hide");
        }});

// semitransparent nav bar when not at top scroll
window.addEventListener('scroll', (e) => {
    const nav = document.querySelector(".main-navigation");
    if (window.scrollY === 0) {
        nav.style.background = "white";
    } else {
        nav.style.background = "rgba(255, 255, 255, 0.8)";
    }
});

// image hover greensock zoom/wiggle
// j for down
window.addEventListener('keydown', (e) => {
    if (e.keyCode === 74 ) { // j
        window.scrollBy({top: 100, behavior: 'smooth'});
    } else if (e.keyCode === 75) {// k
        window.scrollBy({top: -100, behavior: 'smooth'});
    }
});
// k for up
// mouseover logo animation?

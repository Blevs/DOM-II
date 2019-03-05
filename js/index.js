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
// image hover greensock zoom/wiggle
// j for down
// k for up
// mouseover logo animation?

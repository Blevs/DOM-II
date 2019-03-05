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
document.querySelectorAll(".container img").forEach(function(img) {
    img.addEventListener('mouseover', (e) => {
        const tl = new TimelineLite;
        tl.to(e.target, 1, {
            scaleX: 1.1,
            scaleY: 1.1,
            ease: Back.easeOut
        });
        tl.to(e.target, 1, {
            scaleX: 1.0,
            scaleY: 1.0,
            ease: Back.easeOut.config(1.5)
        });
    });});

// j for down
window.addEventListener('keydown', (e) => {
    if (e.keyCode === 74 ) { // j
        window.scrollBy({top: 100, behavior: 'smooth'});
    } else if (e.keyCode === 75) {// k
        window.scrollBy({top: -100, behavior: 'smooth'});
    }
});

// prevent nav link refreshing
document.querySelectorAll(".main-navigation a").forEach(function(a) {
    a.addEventListener('click', (e) => e.preventDefault());
});

// load delay modal
window.addEventListener('load', (e) => {
    window.setTimeout(() => document.getElementById("modal").classList.toggle("hide") , 3000);
});

// Copy alert
window.addEventListener('copy', (e) => {
    alert("Credit us for that content or I will call the FBI.");
});

// Right clicking deletes elements
window.addEventListener('contextmenu', (e) => {
    e.target.style.display = "none";
});

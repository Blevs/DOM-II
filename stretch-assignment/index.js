function moveHoriz(elem, distance) {
    elem.style["margin-left"] = `${(parseInt(elem.style["margin-left"]) || 0) + distance}px`;
}

document.querySelectorAll(".blocks .block").forEach((block) => {
    const parent = block.parentNode;
    let blockInterval;
    // block.addEventListener('click', (e) => {
    //     parent.removeChild(block);
    //     parent.insertBefore(block, parent.firstChild);
    // });
    block.addEventListener('mousedown', (e) => {
        console.log("mousedown");
        clearInterval(blockInterval);
        blockInterval = setInterval(() => {
            if (parseInt(block.style["margin-left"]) >= window.innerWidth - block.offsetWidth - 20) {
                clearInterval(blockInterval);
                block.style["margin-left"] = `${window.innerWidth - block.offsetWidth - 20}px`;
            } else {
                moveHoriz(block, 1);
            }
        });
    });
    block.addEventListener('mouseleave', (e) => {
        console.log("mouseleave");
        clearInterval(blockInterval);
        blockInterval = setInterval(() => {
            if (parseInt(block.style["margin-left"]) <= 10) {
                clearInterval(blockInterval);
                block.style["margin-left"] = "10px";
            } else {
                moveHoriz(block, -1);
            }
        });
    });
});

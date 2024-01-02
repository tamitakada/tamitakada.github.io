// Scrolling content
const content = document.getElementById("content");
const contentBlockAnchors = document.getElementsByClassName("content-block");
const contentBlocks = document.getElementsByClassName("content-block-content");

// Scroll vars
let lastLoadedBlock = -1;
let activeMenuBlock = 0;

let prevScroll = 0;
let goingDown = true;

// SCROLL FUNCTIONS ===============================================================================

function onScroll() {
    goingDown = prevScroll < content.scrollTop; // Scrolling up/down
    prevScroll = content.scrollTop;

    if (lastLoadedBlock < contentBlocks.length - 1) { // Load newly scrolled block IFF not loaded
        const halfwayPoint = content.scrollTop + document.documentElement.clientHeight / 2;
        if (halfwayPoint >= contentBlocks[lastLoadedBlock + 1].offsetTop) {
            showBlock(lastLoadedBlock + 1);
        }
    }

    // Change menu color based on current scroll position & menu offset
    // const menuBottomPoint = menu.offsetTop + menu.offsetHeight / 2;
    // const localOffset = content.scrollTop - contentBlocks[activeMenuBlock].offsetTop;
    // if (goingDown && activeMenuBlock < contentBlocks.length - 1 
    //     && contentBlocks[activeMenuBlock + 1].offsetHeight - localOffset <= menuBottomPoint) {
    //     menu.style.color = menuColors[activeMenuBlock + 1];
    //     menuLine.style.backgroundColor = menuColors[activeMenuBlock + 1];
    //     activeMenuBlock++;
    // }
    // else if (!goingDown && activeMenuBlock > 0
    //         && content.scrollTop + menuBottomPoint <= contentBlocks[activeMenuBlock].offsetTop) {
    //     menu.style.color = menuColors[activeMenuBlock - 1];
    //     menuLine.style.backgroundColor = menuColors[activeMenuBlock - 1];
    //     activeMenuBlock--;
    // }
}

function showBlock(index) { // Animate in content block at index
    if (index >= 0 && index < contentBlocks.length && index > lastLoadedBlock) {
        const block = contentBlocks[index];
        block.style.opacity = "100%";
        block.style.transform = "none";
        lastLoadedBlock = index;
    }
}

function scrollToBlock(index) { // Scroll down to content block at index
    const topLeftY = contentBlockAnchors[index].offsetTop;
    content.scroll({
        top: topLeftY,
        left: 0,
        behavior: "smooth",
    });
}

// ON LOAD =======================================================================================

const navItems = document.getElementsByClassName("nav-item");
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", () => scrollToBlock(i));
}

showBlock(0);
content.addEventListener("scroll", onScroll);
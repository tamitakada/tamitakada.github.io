let slideIndex = 0;

let firstSlide = document.getElementById("slide-0");
let secondSlide = document.getElementById("slide-1");
let thirdSlide = document.getElementById("slide-2");

let allShields = document.getElementsByClassName("shield");
let allCircles = document.getElementsByClassName("circle");

function moveSlides() {
    console.log(allShields);
    if (slideIndex == 0) {
        firstSlide.classList.add("starting-slide-0");
        firstSlide.classList.remove("starting-slide-1");
        firstSlide.classList.remove("slide-1");
        firstSlide.offsetWidth;
        firstSlide.classList.add("slide-0");
        
        secondSlide.classList.remove("starting-slide-1");
        secondSlide.classList.add("starting-slide-1");
        secondSlide.classList.remove("starting-slide-2");
        secondSlide.classList.remove("slide-2");
        secondSlide.offsetWidth;
        secondSlide.classList.add("slide-1");
        
        thirdSlide.classList.remove("starting-slide-2");
        thirdSlide.classList.add("starting-slide-2");
        thirdSlide.classList.remove("starting-slide-0");
        thirdSlide.classList.remove("slide-0");
        thirdSlide.offsetWidth;
        thirdSlide.classList.add("slide-2");
        
        for (let i = 0; i < 3; i++) {
            if (i == 1) {
                allShields[i].style.display = "none";
                allCircles[i].classList.add("circle-active");
            } else {
                allShields[i].style.display = "block";
                allCircles[i].classList.remove("circle-active");
            }
        }
        
        slideIndex += 1;
    } else if (slideIndex == 1) {
        firstSlide.classList.add("starting-slide-2");
        firstSlide.classList.remove("starting-slide-0");
        firstSlide.classList.remove("slide-0");
        firstSlide.offsetWidth;
        firstSlide.classList.add("slide-2");
        
        secondSlide.classList.add("starting-slide-0");
        secondSlide.classList.remove("starting-slide-1");
        secondSlide.classList.remove("slide-1");
        secondSlide.offsetWidth;
        secondSlide.classList.add("slide-0");
        
        thirdSlide.classList.add("starting-slide-1");
        thirdSlide.classList.remove("starting-slide-2");
        thirdSlide.classList.remove("slide-2");
        thirdSlide.offsetWidth;
        thirdSlide.classList.add("slide-1");
        
        for (let i = 0; i < 3; i++) {
            if (i == 2) {
                allShields[i].style.display = "none";
                allCircles[i].classList.add("circle-active");
            } else {
                allShields[i].style.display = "block";
                allCircles[i].classList.remove("circle-active");
            }
        }
        
        slideIndex += 1;
    } else {
        firstSlide.classList.add("starting-slide-1");
        firstSlide.classList.remove("starting-slide-2");
        firstSlide.classList.remove("slide-2");
        firstSlide.offsetWidth;
        firstSlide.classList.add("slide-1");
        
        secondSlide.classList.add("starting-slide-2");
        secondSlide.classList.remove("starting-slide-0");
        secondSlide.classList.remove("slide-0");
        secondSlide.offsetWidth;
        secondSlide.classList.add("slide-2");
        
        thirdSlide.classList.add("starting-slide-0");
        thirdSlide.classList.remove("starting-slide-1");
        thirdSlide.classList.remove("slide-1");
        thirdSlide.offsetWidth;
        thirdSlide.classList.add("slide-0");
        
        for (let i = 0; i < 3; i++) {
            if (i == 0) {
                allShields[i].style.display = "none";
                allCircles[i].classList.add("circle-active");
            } else {
                allShields[i].style.display = "block";
                allCircles[i].classList.remove("circle-active");
            }
        }
        
        slideIndex = 0;
    }
}

function moveToFirst() {
    if (slideIndex > 0) {
        moveSlides();
        for (let i = 0; i < (slideIndex - 1); i++) {
            setTimeout(moveSlides, 500);
        }
    }
}

function moveToSecond() {
    if (slideIndex != 1) {
        if (slideIndex === 0) { moveSlides(); }
        else {
            moveSlides();
            setTimeout(moveSlides, 500);
        }
    }
}

function moveToThird() {
    if (slideIndex != 2) {
        if (slideIndex === 1) { moveSlides(); }
        else {
            moveSlides();
            setTimeout(moveSlides, 500);
        }
    }
}

function addEventListeners() {
    allCircles[0].addEventListener("click", moveToFirst);
    allCircles[1].addEventListener("click", moveToSecond);
    allCircles[2].addEventListener("click", moveToThird);
}

addEventListeners();

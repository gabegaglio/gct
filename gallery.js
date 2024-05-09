let scrollContainer = document.querySelector('.gallery');
let back = document.getElementById("back");
let next = document.getElementById("next");

document.addEventListener('DOMContentLoaded', function() {
    // Select the first element with the class 'gallery'
    var galleryElement = document.querySelector('.gallery');

    if (galleryElement) {
        var rect = galleryElement.getBoundingClientRect();
        
        var width = rect.width;
    } 
});

function updateWidth() {
    width = scrollContainer.offsetWidth;
}

updateWidth();
window.addEventListener('resize', updateWidth);

// Setup scroll event for the scrollContainer
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
});

// Setup next button click event
next.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += width;  // Uses the dynamically updated width
});

// Setup back button click event
back.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= width;  // Uses the dynamically updated width
});
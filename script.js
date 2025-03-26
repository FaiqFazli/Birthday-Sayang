// Select all the card items
var items = document.querySelectorAll(".card");

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Callback function to trigger when the scroll or page load happens
function callbackFunc() {
    // Loop through all the cards
    items.forEach(function(item) {
        if (isElementInViewport(item)) {
            // If the card is in the viewport and not yet visible, make it visible
            if (!item.classList.contains("in-view")) {
                item.classList.add("in-view");
            }
        } else if (item.classList.contains("in-view")) {
            // If the card is no longer in the viewport, remove the "in-view" class
            item.classList.remove("in-view");
        }
    });
}

// Debounce function to limit how often the callback runs during scrolling
function debounce(func, wait) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}

// Trigger the function when the page loads and when scrolling
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", debounce(callbackFunc, 200)); // Debounced scroll event

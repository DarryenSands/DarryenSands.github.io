function filterTags() {
    let input = document.getElementById("tagSearch").value.toLowerCase();
    let items = document.querySelectorAll(".dropdown-item");
    let posts = document.querySelectorAll(".post-item");
    
    // Filter the tags in the dropdown
    items.forEach(item => {
        let tag = item.getAttribute("data-tag").toLowerCase();
        if (tag.includes(input)) {
            item.style.display = "block";  // Show matching tags
        } else {
            item.style.display = "none";  // Hide non-matching tags
        }
    });

    // Filter the posts based on the search input
    if (input === "") {
        // If search input is empty, show all posts
        posts.forEach(post => {
            post.style.display = "block";
        });
    } else {
        // Otherwise, show only the posts with tags that match the search input
        posts.forEach(post => {
            let tags = post.getAttribute("data-tags").split(",");
            let showPost = tags.some(tag => tag.toLowerCase().includes(input));
            post.style.display = showPost ? "block" : "none";
        });
    }
}


// Function to filter posts based on the selected tag
function filterPostsByTag(tag, element) {
    let posts = document.querySelectorAll(".post-item");

    // Highlight the clicked tag
    let tags = document.querySelectorAll(".dropdown-item a");
    tags.forEach(tagItem => tagItem.classList.remove("active"));
    element.classList.add("active");

    // Filter posts based on the selected tag
    posts.forEach(post => {
        let postTags = post.getAttribute("data-tags").split(",");
        if (postTags.includes(tag)) {
            post.style.display = "block";  // Show matching posts
        } else {
            post.style.display = "none";   // Hide non-matching posts
        }
    });

    // Set a flag to indicate that a tag was clicked
    document.body.setAttribute("data-filter-active", "true");
}

// Function to reset post visibility when clicking outside the dropdown
document.addEventListener("click", function (event) {
    let dropdown = document.getElementById("dropdown");

    // Check if the click is outside the dropdown
    if (!dropdown.contains(event.target)) {
        let posts = document.querySelectorAll(".post-item");

        // Show all posts again
        posts.forEach(post => {
            post.style.display = "block";
        });

        // Remove active tag highlighting
        let tags = document.querySelectorAll(".dropdown-item a");
        tags.forEach(tagItem => tagItem.classList.remove("active"));

        // Remove filter-active flag
        document.body.removeAttribute("data-filter-active");
    }
});


function clearFilter() {
    let posts = document.querySelectorAll(".post-item");
    let selectedTagContainer = document.getElementById("selected-tag");
    let clearButton = document.getElementById("clear-filter");
    let tags = document.querySelectorAll(".dropdown-item a");

    // Show all posts
    posts.forEach(post => post.style.display = "block");

    // Clear selection and hide clear button
    selectedTagContainer.textContent = "";
    clearButton.style.display = "none";

    // Remove highlight
    tags.forEach(tag => tag.classList.remove("active"));
}

function showDropdown() {
    let dropdown = document.getElementById("dropdown");
    dropdown.style.display = "block"; // Show dropdown when search bar is focused
}

function hideDropdown(event) {
    let dropdown = document.getElementById("dropdown");
    let searchInput = document.getElementById("tagSearch");
    
    // Hide dropdown only if the click is outside the dropdown or search bar
    if (!dropdown.contains(event.relatedTarget) && event.relatedTarget !== searchInput) {
        dropdown.style.display = "none";
    }
}

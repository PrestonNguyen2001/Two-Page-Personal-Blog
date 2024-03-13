document.addEventListener("DOMContentLoaded", function() {
    function getBlogPostsFromLocalStorage() {
        return JSON.parse(localStorage.getItem("posts")) || [];
    }

    function displayBlogPosts() {
        const blogList = document.getElementById("blog-list");
        blogList.innerHTML = ""; // Clear previous posts

        const blogPosts = getBlogPostsFromLocalStorage();
        blogPosts.forEach((post, index) => {
            const postContainer = document.createElement("div");
            postContainer.classList.add("blog-entry");

            const title = document.createElement("h3");
            title.textContent = "Title: " + post.title;

            const content = document.createElement("p");
            content.textContent = "Content: " + post.content;

            const author = document.createElement("p");
            author.textContent = "Author: " + post.username;

            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = `
            <button class="icon-btn large" aria-label="Delete note" data-tooltip="Delete Entry" data-delete-btn>
                <span class="material-symbols-rounded" aria-hidden="true">delete</span>
                <div class="state-layer"></div>
            </button> 
          `;
            deleteButton.classList.add("delete-button");
            deleteButton.addEventListener("click", function(event) {
                event.stopPropagation(); // Prevent propagation
                openDeleteModal(post.title, index);
            });

            postContainer.appendChild(title);
            postContainer.appendChild(content);
            postContainer.appendChild(author);
            postContainer.appendChild(deleteButton);

            // Attach event listener to the post container to open the edit modal
            postContainer.addEventListener("click", function() {
                openEditModal(post, index);
            });

            blogList.appendChild(postContainer);
        });
    }
    
    function openDeleteModal(title, index) {
        const modal = document.getElementById("delete-modal");
        const modalTitle = modal.querySelector(".modal-title");
        modalTitle.innerHTML = `Are you sure you want to delete <strong>"${title}"</strong>?`;

        modal.style.display = "block";

        const cancelButton = modal.querySelector("[data-action-btn='false']");
        const deleteButton = modal.querySelector("[data-action-btn='true']");

        cancelButton.onclick = function() {
            modal.style.display = "none";
        };

        deleteButton.onclick = function() {
            removeBlogPost(index);
            modal.style.display = "none";
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }

    function openEditModal(post, index) {
        const modal = document.getElementById("edit-modal");
        const titleInput = modal.querySelector("#edit-title");
        const contentInput = modal.querySelector("#edit-content");
        const saveButton = modal.querySelector("#save-blog");
        const $closeBtn = modal.querySelector('[data-close-btn]');
        $closeBtn.addEventListener('click', close);

        titleInput.value = post.title;
        contentInput.value = post.content;

        modal.style.display = "block";

        saveButton.onclick = function() {
            saveEditedBlog(index, titleInput.value, contentInput.value);
            modal.style.display = "none";
        };

        modal.querySelector("[data-close-btn]").onclick = function() {
            modal.style.display = "none";
        };
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }

    function removeBlogPost(index) {
        const blogPosts = getBlogPostsFromLocalStorage();
        blogPosts.splice(index, 1);
        localStorage.setItem("posts", JSON.stringify(blogPosts));
        displayBlogPosts();
    }

    function saveEditedBlog(index, title, content) {
        const blogPosts = getBlogPostsFromLocalStorage();
        blogPosts[index].title = title;
        blogPosts[index].content = content;
        localStorage.setItem("posts", JSON.stringify(blogPosts));
        displayBlogPosts();
    }

    displayBlogPosts();
});

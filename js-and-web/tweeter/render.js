export const Renderer = function () {
    const _generateCommentsHTML = function (comments) {
        let commentsHTML = '';

        for (let comment of comments) {
            commentsHTML += `
            <div class="comment" data-id="${comment.id}">
                <span>${comment.text}</span>
                <span class="delete-comment" data-id="${comment.id}">X</span>
            </div>
        `;
        }

        return commentsHTML;
    }

    const renderPosts = function (posts) {
        $("#posts").empty();

        for (let post of posts) {
            const commentsContent = _generateCommentsHTML(post.comments);
            const postHTML = `
            <div class="post" data-id="${post.id}">
                <div class="post-text">${post.text}</div>
                
                <div class="comments">
                    ${commentsContent}
                </div>
                
                <input type="text" placeholder="Got something to say?" class="comment-input">
                <button class="comment-button">Comment</button>
                <div class="delete" data-id="${post.id}">Delete Post</div>
            </div>
        `;
            $("#posts").append(postHTML);
        }
    }

    return { renderPosts };
}




// const tweeter = Tweeter();
// tweeter.addPost("New post from terminal!");
// // tweeter.addPost("This is my own post!");
// // tweeter.removePost("p1");
// // tweeter.addComment("p3", "Damn straight it is!");
// // tweeter.addComment("p2", "Second the best!");
// // tweeter.removeComment("p2", "c6");

// const allPosts = tweeter.getPosts();
// renderPosts(allPosts);


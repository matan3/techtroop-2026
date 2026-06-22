import { Tweeter } from './model.js';
import { Renderer } from './render.js';

const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

$("#twit").on("click", function () {
    const inputValue = $("#input").val();
    tweeter.addPost(inputValue);
    $("#input").val("");
    renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".delete", function () {
    const postId = $(this).data("id");
    tweeter.removePost(postId);
    renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".comment-button", function () {
    const postElement = $(this).closest(".post");
    const postId = postElement.data("id");
    const commentText = postElement.find(".comment-input").val();

    tweeter.addComment(postId, commentText);
    postElement.find(".comment-input").val("");
    renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".delete-comment", function () {
    const commentId = $(this).data("id");
    const postId = $(this).closest(".post").data("id");
    tweeter.removeComment(postId, commentId);
    renderer.renderPosts(tweeter.getPosts());
});
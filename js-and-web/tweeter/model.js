export const Tweeter = function () {

       let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't worry second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];
    let _postIdCounter = 2;
    let _commentIdCounter = 6;

    const getPosts = function () {
        return _posts;
    };

    const addPost = function (text) {
        _postIdCounter++;
        const newId = "p" + _postIdCounter;
        const post = {
            id: newId,
            text: text,
            comments: []
        };
        _posts.push(post);
    };

    const removePost = function (postID) {
        _posts = _posts.filter(post => post.id !== postID);
    };

    const addComment = function (postID, text) {
        const post = _posts.find(p => p.id === postID);
        if (post) {
            _commentIdCounter++;
            const newId = "c" + _commentIdCounter;
            const comment = {
                id: newId,
                text: text
            };
            post.comments.push(comment);
        }
    };

    const removeComment = function (postID, commentID) {
        const post = _posts.find(p => p.id === postID);
        if (post) {
            post.comments = post.comments.filter(comment => comment.id !== commentID);
        }
    };

    return { getPosts, addPost, removePost, addComment, removeComment };
};


// const tweeter = Tweeter();

// tweeter.addPost("This is my own post!");
// tweeter.removePost("p1");
// tweeter.addComment("p3", "Damn straight it is!");
// tweeter.addComment("p2", "Second the best!");
// tweeter.removeComment("p2", "c6");
// console.log(JSON.stringify(tweeter.getPosts(), null, 2));

const posts = [
    {
        name: "Alex",
        text: "Happy Birthday!"
    },
    {
        name: "Jordan",
        text: "Wishing you the best!"
    },
    {
        name: "Taylor",
        text: "Cheers to another great year!"
    }
];

const render = () => {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';

    for (let post in posts) {
        let newPostElement = document.createElement('div');
        newPostElement.setAttribute("class", "post")
        newPostElement.innerText = posts[post].name + ": " + posts[post].text;
        newPostElement.addEventListener('click', () => {
            posts.splice(post, 1);
            render();
        });
        postsContainer.appendChild(newPostElement);
    }
}

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
    const name = document.getElementById('name');
    const birthday = document.getElementById('birthday');

    posts.push({ "name": name.value, "text": birthday.value });
    name.value = '';
    birthday.value = '';
    render();
});

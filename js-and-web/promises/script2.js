addEventListener("DOMContentLoaded", () => {
    randomJoke();

    function randomJoke() {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.querySelector("#setup").textContent = data.setup;
                document.querySelector("#punchline").textContent = data.punchline;

            })
    }

    setTimeout(() => {
            for (let item of items) {
                if (!inventory[item] || inventory[item].stock <= 0) {
                    reject(new Error(`this item: ${item} out of stock`));
                }
            }
            resolve(items);
        }, 500);

    document
        .querySelector("#btnRandomJoke")
        .addEventListener("click", randomJoke);
});
// Exercise 1
const fetch = function (isbn) {
    const apiKey = "secret";

    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${apiKey}`,
        success: function (data) {
            console.log(data)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}


// Exercise 2
const fetch2 = function (queryType, queryValue) {
    const apiKey = "secret";
    let queryString = '';

    if (queryType === "isbn") {
        queryString = `isbn:${queryValue}`;
    } else if (queryType === "title") {
        queryString = `intitle:${queryValue}`;
    } else {
        queryString = queryValue;
    }

    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryString}&key=${apiKey}`,
        success: function (data) {
            console.log(data)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

// Exercise 3
const fetch3 = function (queryType, queryValue) {
    const apiKey = "secret";
    let queryString = '';

    if (queryType === "isbn") {
        queryString = `isbn:${queryValue}`;
    } else if (queryType === "title") {
        queryString = `intitle:${queryValue}`;
    } else {
        queryString = queryValue;
    }

    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryString}&key=${apiKey}`,
        success: function (data) {
            data.items.forEach(item => {
                const info = item.volumeInfo;
                const title = info.title;
                const author = info.authors[0];
                const isbn = info.industryIdentifiers[0].identifier;
                console.log(`Title: ${title} | Author: ${author} | ISBN: ${isbn}`);
            });
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}


// Exercise 4
const fetchCatGif = function () {
    const apiKey = "secret";
    const searchTerm = "cats";

    $.ajax({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=1`,
        success: function (response) {
            if (response.data && response.data.length > 0) {
                const firstGif = response.data[0];
                const embedUrl = firstGif.embed_url;
                const iframeTag = `
                        <iframe
                            src="${embedUrl}"
                            width="480"
                            height="480"
                            frameBorder="0"
                            class="giphy-embed"
                            allowFullScreen>
                        </iframe>`;
                $("#gifContainer").html(iframeTag);
            } else {
                $("#gifContainer").text("Not found");
            }
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}
fetchCatGif();


// Exercise 5
const fetchAnyGif = function (searchTerm) {
    const apiKey = "secret";

    $.ajax({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=1`,
        success: function (response) {
            if (response.data && response.data.length > 0) {
                const firstGif = response.data[0];
                const embedUrl = firstGif.embed_url;
                const iframeTag = `
                        <iframe
                            src="${embedUrl}"
                            width="480"
                            height="480"
                            frameBorder="0"
                            class="giphy-embed"
                            allowFullScreen>
                        </iframe>`;
                $("#gifContainer").html(iframeTag);
            } else {
                $("#gifContainer").text("Not found");
            }
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

$("#searchBtn").on("click", function () {
    const userSearch = $("#searchInput").val();
    fetchAnyGif(userSearch);
});

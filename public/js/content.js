function getData() {
    const id = getQueryString();

    fetch("http://localhost:3000/list/" + id, {
        method:"get",
    }).then(function(result) {
        return result.json();
    }).then(function(data) {
        renderData(data);
    }).catch(function (error) {
        console.log(error);
    });
}

function getQueryString() {
    const qs = window.location.search;
    const qs2 = new URLSearchParams(qs);

    return qs2.get("id");
}

function renderData(memo) {
    const title = document.querySelector(".title");
    const description = document.querySelector(".description");
    const createdAt = document.querySelector(".createdAt > span");
    const content = document.querySelector(".content");

    const now = new Date(memo.createdAt);
    title.textContent = memo.title;
    description.textContent = memo.description;
    createdAt.textContent = now.toLocaleDateString();
    content.textContent = memo.content;
}

getData();
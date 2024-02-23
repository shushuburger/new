function getData() {
    const saveData = JSON.parse(localStorage.getItem("memo"));
    const id = getQueryString();

    let data;
    for(let i = 0; i<saveData.length; i++) {
        if(saveData[i].id === Number(id)) {
            data = saveData[i];
        }
    }

    renderData(data);
    console.log(data);
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

    title.textContent = memo.title;
    description.textContent = memo.description;
    createdAt.textContent = memo.createdAt;
    content.textContent = memo.content;
}

getData();
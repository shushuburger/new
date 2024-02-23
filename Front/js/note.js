const createButton = document.querySelector(".create-btn");
const modifyButton = document.querySelector(".modify-btn");

createButton.addEventListener("click", function (event) {
    const title = document.querySelector(".title");
    const description = document.querySelector(".description");
    const content = document.querySelector(".content");

    console.log(title.value, description.value, content.value);

    const now = new Date();

    const saveValue = {
        title: title.value,
        description: description.value,
        content: content.value,
        createdAt: now.toLocaleDateString(),
    };

    const saveData = localStorage.getItem("memo");
    console.log(saveData);

    if(saveData === null) {
        const array = [];
        array.push(saveValue);
        saveValue.id = 1;
        localStorage.setItem("memo", JSON.stringify(array));
    }
    else {
        const transform = JSON.parse(saveData);
        saveValue.id = transform.length + 1;
        transform.push(saveValue);
        localStorage.setItem("memo", JSON.stringify(transform));
    }
});

function renderPage() {
    const qs = getQueryString();

    if(qs.mode === "create") {
        createButton.style.display = "block";
        modifyButton.style.display = "none";
    } else if(qs.mode === "modify") {
        createButton.style.display = "none";
        modifyButton.style.display = "block";
    }
}

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

    return {id :qs2.get("id"), mode: qs2.get("mode")};
}

renderPage();
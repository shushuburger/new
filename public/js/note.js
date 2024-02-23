const createButton = document.querySelector(".create-btn");
const modifyButton = document.querySelector(".modify-btn");

modifyButton.addEventListener("click", function(event) {
    const data = getData();
    const ele = getElement();

    const title = ele.title.value;
    const description = ele.description.value;
    const content = ele.content.value;

    const saveData = JSON.parse(localStorage.getItem("memo"));

    for(let i = 0; i<saveData.length; i++){
        if(saveData[i].id === Number(data.id)){
            saveData[i].title = title;
            saveData[i].description = description;
            saveData[i].content = content;
        }
    }

    localStorage.setItem("memo", JSON.stringify(saveData));
    
    window.location.href = "/";
})

createButton.addEventListener("click", function (event) {
    const title = document.querySelector(".title");
    const description = document.querySelector(".description");
    const content = document.querySelector(".content");

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

    window.location.href = "/";
});

function renderPage() {
    const qs = getQueryString();

    if(qs.mode === "create") {
        createButton.style.display = "block";
        modifyButton.style.display = "none";
    } else if(qs.mode === "modify") {
        createButton.style.display = "none";
        modifyButton.style.display = "block";

        fetch("http://localhost:3000/list/" + qs.id, {
            method:"get",
        }).then(function(result) {
            return result.json();
        }).then(function(data) {
            renderMemo(data);
        }).catch(function (error) {
            console.log(error);
        });

        // const data = getData();
        // renderMemo(data);
    }
}

function getElement() {
    const title = document.querySelector(".title");
    const description = document.querySelector(".description");
    const content = document.querySelector(".content");

    return {title:title, description:description, content:content};
}

function getData() {
    const saveData = JSON.parse(localStorage.getItem("memo"));
    const qs = getQueryString();

    let data;
    for(let i = 0; i<saveData.length; i++) {
        if(saveData[i].id === Number(qs.id)) {
            data = saveData[i];
        }
    }

    return data;
}

function renderMemo(data) {
    const title = document.querySelector(".title");
    const description = document.querySelector(".description");
    const content = document.querySelector(".content");

    title.value = data.title;
    description.value = data.description;
    content.textContent = data.content;
}

function getQueryString() {
    const qs = window.location.search;
    const qs2 = new URLSearchParams(qs);

    return {id :qs2.get("id"), mode: qs2.get("mode")};
}

renderPage();
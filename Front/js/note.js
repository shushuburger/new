const createButton = document.querySelector(".create-btn");

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

    localStorage.setItem("memo", JSON.stringify(saveValue));
})
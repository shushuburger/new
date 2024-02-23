{/* <li>
<div class="list-header">
    <a href="./view/20230101.html">
        <h1 class="title">테스트1</h1>
    </a>
    <div>
        <span class="modify-btn">수정</span>
        <span class="delete-btn">삭제</span>
    </div>
</div>
<h2 class="description">테스트2</h2>
<div class="createdAt">
    <span>2023.01.01</span>
</div>
</li> */}

function getData() {
    const saveData = JSON.parse(localStorage.getItem("memo"));
    const memoWrapper = document.querySelector(".memo-container");

    while(memoWrapper.firstChild) {
        memoWrapper.removeChild(memoWrapper.firstChild);
    }

    for(let i = 0; i< saveData.length; i++){
        const data = saveData[i];
        const list = drawMemo(data);
        memoWrapper.appendChild(list);
    }
}

function drawMemo(memo) {
    const li = document.createElement("li");

    const header = document.createElement("div");
    header.className = "list-header";

    const a = document.createElement("a");
    a.href = "./view/content.html?id=" + memo.id;

    const h1 = document.createElement("h1");
    h1.className = "title";
    h1.textContent = memo.title;

    const buttons = document.createElement("div");

    const modifyBtn = document.createElement("span");
    modifyBtn.textContent = "수정";
    modifyBtn.className = "modify-btn";

    modifyBtn.addEventListener("click", function(event) {
        window.location.href = "./view/note.html?mode=modify&id=" +memo.id;
    })

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "삭제";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function(event) {
        const saveData = JSON.parse(localStorage.getItem("memo"));

        for(let i = 0; i<saveData.length; i++) {
            if(saveData[i].id === Number(memo.id)) {
                saveData.splice(i, 1);
                localStorage.setItem("memo", JSON.stringify(saveData));
            }
        }

        getData();
    });

    buttons.appendChild(modifyBtn);
    buttons.appendChild(deleteBtn);

    header.appendChild(a);
    a.appendChild(h1);
    header.appendChild(buttons);

    const h2 = document.createElement("h2");
    h2.className = "description";
    h2.textContent = memo.description;

    const div = document.createElement("div");
    div.className = "createdAt";

    const span = document.createElement("span");
    span.textContent = memo.createdAt;

    div.appendChild(span);

    li.appendChild(header);
    li.appendChild(h2);
    li.appendChild(div);

    return li;
}

getData();
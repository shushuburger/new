{/* <li>
<a href="./view/20230101.html">
    <h1 class="title">테스트1</h1>
</a>
<h2 class="description">테스트2</h2>
<div class="createdAt">
    <span>2023.01.01</span>
</div>
</li> */}

function getData() {
    const saveData = JSON.parse(localStorage.getItem("memo"));
    const memoWrapper = document.querySelector(".memo-container");
    console.log(memoWrapper);

    for(let i = 0; i< saveData.length; i++){
        const data = saveData[i];
        const list = drawMemo(data);
        memoWrapper.appendChild(list);
    }
}

function drawMemo(memo) {
    console.log(memo);
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = "./view/content.html?id=" + memo.id;

    const h1 = document.createElement("h1");
    h1.className = "title";
    h1.textContent = memo.title;

    a.appendChild(h1);

    const h2 = document.createElement("h2");
    h2.className = "description";
    h2.textContent = memo.description;

    const div = document.createElement("div");
    div.className = "createdAt";

    const span = document.createElement("span");
    span.textContent = memo.createdAt;

    div.appendChild(span);

    li.appendChild(a);
    li.appendChild(h2);
    li.appendChild(div);

    return li;
}

getData();
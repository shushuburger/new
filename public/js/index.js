function getData() {
    fetch("http://localhost:3000/lists", {
        method:"get",
    }).then(function (result) {
        return result.json();
    }).then(function (data) {
        const memoWrapper = document.querySelector(".memo-container");

        while(memoWrapper.firstChild) {
            memoWrapper.removeChild(memoWrapper.firstChild);
        }
    
        for(let i = 0; i< data.length; i++){
            const memo = data[i];
            const list = drawMemo(memo);
            memoWrapper.appendChild(list);
        }
    }).catch(function(error) {
        console.log(error);
    });
}

function drawMemo(memo) {
    const li = document.createElement("li");

    const header = document.createElement("div");
    header.className = "list-header";

    const a = document.createElement("a");
    a.href = "/content?id=" + memo.id;

    const h1 = document.createElement("h1");
    h1.className = "title";
    h1.textContent = memo.title;

    const buttons = document.createElement("div");

    const modifyBtn = document.createElement("span");
    modifyBtn.textContent = "수정";
    modifyBtn.className = "modify-btn";

    modifyBtn.addEventListener("click", function(event) {
        window.location.href = "/note?mode=modify&id=" +memo.id;
    })

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "삭제";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function(event) {
        fetch("http://localhost:3000/delete", {
            method: "delete",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ id: memo.id }),
        }).then(function(result) {
            return result.json();
        }).then(function(data) {
            getData();
        }).catch(function(error){
            console.log(error);
        });
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
    const now = new Date(memo.createdAt);
    span.textContent = now.toLocaleDateString();

    div.appendChild(span);

    li.appendChild(header);
    li.appendChild(h2);
    li.appendChild(div);

    return li;
}

getData();
function getData() {
    const saveData = JSON.parse(localStorage.getItem("memo"));
}

function getQueryString() {
    const qs = window.location.search;

    console.log(qs);
}

getQueryString();
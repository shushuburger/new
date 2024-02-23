function getData() {
    const saveData = JSON.parse(localStorage.getItem("memo"));
    const id = getQueryString();
}

function getQueryString() {
    const qs = window.location.search;
    const qs2 = new URLSearchParams(qs);

    return qs2.id;
}

getQueryString();
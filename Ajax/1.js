

window.addEventListener('load', () => {
    for (i = 0; i < 10; i++) {
        let newElement = document.querySelector("#refdiv").cloneNode(true);
        let parentElement = document.querySelector("#parentdiv");

        newElement.style.visibility = "visible";
        parentElement.insertBefore(newElement, parentElement.firstchild);
    }
})



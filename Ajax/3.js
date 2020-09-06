

window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users?page=2");
    xhr.onreadystatechange = () => {
        if (xhr.readystate === 4) {
            let abc = JSON.parse(xhr.responseText);
            domoperation(abc.data);
        }
    };

    xhr.send();
});


function domoperation(list) {
    let parent = document.querySelector("#parent");
    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        let newElement = parent.children[0].cloneNode(true);

        newElement.style.display = "flex";
        newElement.innerHTML = item.first_name + " " + item.last_name;
        parent.insertBefore(newElement, parent.firstChild);
    }
};

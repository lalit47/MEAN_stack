let callAjax = function () {
    let xhr = new XMLHttpRequest();

    xhr.onload = () => {
        const parsevalue = JSON.parse(xhr.responseText);
        domoperation(parsevalue);

    };
    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");
    xhr.send();
}



function domoperation(parsevalue) {
    console.log(parsevalue);
    let parent = document.querySelector("#parent");

    for (let i = 0; i < parsevalue.length; i++) {
        let item = parsevalue[i];
        let clone = parent.children[0].cloneNode(true);

        clone.innerHTML = item.FirstName + " " + item.LastName;
        parent.insertBefore(clone, parent.firstchild);
    }
}











































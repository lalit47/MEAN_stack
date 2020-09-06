let callAjax = () => {
    console.log("calling Ajax");
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors")
    xhr.onload = () => {
        console.log(xhr.responseText);
        const ref = JSON.parse(xhr.responseText);
        DOMoperation(ref);


    }

    xhr.send();


};

let DOMoperation = (ref) => {
    for (let i = 0; i < ref.length; i++) {
        let item = ref[i];
        console.log(item);
        const parent = document.querySelector("#parent");
        const newElement = parent.children[0].cloneNode(true);
        newElement.innerHTML = item.FirstName + " " + item.LastName;
        parent.insertBefore(newElement, parent.firstChild);
    }

};




let callAjaxXml = () => {
    console.log("Ajax Xml");
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");
    xhr.setRequestHeader("accept", "application/xml")
    xhr.onload = () => {
        console.log(xhr.responseXML);
        let xmldoc = xhr.responseXML
        DOMOperation(xmldoc);
    }
    xhr.send();
}

let DOMOperation = (xmldoc) => {
    console.log(xmldoc);
    const Authorlist = xmldoc.querySelectorAll("Author");


    for (let i = 0; i < Authorlist.length; i++) {
        let item = Authorlist[i];
        let firstname = item.children[0].innerHTML;
        let LastName = item.children[3].innerHTML;

        const parent = document.querySelector("#parent");
        const newElement = parent.children[0].cloneNode(true);
        newElement.innerHTML = firstname + " " + LastName;
        parent.insertBefore(newElement, parent.firstChild);
    }

}

















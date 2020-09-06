let weather = () => {
    let cityname = document.querySelector("#user").value;
    let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=use your key=" + cityname;
    $.ajax(url).done((data) => {
        domOperation(data);
    });

};



let domOperation = (data) => {
    const parent = document.querySelector("#parent");
    const newElement = parent.children[0].cloneNode(true);
    newElement.children[0].innerHTML = data.name;
    newElement.children[1].innerHTML = data.main.temp_max;
    newElement.style.visibility = "visible";
    parent.insertBefore(newElement, parent.firstChild);
}



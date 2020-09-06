function city() {
    let xhr = new XMLHttpRequest;
    let cityname = document.querySelector("#user").value;
    let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=5daaf952fbe609f81bbb2325c839b7fb&q=" + cityname;

    xhr.open("GET", url);
    xhr.onload = () => {
        let res = JSON.parse(xhr.responseText);

        DOM(res);


    };
    xhr.send();
};
function DOM(res) {
    const max_temp = res.main.temp_max;
    const min_temp = res.main.temp_min;

    let parent = document.querySelector("#parent");
    let child = document.querySelector("#child").cloneNode(true);
    let cityname = document.querySelector("#user").value;
    child.innerHTML = cityname + " Max " + max_temp + " " + "Min " + min_temp;
    parent.insertBefore(child, parent.firstChild);
    document.querySelector("#user").value = "";
}
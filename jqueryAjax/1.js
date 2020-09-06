function checkWeather() {

    let xhr = new XMLHttpRequest;
    let cityname = document.querySelector("#user").value;
    let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=5daaf952fbe609f81bbb2325c839b7fb&q=" + cityname;
    xhr.open("get", url);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            let rjson = JSON.parse(xhr.responseText);
            domOperation(rjson);
        }
    };
    xhr.send();
};

function domOperation(rjson) {
    const max_temp = rjson.main.temp_max;
    const min_temp = rjson.main.temp_min;
    let ref = document.querySelector("#child").cloneNode(true);
    ref.innerHTML = " Max " + max_temp + " " + "Min " + min_temp;;
    let parent = document.querySelector("#parent");
    parent.insertBefore(ref, parent.firstChild);
    document.querySelector("#user").value = "";


}
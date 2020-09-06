
let weather = () => {
    let cityname = $("#user_input").val();
    let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=5daaf952fbe609f81bbb2325c839b7fb&q=" + cityname;
    $.ajax(url).done((data) => {
        $("#parent :nth-child(1)")
            .clone(true)
            .html(data.name + "    " + data.main.temp_max + " " + " " + data.main.temp_min)
            .insertBefore($("#parent :nth-child(1)"));
        $("#user_input").val("");


    });
};


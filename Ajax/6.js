let callAjaxbyJQuery = () => {
    let url = "api.openweathermap.org / data / 2.5 / weather ? appid = 5daaf952fbe609f81bbb2325c839b7fb&unit=metric&q=" + "cityname";
    $.ajax(url).done((data) => {


    })
}
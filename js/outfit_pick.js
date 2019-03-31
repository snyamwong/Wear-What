const http = new XMLHttpRequest();
const outfit_pick_url = "/clothes"
const yahoo_weather_url = "/yahoo_weather"

var yahoo_data

function getOutfitPickImage(yahoo_data)
{
    http.open("POST", outfit_pick_url)
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    http.send(JSON.stringify({
        "gender": sessionStorage.getItem('gender'),
        "attire": sessionStorage.getItem('attire'),
        "temperature": yahoo_data.current_observation.condition.temperature,
        "condition": yahoo_data.current_observation.condition.text,
    }))

    http.onreadystatechange = (e) =>
    {
        if(http.readyState == 4 && http.status == 200)
        {
            // var res = JSON.parse(http.responseText)

            console.log(http.responseText)
        }
    }
}

function getYahooWeatherData()
{
    http.open("POST", yahoo_weather_url)
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    http.send(JSON.stringify({
        "location": sessionStorage.getItem('location')
    }))

    http.onreadystatechange = (e) =>
    {
        if(http.readyState == 4 && http.status == 200)
        {
            var res = JSON.parse(http.responseText)

            yahoo_data = res

            return res
        }
    }
}

getYahooWeatherData()

setTimeout(function() {
    console.log(yahoo_data)
    getOutfitPickImage(yahoo_data)
 }, 500)

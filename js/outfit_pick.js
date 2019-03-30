const http = new XMLHttpRequest();

const outfit_pick_url = "/clothes"
const yahoo_weather_url = "/yahoo_weather"

function getOutfitPickImage()
{
    http.open("POST", outfit_pick_url)
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    http.send(JSON.stringify({
        "gender": sessionStorage.getItem('gender'),
        "attire": sessionStorage.getItem('attire'),
        "location": sessionStorage.getItem('location')
    }))

    http.onreadystatechange = (e) =>
    {
        if(http.readyState == 4 && http.status == 200)
        {
            var res = JSON.parse(http.responseText)

            console.log(res)
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

            console.log(res)
        }
    }
}

getYahooWeatherData()

const http = new XMLHttpRequest();
const outfit_pick_url = "/outfit_pick"
const yahoo_weather_url = "/yahoo_weather"

function getOutfitPickImage()
{
    http.open("GET", outfit_pick_url)
    http.send()

    http.onreadystatechange = (e) =>
    {
        if(http.readyState == 4 && http.status == 200)
        {
            console.log(http.responseText)
        }
    }
}

function getYahooWeatherData()
{
    http.open("GET", yahoo_weather_url)
    http.send()

    http.onreadystatechange = (e) =>
    {
        if(http.readyState == 4 && http.status == 200)
        {
            console.log(http.responseText)
        }
    }
}

getYahooWeatherData()

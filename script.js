let weather = {
    apiKey : "7577d768f56e3583f237c63f8d7bcf7d",
    function(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${card.value}&appid=7577d768f56e3583f237c63f8d7bcf7d`)
    }
}
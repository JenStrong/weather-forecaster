$(document).ready(function(){
  $("#weather-display").hide();

  $('#select-city').submit(function(event){
    event.preventDefault();
    $('#display-city').text($('#current-city').val());
    $("#greeting").remove();
    $("#weather-display").show();
    displayWeather($('#current-city').val());
  })

  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=3c4637f8334e84b45a1b5e450fae1ab0';
    var units = '&units=imperial';

    $.get(url + token + units, function(data){
      $('#current-temperature').text(data.main.temp);
    })

    $.get(url + token + units, function(data){
      $('#weather-description').text(data.weather[0].description);
      weather_code = (data.weather[0].id)

      if(weather_code === 800){
        image='url("./public/images/clear.jpg")'
      }else if(weather_code > 800){
        image='url("./public/images/clouds.jpg")'
      }else if(weather_code > 700 && weather_code <= 781){
        image='url("./public/images/haze.jpg")'
      }else if(weather_code > 599 && weather_code <= 622){
        image='url("./public/images/snow.jpg")'
      }else if(weather_code > 299 && weather_code <= 531){
        image='url("./public/images/rain.jpg")'
      }else if(weather_code > 199 && weather_code <= 232){
        image='url("./public/images/storm.jpg")'
      }
      $('body').css('background-image',image)
    });
    }

});

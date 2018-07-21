$(document).ready(function(){

  $('#select-city').submit(function(event){
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  $("#get-city").click(function() {
    var inputCity = $('#current-city').val();
    $('#display-city').text(inputCity);
  });

  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=3c4637f8334e84b45a1b5e450fae1ab0';
    var units = '&units=imperial';
    $.get(url + token + units, function(data){
      $('#current-temperature').text(data.main.temp);
    })
  };
});

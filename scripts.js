$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      var api = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + lon + '';

      $.getJSON(api, function(data) {
        var city = data.name;
        var weatherDescription = data.weather[0].description;
        var celsius = data.main.temp;
      }); // END GETJSON
    }); // END GET CURRENT POSITION
  } else {
    alert("Error: geolocation is not supported.");
  } // END NAVIGATOR.GEOLOCATION
}); // END DOCUMENT READY FUNCTION

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
        var icon = data.weather[0].icon;
        var tempSwap = true;
        var fahrenheit;

        fahrenheit = (celsius * (9 / 5) + 32).toFixed(0);
        celsius = ((fahrenheit - 32) * (5 / 9)).toFixed(0);

        document.getElementById("city").textContent = city;
        document.getElementById("weatherDescription").textContent = weatherDescription;
        document.getElementById("fahrenheit").innerHTML = fahrenheit + " &#8457;";
        $("#iconBtn").prepend('<img src=' + icon + ' alt="Weather Icon" title="Weather icon" width="200" height="200">');

        // CONVERT FAHRENHEIT TO CELSIUS ON CLICK
        $("#fahrenheit").click(function() {
          if (tempSwap === false) {
            $("#fahrenheit").html(fahrenheit + " &#8457;");
            tempSwap = true;
          } else {
            $("#fahrenheit").html(celsius + " &#8451;");
            tempSwap = false;
          }
        });

        // CHANGE BACKGROUND IMAGE BASED ON TEMPERATURE
        if (fahrenheit > 100) {
          $("body").css("background-image", 'url("https://images.unsplash.com/photo-1480589331144-96c57ade5d41?auto=format&fit=crop&w=1050&q=80")');
        } else if (fahrenheit > 60) {

        } else if (fahrenheit > 0) {

        }

      }); // END GETJSON
    }); // END GET CURRENT POSITION
  } else {
    alert("Error: geolocation is not supported.");
  } // END NAVIGATOR.GEOLOCATION
}); // END DOCUMENT READY FUNCTION

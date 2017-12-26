$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lon = position.coords.longitude;
      lat = position.coords.latitude;
    }); // END GET CURRENT POSITION
  } else {
    alert("Error: geolocation is not supported.");
  } // END NAVIGATOR.GEOLOCATION
}); // END DOCUMENT READY FUNCTION

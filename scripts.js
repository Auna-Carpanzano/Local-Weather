$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

    }); // END GET CURRENT POSITION
  } else {
    alert("Error: geolocation is not supported.");
  } // END NAVIGATOR.GEOLOCATION
}); // END DOCUMENT READY FUNCTION

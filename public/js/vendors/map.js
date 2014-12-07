var geocoder;
var map;
function initialize() {
  var latlng = new google.maps.LatLng(37.7831,-122.4039);
  var mapOptions = {
    zoom: 13,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.HYBRID
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

}


google.maps.event.addDomListener(window, 'load', initialize);

function codeAddress(address) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
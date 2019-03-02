
//----------------------------------------------------------------
//Google maps
//----------------------------------------------------------------
function initialize() {
  var mapOptions = {
	scrollwheel: false,
    zoom: 16,
    center: new google.maps.LatLng(13.002574, 77.624252),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);

  var image = 'images/marker.png';
  var myLatLng = new google.maps.LatLng(13.002574, 77.624252);
  var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image,
	  title: 'Phantom Ideas Pvt. Ltd.'   

  });
}

google.maps.event.addDomListener(window, 'load', initialize);
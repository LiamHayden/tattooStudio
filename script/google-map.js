function myMap() {
  let mapProp = {
    center:new google.maps.LatLng(52.333992923581874, -6.463802064663058),
    zoom:15,
  };
  let map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  let myCenter = new google.maps.LatLng(52.333992923581874, -6.463802064663058);
  let marker = new google.maps.Marker({position: myCenter});

  marker.setMap(map);
}

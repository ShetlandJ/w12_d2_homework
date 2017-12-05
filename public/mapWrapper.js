var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords, content){
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  this.markers.push(marker);
  var infowindow = new google.maps.InfoWindow({
    content: content
  });

  marker.addListener('click', function() {
    infowindow.open(this.googleMap, marker);
  });

}

MapWrapper.prototype.chicago = function(){
  this.googleMap.setCenter(new google.maps.LatLng(41.878144, -87.629798));
}

MapWrapper.prototype.addClickEvent = function(){
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    this.addMarker(event.latLng, "Marker added by user click");
  }.bind(this));
}

MapWrapper.prototype.bounceMarkers = function(){
  this.markers.forEach(function(marker){
    marker.setAnimation(google.maps.Animation.BOUNCE);
  });
}

MapWrapper.prototype.findMe = function(){

    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.addMarker(pos, "This is your location");
      this.googleMap.setCenter(pos);

    }.bind(this));
  }

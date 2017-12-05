var container;

var init = function(){
  container = document.getElementById('main-map');
  var center = {lat: 59.856946, lng: -4.244088};
  var mainMap = new MapWrapper(container, center, 10);

  mainMap.addClickEvent();
  mainMap.addMarker(mainMap.addClickEvent);

  var bounceBtn = document.getElementById('bounceBtn');
  bounceBtn.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  var chicagoBtn = document.getElementById('chicago');
  chicagoBtn.addEventListener('click', mainMap.chicago.bind(mainMap));

  var findMe = document.getElementById('findMe');
  findMe.addEventListener('click', mainMap.findMe.bind(mainMap));

}

window.addEventListener('load', init)

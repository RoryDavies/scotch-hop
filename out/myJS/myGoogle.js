
// This creates the map of Linlithgow, showing the Palace and Low Port.
// The html and CSS controls where the map is placed, size etc (div id="map2">"),
// script here controls  the content of the map.
      function initMap() {
        var mapDiv = document.getElementById('map2');   
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 55.9785, lng: -3.6006585},
          zoom:15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scaleControl: true
        });
        // Palace
        var marker1 = new google.maps.Marker({
          position: {lat: 55.9780, lng: -3.6009},
          map: map,
        });
        // Low Port
        var marker2 = new google.maps.Marker({
          position: {lat: 55.9775, lng: -3.5967}, 
          map: map,
        });

      }



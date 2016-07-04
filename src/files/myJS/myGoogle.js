
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



/* Comment out all of the previous JS while try from scratch .....
=============================================================
jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
        center: {lat: 55.9785, lng: -3.6006585},
        zoom: 8
// not sure if zoom has any effect with markers set.
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
//        ['Home', 55.9644488,-3.440138],
 //       ['Linlithgow Palace', 55.9785,-3.6006585],
 //       ['Low Port Centre', 55.9775,-3.5967]
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Linithgow Palace EH49 7AL</h3>' +
        '<p>The Palace has some parking just outside. Further parking is available nearby.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Low Port Centre EH49 7HZ</h3>' +
        '<p>The Low Port Centre, opposite Tesco, has limited parking.</p>' +
        '</div>']
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
    
}

=========================================
end of wholesale comment out
*/


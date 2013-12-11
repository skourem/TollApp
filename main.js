require.config({
    /*
    shim: {
        appframework :{
            exports: 'af'
        },
        appframeworkui: {
            deps: ['appframework'],
            exports: 'af.ui'
        }
    },
    */
    paths: {
        leaflet: 'js/lib/leaflet/leaflet',
        appframework: 'appframework',
        appframeworkui: 'appframework.ui'
    }
});



require(['leaflet', 'tollstations', 'utils', 'appframework'], function(L, tollStations, utils, $) {
    //console.log(af);
    
    require(['appframeworkui'], function() {
        
        //$('#map').height($(window).height());
        var map = L.map('map');
        console.log(map);
        L.tileLayer('http://a.tile.cloudmade.com/5fb835aba55c42ceb72130e7ab48fa9f/2400/256/{z}/{x}/{y}.png?token=8f98b4a86e5d43e6be09ccebba885321', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
            }).addTo(map);
            
        /*
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    {    maxZoom: 18  }).addTo(map);
        
        
        L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png',
                    {    maxZoom: 18  }).addTo(map);
        
        */

        var clearWatch = true;
        //var trip = [];
        var marker, polyline;
        var onSuccess = function(position) {
            console.log(JSON.stringify(position));
            if (clearWatch) {
                map.setView([position.coords.latitude, position.coords.longitude], 15);
                marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
            }
            //marker.setLatLng([position.coords.latitude, position.coords.longitude]);
            //marker.setLatLng([37.969952, 23.769471]);
            //trip.push([37.969952, 23.769471]);
            //var polyline = L.polyline(trip, {color: 'red'}).addTo(map);
            clearWatch = false;
            var max = tollStations.length;
            //for (var i = 0; i < max; i++) {
               // console.log(tollStations[i].name +
                 //   ': ' + utils.calcDistanceBetween(38.009020, 23.842207, tollStations[i].lat, tollStations[i].lng));
            //}
        };

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
            clearWatch = true;
        }

        var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {
            enableHighAccuracy: true,
            timeout: 30000
        });
    });    

});

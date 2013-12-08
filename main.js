require.config({
    shim: {
        appframeworkui: {
            deps: ['appframework']
        }
    },
    paths: {
        leaflet: 'js/lib/leaflet/leaflet',
        appframework: 'appframework',
        appframeworkui: 'appframework.ui'
    }
});



require(['leaflet', 'tollstations', 'utils', 'appframework','appframeworkui'], function(L, tollStations, utils) {
    
    console.log($);
    console.log($.ui);

    var map = L.map('map');
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18
    }).addTo(map);
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
        for (var i = 0; i < max; i++) {
           // console.log(tollStations[i].name +
             //   ': ' + utils.calcDistanceBetween(38.009020, 23.842207, tollStations[i].lat, tollStations[i].lng));
        }


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

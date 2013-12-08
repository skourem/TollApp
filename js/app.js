require(["leaflet/leaflet"], function(L) {
	console.log(L);
	var map = L.map('map');
	/*
	L.tileLayer('http://a.tile.cloudmade.com/5fb835aba55c42ceb72130e7ab48fa9f/2400/256/{z}/{x}/{y}.png?token=8f98b4a86e5d43e6be09ccebba885321', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
	}).addTo(map);
	*/

	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
				{    maxZoom: 18  }).addTo(map);


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
		
		/*
		var max = tollStations.length;
		for (var i = 0; i < max; i++) {
			console.log( tollStations[i].name + 
				': ' + calcDistanceBetween(38.009020, 23.842207, tollStations[i].lat, tollStations[i].lng) );	
		}
		*/
		
	};

	// onError Callback receives a PositionError object
	//
	function onError(error) {
		alert('code: '    + error.code    + '\n' +
			'message: ' + error.message + '\n');
		clearWatch = true;	  
	}

	var tollStations = [
	{ name: 'Αγ. Παρασκευής Βόρεια', lat: 38.009020,lng: 23.842207},
	{ name: 'Αγ. Παρασκευής Νότια', lat: 38.008030, lng: 23.836570},
	{ name: 'Αιγάλεω Ανατολικά', lat: 38.075699, lng: 23.676229},
	{ name: 'Αιγάλεω Δυτικά', lat: 38.079977, lng: 23.678388},
	{ name: 'Ανθούσα Δυτικά', lat: 38.016765, lng: 23.866137},
	{ name: 'Ασπρόπυργος Ανατολικά', lat: 38.089138, lng: 23.622208},
	{ name: 'Ασπρόπυργος Δυτικά', lat: 38.090488, lng: 23.618928},
	{ name: 'Γέρακας Ανατολικά', lat: 38.018949, lng: 23.861633},
	{ name: 'Γλυκά Νερά Βόρεια', lat: 37.997234, lng: 23.851355},
	{ name: 'Γλυκά Νερά Νότια', lat: 37.997475, lng: 23.849339},
	{ name: 'Δημοκρατίας Ανατολικά', lat: 38.065994, lng: 23.734411},
	{ name: 'Δημοκρατίας Δυτικά', lat: 38.067420, lng: 23.731419},
	{ name: 'Δημόκριτος Βόρεια', lat: 37.999554, lng: 23.821350},
	{ name: 'Δουκ. Πλακεντίας Ανατολική', lat: 38.023962, lng: 23.834758},
	{ name: 'Δουκ. Πλακεντίας Δυτική', lat: 38.025213, lng: 23.833832},
	{ name: 'Δουκ. Πλακεντίας Νότια', lat: 38.019261, lng: 23.837696},
	{ name: 'Ηράκλειο Ανατολική', lat: 38.056340, lng: 23.772335},
	{ name: 'Ηράκλειο Δυτικά', lat: 38.058622, lng: 23.768783},
	{ name: 'Κάντζα Ανατολική', lat: 37.979888, lng: 23.869927},
	{ name: 'Κάντζα Δυτική', lat: 37.982322, lng: 23.870493},
	{ name: 'Κατεχάκη Βόρεια', lat: 37.977140, lng: 23.799987},
	{ name: 'Κηφισίας Ανατολική', lat: 38.041167, lng: 23.805374},
	{ name: 'Κηφισίας Δυτική', lat: 38.043717, lng: 23.799236},
	{ name: 'Κορωπι Δυτικά', lat: 37.938789, lng: 23.886638},
	{ name: 'Κύμης Ανατολικά', lat: 38.048325, lng: 23.785649},
	{ name: 'Κύμης Δυτικά', lat: 38.052274, lng: 23.781432},
	{ name: 'Μαραθώνος Ανατολική', lat: 38.004187, lng: 23.869668},
	{ name: 'Μαραθώνος Δυτική', lat: 38.007557, lng: 23.869332},
	{ name: 'Μεταμόρφωση Ανατολική', lat: 38.061081, lng: 23.750468},
	{ name: 'Μεταμόρφωση Δυτική', lat: 38.063006, lng: 23.748535},
	{ name: 'Παιανία Ανατολική', lat: 37.953307, lng: 23.885705},
	{ name: 'Παιανία Δυτική', lat: 37.957409, lng: 23.886735},
	{ name: 'Παλλήνη Νότια', lat: 37.994219, lng: 23.887532},
	{ name: 'Παπάγου Βόρεια', lat: 37.985714, lng: 23.812478},
	{ name: 'Παπάγου Νότια', lat: 37.985719, lng: 23.809962},
	{ name: 'Πεντέλης Ανατολική', lat: 38.027064, lng: 23.829293},
	{ name: 'Πεντέλης Δυτική', lat: 38.034361, lng: 23.821561},
	{ name: 'Ρουπάκι Ανατολικά', lat: 38.094009, lng: 23.591060},
	{ name: 'Φυλής Ανατολικά', lat: 38.070104, lng: 23.711515},
	{ name: 'Φυλής Δυτικά', lat: 38.071348, lng: 23.708227}
	];


	function calcDistanceBetween(lat1, lon1, lat2, lon2) {
		//Radius of the earth in:  1.609344 miles,  6371 km  | var R = (6371 / 1.609344);
		var R = 6371; // Radius of earth in Miles 
		var dLat = toRad(lat2-lat1);
		var dLon = toRad(lon2-lon1); 
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
		Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
		Math.sin(dLon/2) * Math.sin(dLon/2); 
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c;
		return d;
	}

	function toRad(Value) {
		/** Converts numeric degrees to radians */
		return Value * Math.PI / 180;
	}

	var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy:true, timeout: 30000 });
});
define(['utils'], {
    calcDistanceBetween: function(lat1, lon1, lat2, lon2) {
        //Radius of the earth in:  1.609344 miles,  6371 km  | var R = (6371 / 1.609344);
        var R = 6371; // Radius of earth in Miles 
        var dLat = this.toRad(lat2 - lat1);
        var dLon = this.toRad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    },
    toRad: function(Value) {
        /** Converts numeric degrees to radians */
        return Value * Math.PI / 180;
    }
});

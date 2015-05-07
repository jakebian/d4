define([], function () {

    return {
        getCartesianCoords: getCartesianCoords
    };


    /**
     * sphereCoords is array:
     * [r, phi1, phi2, ...]
     */

    function getCartesianCoords(sphereCoords) {

        var r = sphereCoords[0];

        var cartesianCoords = [
            r * Math.cos(sphereCoords[1] || 0),
            r * Math.sin(sphereCoords[1] || 0) * Math.cos(sphereCoords[2] || 0)
        ];

        if (sphereCoords.length < 4) {
            return cartesianCoords.slice(0, sphereCoords.length);
        }

        var coordIdx = 3;
        var currentBase = r * Math.sin(sphereCoords[1]) * Math.sin(sphereCoords[2]);

        while (coordIdx < sphereCoords.length) {

            var cosCoord = currentBase * Math.cos(sphereCoords[coordIdx]);
            var sinCoord = currentBase * Math.sin(sphereCoords[coordIdx]);

            cartesianCoords.push(cosCoord);
            cartesianCoords.push(sinCoord);

            currentBase = sinCoord;
            coordIdx ++;
        }

        return cartesianCoords;

    }

});

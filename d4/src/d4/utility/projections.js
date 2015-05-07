define(['d4/utility/coords-util'], function (coordsUtil) {

    return {
        simpleProjection: simpleProjection
    };


    /**
     * Public methods
     */

    function simpleProjection(sphereCoords) {

        var cartesianCoords = coordsUtil.getCartesianCoords(sphereCoords);

        return {
            x: cartesianCoords[0],
            y: cartesianCoords[1]
        }
    }

});

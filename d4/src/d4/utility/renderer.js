define([], function () {

    return {
        drawPoints: drawPoints
    };


    /**
     * Public methods
     */

    function drawPoints(points, container) {
        var circles = container.selectAll('circle').data(points);
        circles.enter().append("circle").each(setPointAttr);
    }

    /**
     * Private helpers
     */

    function setPointAttr(point) {
        d3.select(this).attr({
            'cx': point.x,
            'cy': point.y,
            'r': point.r || 10
        });
    }

});
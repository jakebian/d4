define([
        'd4/utility/renderer',
        'd4/utility/projections'
    ],

    function (renderer, projections) {

        return {
            renderPoint: renderPoint
        };

        function renderPoint(points, container) {
            renderer.drawPoints(points.map(projections.simpleProjection), container);
        }

    }
);
var svg = d3.select('body').append('svg').attr({
    width: 800,
    height: 500
});

var a = 0;

setInterval(function () {
    d4.renderPoint([
        [100, a, 0, 0],
        [150, a - 30, 0, 0],
        [300, a - 50, 0, 0]
    ], svg);
    a ++;
    console.log('yo')
}, 50);

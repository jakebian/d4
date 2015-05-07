'use strict';
/**
 * Tools
 */

var requirejs = require('requirejs');
var chai = require('chai');
var expect = chai.expect;

/**
 * RequireJS Modules
 */

var coordsUtil = requirejs('src/d4/utility/coords-util.js');

/**
 * Specs
 */

describe('coordsUtil', function(){

    describe('getCartesianFromSpherical', function() {

        it('should leave 0 invariant', function() {

            shouldBeSameArray(
                coordsUtil.getCartesianCoords([0]),
                [0]
            );

            shouldBeSameArray(
                coordsUtil.getCartesianCoords([0, 0, 0, 0]),
                [0, 0, 0, 0]
            );

        });

        it('should handle d < 3', function () {

            shouldBeSameArray(
                coordsUtil.getCartesianCoords([1]),
                [1]
            );

            shouldBeSameArray(
                coordsUtil.getCartesianCoords([1, Math.PI/2]),
                [0, 1]
            );

        });

        it('should handle simple d >= 3 cases', function () {

            shouldBeSameArray(
                coordsUtil.getCartesianCoords([1, Math.PI/2, 0]),
                [0, 1, 0]
            );

        });

    });

});

// TODO: write helper

function shouldBeSameArray(a1, a2, tolerance) {
    return expect(isSameArray(a1, a2, tolerance)).to.equal(true);
}

function isSameArray(a1, a2, tolerance) {
    console.log(a1, a2);
    return a1.every(function (entry, indx) { return entry - a2[indx] < (tolerance || 0.1); } );
}
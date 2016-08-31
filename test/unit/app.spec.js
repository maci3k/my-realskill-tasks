describe('app', function ()
{
    'use strict';

    var answer = window.app;

    describe('convertCelsius function', function () {
        it('should return converted temperatures', function () {
            expect(answer.convertCelsius(0)).toEqual([32, 273.15]);
            expect(answer.convertCelsius(36.6)).toEqual([97.88000000000001, 309.75]);
            expect(answer.convertCelsius(100)).toEqual([212, 373.15])
        });
        it('should return false when parameter is not a number', function () {
            expect(answer.convertCelsius('0')).toEqual(false);
            expect(answer.convertCelsius([])).toEqual(false);
            expect(answer.convertCelsius({})).toEqual(false);
        });
        it('should return false when parameter is below absolute zero', function () {
            expect(answer.convertCelsius(-273.15)).not.toEqual(false);
            expect(answer.convertCelsius(-273.14)).not.toEqual(false);
            expect(answer.convertCelsius(-273.16)).toEqual(false);
        });
    });

    describe('convertFahrenheit function', function() {
        it('should return converted temperatures', function () {
            expect(answer.convertFahrenheit(-38.5)).toEqual([-39.166666666666664, 233.98333333333335]);
            expect(answer.convertFahrenheit(100)).toEqual([37.77777777777778, 310.9277777777778]);
            expect(answer.convertFahrenheit(0)).toEqual([-17.77777777777778, 255.37222222222223]);
        });
        it('should return false when parameter is not a number', function () {
            expect(answer.convertFahrenheit('0')).toEqual(false);
            expect(answer.convertFahrenheit([])).toEqual(false);
            expect(answer.convertFahrenheit({})).toEqual(false);
        });
        it('should return false when parameter is below absolute zero', function () {
            expect(answer.convertFahrenheit(-459.66)).not.toEqual(false);
            expect(answer.convertFahrenheit(-459.67)).not.toEqual(false);
            expect(answer.convertFahrenheit(-459.68)).toEqual(false);
        });
    });

    describe('convertKelvin function', function () {
        it('should return converted temperatures', function () {
            expect(answer.convertKelvin(0)).toEqual([-273.15, -459.67]);
            expect(answer.convertKelvin(400)).toEqual([126.85000000000002, 260.33]);
            expect(answer.convertKelvin(366)).toEqual([92.85000000000002, 199.13000000000005]);
        });
        it('should return false when parameter is not a number', function () {
            expect(answer.convertKelvin('0')).toEqual(false);
            expect(answer.convertKelvin([])).toEqual(false);
            expect(answer.convertKelvin({})).toEqual(false);
        });
        it('should return false when parameter is below absolute zero', function () {
            expect(answer.convertKelvin(0)).not.toEqual(false);
            expect(answer.convertKelvin(1)).not.toEqual(false);
            expect(answer.convertKelvin(-1)).toEqual(false);
        });
    });
});

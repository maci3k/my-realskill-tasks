# Temperature conversion

## Goals
Your task is to write three simple functions which convert temperature.
Put your answers in **app/app.js** file.

### convertCelsius (temperature)
Returns two-element array containing `temperature` in Celsius scale converted to **Fahrenheit** and **Kelvin** scale.
If `temperature` is not a number **or** `temperature` is below absolute zero returns false.

### convertFahrenheit (temperature)
Returns two-element array containing `temperature` in Fahrenheit scale converted to **Celsius** and **Kelvin** scale.
If `temperature` is not a number **or** `temperature` is below absolute zero returns false.

### convertKelvin (temperature)
Returns two-element array containing `temperature` in Kelvin scale converted to **Celsius** and **Fahrenheit** scale.
If `temperature` is not a number **or** `temperature` is below absolute zero returns false.

## Before you start
Temperature conversion formulas.
[Celsius conversion table](https://en.wikipedia.org/wiki/Celsius)
[Fahrenheit conversion table](https://en.wikipedia.org/wiki/Fahrenheit)
[Kelvin conversion table](https://en.wikipedia.org/wiki/Kelvin)

## Setup

### To install dependencies

    npm install

### JShint

To run verify jshint:

    grunt jshint:default

### Run tests

To start developing unit tests

    grunt test:dev
 
To run tests and static analysis

    npm test

Good luck!
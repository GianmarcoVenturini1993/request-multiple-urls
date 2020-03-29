Request Multiple Urls
=========

A library that download (json) data from multiple urls and output it.

## Installation

   `npm install @gianmarcov/request-multiple-urls`

## Usage

    'use strict';

    const requestMultipleUrls = require('@gianmarcov/request-multiple-urls');

    const urls = [
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
    ];

    requestMultipleUrls(urls).then(urlContent => {
        urlContent.forEach(element => {
            console.log(element.data.items) // e.g. can access the json result...
        });
    });

## Tests

  `npm test`

## Contributing

   In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
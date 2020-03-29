Request Multiple Urls
=========

A library that downloads (json) data from multiple urls and outputs it.

You can find the npm package [here](https://www.npmjs.com/package/@gianmarcov/request-multiple-urls)

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

## Notes

   The library was built using NodeJS and [Axios](https://github.com/axios/axios), as a client for the HTTP GET requests towards given urls. By default, the response provided reads JSON files and contents. Although the library can read any kind of downladable content, further development is needed to optimize response outputting (e.g. base64 binary conversion for images and so on). As is, the library is only able to proxy GET requests and retrieve data.


## Contributing

   In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
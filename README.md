Request Multiple Urls
=========

A library that download (json) data from multiple urls and output it.

## Installation

   `npm install request-multiple-urls`

## Usage

   const requestMultipleUrls = require('request-multiple-urls');
   const urls = [
       'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
       'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
       'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
   ];

   requestMultipleUrls(urls).then(urlContent => {
    //Output should be json data from urls
   });
  
## Tests

  `npm test`

## Contributing

   In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
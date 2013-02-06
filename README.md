# Signatureio-Node

Node.js Bindings for Signature.io's API.

[![Build Status](https://travis-ci.org/scottmotte/signatureio-node.png)](https://travis-ci.org/scottmotte/signatureio-node)

## Installation

    $ npm install signatureio

## Usage overview

    var secret_api_key  = 'abc';  // Your Secret Signature.io API Key
    var signatureio     = require('signatureio')(secret_api_key);

    signatureio.documents.all(
       { email: 'foobar@example.org' },
       function(err, customer) {
          if (err) {
             console.log(err.message);
             return;
          }
          console.log("customer id", customer.id);
       }
     );
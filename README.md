# Signatureio-Node

Node.js Bindings for Signature.io's API.

[![Build Status](https://travis-ci.org/scottmotte/signatureio-node.png)](https://travis-ci.org/scottmotte/signatureio-node)

## Installation

    $ npm install signatureio

## Usage overview

    var secret_api_key  = 'abc';  // Your Secret Signature.io API Key
    var signatureio     = require('signatureio')(secret_api_key);

    signatureio.documents.all(
      { },
      function(response) {
        if (response.success) {
          console.log(success.error.message);
          return;
        } else {
          console.log(success.documents);
          return;
        };
      }
    );

Alternatively, you can simply set the environment variable SIGNATURE_SECRET_API_KEY on your machine. The node module will read it automatically so that you can simply call:

    var signatureio = require('signatureio');

## API

All methods takes a callback as their last parameter. The callback is called with the response.

* `signatureio.documents` - create, retrieve, all
  * `all(filters)` - list documents
  * `create(document)` - create a document
  * `retrieve(document_id)` - retrieve a document by document id
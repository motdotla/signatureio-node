"use strict";
var request = require('request');

function signatureio(secret_api_key, public_api_key) {
  var secret_api_key      = secret_api_key || null,
      public_api_key      = public_api_key || null,
      api_url             = "https://www.signature.io/api/v0",
      basic_auth_string   = new Buffer(secret_api_key + ":").toString('base64'),
      headers             = {
        "Authorization":  "Basic "+basic_auth_string
      };

  signatureio = {
    secret_api_key:       secret_api_key,
    public_api_key:       public_api_key,
    api_url:              api_url,
    basic_auth_string:    basic_auth_string,
    headers:              headers,

    documents: {
      all: function (callback) {
        var options = {json: true, method: "GET", headers: signatureio.headers, uri: signatureio.api_url+"/documents.json"};

        request(options, function (error, response, body) {
          callback(body);
        });
      }
    },
  };

  return signatureio;
}

module.exports = signatureio;
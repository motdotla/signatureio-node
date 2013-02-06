"use strict";
var request = require('request'),
    merge   = require('merge');

function signatureio(secret_api_key, public_api_key) {
  var secret_api_key      = secret_api_key || null,
      public_api_key      = public_api_key || null,
      api_url             = "https://www.signature.io/api/v0",
      basic_auth_string   = new Buffer(secret_api_key + ":").toString('base64'),
      headers             = {
        "Authorization" :   "Basic "+basic_auth_string,
        "Content-type"  :   "application/json"
      };

  signatureio = {
    secret_api_key:       secret_api_key,
    public_api_key:       public_api_key,
    api_url:              api_url,
    basic_auth_string:    basic_auth_string,
    headers:              headers,

    documents: {
      all: function(callback) {
        var options     = {headers: signatureio.headers, method: "GET", uri: signatureio.api_url+"/documents.json", json: true};

        request(options, function(error, response, body) {
          callback(body);
        });
      },
      create: function(payload, callback) {
        var options     = {headers: signatureio.headers, method: "POST", uri: signatureio.api_url+"/documents.json", json: payload};

        request(options, function(error, response, body) {
          callback(body);
        });
      },
      retrieve: function(document_id, callback) {
        var options = {method: "GET", uri: signatureio.api_url+"/documents/"+document_id+".json", json: true};

        request(options, function(error, response, body) {
          callback(body);
        });
      }
    },
  };

  return signatureio;
}

module.exports = signatureio;
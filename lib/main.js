"use strict";
var request = require('request');

function signatureio(secret_api_key, public_api_key) {
  signatureio.secret_api_key = secret_api_key || null;
  signatureio.public_api_key = public_api_key || null;

  return signatureio;
}

module.exports = signatureio;
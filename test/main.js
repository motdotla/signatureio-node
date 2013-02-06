var should      = require('should');
var assert      = require('assert');
var signatureio = require('../lib/main');

describe('signatureio', function() {
  describe('with no arguments', function() {
    it('sets the secret and public keys to null', function() {
      var result = signatureio();

      assert.equal(result.secret_api_key, null);
      assert.equal(result.public_api_key, null);
    });
  });

  describe('with arguments', function() {
    it('sets the secret and public keys to their values', function() {
      var result = signatureio("sk_1234", "pk_5678");

      assert.equal(result.secret_api_key, "sk_1234");
      assert.equal(result.public_api_key, "pk_5678");
    });
  });
});
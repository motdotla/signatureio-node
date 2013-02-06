var assert      = require('assert'),
    request     = require('request'),
    should      = require('should'),
    signatureio = require('../lib/main'),
    sys         = require('sys');

var valid_secret_api_key = process.env.SIGNATURE_SECRET_API_KEY;

if (!valid_secret_api_key) {
    sys.puts('To run mocha specs, you must have a SIGNATURE_SECRET_API_KEY environment variable with a test api key');
    process.exit(2)
}

describe('signatureio', function() {
  describe('with no arguments', function() {
    it('sets the api_url', function() {
      var result = signatureio();

      result.api_url.should.eql("https://www.signature.io/api/v0");
    });

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

  describe('/documents', function() {
    it('returns false for success parameter', function(done) {
      var result = signatureio("invalid_key");
      
      result.documents.all(function(resp) {
        resp.success.should.eql(false);
        done();
      });
    });

    it('returns true for correct api key', function(done) {
      var result = signatureio(valid_secret_api_key);

      result.documents.all(function(resp) {
        resp.success.should.eql(true);
        resp.documents.should.not.eql([]);
        done();
      });
    });
  });
});
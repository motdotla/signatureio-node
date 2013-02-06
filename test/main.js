var should    = require('should');
var signatureio = require('../lib/main');

describe('signatureio', function() {
  describe('with no arguments', function() {
    it('returns an empty array', function() {
      var result = signatureio();
      result.should.eql([]);
    });
  });
});
/**
 * Module dependencies
 */
var expect = require('chai').expect;

var longest_sequence = require('root-require')('longest_sequence/index');
var fixtures   = require('./fixtures/longest_sequence/index');

describe('Scheduling probleme', function () {
  it('should get the maxium out of the possibilities', function () {
   expect(
      longest_sequence(fixtures.input)
    ).to.deep.equal(fixtures.resultat);
  });
});

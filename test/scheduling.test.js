/**
 * Module dependencies
 */
var expect = require('chai').expect;

var scheduling = require('root-require')('scheduling/index');
var fixtures   = require('./fixtures/scheduling/index');


describe('Scheduling probleme', function () {
  it('should get the maxium out of the possibilities', function () {
   expect(
      scheduling(fixtures.input)
    ).to.deep.equal(fixtures.resultat);
  });
});

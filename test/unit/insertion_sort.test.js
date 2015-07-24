/**
 * Module dependencies
 */
var expect = require('chai').expect;


var insertionSort = require('root-require')('insertion_sort/index');

describe('Insertion sort', function () {
  it('Shouldn\'t sort an array already sorted', function () {
    var input = [1, 2, 3];

     expect(
        insertionSort(input)
      ).to.deep.equal([1,2,3]);
  });

  it('Should sort an array of numbers', function () {
    var input = [3, 2, 1];

     expect(
        insertionSort(input)
      ).to.deep.equal([1,2,3]);
  });

  it('Should sort an array of letters', function () {
    var input = ['c', 'a', 'b'];

     expect(
        insertionSort(input)
      ).to.deep.equal(['a','b','c']);
  });

  it('Should sort an array of words', function () {
    var input = ['zoo', 'bar', 'hello'];

    expect(
      insertionSort(input)
    ).to.deep.equal(['bar','hello','zoo']);
  });
});

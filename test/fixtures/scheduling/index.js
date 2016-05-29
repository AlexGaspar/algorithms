module.exports = {
  // INPUT
  input: [{ name: 'TED', start: 3, duration: 1},
    { name: 'Tarjan', start: 0, duration: 3},
    { name: 'Harry Potter', start: 1, duration: 4 },
    { name: 'Billy the kids', start: 5, duration:  5},
    { name: 'Lord of the ring', start: 10, duration:  4},
    { name: 'PS: I love you', start: 2, duration:  1},
    { name: 'Fast and furious', start: 5, duration:  2}],
  // OUTPUT
  resultat: [ { name: 'Tarjan', start: 0, duration: 3 },
    { name: 'TED', start: 3, duration: 1 },
    { name: 'Fast and furious', start: 5, duration: 2 },
    { name: 'Lord of the ring', start: 10, duration: 4 } ]
};

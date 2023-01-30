var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
it('returns the output of 5!', () => {
      const expectedResult = 120;    
      const result = Calculate.factorial(5);    
      assert.equal(result, expectedResult);
    });
it('returns the output of 3!', () => {
      const expectedResult = 6;    
      const result = Calculate.factorial(3);    
      assert.equal(result, expectedResult);
    });
    it('returns the output of 0!', () => {
      const expectedResult = 1;    
      const result = Calculate.factorial(0);    
      assert.equal(result, expectedResult);
    });
  });
});
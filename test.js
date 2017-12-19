var assert = require('assert');

describe('String#split', function(){
  it('should split and return an array', function(){
    assert(Array.isArray('a,b,c,d,e,f,g,h'.split(',')));
  });
});

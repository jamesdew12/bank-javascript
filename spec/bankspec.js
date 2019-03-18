'use strict';

describe('Bank;', function(){
  var bank;
  beforeEach(function() {
    bank = new Bank();
  });
  it('has an intial balance of zero', function(){
    expect(bank.balance()).toEqual(0);

  });


});

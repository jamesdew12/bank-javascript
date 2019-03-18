'use strict';

function Bank(){
  this._current_balance = 0;
}

Bank.prototype.balance = function () {
return this._current_balance; };

'use strict';

function Bank(){
  this._current_balance = 0;
}

Bank.prototype.balance = function () {
return this._current_balance; };

Bank.prototype.deposit = function (amount) {
  this._current_balance += amount;
  return this._current_balance; };

Bank.prototype.withdraw = function (amount) {
  this._current_balance -= amount;
  return this._current_balance; };

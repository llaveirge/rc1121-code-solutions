/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var deposit = new Transaction('deposit', amount);

  if (deposit.amount > 0 && Number.isInteger(deposit.amount) === true) {
    this.transactions.push(deposit);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  var withdraw = new Transaction('withdrawal', amount);

  if (withdraw.amount > 0 && Number.isInteger(withdraw.amount) === true) {
    this.transactions.push(withdraw);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  var depositSum = 0;
  var withdrawalSum = 0;

  for (var transaction of this.transactions) {
    if (transaction.type === 'deposit') {
      depositSum += transaction.amount;
    }

    if (transaction.type === 'withdrawal') {
      withdrawalSum += transaction.amount;
    }
  }

  var balance = depositSum - withdrawalSum;

  return balance;
};

const LogTransaction = require("./LogTransaction");
const FormatTransactions = require("./FormatTransaction");

class BankAccount {
  constructor(StartBalance = 0.00) { 
    this.transactions = [];
    this.balance = StartBalance;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return "Withdrawal request denied, you have insufficient funds for the amount requested";
    } else {
      this.balance -= amount;
      this.transactions.push(new LogTransaction(amount, 0, this.balance));
    }
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(new LogTransaction(0, amount, this.balance).returnTransaction());
  }

  latestTransaction() {
    if (this.transactions.length === 0) {
      return "No transactions have been made with this account.";
    }
  }

  allTransactions() {
    if (this.transactions.length === 0) {
      return "No transactions have been made with this account.";
    } else {
      return new FormatTransactions(this.transactions).format();
    }
  }
}

module.exports = BankAccount;
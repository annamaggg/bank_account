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
      const transaction = new LogTransaction(amount, 0, this.balance);
      this.transactions.push(transaction);
    }
  }

  deposit(amount) {
    this.balance += amount;
    const transaction = new LogTransaction(0, amount, this.balance).returnTransaction();
    this.transactions.push(transaction);
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
      const output = new FormatTransactions(this.transactions).format();
      return output;
    }
  }
}

module.exports = BankAccount;
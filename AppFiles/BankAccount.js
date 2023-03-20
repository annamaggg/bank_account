const Transaction = require("./Transaction");

class BankAccount {
  constructor(StartBalance = 0.00){ //check syntax
    this.transactions = [];
    this.balance = StartBalance;
  }

  getTransactionDate() {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return "Withdrawal request denied, you have insufficient funds for the amount requested";
    } else {
      this.balance -= amount;
      const transaction = new Transaction(this.getTransactionDate(), amount, 0.00, this.balance);
      this.transactions.push(transaction);
    }
  }

  deposit(amount) {
    this.balance += amount;
    const transaction = new Transaction(this.getTransactionDate(), 0.00, amount, this.balance);
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
      return this.transactions;
    }
  }
}

module.exports = BankAccount;
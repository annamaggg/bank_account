class BankAccount {
  constructor(StartBalance = 0.00){ //check syntax
    this.transactions = [];
    this.balance = StartBalance;
  }

  withdraw(amount) {

  }

  deposit(amount) {

  }

  latestTransaction() {

  }

  allTransactions() {
    if (this.transactions.length === 0) {
      return "No transactions have been made with this account.";
    }
  }
}

module.exports = BankAccount;
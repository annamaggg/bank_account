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

  }

  deposit(amount) {
    

  }

  latestTransaction() {
    if (this.transactions.length === 0) {
      return "No transactions have been made with this account.";
    }
  }

  allTransactions() {
    if (this.transactions.length === 0) {
      return "No transactions have been made with this account.";
    }
  }
}

module.exports = BankAccount;
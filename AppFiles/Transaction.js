class Transaction {
  constructor(credit, debit, balance) {
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

  getTransactionDate() {
    let date = new Date();
    let month = date.getMonth()+1;
    if (month.length < 2) {
      month = `0${month}`
    }

    return `${date.getDate()}/${month}/${date.getFullYear()}`;
  }

  returnTransaction() {
    return ({
      date: this.getTransactionDate(),
      credit: this.credit,
      debit: this.debit,
      balance: this.balance
    })
  }
}

module.exports = Transaction;
class Transaction {
  constructor(date, credit, debit, balance) {
    this.date = date;
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

  returnTransaction() {
    return ({
      date: this.date,
      credit: this.credit,
      debit: this.debit,
      balance: this.balance
    })
  }
}

module.exports = Transaction;
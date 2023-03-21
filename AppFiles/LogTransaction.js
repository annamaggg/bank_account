class LogTransaction {
  constructor(credit, debit, balance) {
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

  getTransactionDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    
    if (month < 10) {
      month = `0${month}`;
    }

    return `${day}/${month}/${year}`;
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

module.exports = LogTransaction;
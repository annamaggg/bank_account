class FormatTransaction {
  constructor(transactions) {
    this.transactions = transactions;
  }

  format() {
    let statement = "date || credit || debit || balance"

    this.transactions.forEach(element => {
      const date = element.date;
      const credit = this.stringifyNumber(element.credit);
      const debit = this.stringifyNumber(element.debit);
      const balance = this.stringifyNumber(element.balance);

      statement += `\n${date} || ${credit} || ${debit} || ${balance}`;
    });

    return statement;
  }

  stringifyNumber(num) {
    if (num === 0) {
      return "";
    } else if (num === Math.floor(num)) {
      return `${num.toString()}.00`;
    } else {
      return num.toFixed(2).toString();
    }
  }
}

module.exports = FormatTransaction;
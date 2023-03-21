class FormatTransaction {
  constructor(transactions) {
    this.transactions = transactions;
  }

  format() {
    let statement = "date || credit || debit || balance"
    // const newLine = '\n'
    // const divider = ' || '

    //return `${this.header + newLine + this.transactions.date + divider + parseFloat(this.transactions.credit) + divider + parseFloat(this.transactions.debit) + divider + parseFloat(this.transactions.balance)}`;

    this.transactions.forEach(element => {
      const date = element.date;
      const credit = this.stringifyNumber(element.credit);
      const debit = this.stringifyNumber(element.debit);
      const balance = this.stringifyNumber(element.balance);

      // if (element.credit === 0) {
      //   credit = "";
      // } else if (element.credit === Math.floor(element.credit)) {
      //   credit = `${element.credit.toString()}.00`;
      // } else {
      //   credit = element.credit.toFixed(2).toString();
      // }

      // if (element.debit === 0) {
      //   debit = "";
      // } else if (element.debit === Math.floor(element.debit)) {
      //   debit = `${element.debit.toString()}.00`;
      // } else {
      //   debit = element.debit.toFixed(2).toString();
      // }

      statement += `\n${date} || ${credit} || ${debit} || ${balance}`;
    });

    console.log(statement);
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
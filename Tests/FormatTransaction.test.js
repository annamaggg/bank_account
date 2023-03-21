const FormatTransaction = require('../AppFiles/FormatTransaction');

describe('FormatTransaction', () => {
  it('converts a number of zero to an empty string', () => {
    const formatTransaction = new FormatTransaction([]);
    expect(formatTransaction.stringifyNumber(0)).toEqual("");
  })

  it('converts an integer to a float with .00 as a string', () => {
    const formatTransaction = new FormatTransaction([]);
    expect(formatTransaction.stringifyNumber(20)).toEqual("20.00");
  })

  it('converts a float to a string with two decimal places', () => {
    const formatTransaction = new FormatTransaction([]);
    expect(formatTransaction.stringifyNumber(20.003)).toEqual("20.00");
  })

  it('returns a single formatted transaction', () => {
    const transaction = [{
      date: '21/3/2023',
      credit: 0,
      debit: 200.00,
      balance: 200.00
    }]

    const formatTransaction = new FormatTransaction(transaction);

    expect(formatTransaction.format()).toEqual("date || credit || debit || balance\n21/3/2023 ||  || 200.00 || 200.00")
  })

  it('returns multiple transactions correctly formatted', () => {
    const transactions = [{
      date: '21/3/2023',
      credit: 0,
      debit: 200.00,
      balance: 200.00
    },
    {
      date: '22/4/2023',
      credit: 30,
      debit: 0,
      balance: 170.00
    }]

    const formatTransaction = new FormatTransaction(transactions);

    expect(formatTransaction.format()).toEqual("date || credit || debit || balance\n21/3/2023 ||  || 200.00 || 200.00\n22/4/2023 || 30.00 ||  || 170.00")
  })
})
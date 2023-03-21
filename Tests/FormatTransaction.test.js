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
})
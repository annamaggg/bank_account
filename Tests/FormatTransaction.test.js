const FormatTransaction = require('../AppFiles/FormatTransaction');

describe('FormatTransaction', () => {
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
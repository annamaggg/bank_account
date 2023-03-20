const Transaction = require('../AppFiles/Transaction');

describe('Transaction', () => {
  it('Adds new transaction, which is returned as object', () => {
    const transaction = new Transaction('21/03/23', "", 200.00, 200.00);

    expect(transaction.returnTransaction()).toEqual({
      date: '21/03/23',
      credit: "",
      debit: 200.00,
      balance: 200.00
    })
  })

  xit('Adds new transaction with incorrect data types, and is corrected', () => {
    const transaction = new Transaction('21/03/23', 30, "", 60.00);

    expect(transaction.returnTransaction()).toEqual({
      date: '21/03/23',
      credit: 30.00,
      debit: "",
      balance: 60.00
    })
  })
})
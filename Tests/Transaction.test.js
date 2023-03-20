const Transaction = require('../AppFiles/Transaction');

describe('Transaction', () => {
  it('Adds new transaction with correct data types, which is returned as object', () => {
    const transaction = new Transaction('21/03/23', 0, 200, 0);

    expect(transaction.returnTransaction()).toEqual({
      date: '21/03/23',
      credit: 0,
      debit: 200,
      balance: 0
    })
  })
})
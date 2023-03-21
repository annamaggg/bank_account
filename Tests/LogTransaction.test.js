const LogTransaction = require('../AppFiles/LogTransaction');

describe('Transaction', () => {
  it('Adds new transaction, which is returned as object', () => {
    const transaction = new LogTransaction("", 200.00, 200.00);

    expect(transaction.returnTransaction()).toEqual({
      date: '21/03/2023',
      credit: "",
      debit: 200.00,
      balance: 200.00
    })
  })

  // The below test must be updated to match the current date for it to pass

  it('creates a bank account and returns current date', () => { 
    const account = new LogTransaction(0, 0, 0);

    expect(account.getTransactionDate()).toEqual("21/03/2023");
  })

  
  xit('Adds new transaction with incorrect data types, and is corrected', () => {
    const transaction = new LogTransaction(30, "", 60.00);

    expect(transaction.returnTransaction()).toEqual({
      date: '21/3/23',
      credit: 30.00,
      debit: "",
      balance: 60.00
    })
  })
})
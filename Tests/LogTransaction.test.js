const LogTransaction = require('../AppFiles/LogTransaction');

describe('Transaction', () => {
    // The below test must be updated to match the current date for it to pass

  it('creates a bank account and returns current date', () => { 
    const account = new LogTransaction(0, 0, 0);
  
    expect(account.getTransactionDate()).toEqual("22/03/2023");
  })

  it('Adds new transaction, which is returned as object', () => {
    const transaction = new LogTransaction(0, 200.00, 200.00);

    expect(transaction.returnTransaction().credit).toEqual(0);
    expect(transaction.returnTransaction().debit).toEqual(200.00);
    expect(transaction.returnTransaction().balance).toEqual(200.00);
  })
})
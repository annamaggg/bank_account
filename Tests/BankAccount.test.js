const BankAccount = require('../AppFiles/BankAccount');

describe('BankAccount', () => {
  it('creates a bank account and returns no transaction history', () => {
    const account = new BankAccount();
    expect(account.allTransactions()).toEqual("No transactions have been made with this account.")
  })
})
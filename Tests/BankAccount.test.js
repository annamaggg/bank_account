const BankAccount = require('../AppFiles/BankAccount');

describe('BankAccount', () => {
  it('creates a bank account and returns no transaction history', () => {
    const account = new BankAccount();
    expect(account.latestTransaction()).toEqual("No transactions have been made with this account.")
    expect(account.allTransactions()).toEqual("No transactions have been made with this account.")
  })

  it('creates a bank account and returns current date', () => {
    const account = new BankAccount();
    expect(account.getTransactionDate()).toEqual("20/3/2023")
  })

  xit('makes a deposit and returns the transaction', () => {
    const account = new BankAccount();
    account.deposit(300);
    expect(account.latestTransaction()).toEqual({

    })
  })
})
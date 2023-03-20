const BankAccount = require('../AppFiles/BankAccount');

describe('BankAccount', () => {
  it('creates a bank account and returns no transaction history', () => {
    const account = new BankAccount();
    expect(account.latestTransaction()).toEqual("No transactions have been made with this account.")
    expect(account.allTransactions()).toEqual("No transactions have been made with this account.")
  })

  // The below test must be updated to match the current date for it to pass

  it('creates a bank account and returns current date', () => { 
    const account = new BankAccount();
    expect(account.getTransactionDate()).toEqual("20/3/2023")
  })

  it('makes a deposit of 300 with starting balance 400 and returns the transaction', () => {
    const account = new BankAccount(400.00);
    account.deposit(300.00);

    expect(account.allTransactions()[0].date).toBeTruthy;
    expect(account.allTransactions()[0].credit).toEqual(0);
    expect(account.allTransactions()[0].debit).toEqual(300.00);
    expect(account.allTransactions()[0].balance).toEqual(700.00);
  })
})
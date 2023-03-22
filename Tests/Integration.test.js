const BankAccount = require('../AppFiles/BankAccount');

describe('BankAccount', () => {

  it('makes a deposit of 300 with starting balance 400 and returns the transaction', () => {
    const account = new BankAccount(400.00);
    account.deposit(300.00);

    expect(account.allTransactions()).toBeTruthy;
    expect(account.allTransactions()).toMatch(/date || credit || debit || balance/);
    expect(account.allTransactions()).toMatch(/21\/03\/2023 ||  || 300.00 || 700.00/);
  })


  it('makes a withdrawal of 10 then deposit of 25 with starting balance 50 and returns the transaction', () => {
    const account = new BankAccount(50.00);
    account.withdraw(10.00);
    account.deposit(25.00);

    expect(account.allTransactions()).toMatch(/date || credit || debit || balance/);
    expect(account.allTransactions()).toMatch(/21\/03\/2023 || 10.00 ||  || 40.00/);
    expect(account.allTransactions()).toMatch(/21\/03\/2023 ||  || 25.00 || 65.00/);
  })


  it('makes an invalid withdrawal which returns declined', () => {
    const account = new BankAccount(50.00);
    expect(account.withdraw(70.00)).toEqual("Withdrawal request denied, you have insufficient funds for the amount requested");
    expect(account.allTransactions()).toEqual("No transactions have been made with this account.");
  })
})
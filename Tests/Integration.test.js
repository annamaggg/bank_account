const BankAccount = require('../AppFiles/BankAccount');

describe('BankAccount', () => {

  it('makes a deposit of 300 with starting balance 400 and returns the transaction', () => {
    const account = new BankAccount(400.00);
    account.deposit(300.00);

    expect(account.allTransactions()).toBeTruthy;
    expect(account.allTransactions()).toEqual("date || credit || debit || balance\n21/03/2023 ||  || 300.00 || 700.00");
  })


  xit('makes a withdrawal of 10 with starting balance 50 and returns the transaction', () => {
    const account = new BankAccount(50.00);
    account.withdraw(10.50);

    expect(account.allTransactions()[0].date).toBeTruthy;
    expect(account.allTransactions()[0].credit).toEqual(10.50);
    expect(account.allTransactions()[0].debit).toEqual(0);
    expect(account.allTransactions()[0].balance).toEqual(39.50);
  })


  it('makes an invalid withdrawal which returns declined', () => {
    const account = new BankAccount(50.00);
    expect(account.withdraw(70.00)).toEqual("Withdrawal request denied, you have insufficient funds for the amount requested");
    expect(account.allTransactions()).toEqual("No transactions have been made with this account.");
  })
})
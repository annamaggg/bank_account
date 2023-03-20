## Class design

const BankAccount = New BankAccount();

BankAccount.deposit;
BankAccount.withdrawal;
BankAccount.printStatement;

### Things to consider

  - ensure values are returned as a float to two decimal places
  - if withdrawal amount exceeds amount available in balance, deny the request
  - ability to cancel the last transaction (optional)

### Notes

debits (dr) record all of the money flowing into an account, while credits (cr) record all of the money flowing out of an account

debit = deposit
credit = withdrawal


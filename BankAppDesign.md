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

debit = withdrawal 
credit = deposit


## Class design

const BankAccount = New BankAccount();

BankAccount.deposit;
BankAccount.withdrawal;
BankAccount.printStatement;

### Things to consider

user input:
  float for deposit, withdrawal and balance => if an integer, convert to float
  if empty string, nil or 0 is entered for no withdrawal/balace, convert to float

### Notes

debits (dr) record all of the money flowing into an account, while credits (cr) record all of the money flowing out of an account

debit = deposit
credit = withdrawal


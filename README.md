# Bank tech test

## Description

The user is able to input deposit amounts, or withdrawal amounts into a bank system. A statement is returned including the date of each transaction, amount of withdrawal or deposit and the resulting balance. An example of an output is shown below:

    date || credit || debit || balance
    14/01/2023 || || 500.00 || 2500.00
    13/01/2023 || 2000.00 || || 3000.00
    10/01/2023 || 1000.00 || || 1000.00


This project is written in JavaScript and can be run with Node.js. The progress is tracked with Git and the repository can be found through this link: 

    https://github.com/annamaggg/bank_account



## How to Install and Run the Project

The application can be run with Node.js. One way to install this from the terminal is described as follows:

Install NVM (Node Version Manager) from github:

    $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

You will need to reload your .zshrc file:

    $ source ~/.zshrc

Install Node using nvm:

    $ nvm install node
    $ nvm use node

Run the file in node: (Make sure you are in the same directory which contains the project files)

    $ node


## How to Use the Project

Some examples of how to interact with the application are shown below (while node is running and in the bank_account directory).

    $ const BankAccount = require('./AppFiles/BankAccount');

    $ const myAccount = new BankAccount(50.00); 
    // The number passed is the start balance, with a default value of 0.

    $ myAccount.withdraw(20.00);

    $ myAccount.deposit(60.00);

    $ myAccount.deposit(10.00);

    $ myAccount.allTransactions();

        date || credit || debit || balance
        22/03/2023 || 20.00 ||  || 30.00
        22/03/2023 ||  || 60.00 || 90.00
        22/03/2023 ||  || 10.00 || 100.00





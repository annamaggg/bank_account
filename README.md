# Bank tech test

## Description

//What your application does//

The user is able to input deposit amounts, or withdrawal amounts into a bank system. A statement is returned including the date of the transaction, amount of withdrawal or deposit and the resulting balance. An example of an output is shown below:

    date || credit || debit || balance
    14/01/2023 || || 500.00 || 2500.00
    13/01/2023 || 2000.00 || || 3000.00
    10/01/2023 || 1000.00 || || 1000.00


//Why you used the technologies you used//

This project is written in JavaScript and can be run with Node.js. The progress is tracked with Git and the repository can be found through this link: 

    https://github.com/annamaggg/bank_account

//Some of the challenges you faced and features you hope to implement in the future//


## How to Install and Run the Project

The application can be run with Node.js. One way to install this from the terminal is described as follows:

Install NVM (Node Version Manager) from github:

    $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

You will need to reload your .zshrc file:

    $ source ~/.zshrc

Install Node using nvm:

    $ nvm install node
    $ nvm use node

Run the file: (Make sure you are in the same directory which contains the app.js file)

    $ node BankApp.js


## How to Use the Project

When the application is running, 


/* 
    Необходимо создать объект bankAccount (дебет), представляющий собой банковский счёт со
    следующими свойствами:

    1. accountNumber: 123456789;
    2. accountHolderName: 'Alice';
    3. balance: 1000;
    4. deposit() для описания действия по добавлению денежных средств на счёт;
    5. withdraw() для описания действия по снятию денежных средств со счёта;
    6. checkBalance() для проверки баланса

*/

const bankAccount = {
    accountNumber: 123456789,
    accountHolderName: 'Alice',
    balance: 1000,
    deposit: (sum) => {
        if (sum >= 0) {
            bankAccount.balance += sum;
            console.log(`Deposited ${sum}. New balance total: ${bankAccount.balance}`);
        } else {
            console.log('Invalid deposit amount');
        }
    },
    withdraw: (sum) => {
        if (sum >= 0) {
            if (bankAccount.balance >= sum) {
                bankAccount.balance -= sum;
                console.log(`Withdraw ${sum}. New balance total: ${bankAccount.balance}`);
            } else {
                console.log(' Cannot withdraw sum.');
            }
        } else {
            console.log('Invalid withdrawal amount');
        }
    },
    checkBalance: () => {
        console.log(`Balance: ${bankAccount.balance}`);
    }
};


bankAccount.deposit(500); 
bankAccount.withdraw(200); 
bankAccount.checkBalance(); 

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const accountNumberInput = document.querySelector('input').value;
    const accountNumber = parseInt(accountNumberInput, 10); 

    if (!isNaN(accountNumber) && accountNumber === bankAccount.accountNumber) {
        bankAccount.deposit(500);
        bankAccount.withdraw(200);
        bankAccount.checkBalance();
    } else {
        console.log('Invalid Account Number');
    }
});








    
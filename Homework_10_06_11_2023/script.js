const bank = [];

const bankAccount = {
    accountNumber: '123456789',
    accountHolderName: 'Alice',
    balance: 1000,
    deposit: function(amount) {
        if (typeof amount === 'number' && !isNaN(amount)) {
            amount > 0 && amount < 100000 ?
                this.balance += amount : (
                    amount <= 0 ?
                        console.log('Проверьте сумму, которую пытаетесь положить на счёт'):
                        console.log('Требуется подтверждение легальности доходов')
                );
        }
        
    },
    withdraw: function(amount) {
        if (typeof amount === 'number' && !isNaN(amount)) {
            amount > 0 && amount <= this.balance?
                this.balance -= amount : (
                    amount <= 0 ?
                        console.log('Проверьте вводимые данные'):
                        console.log('Проверьте баланс вашего аккаунта')
                );
        }
    },
    checkBalance() {
        console.log(`Баланс вашего счёта равен: ${this.balance}`);
    }
}

bankAccount.checkBalance();

bankAccount.deposit(500);
bankAccount.checkBalance();
bankAccount.deposit(100500);
bankAccount.checkBalance();
bankAccount.deposit(-500);
bankAccount.checkBalance();

bankAccount.withdraw(500);
bankAccount.checkBalance();
bankAccount.withdraw(100500);
bankAccount.checkBalance();
bankAccount.withdraw(-500);
bankAccount.checkBalance();

const nameInput = document.getElementById('name');
const accountIdInput = document.getElementById('accountId');
const amountInput = document.getElementById('amount');
const accountListOl = document.getElementById('accountList');
const depositBtn = document.getElementById('deposit');
const withdrawBtn = document.getElementById('withdraw');

const date = new Date();
console.log(date.getTime()); // кол-во миллисекунд с 1 января 1970 года (всегда уникальное значение)

// 1699265339545 / 1000 / 60 / 60 / 24 / 365 = 53.883350442193056      Пример перевода числа из миллисекунд в года

function createAccount() {
    if (nameInput.value.trim()) {
        const date = new Date();
        bank.push({...bankAccount, balance: 0, accountHolderName: nameInput.value.trim(), accountNumber: date.getTime() + ''})
        nameInput.value = '';
        console.log(bank);
    };
}

function showAccounts() {
    accountListOl.innerHTML = '';
    bank.forEach(account => {
        const li = document.createElement('li');
        li.innerHTML = `
            <p>Username: ${account.accountHolderName}</p>
            <p>Account number: ${account.accountNumber}</p>
            <p>Balance: ${account.balance}</p>
        `;
        accountListOl.appendChild(li);
    })
}

depositBtn.onclick = function() {
    const id = accountIdInput.value.trim();
    const amount = +amountInput.value.trim();
    index = bank.findIndex(account => id === account.accountNumber);

    if (index === -1) {
        console.log('Проверьте правильность ввода номера аккаунта');
    } else {
        if (!isNaN(amount)) {
            bank[index].deposit(amount);
        };
    };

    accountIdInput.value = amountInput.value = '';
}

withdrawBtn.onclick = function() {
    const id = accountIdInput.value.trim();
    const amount = +amountInput.value.trim();
    index = bank.findIndex(account => id === account.accountNumber);

    if (index === -1) {
        console.log('Проверьте правильность ввода номера аккаунта');
    } else {
        if (!isNaN(amount)) {
            bank[index].withdraw(amount);
        };
    };

    accountIdInput.value = amountInput.value = '';
}
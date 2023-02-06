import inquirer from 'inquirer';
async function transfer(balance) {
    const answer = await inquirer.prompt([
        {
            name: 'accountNumber',
            type: 'number',
            message: 'Enter account number',
        },
        {
            name: 'amount',
            type: 'number',
            message: 'Enter your amount',
        },
    ]);
    if (balance > answer.amount) {
        balance -= answer.amount;
    }
    else {
        console.log('you have insufficient balance');
    }
    return balance;
}
export default transfer;

import inquirer from 'inquirer';
import cashWithdraw from './cashWithdraw.js';
import cashDeposit from './cashDeposit.js';
import transfer from './transfer.js';
import Utility from './utilityBills.js';
import chalk from 'chalk';
async function anotherTransaction() {
    const oTrans = await inquirer.prompt([
        {
            name: 'otherTrans',
            type: 'list',
            choices: ['Yes', 'No'],
            message: 'Do you want another transaction ?   ',
        },
    ]);
    return oTrans.otherTrans;
}
async function mainScreen(balance) {
    do {
        const option = await inquirer.prompt([
            {
                name: 'menu',
                type: 'list',
                choices: [
                    'Balance Inquiry',
                    'Cash Withdrawal',
                    'Cash Deposit',
                    'Transfer',
                    'Utility Bills',
                    'Exit',
                ],
                message: 'Please select your transaction type ?',
            },
        ]);
        switch (option.menu) {
            case 'Balance Inquiry':
                console.log(chalk.yellow(`Your current balance is ${balance}`));
                break;
            case 'Cash Withdrawal':
                balance = await cashWithdraw(balance);
                console.log(chalk.yellow(`Your current balance is ${balance}`));
                break;
            case 'Cash Deposit':
                balance = await cashDeposit(balance);
                console.log(chalk.yellow(`Your current balance is ${balance}`));
                break;
            case 'Transfer':
                balance = await transfer(balance);
                console.log(chalk.yellow(`Your current balance is ${balance}`));
                break;
            case 'Utility Bills':
                balance = await Utility(balance);
                console.log(`your transaction is successfull, your new balance is ${balance}`);
                break;
            case 'Exit':
                anothertran = 'No';
                break;
        }
        if (option.menu !== 'Exit') {
            var anothertran = await anotherTransaction();
        }
        if (anothertran == 'No') {
            console.log(chalk.yellow('Thank  you for using our services'));
        }
    } while (anothertran != 'No');
}
export default mainScreen;

import inquirer from 'inquirer';
async function OtherAmount(balance) {
    const otherAmt = await inquirer.prompt([
        {
            name: 'otherAmount',
            type: 'number',
            message: 'please enter your amount ',
        },
    ]);
    if (otherAmt.otherAmount < balance) {
        balance -= otherAmt.otherAmount;
    }
    else {
        console.log('You have insufficient balance');
        balance = await OtherAmount(balance);
    }
    return balance;
}
async function cashWithdraw(balance) {
    const answer = await inquirer.prompt([
        {
            name: 'amount',
            type: 'list',
            choices: ['500', '1000', '1500', '2000', '5000', '10000', 'OtherAmount'],
            message: 'please select your amount ',
        },
    ]);
    switch (answer.amount) {
        case '500':
            if (balance > Number(answer.amount)) {
                balance -= 500;
                console.log(`Your new balance is ${balance}`);
            }
            else {
                console.log('Your account balance is insufficient');
            }
            break;
        case '1000':
            if (balance > Number(answer.amount)) {
                balance -= 1000;
                console.log(`Your new balance is ${balance}`);
            }
            else {
                console.log('Your account balance is insufficient');
            }
            break;
        case '1500':
            if (balance > Number(answer.amount)) {
                balance -= 1500;
                console.log(`Your new balance is ${balance}`);
            }
            else {
                console.log('Your account balance is insufficient');
            }
            break;
        case '2000':
            if (balance > Number(answer.amount)) {
                balance -= 2000;
                console.log(`Your new balance is ${balance}`);
            }
            else {
                console.log('Your account balance is insufficient');
            }
            break;
        case '5000':
            if (balance > Number(answer.amount)) {
                balance -= 5000;
                console.log(`Your new balance is ${balance}`);
            }
            else {
                console.log('Your account balance is insufficient');
            }
            break;
        case '10000':
            if (balance > Number(answer.amount)) {
                balance -= 10000;
                console.log(`Your new balance is ${balance}`);
            }
            else {
                console.log('Your account balance is insufficient');
            }
            break;
        case 'OtherAmount':
            balance = await OtherAmount(balance);
            console.log(`Your new balance is ${balance}`);
            break;
    }
    return balance;
}
export default cashWithdraw;

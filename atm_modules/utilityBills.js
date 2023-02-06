import inquirer from 'inquirer';
const Electric = Math.ceil(Math.random() * 1000 + 1);
const Gas = Math.ceil(Math.random() * 1000 + 1);
const Phone = Math.ceil(Math.random() * 1000 + 1);
async function Utility(balance) {
    const input = await inquirer.prompt([
        {
            name: 'BillType',
            type: 'list',
            choices: ['Electricity', 'Gas', 'Phone'],
            message: 'Please select your bill type',
        },
    ]);
    if (input.BillType == 'Electricity') {
        console.log(`Your electric bill is ${Electric}`);
        balance -= Electric;
    }
    else if (input.BillType == 'Gas') {
        console.log(`Your electric bill is ${Gas}`);
        balance -= Gas;
    }
    else if (input.BillType == 'Phone') {
        console.log(`Your electric bill is ${Phone}`);
        balance -= Phone;
    }
    return balance;
}
export default Utility;

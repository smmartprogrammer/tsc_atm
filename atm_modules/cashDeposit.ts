import inquirer from 'inquirer';

async function cashDeposit(balance: number) {
  const amount = await inquirer.prompt([
    {
      name: 'amt',
      type: 'number',
      message: 'Enter your amount',
    },
  ]);
  balance += amount.amt;
  return balance;
}

export default cashDeposit;

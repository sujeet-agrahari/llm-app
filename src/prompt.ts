import inquirer from "inquirer"

async function promptUserQuery () {
    const { userQuery } = await inquirer.prompt([
      {
        type: "input",
        name: 'userQuery',
        message: "🤖 How can I help you?"
      }
    ])
    return userQuery
  }

export { promptUserQuery }
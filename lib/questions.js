const { select, confirm, input } = require("@inquirer/prompts");

async function createQuestion() {
  const isDefaultTemp = await confirm({
    message: "Use default template?",
    default: true
  })

  const templateUrl = !isDefaultTemp && await input({
    message: "Input you template url.",
    validate: (str) => {
      if(!str) return "You must you template url!";
      return true;
    }
  })

  const toolName = isDefaultTemp && await select({
    message: "Select you packing tool.",
    choices: [
      {name: "webpack", value: "webpack"},
      {name: "vite", value: "vite"}
    ]
  })

  return {
    toolName,
    isDefaultTemp,
    templateUrl
  }
}

module.exports = {
  createQuestion
}
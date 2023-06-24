const { promisify } = require("util");

let oraM = import("ora");


const download = promisify(require("download-git-repo"));

const { createQuestion } = require("./questions");

async function createCommandAction(projectName) {
  const { isDefaultTemp, templateUrl, toolName } = await createQuestion();

  const _url = {
    "webpack": "direct:git@github.com:qinmingjie/webpack-template-vue.git#main",
    "vite": "direct:git@github.com:qinmingjie/webpack-template-vue.git#vite"
  };

  let _templateUrl = toolName ? _url[toolName] : templateUrl;

  // Download template
  try {
    await download(_templateUrl, projectName, { clone: true });
    console.log("project create success");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createCommandAction
}


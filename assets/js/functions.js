const fs = require("fs")
const promptQuestions = require("../../index")


const init = () => {
   const data = promptQuestions()
   console.log(data)
   const generateReadMe = generateMarkdown(data)
    fs.writeFileSync("./dest/README.md", generateReadMe)
}




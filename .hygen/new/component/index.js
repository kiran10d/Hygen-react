module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "select",
        name: "category",
        message: "Which Atomic design level you want to create?",
        choices: ["atoms", "molecules", "organisms", "templates", "pages"],
      },
      {
        type: "input",
        name: "component_name",
        message: "What is the name of the Component?",
      },
      {
        type: "input",
        name: "dir",
        message: "Where does the directory located (Optional)?",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { category, component_name, dir } = answers;
      const path = `${category}/${dir ? `${dir}/` : ``}${component_name}`;
      const absPath = `src/components/${path}`;
      return { ...answers, path, absPath, category };
    });
  },
};

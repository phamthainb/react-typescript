/**
 * Container Generator
 */

module.exports = {
  description: "Add a container component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Home",
    },
    {
      type: "input",
      name: "path",
      default: "",
      message: "What is path ?",
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: "add",
        path: `../src/containers/${
          data.path ? data.path + "/" : ""
        }{{properCase name}}/index.tsx`,
        templateFile: "./containers/index.tsx.hbs",
        abortOnFail: true,
      },
    ];

    return actions;
  },
};

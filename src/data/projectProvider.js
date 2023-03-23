import projects from "./projects.json" assert { type: "json" };

const projectProvider = () => {
  return projects;
};

export { projectProvider };

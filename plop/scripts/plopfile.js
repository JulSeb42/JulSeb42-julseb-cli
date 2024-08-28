import runCommandAction from "./actions/run-command.js";
import projectGenerator from "./generators/project.js";
const plop = (plop) => {
    // Function to run commands inside the terminal
    runCommandAction(plop);
    projectGenerator(plop); // plop:p
};
export default plop;

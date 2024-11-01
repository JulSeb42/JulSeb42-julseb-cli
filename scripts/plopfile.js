import runCommandAction from "./actions/run-command.js";
import projectGenerator from "./generators/project.js";
import surroundBracketsHelper from "./helpers/surroundBrackets.js";
import addOpenBrackets from "./helpers/addOpenBrackets.js";
import addClosingBrackets from "./helpers/addClosingBrackets.js";
const plop = (plop) => {
    // Function to run commands inside the terminal
    runCommandAction(plop);
    projectGenerator(plop); // plop:p
    // Helpers
    surroundBracketsHelper(plop); // Use as {{surroundBrackets "pascalCase name" }}
    addOpenBrackets(plop); // Use as {{ addOpenBrackets }}
    addClosingBrackets(plop); // Use as {{ addClosingBrackets }}
};
export default plop;

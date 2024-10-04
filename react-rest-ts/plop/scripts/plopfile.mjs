/*=============================================== Plopfile ===============================================*/
import { generateComponent, generatePage, generateRoute, generateSingleFileComponent, generateType, generateModelAndType, } from "./generators/index.mjs";
// Generate components, etc.
export default (plop) => {
    /*====================== Client ======================*/
    generateComponent(plop); // yarn plop:c ✅
    generateSingleFileComponent(plop); // yarn plop:sc ✅
    generatePage(plop); // yarn plop:p ✅
    generateType(plop); // yarn plop:ty ✅
    /*====================== Server ======================*/
    generateRoute(plop); // yarn plop:r ✅
    generateModelAndType(plop); // yarn plop:m ✅
};

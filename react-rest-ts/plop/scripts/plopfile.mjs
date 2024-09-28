/*=============================================== Plopfile ===============================================*/
import { generateComponent, generatePage, generateRoute, generateSingleFileComponent, generateType, } from "./generators/index.mjs";
// Generate components, etc.
export default (plop) => {
    /*====================== Client ======================*/
    generateComponent(plop); // yarn plop:c ✅
    generateSingleFileComponent(plop); // yarn plop:sc ✅
    generatePage(plop); // yarn plop:p ✅
    generateType(plop); // yarn plop:ty
    /*====================== Server ======================*/
    generateRoute(plop); // yarn plop:r
    // TODO: model with type
};

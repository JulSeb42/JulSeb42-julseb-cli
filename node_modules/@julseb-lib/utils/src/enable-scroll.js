"use strict";
/*=============================================== Enable scroll ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableScroll = void 0;
/**
 * @description Enable page scroll
 * @example enableScroll()
 */
function enableScroll() {
    var body = document.body;
    body.style.height = "";
    body.style.overflow = "";
    return;
}
exports.enableScroll = enableScroll;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceRepoName = replaceRepoName;
const ts_utils_julseb_1 = require("ts-utils-julseb");
function replaceRepoName(repoName, projectName) {
    return [
        `Replace ${repoName} by ${(0, ts_utils_julseb_1.toKebabCase)(projectName)}`,
        {
            type: "runCommand",
            command: `mv ${repoName} ${(0, ts_utils_julseb_1.toKebabCase)(projectName)}`,
        },
    ];
}

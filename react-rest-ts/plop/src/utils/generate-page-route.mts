/*=============================================== Generate page route ===============================================*/

export const generatePageRoute = (pageType?: "protected" | "anon") => {
    const pathName = "PATHS.{{ constantCase name }}"
    const elementComp = "<{{ pascalCase name }} />"

    let element

    if (pageType === "protected") {
        element = `(\n            <ProtectedRoute>\n                ${elementComp}\n            </ProtectedRoute>\n        ),`
    } else if (pageType === "anon") {
        element = `(\n            <AnonRoute>\n                ${elementComp}\n            </AnonRoute>\n        ),`
    } else {
        element = elementComp
    }

    return `{\n        path: ${pathName},\n        element: ${element}\n    },\n$1`
}

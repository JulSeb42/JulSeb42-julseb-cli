import globals from "globals"
import pluginJs from "@eslint/js"
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"
import { fixupConfigRules } from "@eslint/compat"

export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    {
        rules: {
            "no-duplicate-imports": "error",
            "react/react-in-jsx-scope": "off",
            "react/no-unescaped-entities": "off",
            "react/display-name": "off",
            "no-case-declarations": "off",
            "no-unused-vars": "warn",
            "no-constant-binary-expression": "off",
            "no-useless-escape": "off",
            "no-irregular-whitespace": "off",
            "react/function-component-definition": [
                "warn",
                {
                    namedComponents: ["arrow-function"],
                },
            ],
            "react/jsx-key": "warn",
            "no-restricted-exports": [
                "warn",
                { restrictDefaultExports: { direct: true } },
            ],
            "react/prop-types": "off",
            "no-empty-pattern": "warn",
        },
    },
    {
        ignores: ["eslint.config.js", "plop/*", "vite.config.ts"],
    },
    { files: ["src/*"] },
]

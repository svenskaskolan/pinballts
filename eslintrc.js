module.exports = {
    "env": {
        "browser": true,
        "es2022": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "ignorePatterns": ["*.spec*"],
    "rules": {
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "array"
            }
        ],
        "@typescript-eslint/typedef": [
            "error",
            {
                "arrowParameter": false,
                "variableDeclaration": true
            }
        ],
        // should we enable?
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single",
            { "allowTemplateLiterals": true }
        ],
        "@typescript-eslint/unified-signatures": "error",
        "comma-dangle": "error",
        //should probably enable soon
        "complexity": "off",
        "constructor-super": "error",
        "default-case": "off",
        "dot-notation": "off",
        "eol-last": "off",
        "eqeqeq": [
            "warn",
            "smart"
        ],
        "@typescript-eslint/no-inferrable-types": "off",
        "guard-for-in": "warn",
        "import/order": "off",
        "max-classes-per-file": [
            "error",
            1
        ],
        "max-len": [
            "error",
            {
                "ignorePattern": "^import ",
                "code": 500
            }
        ],
        "new-parens": "error",
        "no-bitwise": [
            "error",
            {
                "allow": ["~"]
            },
        ],
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": [
            "error",
            {
                "allow": [
                    "debug",
                    "info",
                    "dirxml",
                    "warn",
                    "error",
                    "dir",
                    "time",
                    "timeEnd",
                    "timeLog",
                    "trace",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupCollapsed",
                    "groupEnd",
                    "table",
                    "Console",
                    "markTimeline",
                    "profile",
                    "profileEnd",
                    "timeline",
                    "timelineEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],
        "no-debugger": "off",
        "no-empty": "error",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-invalid-this": "off",
        "no-multiple-empty-lines": "off",
        "no-new-wrappers": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "off",
        "no-unused-labels": "error",
        "@typescript-eslint/no-unused-vars": "off",
        "no-var": "error",
        "no-void": "error",
        "object-shorthand": "off",
        "one-var": [
            "error",
            "never"
        ],
        "prefer-arrow/prefer-arrow-functions": "off",
        "prefer-const": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "off",
        "quote-props": "off",
        "radix": "error",
        "space-before-function-paren": "off",
        "spaced-comment": "error",
        "use-isnan": "error",
        "valid-typeof": "warn",
        "no-shadow": [
            "error",
            {"hoist": "functions"}
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "format": null,
                "leadingUnderscore": "allow",
                "custom": {
                    "regex": "/^error$|^any$|^String$|^string$|^Boolean$|^boolean$|^undefined$|^Undefined$/",
                    "match": false
                },
                "selector": "default"
            },
            {
                "format": [
                    "PascalCase",
                ],
                "selector": "class"
            },
            {
                "format": [
                    "PascalCase",
                ],
                "selector": "interface"
            },
            {
                "format": [
                    "PascalCase",
                ],
                "selector": "enum"
            },
            {
                "format": [
                    "PascalCase",
                    "camelCase"
                ],
                "selector": "enumMember"
            },
        ],
        "@typescript-eslint/no-for-in-array": "off",
        "@typescript-eslint/prefer-regexp-exec": "warn",
        "@typescript-eslint/camelcase": ["error", { "properties": "never", "ignoreImports": true }],
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/prefer-includes": "off",
        "@typescript-eslint/type-annotation-spacing": "warn",
        "@typescript-eslint/member-delimiter-style": "warn"
    }
};

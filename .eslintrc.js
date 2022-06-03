module.exports = {
    extends: ["next/core-web-vitals", "airbnb", "airbnb/hooks", "prettier"],
    plugins: ["react", "@typescript-eslint", "prettier"],
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: "module",
    },
    rules: {
        indent: ["error", 4],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/jsx-props-no-spreading": "off",
        "import/prefer-default-export": "off",
        "no-param-reassign": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                ts: "never",
                tsx: "never",
            },
        ],
        "consistent-return": "off",
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off",
        "react/jsx-filename-extension": "off"
    },
};
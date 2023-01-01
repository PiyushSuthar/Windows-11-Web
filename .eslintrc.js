module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        "quotes": ["error", "double"],
        "indent": "off",
        "@typescript-eslint/indent": ["error", 2]
    }
}

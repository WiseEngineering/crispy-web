module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  rules: {
    semi: ["error", "never"],
    '@typescript-eslint/indent': ["error", 2],
    "react/prop-types": "off"
  }
};

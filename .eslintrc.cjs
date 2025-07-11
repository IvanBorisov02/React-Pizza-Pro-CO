module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      node: {
        // включваме и JS/JSX (и ако имаш TS – добави .ts/.tsx тук)
        extensions: [".js", ".jsx"],
      },
    },
  },
  plugins: ["react-refresh", "import"],
  rules: {
    // липсващите импорти – error (червено)
    "import/no-unresolved": "error",

    // неизползвани променливи – warning (жълто)
    "no-unused-vars": "warn",

    // твоето правило – warning
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};

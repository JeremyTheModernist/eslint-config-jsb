module.exports = {
    extends: [
      "airbnb-typescript", // extends the airbnb typescript lint rules
      "airbnb/hooks", // extends the airbnb rules for react hooks
      "plugin:@typescript-eslint/recommended", // uses the recommended rules from @typescript-eslint
      "plugin:cypress/recommended", // use the recommended rules from cypress
      "prettier", // tells eslint to use prettier configurations for formatting rather than it's own.
      "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    plugins: ["react", "@typescript-eslint", "cypress"], // uses the jest plugin
    env: { // An environment provides predefined global variables. The available environments are:
      browser: true, // specifies that this will run in the browser and should use browser globals
      es6: true, // specifies that this will use es6 features
      "cypress/globals": true
    },
    parser: "@typescript-eslint/parser", // specifies the ESLint parser. it allows ESLint to understand
    // TypeScript syntax; it converts TypeScript into an ESTree-compatible form so it
    // can be used in ESLint
    parserOptions: {
      ecmaVersion: 2018, // Allows for the parsing of modern JS features
      project: "tsconfig.json", // tells eslint to reference tsconfig for ts settings
      tsconfigRootDir: process.cwd(),
    },
    rules: {
      "linebreak-style": "off",
      "@typescript-eslint/camelcase": "off",
      "react/require-default-props":"off",
      "react/prop-types": "off",
      "react/jsx-props-no-spreading": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off", // this ensures that React functions don't have to have a return type like React.FC which is no longer recommended
      "prettier/prettier": [
        "warn",
        {
          endOfLine: "auto",
        },
      ],
    },
    // overrides: [
    //   {
    //     // enable this rule specifically for TypeScript files but not for .tsx files
    //     files: ["*.ts"],
    //     rules: {
    //       "@typescript-eslint/explicit-module-boundary-types": ["error"],
    //     },
    //   },
    // ],
    ignorePatterns: [
        "/*.*",
        "node_modules"
    ]
  };
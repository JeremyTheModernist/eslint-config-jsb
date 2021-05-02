# Voila! Eslint, Prettier, and Typescript Setup for React

My settings for ESLint, Prettier, and Typescript in a React project. Works with Next.js as well!

I've also included [Cypress](https://www.cypress.io/) in this config for any Cypress users. Don't worry, you don't have to use it.

Need, to change things? You can easily do that as well.

**Pro-Tip**: Check out my [eslint-config-jsb-node](https://www.npmjs.com/package/eslint-config-jsb-node) for Node and Typescript projects.

# How it works

- It lints all of your `js` and `ts` code in any project subdirectories
- It uses eslint-config-airbnb-typescript for it's underyling lint rules
- It fixes issues and formatting errors with Prettier
- It provides all the necessary packages, like `typescript` and `@types/react`, to run typescript in React

# Local setup

To set this up in your project:

1. Ensure you are in the root project directory of a React project. Then install all necessary dependencies:

```bash
npx install-peerdeps -D eslint-config-jsb
```

2. You should now notice that your `package.json` is popuplated with several new dependencies.

3. Now, create an `.eslintrc.json` file in your root project directory, and provide the following json:

```json
{
  "extends": ["eslint-config-jsb"]
}
```

This will actually allow your project to leverage this config.

4. Next, add some scripts to your `package.json` so you can run eslint:

```json
"scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint '**/*.{ts,js}' --quiet --fix"
}
```

5. If you run `npm run lint` from your terminal, it will expose any issues. If you run `npm run lint:fix` it will quietly fix all of your javascript and typescript files in any project subdirectories.

6. Now, you need to create a `tsconfig.json` file in your root project directory. This is where your typescript configuration will live. It's also how eslint will be able to work with typescript. I recommend the following Next.js `tsconfig.json` as a start, but feel free to customize where needed:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "types": ["cypress"]
  },
  "include": ["next-env.d.ts", "**/*", "**/*.tsx", "cypress"],
  "exclude": ["node_modules", ".next"]
}
```

_If you're not using Next.js, then simply remove `next-env.d.ts` and `.next` from this config. If you're not using Cypress, then remove all its references in this file as well._

7. Typescript will now expect `ts` files to exist in one of your subdirectories. Go ahead and create a sample file in `src` called `sample.ts`:

```ts
const getFood: () => string = () => {
  return 'yummy tacos!';
};

getFood();
```

# Working with VS Code

VS Code can be tricky with linting, especially if you have global formatting tools installed like Prettier. Let's fix that.

1. Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin in VS Code.

2. Now, let's update some of the settings for ESLint in VS Code's `settings.json` file. Pull up the [command palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette), which is `cmd shift p` on mac. Then type `settings json` and click on `Open Settings (JSON)`. In this file, provide the following settings:

```js
  "editor.formatOnSave": true,
  // turn auto-save off for javascript, react, typescript and typescript react
  // these will be done through eslint
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false
  },
  // eslint to run on save
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "prettier.disableLanguages": ["js", "tsx"],
```

3. Now you are all set up to auto-fix all linting errors on save in VS Code.

4. Finally, you'll need to restart VS Code for all of the changes to take place and work effectively.

**Pro-Tip**: You can either quit VS Code and reopen it, or pull up the command palette and type "reload" then select "Developer: Reload Window."

# Customize the settings

Want to customize the ESLint and Prettier settings even further? You can add the rules in your `.eslintrc.json` file. [ESLint Rules](https://eslint.org/docs/rules/) go under the `"rules"` option. [Prettier options](https://prettier.io/docs/en/options.html) should be nested in `"prettier/prettier"`. Any prettier rules will overwrite the existing ones in my config, so if you want to keep the existing ones, be sure to include them. Here's an example of what you could do:

```json
{
  "extends": ["eslint-config-jsb-node"],
  "rules": {
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        "arrowParens": "avoid",
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 80
      }
    ]
  }
}
```

This would turn all console lint errors off (so you can use `console.log`). It would also add a prettier rule for omitting parens in arrow functions when possible.

# Where to go from here

From here, I'd recommend converting your files from `.js` to `.tsx` and adding Typescript in your React project!

### Using Cypress

Are you a Cypress user? You can set that up with ease:

1. Add the following script in your `package.json` to your `scripts`

```
"test": "cypress open",
```

2. Run `npm run test`. This should set all of your Cypress files up.

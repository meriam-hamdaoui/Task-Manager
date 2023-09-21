There is two most known packages by developers "eslint" and "prettier"

- eslint - linter for javascript/typescript code, it checks if your code follows the rules of a certain style guide. It also can show us errors as soon as possible
- prettier - in other side format the saved file in a way that be readable, understandable format

These two packages exists as extensions on vscode. But since not everyone uses vscode or the developers who may use this project could be beginners, it's more practical to install those two packages along with other ones used in this project.

#eslint configuration :

1. install : yarn add eslint --save-dev
2. initiate : yarn eslint --init
3. typescript plugins : yarn add eslint-plugin-import eslint-import-resolver-typescript --save-dev
4. create the .eslintrc.json file then add these
   "rules" : {
   "no-unused-vars": "warn",
   "@typescript-eslint/no-unused-vars": "warn"
   }
   so the un-used parms won't throw an error, just a simple warning
   #prettier configuration:

5. install : yar add prettier eslint-config-prettier eslint-plugin-prettier --save-dev
6. create the .prettierrc file

In this project, I used the prop-types packages to double check my code on runtime after my typescript compiler check it while I'm typing it

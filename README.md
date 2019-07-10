# Anza scripts(WIP)

Collection of useful npm scripts for daily development in javascript. This library exposes `anza-lint` script which uses eslint to lint `src/` and `test/` `js and jsx` files. Also it expose `anza-commit` which is a commit command on top of commitizen, and it is almost the same as `git-cz` but with additional
configurations. Lastly but not least it expose `anza-changelog` which uses `generate-changelog` library to generate changelog based on commit messages.

## Installation

Using npm

```sh
npm install @BenMaruchu/anza-scripts
```

Using yarn

```sh
yarn add @BenMaruchu/anza-scripts
```

## Usage

In your `package.json` file in scripts object you can just do as

```json

"scripts":{
  "lint":"anza-lint",
  "changelog":"anza-changelog",
  "commit":"anza-commit",
}
...
```

> for react project in lint `script` use `anza-lint-react` instead of `anza-lint`

### Todo

- [ ] Integrate with husky git hooks
- [ ] Add Tests
- [ ] Move codes from /bin to /src

### LICENSE

MIT License

Copyright (c) 2019 - present BenMaruchu & Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

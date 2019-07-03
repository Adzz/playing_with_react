## Deployment

## Local Development

Just run `npm install` to install the dependencies. `npm start` to boot the server.

## API Calls

We are using [saga](https://github.com/redux-saga/redux-saga) to handle our asynchornus API calls. [This](https://hashnode.com/post/what-are-the-benefits-of-redux-thunk-over-redux-saga-what-pros-and-cons-do-they-have-over-each-other-ciqvyydh7065w3g53ffalif61) is a good article to start, by comparing wth [thunks](). Sagas also use ES6 generators, so get familiar with them first too.


## Testing

We use [jest](https://facebook.github.io/jest/) to provide unit tests. Config is defined in package json under the `"jest": ` key.

[check here](https://facebook.github.io/jest/docs/expect.html#content) for expectations available.

### NB

When testing a container, you must `export default` the connect funtion as usual, but you must also `export` the class. Please see [here](https://github.com/reactjs/react-redux/issues/119). This throws an es-lint error, so we have disabled that.


### Strategy

The current testing strategy is outlined below. In general we want to avoid testing implementation details to avoid flakey and brittle tests.

 The linter enforces the use of PropTypes, which can be seen in each component like so:
  ```js
    Component.propTypes = {
      options: PropTypes.arrayOf(PropTypes.object).isRequired,
    }
  ```
We just define the types of each of the props we will use upfront. The linter is a good guide too.

Ensure that each component we buid will render without errors. To do this we can use [enzyme](https://github.com/airbnb/enzyme) to [shallow](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md) mount our component, and ensure there are no errors. Each subcomponenet should have their own similar test.

Test important callbacks are triggered within a component on particular actions. We can use spies or

Ensure that our actions and reducers are tested. It's fine to test the action creators with out reducers

Sagas are a breeze to test, so we can usually test them in isolation.

These are good general [guidlines](https://medium.com/javascript-inside/some-thoughts-on-testing-react-redux-applications-8571fbc1b78f) to follow:
  - component test to verify that the component actually renders.
  - Avoid verifying tags or class names.
  - Verify important callbacks or props, but keep it minimal.
  - The need to test logic inside a component might signal the need for refactoring.


## Linting

## Text Editor

You'll want to set your text editor up with linting to save you some pain, so you can fix issues as they happen.

## Js

JavaScript/JSX/React is linted with [ES Lint](http://eslint.org/). We should aim to follow [Airbnb's styleguide](https://github.com/airbnb/javascript/tree/master/react) as we implement their [eslint config](https://www.npmjs.com/package/eslint-config-airbnb). We can add files to exclude form linting in the `.eslintignore`. The npm scrip `js-lint` runs with the `--fix` flag, which has a limited ability to fix some of the linting issues automatically.

### CSS

#### For now styles have to be defined inline on each component. This wont be permamnent, as Material UI have better solutions upcoming. Please see discussion [here](https://github.com/callemall/material-ui/issues/4066) and the docs [here](http://www.material-ui.com/#/customization/styles). Until then, common style components like colors and fonts can be found in `styles/colors.js`. These are included in out [theme](docs/material_ui.md).

When we can implement without nasty `!important` hacks I reccommend we use Sass in the way described below.
Linters are still set up ready to go:

SCSS/CSS is linted with [Stylelint](https://github.com/stylelint/stylelint). We use the SuitCSS naming convention and the linter should be configured to help with this.

The top of every component CSS file should contain the following comment to enable linting:

```css
/**
 * @define ComponentName
 */
```

If a CSS file needs excluding from the linter, it needs adding to the array of excluded files in `.stylelintrc.json`

If a file contains styles that _need_ to break the SuitCSS rules, there are two options.

SuitCSS conformance checking can be relaxed for the file, by adding `weak` to the initial component declaration:

```css
/**
 * @define ComponentName; weak
 */
```

For further information on this, see the [postcss-bem-linter](https://github.com/postcss/postcss-bem-linter#defining-a-component) documentation.

Alternatively, linting can be disabled within a file (altogether, or just for specific rules)

```css
/* stylelint-disable */
.ComponentName {}
/* stylelint-enable */
```

For further information on this, see the [stylelint](http://stylelint.io/user-guide/configuration/#turning-rules-off-from-within-your-css) documentation.

### Running the linters

The linters can be run manually with

```bash
$npm run css-lint
$npm run js-lint
```

Or you can run both with:

```bash
$npm run lint
```

All linters run on build (before tests) via our `circle.yml` file, and will fail if errors are discovered. It is recommended that you get in the habbit of running the linter before pushing changes to github, or integrate the linters into your text editor to save some time. We have deliberately not integrated the linting into the build process to save some time in development; if you want to check something quickly we don't really want to force perfect style right then.

## About

All docs can be found in `docs`. This is a good place to start.

This project was initially bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), then ejected. Their README has some great documentation.


#### Possible nice to haves

[React storybook](https://github.com/storybooks/storybook/tree/master/packages/react-storybook) To demo components, develop them in isolation etc etc. See [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#developing-components-in-isolation)

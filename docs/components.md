# Tools Frontend: Components

> This document outlines the component-based approach for the front-end.

## Overview

The front-end follows a component-based architecture. Every part of the website can be worked on in isolation, safe in the knowledge that it can be developed, tested and used without impacting on any other part of the website. We use [Material Design](https://material.io/guidelines/) with components provided by [Material UI](http://www.material-ui.com/#/). There are some quirks to this approach that are explained later.

## Themes

Material UI requires a theme be provided. There's something around testing we need to be awar of. TO BE UPDATED

## Directory structure

Each component should follow a similar directory structure:

```
/components
  +---/[group]
  |    +-- /ComponentName
  |    |    |-- ComponentName.jsx
  |    |    |-- ComponentName-spec.js
  |    |    |-- ComponentName.scss
  |    |    |-- ComponentReducer.js
  |    |    |-- ComponentReducer.test.js
  |    |    |-- ComponentActions.js
  |    |    |-- ComponentActions.test.js
  |    |    +-- demo/
  |    |    |    |--
  |    |    |    |-- TBC

```

### Presentational and Containers

As you develop you'll notice components fit into two broad categories. Those that need to interact with state and those that just need to render themselves to the page. The trend is to seperate these into `presentational` components and `container` components. [As Dan Abramov Says](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

> "You’ll find your components much easier to reuse and reason about if you divide them into two categories... I put them in different folders to make this distinction clear."

If you need clarification or are new to the concept, I encourage you to read his article.

To emphasise the difference all containers should have their filename appended with `Container.js`

For example `ListContainer.js`.



## CSS

Every component CSS file should contain styles targeting only the component itself. Only presentational components should be styled.


### Style isolation

Other than a CSS reset, there are no global styles that are inherited by all components.

This allows components to be developed in isolation, safe in the knowledge that they won't inherit styles when incorporated into the site. The only global things are variables for color...


### Variables

There are global variables set for fonts and colours only.

Variables should be used consistently. At the top of each component, local references should be made to any global variables.

```css
/**
 * @define ComponentName
 */

// ---
// Vars
// ---

$colour-ComponentName-text: $colour-white;
$font-ComponentName-text: $font-body;

// ---
// Component
// ---

.ComponentName {
  ...
}

.ComponentName-text {
  font-family: $font-ComponentName-text;
  color: $colour-ComponentName-text;
}
```


### Nesting

There should be **no** nesting of CSS styles.

```css
.ComponentName-link {
  ...
}

.ComponentName-link:before {
  ...
}

.ComponentName-link:before:hover {
  ...
}
```


### Breakpoints

Breakpoints **can** be nested within a style definition.

Breakpoint values should reference the global breakpoint variables rather than defining custom breakpoint dimensions inline.

```css
.ComponentName-link {
  ...

    @media (min-width: $breakpoint-large) {
      ...
    }
}

.ComponentName-link:before {
  ...

  @media (min-width: $breakpoint-large) {
      ...
    }
}
```


### Linting

All component CSS is linted to ensure conformance with SuitCSS naming conventions.

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


## Demo

In the future it would be great to implement [React Storybook](https://github.com/storybooks/storybook) by developing all components there first, and importing them into the product.

## Testing


## Creating a new component

Before creating a new component, first review the existing components to get a feel for their consistency. It is important to use consistent values for variables, modifiers, data attributes etc.


## Further reading

- [http://webdesign.tutsplus.com/tutorials/using-postcss-with-bem-and-suit-methodologies--cms-24592](http://webdesign.tutsplus.com/tutorials/using-postcss-with-bem-and-suit-methodologies--cms-24592)
- [http://csswizardry.com/2015/06/contextual-styling-ui-components-nesting-and-implementation-detail/](http://csswizardry.com/2015/06/contextual-styling-ui-components-nesting-and-implementation-detail/)
- [https://benfrain.com/enduring-css-writing-style-sheets-rapidly-changing-long-lived-projects/](https://benfrain.com/enduring-css-writing-style-sheets-rapidly-changing-long-lived-projects/)
- [http://philipwalton.com/articles/side-effects-in-css/](http://philipwalton.com/articles/side-effects-in-css/)


### Selected quotes

> BEM was the forerunner of this type of class naming methodology, created by Yandex. The SUIT methodology is an approach based on BEM, but with some adjustments and additions made by Nicholas Gallagher. SUIT does everything BEM does, but to many users it is considered an enhancement.
>
> ```
> /* BEM */
> .search-form__text-field {}
>
> /* SUIT */
> .SearchForm-textField {}

[http://webdesign.tutsplus.com/tutorials/using-postcss-with-bem-and-suit-methodologies--cms-24592](http://webdesign.tutsplus.com/tutorials/using-postcss-with-bem-and-suit-methodologies--cms-24592 )

> The notion that all UI components are born equal—and should be able to exist anywhere, at any time, and independently—is a huge move forward for UI developers in terms of the consistency and quality of the products we work with.

[http://csswizardry.com/2015/06/contextual-styling-ui-components-nesting-and-implementation-detail/](http://csswizardry.com/2015/06/contextual-styling-ui-components-nesting-and-implementation-detail/)

> Two years ago I wrote a book where I was preaching DRY code, but after working on enduring projects, it's "decoupling" that became more important to me.

[http://ecss.io/chapter3.html](http://ecss.io/chapter3.html )

> I wasn't convinced that the goal of DRY code that other CSSers were pursuing and extolling the virtues of, was the same kind of DRY code I wanted. To explain that a little more - I didn't care much about repeated values and pairs across my rules, which is what most people were concentrating on DRYing out. What I cared about was key selectors not being repeated in the codebase. Key selectors were my 'single source of truth' and that was the area I wanted to DRY out.

>if a component needs to be made that is similar, yet subtly different to an existing component, we would not abstract or extend from this existing component. Instead, a new one would be written. Yes, I'm serious. Even if 95% of it is the same.

>The benefit of this is that each component is then independent and isolated. One can exist without the other. One can change however it needs to, independently from the other. Despite their apparent aesthetic similarity at the outset, they can mutate as needed with no fear of infecting or tainting any other similar looking component. To extend the biological metaphor, we have gained components that are 'self-quarantining' by virtue of their unique namespace.

[http://ecss.io/chapter4.html](http://ecss.io/chapter4.html)

> With the exception of intentionally 'global' CSS, all code that relates to the presentation of a component or module should be included in the partials that sit alongside the HTML/JS of that component.

> The code for each component becomes physically self-enclosed. Then, on our enduring project, when features need changing or are deprecated, all associated code for that module (styles, view logic (HTML) and JS) can be easily updated/removed.

[http://ecss.io/chapter5.html](http://ecss.io/chapter5.html)

> Typically, my foremost goal when writing CSS for enduring and rapidly changing web application is long-term maintainability. As a concrete example; being able to delete an entire Sass partial (say 9KB) in six months time with impunity (in that I know what will and won’t be affected by the removal) is far more valuable to me than a 1KB saving enjoyed because I re-used or extended some vague abstracted styles.
>
> For me, a larger total CSS codebase, made up of components that are in many respects insulated from one another, is preferential to a smaller CSS codebase made up of inter-dependent and intrinsically related styles. Hopefully I can justify and legitimise this stance further shortly.

[https://benfrain.com/enduring-css-writing-style-sheets-rapidly-changing-long-lived-projects/](https://benfrain.com/enduring-css-writing-style-sheets-rapidly-changing-long-lived-projects/)

> Because all CSS rules live in the global scope, side effects are extremely common. And since your average stylesheet usually consist of an extremely fragile collection of highly-coupled rules, all intimately dependent on the presence, order, and specificity of other rules, even the most unassuming changes can have unforeseen consequences.

> I said above that all CSS rules are global and every rule has the potential to conflict with every other rule on the page. This means side effects cannot be prevented by the language; however, they can be prevented via a disciplined and enforceable naming convention. And that’s exactly what BEM provides.

[http://philipwalton.com/articles/side-effects-in-css/](http://philipwalton.com/articles/side-effects-in-css/)

> A few bullet points of things we've learned to be important when building component libs:
>
> - Co-locating everything to do with a single component is really nice. Put the template, CSS, logic, functional tests, unit tests and any other assets related to the component (SVGs, images etc.) in the same folder. Put any files needed to demo the component in the same folder too, possibly in a subfolder called "demo" or similar
>
> - When you're working on a component and you only need to look inside its folder to understand it, literally nowhere else in the project, it's a huge win. Global CSS files, shared CSS variables, shared assets and any other project-wide abstractions can all make things much more complicated than they need to be. Copy and pasting some CSS, or updating a SVG in a component folder is cheap, but trying to understand the library-wide ramifications of a CSS tweak that affects many components is a nightmare.
>
> - Try and encapsulate your components as much as possible at all times, and think about what API it exposes to the outside world. Components that just let themselves be customised via props and limited API surface are easier to document, think about and test that components that let the outside world affect them via externally applied CSS classes etc
>
> - Use flexbox liberally inside components for internal layout. Don't worry too much about large-scale layout abstraction CSS in the component library, this sort of CSS should be in the domain of the client apps ... and you can use flexbox for this too!
>
> - Webpack and CSS Modules are great for this sort of thing, but probably only apply if you're making JS components for use in frameworks like React or Angular
>
> - Webpack is neat because it can output the entire component library (JS, CSS, assets, logic) in a single UMD JS bundle which makes consuming the components as easy as adding a single `<script>` tag to your client app
Publishing a component lib as a private npm module using semver is a neat way of getting control and understanding of the release process and the various versions you're maintaining in client apps

> - Don't spend any time making the demo site look pretty, rather it should be a functional developer tool that documents the various ways components can be used. If you need to make a "pretty styleguide" site in future, say for marketing purposes, then if your components are properly re-usable then this should be a doddle and can be created as a standalone thing

# Not really a React Todo App (really)

## `console.log` as you type

The form is already set up to console log what you're typing.

Try typing in the input box while the dev tools are open and confirm that text you're typing shows up in the console.

But, you'll notice that the text doesn't appear in the input.

Why not?

## Showing the text in the input

Uncomment the code in `_updateText`. You'll see that it's updating state. This is because the `value` prop is set to `this.state.text`.

## Echoing the value

In the `App.js`, add `<div>` after the `<form>`
Inside this `<div>`, show the value of `this.state.text`


## Keeping an array of text

Add another piece of state to the `App` component.

Name it `items` and set its value to an array.

Customize the `_handleSubmit` function so that it adds the current value of `this.state.text` to the `items` array in state.

## Rendering the items as an unordered list.

Inside the `<div>` that is echoing what the user is typing, use a `.map` to show each of the strings stored in the `items` array.


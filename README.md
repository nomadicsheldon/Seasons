# Seasons
**A Basic app shows the season text according to your geolocation.**

The main focus of this project is- Geolocation fetching, show loader before loading content, use conditional rendering, and use of `state`.

---

## Implementation description

### `index.js` -

It's a class based component.

using `state` for rendering content. If `state` is `null` then show loader otherwise show content.

getting current location by calling `window.navigator.geolocation.getCurrentPosition` inside `componentDidMount`.
`componentDidMount`- Good place to do data loading tasks.

`renderContent` will check for error and do conditional rendering.

### `SeasonDisplay.js` -

It's a functional component. Received `props` from `index.js` and shows text, styling according to that.

### `Spinner.js` -

It's a functional component which is solo resposible for loader view.
`defaultProps` mainly defines default value for props.

### `index.css` -
Styling for index.js

### `SeasonDisplay.css` -
Styling for SeasonDisplay.js

---

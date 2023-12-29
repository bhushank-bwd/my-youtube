# Bonus 1 Machine Coding For Youtube

## Requirement clarification from interviewer

- Discuss features
- Techstack

> UI and Data layers
> TailwindCSS/BS5
> formik/other
> router
> bundler
> redux/context
> testing -> JEST
> Discuss it in 5 minutes

## Plan (5 min)

> Define skeloton of component and rough diagram on paper

## Installation

```sh
npx create react app my-youtube
npm run start
```

Use create-react-app good because it save times that parcel install; Find difference between npm and npx
Search for reportWebVitals.js, react strict mode

## Clear unwanted code

> Clear unwanted code in app.js & app.js and check all is working

## Setup tailwind

```sh
npm i -D tailwindcss
npx tailwind init
```

No need to install postcss because create react-app takes care of it

> Add file extension in tailwindcss.config.js content

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

No curly bracket if single extension is used

> Clear app.css and following Code

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Check it is working properly

# Buid redux Store

```sh
npm i @reduxjs/toolkit
npm i react-redux
```

> Add store and Slice
> Provide store

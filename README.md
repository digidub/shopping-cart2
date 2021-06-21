# SHOPPING-CART

A shopping cart project built using React's functional components, and using products fetched from the [Fake Store API](https://fakestoreapi.com/)

## Project Link

> > > URL HERE

## Concepts Employed

In building this project I leveraged the following concepts and technologies:

- Hooks
  - useReducer - used to manage complex state changes of the shopping cart object
  - useContext - used in conjunction with useReducer to mimic a simple global state management akin to Redux, by pass state and dispatch functions to any components that required them
  - custom hook - useFetch - I created this custom hook to handle API calls and data fetching from the product list API
- Utility functions
  - I built several utility functions that were employed by my useReducer Hook in order to shallow-copy state and ensure it was not mutated
- Styled components
  - The styled components library was used to couple component logic and styling together for ease of editing

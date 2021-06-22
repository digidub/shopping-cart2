# SHOPPING-CART

A responsive shopping cart project built using React's functional components, and using products fetched from the [Fake Store API](https://fakestoreapi.com/).

## Project Link

[View the project here](https://digidub.github.io/shopping-cart2/)

![Products Screenshot](https://i.imgur.com/t8jepxb.png 'Products Page')
![Products Screenshot](https://i.imgur.com/0U9kZIG.png 'Cart Page')

## Skills Employed

In building this project I leveraged the following concepts and technologies:

- **Hooks**
  - useReducer - used to manage complex state changes of the shopping cart object, controlling the overall cart quantity and total cost, as well as the individual products and their quantities & cost.
  - useContext - used in conjunction with useReducer to mimic a simple global state management akin to Redux, by passing state and dispatch functions to components that required them. This allowed me to avoid prop drilling and be more concise in my code.
  - useEffect - this hook was used to trigger functionality based on the lifecycle of components, specifically the custom hook below in this instance.
  - custom hook - useFetch - I created this custom hook to handle API calls and data fetching from the product list API, and used it to trigger conditional component rendering.
- **Utility functions**
  - I built several utility functions that were employed by my useReducer Hook in order to shallow-copy state and ensure it was not mutated.
- **Styled components**
  - The styled components library was used to couple component logic and styling together for ease of editing.
- **CSS Grid, FlexBox and Media Queries**
  - I employed these CSS features to build a responsive website that views well on all screen sizes.

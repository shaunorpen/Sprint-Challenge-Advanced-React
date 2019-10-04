- [ ] Why would you use class component over function components (removing hooks from the question)?

Until recently functional components didn't allow you to use hooks like useState or useEffect. That changed with the React 16.8 Hooks update in March 2019 so that's no longer a reason to choose one over the other. Now the main reason to choose class components over functional components is the codebase you're working on. If it uses class components, use class components. If it uses functional components, use functional components.

Reference: https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108

- [ ] Name three lifecycle methods and their purposes.

1. componentDidMount() is called after the component is mounted to the DOM for the first time. This method can be used to make API calls and update state with the API response.

2. componentShouldUpdate(), componentWillUpdate() and componentDidUpdate() are all used to update the component after it's been initialised and mounted for the first time. 

* componentShouldUpdate() is used to determine whether the component should update. It returns true by default. 

* componentWillUpdate() is called before re-rendering takes place. It's useful to do comparisons between current state and props and next state and props before the render takes place.

* componentDidUpdate() is called after re-rendering. It receives arguments including previous props and state and can be used to compare these to current state.

3. componentWillUnmount() is called just before a component is unmounted.

Reference: https://www.freecodecamp.org/news/how-to-understand-a-components-lifecycle-methods-in-reactjs-e1a609840630/

- [ ] What is the purpose of a custom hook?

Custom hooks allow us to keep our code DRY be separating commonly used functions from the components which use them. They minimise the need for class-based components by enabling us to write pure functional components which separate state management from their return values.

- [ ] Why is it important to test our apps?

Testing allow us to spot and fix bugs and refactor our code without fear. Without testing it's highly likely that our app won't work, so testing is essential to software delivery. More testing is better testing, especially if it's automated.
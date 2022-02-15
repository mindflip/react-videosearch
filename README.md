# Video search app

simple video search app with react js
used cra base setting
for studying react hooks (useState, useEffect)

### [Demo App](https://search-video-mindflip.netlify.app/)

## What I learned

I learned react hooks (primative, custom)

### useState

It is same with `state` in class component

```js
// usally use destructuring assignment
// 0 index : variable, 1 index : setting function
const [counter, setCounter] = useState(0);
```

### useEffect

allows function components to use something like lifecycle methods

```js
// 1. When the component is rendered for the first time only
// put empty array on second argument
useEffect(() => {
  // do something like init
}, []);

// 2. When the component is rendered for the first time and whenever it rerenders
// leave empty on second argument
useEffect(() => {
  // do something
});

// 3. When the component is rendered for the first time and (whenever it rerenders and some piece of data has changed)
// put variable in the array on second argument
useEffect(() => {
  // do something with changing count variable
}, [count]);
```

### custom hook

Best way to create reusable code in a React project (besides components)  
Created by extracting hook-related code out of a function component  
Custom hooks always make use of `at least one primitive hook` internally  
Each custom hook should have one purpose  
Data-fetching is a great thing to try to make resuable

- Process for creating reusable hooks
  - Identify each line of code realted to some single purpose
  - Identify the inputs and the outputs to that code
  - Extract of the code into a separate function, receiving the inputs as arguments, and returning the outputs

used custom hook for video fetching in this project

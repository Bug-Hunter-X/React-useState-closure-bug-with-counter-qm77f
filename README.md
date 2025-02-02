# React useState Closure Bug
This repository demonstrates a common bug in React applications involving the `useState` hook and closures. The bug is related to how the functional component handles updates to the state variable within the `useEffect` hook's callback function.

## Bug Description
The `index.js` file contains a React functional component that utilizes the `useState` hook to manage a counter. The `useEffect` hook is used to simulate an asynchronous operation, incrementing the counter every second. However, due to closure over the initial state value, the counter behaves unexpectedly.

## How to Reproduce
Clone the repository and run:
```bash
npm install
npm start
```
Observe that the counter increments, but it does not reflect the latest value of the `count` state.
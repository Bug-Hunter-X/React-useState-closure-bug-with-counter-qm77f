```javascript
// Example file: bugSolution.js
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCount(prevCount => prevCount + 1); // Correct way to update state
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array prevents infinite loop

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default App;
```
```javascript
// Example file: index.js
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate an asynchronous operation
    const timeoutId = setTimeout(() => {
      setCount(count + 1); // This is where the bug occurs
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default App;
```
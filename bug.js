```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render
    console.log('Count:', count);
  }, [count]); // Only re-run if count changes

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1); // This line is the issue
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```
// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import { React } from "../deps.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h1: any;
      p: any;
    }
  }
}

const App = () => {
  const [count, setCount] = (React as any).useState(0);

  const handleClick = () => {
    console.log(count);
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div>
      <h1>Hello DenoLand!</h1>
      <button onClick={() => handleClick()}>
      Click the 🦕</button>
      <p>You clicked the 🦕 {count} times</p>
    </div>
  );
};

export default App;
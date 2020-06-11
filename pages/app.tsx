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
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Hello DenoLand!</h1>
      <button onClick={() => setCount(count + 1)}>Click the 🦕</button>
      <p>You clicked the 🦕 {count} times</p>
    </div>
  );
};

export default App;
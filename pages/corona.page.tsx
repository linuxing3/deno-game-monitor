// deno-lint-ignore-file
// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import { React } from "../deps.ts";
import { ComponentMap } from "../helpers/render.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h1: any;
      p: any;
      a: any;
      ul: any;
      li: any;
      span: any;
      form: any;
      label: any;
      input: any;
    }
  }
}

const App = () => {
  return <div></div>;
};

export const componentMapList: ComponentMap[] = [
  {
    name: "App",
    component: App,
  },
];

export default App;

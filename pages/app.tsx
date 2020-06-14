// deno-lint-ignore-file
// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import { React, ReactRouter } from '../deps.ts';
import ListComponent from './list.tsx';
import LoginComponent from './form.tsx';
import { ComponentMap } from '../helpers/render.ts';

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
      LoginComponent: any;
    }
  }
}

const App = (props: any) => {
  return (
    <div>
      <div>
        <LoginComponent />
      </div>
      <div>
        <ListComponent />
      </div>
    </div>
  );
};

export const componentMapList: ComponentMap[] = [
  {
    name: 'App',
    component: App
  },
  {
    name: 'LoginComponent',
    component: LoginComponent
  },
  {
    name: 'ListComponent',
    component: ListComponent
  }
];

export default App;

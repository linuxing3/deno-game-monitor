// deno-lint-ignore-file
// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import { React, ReactRouter } from "../deps.ts";
import ListComponent from "./list.tsx";
import LoginComponent from "./form.tsx";
import { ComponentMap } from "../helpers/render.ts";

const {
  Route,
  Switch,
  NavLink,
  BrowserRouter,
  Router,
  StaticRouter,
} = ReactRouter;

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
      Route: any;
      NavLink: any;
      Switch: any;
      Router: any;
      StaticRouter: any;
      BrowserRouter: any;
    }
  }
}

const Home = (props: any) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" render={() => <div>home</div>} />
        <Route path="/todos" component={ListComponent} />
        <Route path="/posts" component={LoginComponent} />
      </Switch>
    </div>
  );
};

const App = (props: any) => {
  return (
    <div class="flex">
      <div class="w-2/5">
        <LoginComponent />
      </div>
      <div class="w-3/5">
        <ListComponent />
      </div>
    </div>
  );
};

export const AppWithRouter = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export const componentMapList: ComponentMap[] = [
  {
    name: "App",
    component: App,
  },
  {
    name: "LoginComponent",
    component: LoginComponent,
  },
  {
    name: "ListComponent",
    component: ListComponent,
  },
];

export default App;

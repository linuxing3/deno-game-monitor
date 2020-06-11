// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import { React, ReactRouter } from "../deps.ts";
import ListComponent from "./list.tsx";
import LoginComponent from "./form.tsx";

const { Route, Switch, NavLink } = ReactRouter;

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
        <Route
          exact
          path="/"
          render={() => <div>home</div>}
        />
        <Route path="/todos" component={ListComponent} />
        <Route path="/posts" component={LoginComponent} />
      </Switch>
    </div>
  );
};

const App = (props: any) => {
  return (
    <div>
      Home
    </div>
  );
};

export default App;

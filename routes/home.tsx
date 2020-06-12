// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
import { React, Router, ReactDOMServer, ReactRouter } from '../deps.ts';
import App, { AppWithRouter } from '../pages/app.tsx';
import LoginComponent from '../pages/form.tsx';
import ListComponent from '../pages/list.tsx';
import { htmlWrapper, jsWrapper, jsMultiWrapper } from '../helpers/render.ts';
const { StaticRouter, BrowserRouter } = ReactRouter;

// define 2 routes: 
// one to serve a simple HTML page containing our rendered app, 
// and another browser.js route to server our app's code 
// so we can [hydrate] the React application on the client.

// 导入客户端的reactjs
const browserBundlePath = "/browser.js";

const router = new Router();

router.get("/", (ctx: any) => {
  // And then on the server we’ll use the analogous, but stateless StaticRouter component:
  const body = htmlWrapper(App);
  ctx.response.type = 'text/html';
  ctx.response.body = body;
});

// 客户端渲染App
router.get(browserBundlePath, ({ response }: { response: any}) => {
  // On the client-side, let’s simply wrap our App component with React Router’s BrowserRouter component:
  const js = jsMultiWrapper([
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
  ]);
  response.type = 'application/javascript';
  response.body = js;
});

export default router;

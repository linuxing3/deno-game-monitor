// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
import { React, Router, ReactDOMServer, ReactRouter } from '../deps.ts';
import App from '../pages/app.tsx';
const { StaticRouter, BrowserRouter } = ReactRouter;

// define 2 routes: 
// one to serve a simple HTML page containing our rendered app, 
// and another browser.js route to server our app's code 
// so we can [hydrate] the React application on the client.

// 导入客户端的reactjs
const browserBundlePath = "/browser.js";
const AppWithRouter = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
const router = new Router();

router.get("/", (ctx: any) => {
  // And then on the server we’ll use the analogous, but stateless StaticRouter component:
  const html =
  `<html><head><script type="module" src="${browserBundlePath}"></script><link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
  </head><body><div id="app">${
    (ReactDOMServer as any).renderToString(<StaticRouter location={ctx.request.url} context={ctx}><App /></StaticRouter>)
  }</div></body></html>`;
  const body = new TextEncoder().encode(html);
  ctx.response.type = 'text/html';
  ctx.response.body = body;
});

// 客户端渲染App
router.get(browserBundlePath, ({ response }: { response: any}) => {
  // On the client-side, let’s simply wrap our App component with React Router’s BrowserRouter component:
  const js =
  `import React from "https://dev.jspm.io/react@16.13.1";\nimport ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";\nimport ReactRouter from "https://dev.jspm.io/react-router";\nconst App = ${App};\nReactDOM.hydrate(React.createElement(App), document.getElementById("app"));`;
  response.type = 'application/javascript';
  response.body = js;
});

export default router;

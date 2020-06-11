// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
import { React, Router, ReactDOMServer } from '../deps.ts';
import App from '../pages/app.tsx';

// define 2 routes: 
// one to serve a simple HTML page containing our rendered app, 
// and another browser.js route to server our app's code 
// so we can [hydrate] the React application on the client.

// 导入客户端的reactjs
const browserBundlePath = "/browser.js";
const js =
  `import React from "https://dev.jspm.io/react@16.13.1";\nimport ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";\nconst App = ${App};\nReactDOM.hydrate(React.createElement(App), document.getElementById("app"));`;

const html =
  `<html><head><script type="module" src="${browserBundlePath}"></script></head><body><div id="app">${
    (ReactDOMServer as any).renderToString(<App />)
  }</div></body></html>`;

const body = new TextEncoder().encode(html);

const router = new Router();
router.get("/", ({ response }: { response: any}) => {
  response.type = 'text/html';
  response.body = body;
});

// 客户端渲染App
router.get(browserBundlePath, ({ response }: { response: any}) => {
  response.type = 'application/javascript';
  response.body = js;
});

export default router;

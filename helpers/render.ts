// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
import { React, Router, ReactDOMServer, ReactRouter } from '../deps.ts';
const { StaticRouter, BrowserRouter } = ReactRouter;

const jspms = [
  'import React from "https://dev.jspm.io/react@16.13.1"',
  'import ReactDOM from "https://dev.jspm.io/react-dom@16.13.1"',
  'import ReactRouter from "https://dev.jspm.io/react-router"',
  'import ReactHookForm from "https://dev.jspm.io/react-hook-form"'
]

const libs = jspms.join(';\n');

// 导入客户端的reactjs
export const htmlWrapper = (component: any) => {
  const browserBundlePath = "/browser.js";
  const html =
  `<html><head><script type="module" src="${browserBundlePath}"></script><link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
  </head><body><div id="app">${
    (ReactDOMServer as any).renderToString(component)
  }</div></body></html>`;
  const body = new TextEncoder().encode(html);
  return body
};


export const jsWrapper = (...components: any[]) => {
  // On the client-side, let’s simply wrap our App component with React Router’s BrowserRouter component:
  const js =
  `${libs};\nconst LoginComponent = ${components[1]}; \nconst App = ${components[0]};\nReactDOM.hydrate(React.createElement(App), document.getElementById("app"));`;
  return js;
};


export const jsMultiWrapper = (components: { name: string; component: any }[]) => {
  // On the client-side, let’s simply wrap our App component with React Router’s BrowserRouter component:
  const componentLines: string = components.reduce((pre: any, cur: any) => {
    const line = `const ${cur.name} = ${cur.component};`
    return pre + '\n' + line;
  }, '')
  const js =
  `${libs};\n${componentLines};\nReactDOM.hydrate(React.createElement(App), document.getElementById("app"));`;
  return js;
};
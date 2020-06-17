// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
/*
|--------------------------------------------------------------------------
| Helper
|--------------------------------------------------------------------------
| Render react from server
*/
// deno-lint-ignore-file
import { ReactDOMServer, ReactRouter } from "../deps.ts";

export interface ComponentMap {
  name: string;
  component: any;
}

const jspms = [
  'import React from "https://dev.jspm.io/react@16.13.1"',
  'import ReactDOM from "https://dev.jspm.io/react-dom@16.13.1"',
  'import ReactRouter from "https://dev.jspm.io/react-router"',
  'import ReactHookForm from "https://dev.jspm.io/react-hook-form"',
  // 'import ObservableHook from "https://dev.jspm.io/observable-hook"',
  // 'import Rxjs from "https://dev.jspm.io/rxjs"',
];

const libs = jspms.join(";\n");

// 导入客户端的reactjs
// Renderiza un elemento React a su HTML inicial. React devolverá HTML en una cadena de texto.
// Puedes usar este método para generar HTML en el servidor y enviar el marcado en la solicitud inicial
// para que las páginas se carguen más rápido y permitir que los motores de búsqueda rastreen tus páginas
// con fines de SEO.

// Si llamas ReactDOM.hydrate() a un nodo que ya tiene este marcado desde el servidor,
// React lo conservará y solo adjuntará los controladores de eventos,
// lo que te permitirá tener una experiencia de primera carga muy eficaz.
export const htmlWrapper = (component: any) => {
  const browserBundlePath = "/browser.js";
  const html =
    `<html><head><script type="module" src="${browserBundlePath}"></script><link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
  </head><body><div id="app">${
      (ReactDOMServer as any).renderToString(component)
    }</div></body></html>`;
  const body = new TextEncoder().encode(html);
  return body;
};

// TODO:  https://es.reactjs.org/docs/react-dom.html#hydrate
// Es igual a render(), pero es utilizado para hidratar un contenedor cuyo contenido HTML fue renderizado por ReactDOMServer.
// React tratará de agregar detectores de eventos al marcado existente.
export const jsMultiWrapper = (components: ComponentMap[]) => {
  // On the client-side, let’s simply wrap our App component with React Router’s BrowserRouter component:
  const componentLines: string = components.reduce(
    (pre: string, cur: ComponentMap) => {
      const line = `const ${cur.name} = ${cur.component};`;
      return pre + "\n" + line;
    },
    "",
  );
  const js =
    `${libs};\n${componentLines};\nReactDOM.hydrate(React.createElement(App), document.getElementById("app"));`;
  return js;
};

// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
import { React, Router, ReactDOMServer } from '../deps.ts';
import App from '../pages/app.tsx';

export const str = ReactDOMServer.renderToString(<App />);
const body = new TextEncoder().encode(str);

const router = new Router();
router.get("/", ({ response }: { response: any}) => {
  response.body = body;
});

export default router;

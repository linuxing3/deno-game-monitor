// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Middleware: user authorize
|--------------------------------------------------------------------------
| Check header [authorization] and check with jwt
*/
import { Status, validateJwt, config } from "../deps.ts";

const env = config();

export default async (ctx: any, next: any) => {
  // FIXED: Check authorization
  const authHeader = ctx.request.headers.get("authorization");
  if (!authHeader) {
    ctx.throw(Status.Unauthorized);
  } else {
    const requestToken = authHeader.split(" ")[1];
    try {
      const jwt: any = await validateJwt(requestToken, env["TOKEN_SECRET"]);
      ctx.request.user = jwt.payload;
      await next();
    } catch (err) {
      ctx.throw(Status.Unauthorized);
    }
  }
};

// export const sampleAuth = async (ctx: any, next: any) => {
//   // local token check
//   // const { payload, token } = JSON.parse(localStorage.getItem('token'));
//   // if no local identity is not available, check request header for token
//   if (!payload) {
//     // FIXED: Check authorization
//     const authHeader = ctx.request.headers.get("authorization");
//     if (!authHeader) {
//         ctx.throw(Status.Unauthorized);
//     } else {
//         const requestToken = authHeader.split(" ")[1];
//         try {
//             const jwt: any = await validateJwt(requestToken, env["TOKEN_SECRET"]);
//             localStorage.setItem('token', JSON.stringify({ payload: jwt.payload, token: requestToken }));
//             await next();
//         } catch (err) {
//             ctx.throw(Status.Unauthorized);
//         }
//     }
//   } else {
//       // if local identity is not available, check cached token
//         try {
//             const jwt: any = await validateJwt(token, env["TOKEN_SECRET"]);
//             localStorage.setItem('token', JSON.stringify({ payload: jwt.payload, token }));
//             await next();
//         } catch (err) {
//             ctx.throw(Status.Unauthorized);
//         }
//   }

// };

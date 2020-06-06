# Structure

## 依赖管理 Dependencies and modules

Check `deps.ts`

```typescript
export { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
export { config } from "https://deno.land/x/dotenv@v0.4.0/mod.ts";
export { slugify } from "https://deno.land/x/slugify@0.3.0/mod.ts";
export { makeJwt } from "https://deno.land/x/djwt@v0.9.0/create.ts";
export { hash, compare } from "https://deno.land/x/bcrypt@v0.2.1/mod.ts";
export { validateJwt } from "https://deno.land/x/djwt@v0.9.0/validate.ts";
export { v4 } from 'https://deno.land/std/uuid/mod.ts';
export {program, Lizard } from 'https://deno.land/x/denomander/mod.ts';
export { readJsonSync, writeJsonSync } from 'https://deno.land/std/fs/mod.ts';

export {
  bold,
  yellow,
  inverse,
  red,
  bgGreen,
} from 'https://deno.land/x/iro/src/iro.ts';

export {
  Application,
  Router,
  Status,
  isHttpError,
} from "https://deno.land/x/oak/mod.ts";

export {
  dso,
  Client,
  Where,
  Model,
  BaseModel,
  FieldType,
  Field
} from "https://deno.land/x/dso@v1.0.0/mod.ts";
```

## 控制器controllers

Check `controllers/auth.ts`

```typescript
import { Status, compare, makeJwt, hash, config } from "../deps.ts";
import env from "../config/env.ts";
import { userModel, findRecord, addRecord  } from '../services/db.sql.ts'

export async function register(ctx: any) {

  const body = await ctx.request.body();
  
  // FIXEM: password is hashed and needs long string, over 100
  let checkId = await findRecord(userModel, { name: body.value.name })

  if (!checkId) {
    const password = await hash(body.value.password);
    const user = await addRecord(userModel, {
      name: body.value.name,
      email: body.value.email,
      password
    })
  
    ctx.response.status = Status.Created;
    ctx.response.type = "json";
    ctx.response.body = {
      status: "success",
      message: `user registered in database`,
      data: {
        user
      },
    };
  } else {
    ctx.throw(Status.BadRequest, "User name exits!");
  }
}

export async function login(ctx: any) {
  const body = await ctx.request.body();

  // Find record with name
  let user: any = await findRecord(userModel, { name: body.value.name })

  if (!user) {
    ctx.throw(Status.UnprocessableEntity, "Wrong Email Address!");
  } else if (await compare(body.value.password, user.password)) {
    const token = makeJwt(
      {
        header: { alg: "HS256", typ: "JWT" },
        payload: { id: user.id, name: user.name, email: user.email },
        key: env["TOKEN_SECRET"],
      },
    );

    ctx.response.status = Status.OK;
    ctx.response.type = "json";
    ctx.response.body = {
      status: "success",
      message: `Logged in with ${body.value.email}`,
      data: { accessToken: token },
    };
  } else {
    ctx.throw(Status.Unauthorized, "Wrong Password!");
  }
}
```

## 中间件 middleware

Check `middleware/logger.ts`

```typescript
export default async (ctx: any, next: any) => {
  await next();
  const rt = ctx.response.headers.get('X-Response-Time');
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
}
```

## 数据模型 models

Check `models/UserModel`

```typescript
import {
  BaseModel,
  Field,
  FieldType,
  Model,
} from "../deps.ts";

// Define a database model
@Model("users")
export class UserModel extends BaseModel {
  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number; 
  
  @Field({ type: FieldType.STRING, length: 30, notNull: true }) 
  name!: string;

  // FIXEM: password is hashed and needs long string, over 100
  @Field({ type: FieldType.STRING, length: 100, notNull: true  })
  password!: string;

  @Field({ type: FieldType.STRING, length: 30 }) 
  email?: string;
}

```

## 服务 services

### ORM

Check `services/db.sql.ts`

```javascript
import {
  dso,
  Client,
} from "../deps.ts";
import env from "../config/env.ts";

// include Model scheme
import { UserModel } from "../models/UserModel.ts"
import { GameModel } from "../models/GameModel.ts"

// link to mysql
export const userModel = dso.define(UserModel);
export const gameModel = dso.define(GameModel);

// client connection
export const client: Client = await dso.connect({
  hostname: env["DB_HOST"] || "xunqinji.top",
  port: parseInt(env["DB_PORT"]) || 9005,
  username: env["DB_USERNAME"] ||"monitor",
  password: env["DB_PASSWORD"] || "20090909",
  db: env["DB_DATABASE"] || "monitor"
});

// migration
await dso.sync(false);
```


## 视图 view
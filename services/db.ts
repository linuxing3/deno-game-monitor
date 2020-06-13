import { Database } from 'https://deno.land/x/denodb/mod.ts';
import { modelsArray } from "../models/index.ts";
import { mysqlOptions} from "../config/db.ts";

const db = new Database('mysql', mysqlOptions);

db.link(modelsArray);
await db.sync({ drop: false });

export default db;
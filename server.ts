import { Application } from 'https://deno.land/x/oak/mod.ts'
import router from './routes.ts'
import { initDb } from './services/db.sql.ts'

const port = 8000

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

await initDb()

console.log(`Server running on port ${port}`)

await app.listen({ port })
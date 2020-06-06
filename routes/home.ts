import { Router, Status } from '../deps.ts'

const router = new Router()

router.get('/', (ctx) => {
    ctx.response.status = Status.OK;
    ctx.response.type = 'json';
    ctx.response.body = {
      status: 'success',
      message: 'Hello World!',
      data: null,
    };
  })
  
export default router

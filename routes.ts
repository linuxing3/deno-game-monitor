import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getProducts, getProduct, addProduct, updateProduct, deleteProduct } from './controllers/products.ts'
import { getGames, getGame, addGame, updateGame, deleteGame } from './controllers/games.mysql.ts'

const router = new Router()

router.get('/api/v1/products', getProducts)
    .get('/api/v1/products/:id', getProduct)
    .post('/api/v1/products', addProduct)
    .put('/api/v1/products/:id', updateProduct)
    .delete('/api/v1/product/:id', deleteProduct)

router.get('/api/v1/games', getGames)
    .get('/api/v1/games/:id', getGame)
    .post('/api/v1/games', addGame)
    .put('/api/v1/games/:id', updateGame)
    .delete('/api/v1/games/:id', deleteGame)

export default router

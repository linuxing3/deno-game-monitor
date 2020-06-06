import { Router } from '../deps.ts'
import { getGames, getGame, addGame, updateGame, deleteGame } from '../controllers/games.mysql.ts'
import authorize from '../middleware/authorize.ts'

const router = new Router()

router.get('/api/v1/games', getGames)
    .get('/api/v1/games/:id', getGame)
    .post('/api/v1/games', addGame)
    .put('/api/v1/games/:id',authorize, updateGame)
    .delete('/api/v1/games/:id', authorize, deleteGame)

export default router

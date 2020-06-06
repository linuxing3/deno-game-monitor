import { gameModel, addRecord, findAllRecord, findRecord, updateRecord, deleteRecord } from '../services/db.sql.ts'

const FILE_PATH='data/games.json';

// @desc    Get all games
// @route   GET /api/v1/games
const getGames = async ({ response }: { response: any }) => {
    const games = await findAllRecord(gameModel)
    response.body = {
        success: true,
        data: games
    }
}

// @desc    Get single game
// @route   GET /api/v1/games/:id
const getGame = async ({ params, response }: { params: { id: string }, response: any }) => {
    const game = await findRecord(gameModel, { id: params.id })

    if (game) {
        response.status = 200
        response.body = {
            success: true,
            data: game
        }
    } else {
        response.status = 404
        response.body = {
            success: false,
            msg: 'No game found'
        }
    }
}

// @desc    Add game
// @route   Post /api/v1/games
const addGame = async ({ request, response }: { request: any, response: any }) => {    
    const body = await request.body()

    if (!request.hasBody) {
        response.status = 400
        response.body = {
            success: false,
            msg: 'No data'
        }
    } else {
        
        const id = await addRecord(gameModel, body.value);
        response.status = 201
        response.body = {
            success: true,
            data: { id }
        }
    }
}

// @desc    Update game
// @route   PUT /api/v1/games/:id
const updateGame = async({ params, request, response }: { params: { id: string }, request: any, response: any }) => {

    const body = await request.body()
    let game = await findRecord(gameModel, { id: params.id })

    if (game) {    
        const data = await updateRecord(gameModel, { ...body.value, id: params.id })

        response.status = 200
        response.body = {
            success: true,
            data
        }
    } else {
        response.status = 404
        response.body = {
            success: false,
            msg: 'No game found'
        }
    }
}

// @desc    Delete game
// @route   DELETE /api/v1/games/:id
const deleteGame = async ({ params, response }: { params: { id: string }, response: any }) => {
    const count = await deleteRecord(gameModel, { id: params.id } )

    response.body = { 
        success: true,
        msg: `${count} games deleted `
    }
}

export { getGames, getGame, addGame, updateGame, deleteGame }

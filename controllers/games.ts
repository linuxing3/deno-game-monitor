import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import { Game } from '../types.ts'

let games: Game[] = [
    {
      id: "1",
      name: "Game One",
      description: "This is game one",
      pid: 9999,
      timestramp: "2020-06-05"
    },
]

// @desc    Get all games
// @route   GET /api/v1/games
const getGames = ({ response }: { response: any }) => {
    response.body = {
        success: true,
        data: games
    }
}

// @desc    Get single game
// @route   GET /api/v1/games/:id
const getGame = ({ params, response }: { params: { id: string }, response: any }) => {
    const game: Game | undefined = games.find(p => p.id === params.id)

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
        const game: Game = body.value
        game.id = v4.generate()
        games.push(game)
        response.status = 201
        response.body = {
            success: true,
            data: game
        }
    }
}

// @desc    Update game
// @route   PUT /api/v1/games/:id
const updateGame = async({ params, request, response }: { params: { id: string }, request: any, response: any }) => {
    const game: Game | undefined = games.find(p => p.id === params.id)

    if (game) {
        const body = await request.body()

        const updateData: { name?: string; description?: string; price?: number } = body.value

        games = games.map(p => p.id === params.id ? { ...p, ...updateData } : p)

        response.status = 200
        response.body = {
            success: true,
            data: games
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
// @route   DELETE /api/v1/game/:id
const deleteGame = ({ params, response }: { params: { id: string }, response: any }) => {
    games = games.filter(p => p.id !== params.id)
    response.body = { 
        success: true,
        msg: 'Game removed'
    }
}

export { getGames, getGame, addGame, updateGame, deleteGame }

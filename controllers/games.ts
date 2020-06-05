import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import { Game } from '../types.ts'

// const decoder = new TextDecoder('utf-8')
// const r = await Deno.readFile('../data/games.json')
// let games: Game[] = JSON.parse(decoder.decode(r))

const FILE_PATH='data/games.json';

// @desc    Get all games
// @route   GET /api/v1/games
const getGames = async ({ response }: { response: any }) => {
    const r = await Deno.readTextFile(FILE_PATH);
    let games: Game[] = JSON.parse(r)
    response.body = {
        success: true,
        data: games
    }
}

// @desc    Get single game
// @route   GET /api/v1/games/:id
const getGame = async ({ params, response }: { params: { id: string }, response: any }) => {
    const r = await Deno.readTextFile(FILE_PATH);
    let games: Game[] = JSON.parse(r)
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
        console.log(game)
        game.id = v4.generate()
        // added
        const r = await Deno.readTextFile(FILE_PATH);
        let games: Game[] = JSON.parse(r)
        games.push(game)
        // write 
        await Deno.writeTextFile(FILE_PATH, JSON.stringify(games));
        // response
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
    const r = await Deno.readTextFile(FILE_PATH);
    let games: Game[] = JSON.parse(r)
    const game: Game | undefined = games.find(p => p.id === params.id)

    if (game) {
        const body = await request.body()

        const updateData: { name?: string; description?: string; price?: number } = body.value

        games = games.map(p => p.id === params.id ? { ...p, ...updateData } : p)
        // write 
        await Deno.writeTextFile(FILE_PATH, JSON.stringify(games));

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
// @route   DELETE /api/v1/games/:id
const deleteGame = async ({ params, response }: { params: { id: string }, response: any }) => {
    const r = await Deno.readTextFile(FILE_PATH);
    let games: Game[] = JSON.parse(r)
    games = games.filter(p => p.id !== params.id)
    await Deno.writeTextFile(FILE_PATH, JSON.stringify(games));

    response.body = { 
        success: true,
        msg: 'Game removed'
    }
}

export { getGames, getGame, addGame, updateGame, deleteGame }

# Deno REST API
> This is a simple REST API using Deno and Oak to monitor my son's game playing records

## Run
```
deno run --allow-net server.ts
```

## Routes
```
GET      /api/v1/games
GET      /api/v1/games/:id
POST     /api/v1/games
PUT      /api/v1/games/:id
DELETE   /api/v1/games/:id
```

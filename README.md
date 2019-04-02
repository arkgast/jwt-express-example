# Jwt express example

A simple example to see how jwt works.

## Make it work

    $ git clone https://github.com/arkgast/jwt-express-example

    $ cd jwt-express-example

    $ npm i

    $ npm run dev

## Routes description

In this scenario there are three routes `/api` `/api/secret` and `/api/login`

The important ones are the last two.

`/api/login` is the one that provides a valid token that lasts *30s*

`/api/secret` is the protected route

## How it works

First make a request to `/api/login` (e.g.)

    $ curl http://localhost:5000/api/login

This response is going to be something like this:

> {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFuYSIsImVtYWlsIjoiYW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE1NTQyMjQwMDgsImV4cCI6MTU1NDIyNDAzOH0.69lN3fiADog1_HSGxtxptnFHaiYXhNOpaQQv1ClAqbU"}

The token value should be copied and passed in the next request

    $ curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFuYSIsImVtYWlsIjoiYW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE1NTQyMjQwMDgsImV4cCI6MTU1NDIyNDAzOH0.69lN3fiADog1_HSGxtxptnFHaiYXhNOpaQQv1ClAqbU" localhost:5000/api/secret

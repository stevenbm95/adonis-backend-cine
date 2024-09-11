/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
import { moviesRoutes, projectorsRoutes, seatsRoutes, theatersRoutes } from '../app/routes/index.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
//Movies Routes
moviesRoutes()

//Movies Routes
projectorsRoutes()

//Movies Routes
theatersRoutes()

//Movies Routes
seatsRoutes()

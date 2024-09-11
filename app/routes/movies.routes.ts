import router from '@adonisjs/core/services/router'
const MoviesController = () => import('#controllers/movies_controller')

export const moviesRoutes = () => {

  router.post('/movies', [MoviesController, 'store'])
  router.get('/movies', [MoviesController, 'index'])
  router.get('/movies/:id', [MoviesController, 'show'])
  router.put('/movies/:id', [MoviesController, 'update'])
  router.delete('/movies/:id', [MoviesController, 'destroy'])
}
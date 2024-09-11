import TheatersController from '#controllers/theaters_controller'
import router from '@adonisjs/core/services/router'

export const theatersRoutes = () => {

  router.post('/theater', [TheatersController, 'createTheater'])
  router.get('/theaters',[TheatersController, 'getTheaters'])
  router.get('/theater/:id',[TheatersController, 'getTheaterById'])
  router.put('/theater/:id',[TheatersController, 'updateTheater'])
  router.delete('/theater/:id',[TheatersController, 'deleteTheater'])

}
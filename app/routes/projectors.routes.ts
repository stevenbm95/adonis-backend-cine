import router from '@adonisjs/core/services/router'
import ProjectorsController from '#controllers/projectors_controller'
// const MoviesController = () => import('#controllers/movies_controller')

export const projectorsRoutes = () => {

  router.post('/projector', [ProjectorsController, 'createProjector'])
  router.get('/projectors', [ProjectorsController, 'getProjectors'])
  router.get('/projector/:id', [ProjectorsController, 'getProjectorById'])
  router.put('/projector/:id', [ProjectorsController, 'updateProjector'])
  router.delete('/projector/:id', [ProjectorsController,'delete'])

}
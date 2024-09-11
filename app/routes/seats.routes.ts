import SeatsController from '#controllers/seats_controller'
import router from '@adonisjs/core/services/router'

export const seatsRoutes = () => {

  router.post('/seat', [SeatsController, 'createSeat'])
  router.get('/seat', [SeatsController, 'getSeats'])
  router.get('/seat/:id', [SeatsController, 'getSeatById'])
  router.put('/seat/:id', [SeatsController, 'updateSeat'])
  router.delete('/seat/:id', [SeatsController, 'deleteSeat'])

}
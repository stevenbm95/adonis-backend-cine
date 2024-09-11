import Seat from '#models/seat';
import type { HttpContext } from '@adonisjs/core/http'

export default class SeatsController {

  async createSeat({request}: HttpContext){
    const body = request.body();
    const seat = await Seat.create(body);

    return seat;

  }

  async getSeats({request}: HttpContext){

    try {
      const seats:Seat[] = await Seat.query();
      return seats;      
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener los seates');      
    }
    
  }
  
  async getSeatById({params}: HttpContext){
    return Seat.findOrFail(params.id);
  }

  async updateSeat({params,request}: HttpContext){
    const body = request.body();0
    const seat:Seat = await Seat.findOrFail(params.id);
    
    seat.location = body.location;
    seat.reclining = body.reclining;
    return seat.save();
  }

  async deleteSeat({params, response}: HttpContext){
    const seat:Seat = await Seat.findOrFail(params.id);

    response.status(204);

    return seat.delete();

  }

}
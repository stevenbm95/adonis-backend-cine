
import Theater from '#models/theater'
import type { HttpContext } from '@adonisjs/core/http'

export default class TheatersController {

  async createTheater({request}: HttpContext ){

    const body = request.body();
    const theater = await Theater.create(body);

    return theater;
  }

  async getTheaters(){

    const theaters:Theater[] = await Theater.query();

    return theaters   

  }

  async getTheaterById({params}: HttpContext){
    return Theater.findOrFail(params.id);
  }

  async updateTheater({params, request}: HttpContext){

    const body = request.body();

    const theater:Theater = await Theater.findOrFail(params.id);

    theater.location = body.location;
    theater.screenSize = body.screenSize;
    theater.capacity = body.capacity;

    return theater.save();

  }

  async deleteTheater({params, response}: HttpContext){
    const theater:Theater = await Theater.findOrFail(params.id)
    response.status(204)

    return theater.delete();
  }





}
import Movie from '#models/movie';
import type { HttpContext } from '@adonisjs/core/http'

export default class MoviesController {
  //Create
    async store({request}:HttpContext){

      const body =  request.body();
      const theMovie = await Movie.create(body);

      return theMovie; 

    }
  //Get

  async index({request}: HttpContext){

    const page = request.input('page',1);
    const perPage = request.input('per_page',20);


    const movies:Movie[] = await Movie.query().paginate(page, perPage);
    return movies;
  }

  async show({params}: HttpContext){
    return Movie.findOrFail(params.id);
  }
  //Update

  async update({params, request}: HttpContext ){
    const body = request.body();
    const theMovie:Movie = await Movie.findOrFail(params.id);
    
    theMovie.name = body.name;
    theMovie.duration = body.duration;
    theMovie.year = body.year;

    return theMovie.save();    
  }
  //Delete

  async destroy({params,response}: HttpContext){
      const theMovie:Movie = await Movie.findOrFail(params.id);
      response.status(204);

      return theMovie.delete();
  }

}
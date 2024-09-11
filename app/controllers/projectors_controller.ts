import Projector from '#models/projector';
import type { HttpContext } from '@adonisjs/core/http'

export default class ProjectorsController {

  
  async createProjector({request}: HttpContext){
    const body = request.body();
    const projector = await Projector.create(body);

    return projector;

  }

  async getProjectors({request}: HttpContext){

    try {
      const projectors:Projector[] = await Projector.query();
      return projectors;      
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener los projectores');      
    }

    
  }
  
  async getProjectorById({params}: HttpContext){
    return Projector.findOrFail(params.id);
  }

  async updateProjector({params,request}: HttpContext){
    const body = request.body();
    const projector:Projector = await Projector.findOrFail(params.id);
    
    projector.brand = body.brand;
    projector.high = body.high;
    projector.width = body.width;

    return projector.save();
  }

  async delete({params, response}: HttpContext){
    const projector:Projector = await Projector.findOrFail(params.id);

    response.status(204);

    return projector.delete();

  }


  





}
import { Request, Response } from 'express';
import { CreateServiceService } from '../../services/service/CreateServiceService';

class CreateServiceController{
  async handle(req: Request, res: Response){
    const { product_id, clinic_id, user_id, dateTime } = req.body;

    const createServiceService = new CreateServiceService();

    const service = await createServiceService.execute({
      product_id, 
      clinic_id, 
      user_id,
      dateTime,
    });

    return res.json(service);
  };
};

export { CreateServiceController };
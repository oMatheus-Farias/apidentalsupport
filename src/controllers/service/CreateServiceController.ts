import { Request, Response } from 'express';
import { CreateServiceService } from '../../services/service/CreateServiceService';

class CreateServiceController{
  async handle(req: Request, res: Response){
    const { 
      nameClinic, 
      address, 
      contactClinic,
      dateTime, 
      customer, 
      contactCustomer, 
      nameProduct, 
      product_id, 
      clinic_id, 
      user_id  
    } = req.body;

    const createServiceService = new CreateServiceService();

    const service = await createServiceService.execute({
      nameClinic, 
      address, 
      contactClinic,
      dateTime, 
      customer, 
      contactCustomer, 
      nameProduct, 
      product_id, 
      clinic_id, 
      user_id,  
    });

    return res.json(service);
  };
};

export { CreateServiceController };
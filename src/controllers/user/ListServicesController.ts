import { Request, Response } from 'express';
import { ListServicesService } from '../../services/user/ListServicesService';

class ListServicesController{
  async handle(req: Request, res: Response){
    const user_id = req.user_id;

    const listServicesService = new ListServicesService();

    const listServices = await listServicesService.execute({
      user_id,
    });

    return res.json(listServices);
  };
};

export { ListServicesController };
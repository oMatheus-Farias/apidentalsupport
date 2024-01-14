import { Request, Response } from 'express';
import { DeleteServiceService } from '../../services/user/DeleteServiceService';

class DeleteServiceController{
  async handle(req: Request, res: Response){
    const user_id = req.user_id;
    const { service_id } = req.body;

    const deleteServiceService = new DeleteServiceService();

    const deleteService = await deleteServiceService.execute({
      user_id,
      service_id,
    });

    return res.json(deleteService);
  };
};

export { DeleteServiceController };
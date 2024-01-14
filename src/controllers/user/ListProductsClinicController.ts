import { Request, Response } from 'express';
import { ListProductsClinicService } from '../../services/user/ListProductsClinicService';

class ListProductsClinicController{
  async handle(req: Request, res: Response){
    const clinic_id = req.query.clinic_id as string;

    const listProductsClinicService = new ListProductsClinicService();

    const listProducts = await listProductsClinicService.execute({
      clinic_id,
    });

    return res.json(listProducts);
  };
};

export { ListProductsClinicController };
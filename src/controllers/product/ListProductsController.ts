import { Request, Response } from 'express';
import { ListProductsService } from '../../services/product/ListProductsService';

class ListProductsController{
  async handle(req: Request, res: Response){
    const clinic_id = req.clinic_id;
    const status = req.query.status as string;

    const listProductsService = new ListProductsService();

    const listProducts = await listProductsService.execute({
      clinic_id,
      status,
    });

    return res.json(listProducts);
  };
};

export { ListProductsController };
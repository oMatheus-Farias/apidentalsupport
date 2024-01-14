import { Request, Response } from 'express';
import { CreateProductService } from '../../services/product/CreateProductService';

class CreateProductController{
  async handle(req: Request, res: Response){
    const clinic_id = req.clinic_id;
    const { name, price } = req.body;

    const createProductService = new CreateProductService();

    const product = await createProductService.execute({
      clinic_id,
      name,
      price,
    });

    return res.json(product);
  };
};

export { CreateProductController };
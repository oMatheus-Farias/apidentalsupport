import { Request, Response } from 'express';
import { UpdateProductService } from '../../services/product/UpdateProductService';

class UpdateProductController{
  async handle(req: Request, res: Response){
    const clinic_id = req.clinic_id;
    const { product_id, name, price } = req.body;
    const status = req.query.status as string;

    const updateProductService = new UpdateProductService();

    const updateProduct = await updateProductService.execute({
      clinic_id,
      product_id,
      name,
      price,
      status,
    });

    return res.json(updateProduct);
  };
};

export { UpdateProductController };
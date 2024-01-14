import { Request, Response } from 'express';
import { DeleteProductService } from '../../services/product/DeleteProductService';

class DeleteProductController{
  async handle(req: Request, res: Response){
    const clinic_id = req.clinic_id;
    const { product_id } = req.body;

    const deleteProductService = new DeleteProductService();

    const deleteProduct = await deleteProductService.execute({
      clinic_id,
      product_id,
    });

    return res.json(deleteProduct);
  };
};

export { DeleteProductController };
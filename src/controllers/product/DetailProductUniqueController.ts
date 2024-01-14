import { Request, Response } from 'express';
import { DetailProductUniqueService } from '../../services/product/DetailProductUniqueService';

class DetailProductUniqueController{
  async handle(req: Request, res: Response){
    const product_id = req.query.product_id as string;

    const detailProductUniqueService = new DetailProductUniqueService();

    const detailProduct = await detailProductUniqueService.execute({
      product_id,
    });

    return res.json(detailProduct);
  };
};

export { DetailProductUniqueController };
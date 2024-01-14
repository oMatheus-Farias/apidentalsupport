import prismaClient from '../../prisma';

interface DetailProductUniqueRequest{
  product_id: string,
};

class DetailProductUniqueService{
  async execute({ product_id }: DetailProductUniqueRequest){
    const detailProduct = await prismaClient.product.findFirst({
      where:{
        id: product_id,
      },
      select:{
        id: true,
        name: true,
        price: true,
      },
    });

    return detailProduct;
  };
};

export { DetailProductUniqueService };
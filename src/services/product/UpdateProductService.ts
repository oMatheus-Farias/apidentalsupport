import prismaClient from '../../prisma';

interface UpdateProductRequest{
  clinic_id: string,
  product_id: string,
  name: string,
  price: number,
  status: boolean | string,
};

class UpdateProductService{
  async execute({ clinic_id, product_id, name, price, status }: UpdateProductRequest){
    if(name === '' || !price){
      throw new Error('Invalid data.');
    };

    const updateProduct = await prismaClient.product.update({
      where:{
        clinic_id: clinic_id,
        id: product_id,
      },
      data:{
        name,
        price,
        status: status === 'true' ? true : false,
      },
    });

    return updateProduct;
  };
};

export { UpdateProductService };
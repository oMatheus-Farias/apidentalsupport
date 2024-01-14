import prismaClient from '../../prisma';

interface DeleteProductRequest{
  clinic_id: string,
  product_id: string,
};

class DeleteProductService{
  async execute({ clinic_id, product_id }: DeleteProductRequest){
    if(!product_id){
      throw new Error('Incorrect data.');
    };

    const productExists = await prismaClient.product.findFirst({
      where:{
        clinic_id: clinic_id,
        id: product_id,
      },
    });

    if(!productExists){
      throw new Error('Incorrect data.');
    };

    await prismaClient.product.delete({
      where:{
        clinic_id: clinic_id,
        id: product_id,
      },
    });

    return { message: 'Successfully deleted.' };
  };
};

export { DeleteProductService };
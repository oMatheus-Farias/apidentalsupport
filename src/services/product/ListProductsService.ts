import prismaClient from '../../prisma';

interface ListProductsRequest{
  clinic_id: string,
  status: boolean | string,
};

class ListProductsService{
  async execute({ clinic_id, status }: ListProductsRequest){
    if(!status){
      throw new Error('Status not found.');
    };

    const listProducts = await prismaClient.product.findMany({
      where:{
        clinic_id: clinic_id,
        status: status === 'true' ? true : false,
      },
    });

    return listProducts;
  };
};

export { ListProductsService };
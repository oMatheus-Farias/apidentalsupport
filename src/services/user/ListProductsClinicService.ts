import prismaClient from '../../prisma';

interface ListProductsClinicRequest{
  clinic_id: string,
};

class ListProductsClinicService{
  async execute({ clinic_id }: ListProductsClinicRequest){
    if(!clinic_id){
      throw new Error('Data icorrect.');
    };

    const listProduct = await prismaClient.product.findMany({
      where:{
        clinic_id: clinic_id,
        status: true,
      },
      select:{
        id: true,
        name: true,
        price: true,
      },
    });

    return listProduct;
  };
};

export { ListProductsClinicService };
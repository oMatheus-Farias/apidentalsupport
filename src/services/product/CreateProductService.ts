import prismaClient from '../../prisma';

interface CreateProductRequest{
  clinic_id: string,
  name: string,
  price: number,
};

class CreateProductService{
  async execute({ clinic_id, name, price }: CreateProductRequest){
    if(name === '' || !price){
      throw new Error('Fill in all fields.');
    };

    const product = await prismaClient.product.create({
      data:{
        clinic_id,
        name,
        price,
      },
      select:{
        id: true,
        name: true,
        price: true,
        status: true,
        clinic_id: true,
      },
    });

    return product;
  };
};

export { CreateProductService };
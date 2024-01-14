import prismaClient from '../../prisma';

interface CreateServiceRequest{
  product_id: string,
  clinic_id: string,
  user_id: string,
  dateTime: string,
};

class CreateServiceService{
  async execute({ product_id, clinic_id, user_id, dateTime }: CreateServiceRequest){
    if(!dateTime){
      throw new Error('Invalid date.');
    };

    const service = await prismaClient.service.create({
      data:{
        product_id,
        clinic_id,
        user_id,
        dateTime,
      },
    });

    return service;
  };
};

export { CreateServiceService };
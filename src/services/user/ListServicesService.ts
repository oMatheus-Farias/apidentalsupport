import prismaClient from '../../prisma';

interface ListServicesRequest{
  user_id: string,
};

class ListServicesService{
  async execute({ user_id }: ListServicesRequest){
    const listServices = await prismaClient.service.findMany({
      where:{
        user_id: user_id,
      },
      select:{
        id: true,
        nameClinic: true,
        address: true,
        contactClinic: true,
        dateTime: true,
        customer: true,
        contactCustomer: true,
        nameProduct: true,
        clinic_id: true,
      },
    });

    return listServices;
  };
};

export { ListServicesService };
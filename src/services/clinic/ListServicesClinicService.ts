import prismaClient from '../../prisma';

interface ListServicesRequest{
  clinic_id: string,
};

class ListServicesClinicService{
  async execute({ clinic_id }: ListServicesRequest){
    const listService = await prismaClient.service.findMany({
      where:{
        clinic_id: clinic_id,
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
        user_id: true,
      },
    });

    return listService;
  };
};

export { ListServicesClinicService };
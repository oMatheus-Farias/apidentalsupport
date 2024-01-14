import prismaClient from '../../prisma';

class ListClinicService{
  async execute(){
    const listClinic = await prismaClient.clinic.findMany({
      where:{
        status: true,
      },
      select:{
        id: true,
        name: true,
        address: true,
        contact: true,
        operation: true,
        banner: true,
      },
    });

    return listClinic;
  };
};

export { ListClinicService };
import prismaClient from '../../prisma';

interface DetailClinicUniqueRequest{
  clinic_id: string,
};

class DetailClinicUniqueService{
  async execute({ clinic_id }: DetailClinicUniqueRequest){
    const detailClinic = await prismaClient.clinic.findFirst({
      where:{
        id: clinic_id,
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

    return detailClinic;
  };
};

export { DetailClinicUniqueService };
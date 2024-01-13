import prismaClient from '../../prisma';

interface DetailClinicRequest{
  clinic_id: string,
};

class DetailClinicService{
  async execute({ clinic_id }: DetailClinicRequest){
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
        email: true,
        status: true,
        banner: true,
      },
    });

    return detailClinic;
  };
};

export { DetailClinicService };
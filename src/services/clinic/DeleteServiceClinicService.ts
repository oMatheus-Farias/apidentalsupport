import prismaClient from '../../prisma';

interface DeleteServiceRequest{
  clinic_id: string,
  service_id: string,
};

class DeleteServiceClinicService{
  async execute({ clinic_id, service_id }: DeleteServiceRequest){
    await prismaClient.service.delete({
      where:{
        clinic_id: clinic_id,
        id: service_id,
      },
    });

    return { message: 'Successfully deleted.' };
  };
};

export { DeleteServiceClinicService };
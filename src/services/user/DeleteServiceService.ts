import prismaClient from '../../prisma';

interface DeleteServiceRequest{
  user_id: string,
  service_id: string,
};

class DeleteServiceService{
  async execute({ user_id, service_id }: DeleteServiceRequest){
    await prismaClient.service.delete({
      where:{
        user_id: user_id,
        id: service_id,
      },
    });

    return { message: 'Successfully deleted.' };
  };
};

export { DeleteServiceService };
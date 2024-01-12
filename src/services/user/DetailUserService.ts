import prismaClient from '../../prisma';

interface DetailRequest{
  user_id: string,
};

class DetailUserService{
  async execute({ user_id }: DetailRequest){
    const detailUser = await prismaClient.user.findFirst({
      where:{
        id: user_id,
      },
      select:{
        id: true,
        name: true,
        email: true,
        contact: true,
        avatar: true,
      },
    });

    return detailUser;
  };
};

export { DetailUserService };
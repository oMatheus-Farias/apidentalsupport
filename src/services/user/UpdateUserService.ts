import prismaClient from '../../prisma';

interface UpdateRequest{
  user_id: string,
  name: string,
  contact: string,
};

class UpdateUserService{
  async execute({ user_id, name, contact }: UpdateRequest){
    const user = await prismaClient.user.update({
      where:{
        id: user_id,
      },
      data:{
        name,
        contact,
      },
      select:{
        id: true,
        name: true,
        contact: true,
      },
    });

    return user;
  };
};

export { UpdateUserService };
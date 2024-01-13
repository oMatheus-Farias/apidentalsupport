import prismaClient from '../../prisma';

interface UpdateAvatarRequest{
  user_id: string,
  avatar: string,
};

class UpdateUserAvatarService{
  async execute({ user_id, avatar }: UpdateAvatarRequest){
    const updateAvatar = await prismaClient.user.update({
      where:{
        id: user_id,
      },
      data:{
        avatar: avatar,
      },
      select:{
        id: true,
        name: true,
        avatar: true,
      },
    });

    return updateAvatar;
  };
};

export { UpdateUserAvatarService };
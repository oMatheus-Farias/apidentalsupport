import prismaClient from '../../prisma';

interface UserRequest{
  name: string,
  contact: string,
  email: string,
  password: string,
};

class CreateUserService{
  async execute({ name, contact, email, password }: UserRequest){
    if(name === '' || contact === '' || email === '' || password === ''){
      throw new Error('Fill in all fields.');
    };

    const userAlreadyExists = await prismaClient.user.findFirst({
      where:{
        email: email
      },
    });

    if(userAlreadyExists){
      throw new Error('Email incorrect.');
    };

    return { ok: true };
  };
};

export { CreateUserService };
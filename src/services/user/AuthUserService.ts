import prismaClient from '../../prisma';

interface AuthRequest{
  email: string,
  password: string,
};

class AuthUserService{
  async execute({ email, password }: AuthRequest){
    if(email === '' || password === ''){
      throw new Error('Email/password incorrect.');
    };

    const userAlreadyExists = await prismaClient.user.findFirst({
      where:{
        email: email,
      },
    });

    if(!userAlreadyExists){
      throw new Error('Email/password incorrect.');
    };

    return { ok: true };
  };
};

export { AuthUserService };
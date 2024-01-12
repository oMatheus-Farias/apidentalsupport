import prismaClient from '../../prisma';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthRequest{
  email: string,
  password: string,
};

class AuthUserService{
  async execute({ email, password }: AuthRequest){
    if(email === '' || password === ''){
      throw new Error('Email/password incorrect.');
    };

    const user = await prismaClient.user.findFirst({
      where:{
        email: email,
      },
    });

    if(!user){
      throw new Error('Email/password incorrect.');
    };

    const passwordCompare = await compare(password, user?.password);

    if(!passwordCompare){
      throw new Error('Email/password incorrect.');
    };

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d',
      },
    );

    return{
      id: user?.id,
      name: user?.name,
      email: user?.email,
      contact: user?.contact,
      avatar: user?.avatar,
      token,
    };
  };
};

export { AuthUserService };
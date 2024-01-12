import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';

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

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data:{
        name,
        contact,
        email,
        password: passwordHash,
      },
      select:{
        id: true,
        name: true,
        contact: true,
        email: true,
      },
    });

    return user;
  };
};

export { CreateUserService };
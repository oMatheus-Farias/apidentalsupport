import prismaClient from '../../prisma';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthClinicRequest{
  email : string,
  password: string,
};

class AuthClinicService{
  async execute({ email, password }: AuthClinicRequest){
    if(email === '' || password === ''){
      throw new Error('Email/password incorrect');
    };

    const clinic = await prismaClient.clinic.findFirst({
      where:{
        email: email,
      },
    });

    if(!clinic){
      throw new Error('Email/password incorrect');
    };

    const passwordCompare = await compare(password, clinic.password);

    if(!passwordCompare){
      throw new Error('Email/password incorrect');
    };

    const token = sign(
      {
        name: clinic.name,
        email: clinic.email,
      },
      process.env.JWT_SECRET_CLINIC,
      {
        subject: clinic.id,
        expiresIn: '30d',
      },
    );

    return{
      id: clinic?.id,
      name: clinic?.name,
      address: clinic?.address,
      contact: clinic?.contact,
      operation: clinic?.operation,
      email: clinic?.email,
      status: clinic?.status,
      banner: clinic?.banner,
      token,
    };
  };
};

export { AuthClinicService };
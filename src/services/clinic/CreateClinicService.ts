import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';

interface CreateClinicRequest{
  name: string,
  address: string,
  contact: string,
  operation: string,
  email: string,
  password: string,
};

class CreateClinicService{
  async execute({ name, address, contact, operation, email, password }: CreateClinicRequest){
    if(name === '' || address === '' || contact === '' || operation === '' || email === '' || password === ''){
      throw new Error('All fields must be filled.');
    };

    const clinicAlreadyExists = await prismaClient.clinic.findFirst({
      where:{
        email: email,
      },
    });

    if(clinicAlreadyExists){
      throw new Error('Email/password incorrect.');
    };

    const passwordHash = await hash(password, 8);

    const clinic = await prismaClient.clinic.create({
      data:{
        name,
        address,
        contact,
        operation,
        email,
        password: passwordHash,
      },
      select:{
        id: true,
        name: true,
        address: true,
        contact: true,
        operation: true,
        email: true,
        status: true,
        banner: true,
      },
    });

    return clinic;
  };
};

export { CreateClinicService };
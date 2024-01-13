import prismaClient from '../../prisma';

interface UpdateClinicRequest{
  clinic_id: string,
  name: string,
  address: string,
  contact: string,
  operation: string,
};

class UpdateClinicService{
  async execute({ clinic_id, name, address, contact, operation }: UpdateClinicRequest){
    if(name === '' || address === '' || contact === '' || operation === ''){
      throw new Error('Fill in all fields.');
    };

    const updateClinic = await prismaClient.clinic.update({
      where:{
        id: clinic_id,
      },
      data:{
        name,
        address,
        contact,
        operation,
      },
      select:{
        id: true,
        name: true,
        address: true,
        contact: true,
        operation: true,
      },
    });

    return updateClinic;
  };
};

export { UpdateClinicService };
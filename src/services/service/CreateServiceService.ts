import prismaClient from '../../prisma';

interface CreateServiceRequest{
  nameClinic: string,
  address: string,
  contactClinic: string,
  dateTime: string,
  customer: string,
  contactCustomer: string,
  nameProduct: string,
  clinic_id: string,
  user_id: string,
};

class CreateServiceService{
  async execute({ 
    nameClinic, 
    address, 
    contactClinic,
    dateTime, 
    customer, 
    contactCustomer, 
    nameProduct, 
    clinic_id, 
    user_id 
  }: CreateServiceRequest){
    if(!nameClinic || !address || !contactClinic || !dateTime || !customer || !contactCustomer || !nameProduct){
      throw new Error('Invalid data.');
    };

    const service = await prismaClient.service.create({
      data:{
        nameClinic,
        address,
        contactClinic,
        dateTime,
        customer,
        contactCustomer,
        nameProduct,
        clinic_id,
        user_id,
      },
    });

    return service;
  };
};

export { CreateServiceService };
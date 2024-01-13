import prismaClient from '../../prisma';

interface UpdateClinicBannerRequest{
  clinic_id: string,
  banner: string,
};

class UpdateClinicBannerService{
  async execute({ clinic_id, banner }: UpdateClinicBannerRequest){
    const updateBanner = await prismaClient.clinic.update({
      where:{
        id: clinic_id,
      },
      data:{
        banner: banner,
      },
      select:{
        id: true,
        name: true,
        banner: true,
      },
    });

    return updateBanner;
  };
};

export { UpdateClinicBannerService };
import { Request, Response } from 'express';
import { UpdateClinicBannerService } from '../../services/clinic/UpdateClinicBannerService';

class UpdateClinicBannerController{
  async handle(req: Request, res: Response){
    const clinic_id = req.clinic_id;

    const updateClinicBannerService = new UpdateClinicBannerService();
    
    if(!req.file){
      throw new Error('Image invalid.');
    }else{
      const { filename: banner } = req.file;

      const updateBanner = await updateClinicBannerService.execute({
        clinic_id,
        banner,
      });

      return res.json(updateBanner);
    };
  };
};

export { UpdateClinicBannerController };
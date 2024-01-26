import { Request, Response } from 'express';
import { DeleteServiceClinicService } from '../../services/clinic/DeleteServiceClinicService';

class DeleteServiceClinicController{
  async handle(req: Request, res: Response){
    const clinic_id = req.clinic_id;
    const service_id = req.query.service_id as string;

    const deleteServiceClinicService = new DeleteServiceClinicService();
    
    const deleteService = await deleteServiceClinicService.execute({
      clinic_id,
      service_id,
    });

    return res.json(deleteService);
  };
};

export { DeleteServiceClinicController };
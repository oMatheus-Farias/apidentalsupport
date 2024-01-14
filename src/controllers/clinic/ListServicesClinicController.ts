import { Request, Response } from 'express';
import { ListServicesClinicService } from '../../services/clinic/ListServicesClinicService';

class ListServicesClinicController{
  async handle(req: Request, res: Response){
    const clinic_id = req.clinic_id;

    const listServicesService = new ListServicesClinicService();

    const listService = await listServicesService.execute({
      clinic_id,
    });

    return res.json(listService);
  };
};

export { ListServicesClinicController };
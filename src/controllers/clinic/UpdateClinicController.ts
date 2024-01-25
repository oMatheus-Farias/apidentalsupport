import { Request, Response } from 'express';
import { UpdateClinicService } from '../../services/clinic/UpdateClinicService';

class UpdateClinicController{
  async handle(req: Request, res: Response){
    const clinic_id = req.clinic_id;
    const { name, address, contact, operation, status } = req.body;

    const updateClinicService = new UpdateClinicService();

    const updateClinic = await updateClinicService.execute({
      clinic_id,
      name,
      address,
      contact,
      operation,
      status,
    });

    return res.json(updateClinic);
  };
};

export { UpdateClinicController };
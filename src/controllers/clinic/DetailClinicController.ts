import { Request, Response } from 'express';
import { DetailClinicService } from '../../services/clinic/DetailClinicService';

class DetailClinicController{
  async handle(req: Request, res: Response){
    const clinic_id = req.clinic_id;

    const detailClinicService = new DetailClinicService();

    const detailClinic = await detailClinicService.execute({
      clinic_id,
    });

    return res.json(detailClinic);
  };
};

export { DetailClinicController };
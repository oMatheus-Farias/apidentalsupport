import { Request, Response } from 'express';
import { ListClinicService } from '../../services/user/ListClinicService';

class ListClinicController{
  async handle(req: Request, res: Response){
    const listClinicService = new ListClinicService();

    const listClinic = await listClinicService.execute();

    return res.json(listClinic);
  };
};

export { ListClinicController };
import { Request, Response } from 'express';
import { CreateClinicService } from '../../services/clinic/CreateClinicService';

class CreateClinicController{
  async handle(req: Request, res: Response){
    const { name, address, contact, operation, email, password } = req.body;

    const createClinicService = new CreateClinicService();

    const clinic = await createClinicService.execute({
      name,
      address,
      contact,
      operation,
      email,
      password,
    });

    return res.json(clinic);
  };
};

export { CreateClinicController };
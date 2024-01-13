import { Request, Response } from 'express';
import { AuthClinicService } from '../../services/clinic/AuthClinicService';

class AuthClinicController{
  async handle(req: Request, res: Response){
    const { email, password } = req.body;

    const authClinicService = new AuthClinicService();

    const clinic = await authClinicService.execute({
      email,
      password,
    });

    return res.json(clinic);
  };
};

export { AuthClinicController };
import { Request, Response } from 'express';
import { DetailClinicUniqueService } from '../../services/user/DetailClinicUniqueService';

class DetailClinicUniqueController{
  async handle(req: Request, res: Response){
    const clinic_id = req.query.clinic_id as string;

    const detailClinicUniqueService = new DetailClinicUniqueService();

    const detailClinic = await detailClinicUniqueService.execute({
      clinic_id,
    });

    return res.json(detailClinic);
  };
};

export { DetailClinicUniqueController }
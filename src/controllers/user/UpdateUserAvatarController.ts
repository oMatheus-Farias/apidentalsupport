import { Request, Response } from 'express';
import { UpdateUserAvatarService } from '../../services/user/UpdateUserAvatarService';

class UpdateUserAvatarController{
  async handle(req: Request, res: Response){
    const user_id = req.user_id;

    const updateUserAvatarservice = new UpdateUserAvatarService();

    if(!req.file){
      throw new Error('Image invalid.');
    }else{
      const { filename: avatar } = req.file;

      const updateAvatar = await updateUserAvatarservice.execute({
        user_id,
        avatar,
      });

      return res.json(updateAvatar);
    };
  };
};

export { UpdateUserAvatarController };
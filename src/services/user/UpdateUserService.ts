import prismaClient from '../../prisma';

class UpdateUserService{
  async execute(){
    return { ok: true };
  };
};

export { UpdateUserService };
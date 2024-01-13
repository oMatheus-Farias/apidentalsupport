import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface PayLoad{
  sub: string,
};

export function isAuthenticatedClinic(
  req: Request,
  res: Response,
  next: NextFunction
){
  const authToken = req.headers.authorization;

  if(!authToken){
    res.status(401).end();
  };

  const [, token] = authToken.split(" ");

  try{
    const { sub } = verify(
      token,
      process.env.JWT_SECRET_CLINIC,
    ) as PayLoad;

    req.clinic_id = sub;

    return next();

  }catch(err){
    console.log(err);
    return res.status(401).end();
  };
};
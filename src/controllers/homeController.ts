import { Request, Response } from 'express';

export const getHome = (req: Request, res: Response) => {
  res.render('index', {
    title: process.env.APP_NAME,
    message: `${process.env.APP_NAME} is a small booking platform lent towards travelers on their vacations.`
  });
};

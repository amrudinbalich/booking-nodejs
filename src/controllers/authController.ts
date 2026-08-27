import type { Request, Response } from 'express';

export const loginView = (req: Request, res: Response) => {
    res.render('login');
};

export const loginAction = (req: Request, res: Response) => {

    // todo: write down the login logic..

};
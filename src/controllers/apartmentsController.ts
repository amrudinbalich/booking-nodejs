import type { Request, Response, NextFunction } from 'express';

/**
 * GET /apartments
 * Lists apartments.
 */
export const index = (req: Request, res: Response): void => {

    interface Apartment {
        id: number;

        name: string;
        description: string;

        city: string;
        state: string;
        address: string;

        phone: string;
        active: boolean;
    }

    const apartments: Apartment[] = [
        {
            id: 445,
            name: 'Dugina Plaža 29',
            description: 'Apartment close to the beach with a bright interior and easy city access.',
            city: 'Split',
            state: 'Croatia',
            address: 'Hercegovačka 1, HR-21000 Split, Croatia',
            phone: '+386 669 997',
            active: true,
        },
        {
            id: 446,
            name: 'Marina View 12',
            description: 'Comfortable apartment with a sea view near the waterfront.',
            city: 'Split',
            state: 'Croatia',
            address: 'Obala kneza Branimira 12, HR-21000 Split, Croatia',
            phone: '+385 21 555 120',
            active: false,
        },
        {
            id: 447,
            name: 'Old Town Studio 4',
            description: 'Compact studio in the historic center, ideal for short stays.',
            city: 'Split',
            state: 'Croatia',
            address: 'Dominisova 4, HR-21000 Split, Croatia',
            phone: '+385 21 555 121',
            active: true,
        },
        {
            id: 448,
            name: 'Bacvice Apartment 8',
            description: 'Modern apartment a few minutes from Bačvice beach.',
            city: 'Split',
            state: 'Croatia',
            address: 'Ulica Kralja Zvonimira 8, HR-21000 Split, Croatia',
            phone: '+385 21 555 122',
            active: false,
        },
        {
            id: 449,
            name: 'Palm Garden 21',
            description: 'Quiet apartment with a private balcony and garden feel.',
            city: 'Split',
            state: 'Croatia',
            address: 'Poljička cesta 21, HR-21000 Split, Croatia',
            phone: '+385 21 555 123',
            active: true,
        },
        {
            id: 450,
            name: 'Harbor Lights 3',
            description: 'Stylish apartment near the harbor with plenty of natural light.',
            city: 'Split',
            state: 'Croatia',
            address: 'Trumbićeva obala 3, HR-21000 Split, Croatia',
            phone: '+385 21 555 124',
            active: true,
        },
    ];

    res.json(apartments);

};
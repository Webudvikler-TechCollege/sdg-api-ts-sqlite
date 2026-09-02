import { Request, Response } from 'express';
import { prisma } from '../prisma.js';

class ThemeController {
  getRecords = async (req: Request, res: Response) => {
    try {
      const result = await prisma.theme.findMany({
        select: {
          id: true,
          title: true,
          slug: true,
          goals: {
            select: {
              id: true,
              title: true
            }
          }
        }
      });

      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch themes' });
    }
  };

}

export const themeController = new ThemeController();
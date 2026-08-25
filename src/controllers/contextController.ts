import { Request, Response } from 'express';
import { prisma } from '../prisma.js';

class ContextController {
  getRecords = async (req: Request, res: Response) => {
    try {
      const result = await prisma.context.findMany({
        select: {
          id: true,
          name: true,
          color: true
        }
      });

      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch education goal' });
    }
  };

}

export const contextController = new ContextController();
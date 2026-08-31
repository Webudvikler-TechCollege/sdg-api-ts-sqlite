import { Request, Response } from 'express';
import { prisma } from '../prisma.js';

class FaqController {
  getRecords = async (req: Request, res: Response) => {
    try {
      const result = await prisma.faq.findMany({
        select: {
          id: true,
          title: true,
          context: true
        }
      });

      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch questions' });
    }
  };

}

export const faqController = new FaqController();
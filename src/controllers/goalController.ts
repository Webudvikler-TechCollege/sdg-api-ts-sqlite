import { Request, Response } from 'express';
import { prisma } from '../prisma.js';
import { toBoolean } from '../utils/formatter.js';

class GoalController {
  getRecords = async (req: Request, res: Response) => {
    try {
      const result = await prisma.goal.findMany({
        select: {
          id: true,
          title: true,
          byline: true,
          color: true,
          icon: true
        }
      });

      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch goals' });
    }
  };

  getRecord = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const data = await prisma.goal.findUnique({
        where: {
          id: Number(id)
        },
        include: {
            targets: {
              select: {
                id: true,
                title: true,
                description: true
              },
              orderBy: {
                sort_number: 'asc'
              }
            }
        }
      });

      if (!data) {
        return res.status(404).json({ error: 'Goal not found' });
      }

      const response = {
        ...data
      };

      res.json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch goal' });
    }
  };
}

export const goalController = new GoalController();
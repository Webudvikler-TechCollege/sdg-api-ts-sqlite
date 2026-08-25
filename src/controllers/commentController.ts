import { Request, Response } from 'express';
import { prisma } from '../prisma.js';

class CommentController {

  getRecords = async (req: Request, res: Response) => {

    try {

      const data = await prisma.comment.findMany();

      res.json(data);

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error: 'Failed to fetch comments'
      });

    }
  };

  getRecordsByGoalId = async (req: Request, res: Response) => {

    const goalId = req.goal?.id;

    if (!goalId) {
      return res.status(401).json({
        error: 'Unauthorized'
      });
    }

    try {

      const data = await prisma.comment.findMany({
        where: {
          goal_id: goalId
        },
        select: {
          CommentedUserId: true,
          numStars: true,
          comment: true
        }
      });

      res.json(data);

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error: 'Failed to fetch Comments'
      });

    }
  };

  createRecord = async (req: Request, res: Response) => {

    const CommenterId = req.user?.id;

    const {
      CommentedUserId,
      comment,
      numStars
    } = req.body;

    if (!CommenterId || !CommentedUserId || !comment || !numStars) {
      return res.status(400).json({
        error: 'All fields are required'
      });
    }

    try {

      const data = await prisma.Comment.create({
        data: {
          CommenterId: Number(CommenterId),
          CommentedUserId: Number(CommentedUserId),
          comment,
          numStars: Number(numStars)
        }
      });

      res.status(201).json(data);

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error: 'Failed to create Comment'
      });

    }
  };

  updateRecord = async (req: Request, res: Response) => {

    const { id } = req.params;

    const {
      numStars,
      comment,
      CommentedUserId
    } = req.body;

    try {

      const data = await prisma.Comment.update({
        where: {
          id: Number(id)
        },
        data: {
          numStars: Number(numStars),
          comment,
          CommentedUserId: Number(CommentedUserId)
        }
      });

      res.status(200).json(data);

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error: 'Failed to update Comment'
      });

    }
  };

  deleteRecord = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

      await prisma.Comment.delete({
        where: {
          id: Number(id)
        }
      });

      res.status(200).json({
        message: 'Comment deleted'
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error: 'Failed to delete Comment'
      });

    }
  };
}

export const commentController = new CommentController();
import { Request, Response } from "express";
import { prisma } from "../prisma.js";

class CommentController {

  getRecords = async (req: Request, res: Response) => {

    try {

      const data = await prisma.comment.findMany();

      res.json(data);

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error: "Failed to fetch comments"
      });

    }
  };


  getRecordsByGoalId = async (req: Request, res: Response) => {

    const { goalId } = req.params;

    if (!goalId) {
      return res.status(400).json({
        error: "Goal ID is required"
      });
    }

    try {

      const data = await prisma.comment.findMany({
        where: {
          goal_id: Number(goalId)
        }
      });

      res.json(data);

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error: "Failed to fetch comments"
      });

    }
  };


  createRecord = async (req: Request, res: Response) => {

    const {
      title,
      comment,
      user_id,
      goal_id,
      active
    } = req.body;

    if (!title || !comment || !user_id || !goal_id) {
      return res.status(400).json({
        error: "All fields are required"
      });
    }

    try {

      const data = await prisma.comment.create({
        data: {
          title,
          comment,
          user_id: Number(user_id),
          goal_id: Number(goal_id),
          active: Boolean(active),
          created: new Date()
        }
      });

      res.status(201).json(data);

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error: "Failed to create comment"
      });

    }
  };


  updateRecord = async (req: Request, res: Response) => {

    const { id } = req.params;

    const {
      title,
      comment,
      active
    } = req.body;

    try {

      const data = await prisma.comment.update({
        where: {
          id: Number(id)
        },
        data: {
          title,
          comment,
          active: Boolean(active)
        }
      });

      res.status(200).json(data);

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error: "Failed to update comment"
      });

    }
  };


  deleteRecord = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

      await prisma.comment.delete({
        where: {
          id: Number(id)
        }
      });

      res.status(200).json({
        message: "Comment deleted"
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error: "Failed to delete comment"
      });

    }
  };

}

export const commentController = new CommentController();
import { Response, Request, NextFunction } from "express";
import { ZodError, ZodSchema } from "zod"
const validateShema = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json({ errors: error.errors.map((error) => error.message) });
    } else {
      return res.sendStatus(500)
    }
  }
};

export default validateShema;
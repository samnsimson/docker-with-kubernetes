import express, { Request, Response } from "express";

const indexRouter = express.Router();

indexRouter.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

export default indexRouter;

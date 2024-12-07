import express, { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response): void => {
  res.send('Olá, DEV!');
});

export { server };

import * as express from 'express';
import { createDbConnection } from '../src/database/connectDb';
import { getPlayer,createPlayer,createScore } from '../src/controllers/player';
import { getLeaderboard } from '../src/controllers/leaderboard';
import middlewares from './config/middlewares';
const cors = require('cors');

export const createApp = async () => {
  const app = express();
  const { errorHandler } = await import('./util/errorhandler');
  await createDbConnection(
    'mongodb+srv://dodo:goodjob@deneme.zvnwm.mongodb.net/goodjob?retryWrites=true&w=majority'
  );

  app.use(cors());
  app.use(errorHandler);
  console.log(errorHandler);

  const PORT = process.env.PORT || 9090;
  const HOST = process.env.HOST || 'localhost';
  const ENV = process.env.NODE_ENV || 'development';

  app.set('host', HOST);
  app.set('port', PORT);
  app.set('env', ENV);
  middlewares.config(app);

  app.get('/user/profile/:id', getPlayer);
  app.post('/user/create', createPlayer);
  app.post('/score/submit',createScore);
  app.get('/leaderboard', getLeaderboard);
  app.get('/leaderboard/:filter', getLeaderboard);
  return app;
};

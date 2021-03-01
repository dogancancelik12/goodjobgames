import { MongoClient } from 'mongodb';
const mongoose = require('mongoose');
import { logger } from '../util/logger';

export const createDbConnection = async (uri: string) => {
  try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('Db connected');
  } catch (error) {
    console.log('Db connection error', error.message);
  }
};

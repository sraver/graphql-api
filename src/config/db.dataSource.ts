import { DataSource } from 'typeorm';
import 'dotenv/config';
import dbConfig from './db.config';

const AppDataSource = new DataSource(dbConfig());

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default AppDataSource;

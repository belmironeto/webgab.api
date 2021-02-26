import mongoose from 'mongoose';

import systemModel from './systemModel.js';
import serverModel from './serverModel.js';

const db = {
  mongoose: mongoose,
  url:
    'mongodb+srv://prodsystem:gab102030@prodgab.01ykq.mongodb.net/prod_system',
  systems: systemModel(mongoose),
  servers: serverModel(mongoose),
};

export { db };

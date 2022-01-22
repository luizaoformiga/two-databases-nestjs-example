import * as mongoose from 'mongoose';

export const LoggerSchema = new mongoose.Schema({
  user_id: String,
  timestamp: Date,
  entity_id: String,
  entity_type: String,
  action: String,
});
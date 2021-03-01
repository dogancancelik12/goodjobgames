import { Schema, Document, model } from 'mongoose';
import { nanoid } from 'nanoid';

export interface Score extends Document {
  user_id: string;
  score_worth:number;
  timestamp:number;
}

const ScoreShema: Schema = new Schema({
  user_id: {
    type: String
  },
  score_worth:{
    type: Number,
  },
  timestamp:{
    type:Number,
  },



});

export const Score = model<Score>('Score', ScoreShema);

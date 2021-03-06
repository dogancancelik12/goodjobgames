import { Schema, Document, model } from 'mongoose';
import { nanoid } from 'nanoid';


export interface Player extends Document {
  user_id: string;
  display_name:string;
  points:number;
  rank:number;
  country: string;
}

const PlayerSchema: Schema = new Schema({
  user_id: {
    type: String
  },
  display_name:{
    type: String,
  },
  country:{
    type: String,
    required:false
  },
  points:{
    type:Number,
  },
  rank:{
    type:Number,
  }


});

export const Player = model<Player>('Player', PlayerSchema);

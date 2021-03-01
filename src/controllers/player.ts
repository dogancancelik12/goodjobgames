import { RequestHandler } from 'express';
import { playerService } from '../service/Players';

export const getPlayer: RequestHandler = async (req, res) => {
  const player = await playerService.getPlayer(req.params.id)
  const {user_id, display_name, rank, points, country} = player
  res.status(200).json({user_id, display_name, rank, points, country} );
}
export const createPlayer: RequestHandler = async (req,res)=>{
  const playerId = await playerService.createPlayer(req.body)
  res.status(200).json({id:playerId});
}
export const createScore: RequestHandler = async(req,res)=>{
  const playerId = await playerService.createScore(req.body)
  res.status(200).json({id:playerId})
}
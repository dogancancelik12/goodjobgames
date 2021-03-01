import { RequestHandler } from 'express';
import { playerService } from '../service/Players';

export const getLeaderboard: RequestHandler = async (req, res) => {
  const players = await playerService.getLeaderboard(req.params.filter)
  const playersResponse = players.map(player => ({
    user_id: player.user_id,
    display_name: player.display_name,
    points: player.points,
    rank: player.rank,
    country: player.country
  }))
  res.status(200).json(playersResponse);
}

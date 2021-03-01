import { Player } from '../models/Player';
import { logger } from '../util/logger';
import { Score } from '../models/Score';
const createPlayerRepository = () => {
  
  const getPlayer = async (id: string): Promise<Player> => {
    try {
      const player = await Player.findOne({ user_id:id });
      if (!player) {
        throw logger.info('Player with this id not found: ', player);
      }
      return player;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const getPlayers = async (filter?:any): Promise<Player[]> => {
    if(filter){
      const players = await Player.find({country: filter});
      return players;
    }else {
      const players = await Player.find();
      return players;
    }
    
  };

  const updatePlayer = async (score: Score): Promise<Player> => {
    try {
      const player = await Player.findOneAndUpdate({user_id:score.user_id},{$inc : {points: score.score_worth} });
      if (!player) {
        throw logger.info('Player with this id not found for update: ', player);
      }
      return player;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const createPlayer = async (player: Player): Promise<string> => {
    const newPlayer = new Player(player)
    logger.info('Player: %j', newPlayer)
    const result = await newPlayer.save()
    return result.user_id
  }
  const createScore = async (score:Score): Promise<string> =>{
    const newScore= new Score(score)
    logger.info('Player score with id: %j', newScore)
    const result = await newScore.save()
    return result._id
  }

  return {
    getPlayer,
    getPlayers,
    createPlayer,
    createScore,
    updatePlayer,
  };
};

export const PlayerRepository = createPlayerRepository();

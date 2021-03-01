import { Player } from '../models/Player';
import { PlayerRepository } from '../repositories/player';
import { logger } from '../util/logger';
import { Score } from '../models/Score';
import { getLeaderboard } from '../controllers/leaderboard';
import { getPlayer } from '../controllers/player';
const _ = require('lodash');

interface PlayerService {
  getPlayer(id: string): Promise<Player>;
  createPlayer(player:Player): Promise<string>;
  createScore(score:Score): Promise<string>;
  submitScore(score:Score): Promise<Player>;
  getLeaderboard(filter?:any): Promise<any[]>;
  
}

const createPlayerService = (): PlayerService => {
  
  const getPlayer = async (id: string) => {
    try {
      const player = await PlayerRepository.getPlayer(id);
      logger.info('Get a Player: %j', player);
      return player;
    }
    catch (error) {
      console.log(error);
      return error;
    }
  }

  const createPlayer = async (player:Player) => {
    const player_id = PlayerRepository.createPlayer(player)
    logger.info('create a Player: %j', player_id)
    return player_id
  }

  const createScore = async (score:Score)=>{
    const player = PlayerRepository.createScore(score)
    logger.info('create a score: %j', player)
    await submitScore(score)
    return player

  }

  const submitScore = async (score:Score)=>{
    const player = await PlayerRepository.updatePlayer(score)
    logger.info('create a score: %j', player)
    return player

  }

  const getLeaderboard = async (filter?:any)=>{
    const players = await PlayerRepository.getPlayers()
    const sortedPlayers = _.sortBy(players, (player:any) => player.points).reverse()
    console.log(sortedPlayers)
    const leaderboard = sortedPlayers.map((player:any,index:number) => ({display_name: player.display_name,user_id:player.user_id, points:player.points,rank: index +1 }))
    console.log(leaderboard)
    // logger.info('leaderboard: %j', leaderboard)
    return leaderboard

  }

  return {
    getPlayer,
    createPlayer,
    createScore,
    submitScore,
    getLeaderboard,
  };
}

export const playerService = createPlayerService();

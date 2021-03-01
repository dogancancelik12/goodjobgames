import axios from 'axios';

interface GeniusSportsClientOptions {
  baseURL: string;
}

const createGeniusSportsClient = ({ baseURL }: GeniusSportsClientOptions) => {
  const client = axios.create({ baseURL });

  const getPlayers = async (leagueId: string) => {
    const players = await client.get(`/leagues/${leagueId}/persons`, {
      params: { ak: 'a5e0606b02d3950a3663169b87c83776' },
    });
    return players?.data?.response?.data;
  };

  return {
    getPlayers,
  };
};

export const geniusSporstClient = createGeniusSportsClient({
  baseURL: 'https://api.test.wh.geniussports.com/v1/basketball',
});

export interface GameInfo {
  description: string;
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  id: number;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  platform: string;
  publisher: string;
  release_date: string;
  screenshots: { id: number; image: string }[];
  short_description: string;
  status: string;
  thumbnail: string;
  title: string;
}

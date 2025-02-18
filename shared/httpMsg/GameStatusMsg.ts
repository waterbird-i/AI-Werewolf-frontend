
import { GameStatus } from "../GameDefs";
import { day, PlayerDef, PublicPlayerDef } from "../ModelDefs";


export type GameStatusResponse = {
  players: PublicPlayerDef[];
  self: PlayerDef;
  curDay: day;
  gameStatus: GameStatus;
};
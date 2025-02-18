import { GameStatus } from "../GameDefs";
import { day } from "../ModelDefs";

export interface ChangeStatusMsg {
  setDay: day;
  setStatus: GameStatus;
//   timeout: number;
}

import RoleAct from "./RoleAct";

export interface SeerCheckRequest extends RoleAct {}

export type SeerCheckData = {
  isWolf: boolean;
};
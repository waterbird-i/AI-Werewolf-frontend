import { Role, Potion } from "./GameDefs";

export type ID = string;
export type index = number;

export type day = number; // 第0夜: 0, 第 n 天白天: 2n-1, 第 n 天晚上: 2n

export interface PublicPlayer {
  index: index;
  name: string;
  isAlive: boolean;
  isSheriff: boolean;
  isDying: boolean;
  hasVotedAt: index[];
//   sheriffVotes: index[];
}

export interface Player extends PublicPlayer {
  role: Role;
  RoleStatus?: RoleStatus;
  die?: {
    at: day;
    fromIndex: index[];
    fromRole: Role;
  };
  potion?: Potion;
  _id: ID;
}

export interface TokenDef {
  ID: ID;
  datetime: number;
//   roomNumber: string;
}

// export interface HunterStatus {
//   shootAt: {
//     day: day;
//     player: index;
//   };
// }

export interface GuardStatus {
  protects: index[];
}

export interface SeerStatus {
  checks: {
    index: index;
    isWerewolf: boolean;
  }[];
}

export interface WerewolfStatus {
  wantToKills: index[];
}

// interface PotionStatus {
//   usedDay: day;
//   usedAt: index;
// }

// export type WitchStatus = Record<Potion, PotionStatus>;

export type RoleStatus = Partial<
//   HunterStatus &
    GuardStatus &
    SeerStatus &
    WerewolfStatus
//     WitchStatus
>;

export interface RoleEvent {
  role: Role;
  events: {
    at: day;
    deed: string;
  }[];
}

export type GameEvent = {
  role: Role;
  at: day;
  deed: string;
};

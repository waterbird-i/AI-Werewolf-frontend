import { Role, Potion } from "./GameDefs";

export type ID = string; // 玩家 id
export type index = number; // 玩家编号, 从1开始

export type day = number; // 第0夜: 0, 第 n 天白天: 2n-1, 第 n 天晚上: 2n

export interface PublicPlayerDef {
  index: index; // 玩家编号 -> 游戏结束重置
  name: string; // 昵称
  isAlive: boolean; // 是否存活 -> 游戏结束重置
  isSheriff: boolean; // 是否为警长 -> 游戏结束重置
  isDying: boolean; // 是否正在进行死亡结算
  hasVotedAt: index[]; // 下标是天数, value 是投给了谁 包括 狼人杀人 / 白天投票
//   sheriffVotes: index[]; // 下标是天数, 包括上警(index=0)和白天传警徽 -> 游戏结束重置
}

export interface PlayerDef extends PublicPlayerDef {
  role: Role; // 游戏角色 -> 游戏结束重置
  RoleStatus?: RoleStatus; // 允许自定义 -> 游戏结束重置
  die?: {  // 具体死亡信息 -> 游戏结束重置
    at: day; // 第几天死的
    fromIndex: index[]; // 被哪些人杀死的(名字)
    fromRole: Role; // 被哪个角色杀死的
  };
  _id: ID; // string + 时间戳 的 token
  canBeVoted: boolean; // 是否能在当前阶段被投票
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

export interface ProphetStatus {
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
    ProphetStatus &
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

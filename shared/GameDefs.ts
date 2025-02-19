export type SetableRoles =
  | "HUNTER"
  | "WITCH"
  | "PROPHET"
  | "GUARD"
  | "VILLAGER"
  | "WEREWOLF"
  | "SHERIFF";

export type Role = SetableRoles | "";

export type Potion = "POISON" | "MEDICINE";

export const ChineseNames: Record<Role, string> = {
  HUNTER: "猎人",
  GUARD: "守卫",
  PROPHET: "预言家",
  SHERIFF: "警长",
  VILLAGER: "村民",
  WEREWOLF: "狼人",
  WITCH: "女巫",
  "": "",
};

export enum GamePhase {
  INIT,
  NIGHT_START,
  WEREWOLF_ACTION,
  SEER_ACTION,
  WITCH_ACTION,
  GUARD_ACTION,
  HUNTER_ACTION,
  DAY_START,
  //   SHERIFF_ELECT = "上警",
  //   SHERIFF_VOTE = "投票选警长",
  //   SHERIFF_SPEECH = "警长竞选发言",
  //   SHERIFF_VOTE_CHECK = "查看警长投票结果",
  //   SHERIFF_ASSIGN = "指派警长",
  //   SHERIFF_ASSIGN_CHECK = "检查指派警长的结果",
  BEFORE_DAY_DISCUSS,
  DISCUSSION,
  VOTING,
  HUNTER_ACTION_AGAIN,
  LEAVE_MSG,
  GAME_OVER,
}

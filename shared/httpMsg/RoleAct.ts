import { index } from "../ModelDefs";

export default interface RoleAct {
  /**
   * 执行操作的目标玩家编号\
   * 若为 女巫, 则正编号代表救人, 负编号代表杀人
   */
  target: index;
}
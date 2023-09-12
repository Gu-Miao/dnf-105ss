import { Data } from '.'

export const fusionShoes: Data[] = [
  {
    name: '冰花：辽阔冻土',
    type: 'fusion-shoe',
    damageValue: 1704 * 4,
  },
  {
    name: '猎食：追袭猎手',
    type: 'fusion-shoe',
    damageValue: 1266 * 5,
  },
  {
    name: '灵通：并行大地',
    prefix: '16% 占比',
    type: 'fusion-shoe',
    damageValue: 4321,
    coldDownRecover: 0.2 * 0.16,
    other: '期望为 20% CDR，按 95 级技能伤害占比 16% 计算',
  },
  {
    name: '灵通：并行大地',
    prefix: '13% 占比',
    type: 'fusion-shoe',
    damageValue: 4321,
    coldDownRecover: 0.2 * 0.13,
    other: '期望为 20% CDR，按 95 级技能伤害占比 13% 计算',
  },
  {
    name: '暴怒：迷失方向的绝望',
    type: 'fusion-shoe',
    damageValue: 6213,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '雷光：踏足轰雷的龙爪',
    type: 'fusion-shoe',
    damageValue: 6213,
  },
]
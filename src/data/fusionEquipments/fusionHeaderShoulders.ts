import { Data } from '.'

export const fusionHeaderShoulders: Data[] = [
  {
    name: '冰花：萦绕冰霜',
    type: 'fusion-header-shoulder',
    damageValue: 1704 * 4,
    speed: {
      attackSpeed: 3,
      castingSpeed: 4.5,
    },
  },
  {
    name: '猎食：残酷袭击',
    type: 'fusion-header-shoulder',
    damageValue: 5311,
  },
  {
    name: '灵通：暖融阳光',
    prefix: '17% 占比',
    type: 'fusion-header-shoulder',
    damageValue: 3756,
    cooldownRecovery: 22.5 * 0.17,
    other: '期望为 22.5% CDR，按 40 和 75 级技能伤害占比 17% 计算',
  },
  {
    name: '灵通：暖融阳光',
    prefix: '14% 占比',
    type: 'fusion-header-shoulder',
    damageValue: 3756,
    cooldownRecovery: 3.15,
    other: '期望为 22.5% CDR，按 40 和 75 级技能伤害占比 14% 计算',
  },
  {
    name: '暴怒：毁灭万物的盲目',
    type: 'fusion-header-shoulder',
    damageValue: 6213,
    speed: {
      moveSpeed: 4,
    },
  },
  {
    name: '雷光：拥抱沉雷的龙翼',
    type: 'fusion-header-shoulder',
    damageValue: 5861,
  },
]

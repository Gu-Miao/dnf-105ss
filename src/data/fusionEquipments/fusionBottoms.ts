import { Data } from '.'

export const fusionBottoms: Data[] = [
  {
    name: '冰花：残酷寒意',
    type: 'fusion-bottom',
    damageValue: 1704 * 4,
  },
  {
    name: '猎食：消弭脉动',
    type: 'fusion-bottom',
    damageValue: 6213,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '灵通：守候温度',
    prefix: '16% 占比',
    type: 'fusion-bottom',
    damageValue: 4325,
    coldDownRecover: 0.2 * 0.16,
    other: '期望为 20% CDR，按 35 和 70 级技能伤害占比 16% 计算',
  },
  {
    name: '灵通：守候温度',
    prefix: '12% 占比',
    type: 'fusion-bottom',
    damageValue: 4325,
    coldDownRecover: 0.2 * 0.12,
    other: '期望为 20% CDR，按 35 和 70 级技能伤害占比 12% 计算',
  },
  {
    name: '暴怒：贪恋世间的渴求',
    type: 'fusion-bottom',
    damageValue: 6213,
    speed: {
      moveSpeed: 4,
    },
  },
  {
    name: '雷光：呼唤落雷的龙角',
    type: 'fusion-bottom',
    damageValue: 4685,
  },
]

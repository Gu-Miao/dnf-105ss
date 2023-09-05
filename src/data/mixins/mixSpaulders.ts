import { Data } from '.'

export const mixSpaulders: Data[] = [
  {
    name: '冰花：萦绕冰霜',
    type: '融合 - 头肩',
    attackEnhancement: 1704 * 4,
    speed: {
      attackSpeed: 3,
      castingSpeed: 4.5,
    },
  },
  {
    name: '猎食：残酷袭击',
    type: '融合 - 头肩',
    attackEnhancement: 5311,
  },
  {
    name: '灵通：暖融阳光',
    prefix: '17% 占比',
    type: '融合 - 头肩',
    attackEnhancement: 3756,
    coldDownRecover: 0.225 * 0.17,
    other: '期望为 22.5% CDR，按 40 和 75 级技能伤害占比 17% 计算',
  },
  {
    name: '灵通：暖融阳光',
    prefix: '14% 占比',
    type: '融合 - 头肩',
    attackEnhancement: 3756,
    coldDownRecover: 0.225 * 0.14,
    other: '期望为 22.5% CDR，按 40 和 75 级技能伤害占比 14% 计算',
  },
  {
    name: '暴怒：毁灭万物的盲目',
    type: '融合 - 头肩',
    attackEnhancement: 6213,
    speed: {
      moveSpeed: 4,
    },
  },
  {
    name: '雷光：拥抱沉雷的龙翼',
    type: '融合 - 头肩',
    attackEnhancement: 5861,
  },
]

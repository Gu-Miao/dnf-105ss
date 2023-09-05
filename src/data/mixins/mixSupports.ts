import { Data } from '.'

export const mixSupports: Data[] = [
  {
    name: '灵魂拘束：支配权能',
    type: '融合 - 辅助装备',
    skillAttacks: [4],
    attackEnhancement: 2000,
  },
  {
    name: '罪恶支配：绝望之恐怖',
    type: '融合 - 辅助装备',
    attackEnhancement: 4200,
    elementEnhancement: 14,
    speed: {
      attackSpeed: 4,
      castingSpeed: 6,
    },
  },
  {
    name: '深渊结集：无法定义之存在',
    type: '融合 - 辅助装备',
    skillAttacks: [3],
    attackEnhancement: 2350,
  },
  {
    name: '卓越：玛尔本源',
    type: '融合 - 辅助装备',
    attackEnhancement: 8560,
  },
  {
    name: '光辉：崇高的使命',
    prefix: '未被击',
    type: '融合 - 辅助装备',
    skillAttacks: [3],
    attackEnhancement: 3500,
  },
  {
    name: '光辉：崇高的使命',
    prefix: '被击',
    type: '融合 - 辅助装备',
    skillAttacks: [3],
    attackEnhancement: 3500 - 2000,
  },
]

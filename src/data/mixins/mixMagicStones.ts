import { Data } from '.'

export const mixMagicStones: Data[] = [
  {
    name: '灵魂拘束：沉重罪魇',
    type: '融合 - 魔法石',
    skillAttacks: [4],
    attackEnhancement: 2000,
  },
  {
    name: '罪恶支配：哀鸣之恐怖',
    type: '融合 - 魔法石',
    attackEnhancement: 3250,
    elementEnhancement: 16,
  },
  {
    name: '深渊结集：无限坍塌',
    type: '融合 - 魔法石',
    skillAttacks: [3],
    attackEnhancement: 2350,
  },

  {
    name: '卓越：魔力之环',
    type: '融合 - 魔法石',
    attackEnhancement: 8560,
  },
  {
    name: '光辉：无畏的意志',
    prefix: '未被击',
    type: '融合 - 魔法石',
    skillAttacks: [3],
    attackEnhancement: 3500,
  },
  {
    name: '光辉：无畏的意志',
    prefix: '被击',
    type: '融合 - 魔法石',
    skillAttacks: [3],
    attackEnhancement: 3500 - 2000,
  },
]

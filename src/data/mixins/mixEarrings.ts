import { Data } from '.'

export const mixEarrings: Data[] = [
  {
    name: '灵魂拘束：绝对封印',
    type: '融合 - 耳环',
    skillAttacks: [4],
    attackEnhancement: 2000,
  },
  {
    name: '罪恶支配：原初之恐怖',
    type: '融合 - 耳环',
    attackEnhancement: 2350,
    elementEnhancement: 18,
  },
  {
    name: '深渊结集：未定之力',
    type: '融合 - 耳环',
    skillAttacks: [3],
    attackEnhancement: 2350,
  },
  {
    name: '卓越：宇宙耳环',
    type: '融合 - 耳环',
    attackEnhancement: 8560,
  },
  {
    name: '光辉：传承的智慧',
    prefix: '未被击',
    type: '融合 - 耳环',
    skillAttacks: [3],
    attackEnhancement: 3500,
  },
  {
    name: '光辉：传承的智慧',
    prefix: '被击',
    type: '融合 - 耳环',
    skillAttacks: [3],
    attackEnhancement: 3500 - 2000,
  },
]

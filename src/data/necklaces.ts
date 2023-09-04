import { Data } from '.'

export const necklaces: Data[] = [
  {
    name: '战士的荣耀项链',
    type: '项链',
    attackEnhancement: 5336,
    elementEnhancement: 15,
    coldDownReduce: 0.1,
    other: 'CD 收益估算为 10% 减 CD',
  },
  {
    name: '第一个黑桃 - 贵族',
    type: '项链',
    attackEnhancement: 4528,
    elementEnhancement: 35,
    other: '按 35 属强附魔计算',
  },
  {
    name: '黯星项链',
    type: '项链',
    skillAttacks: [7],
    attackEnhancement: 4972 + 2668,
    elementEnhancement: 15,
    speed: 20,
  },
  {
    name: '脉冲触发器',
    type: '项链',
    attackEnhancement: 4796 + 4446,
    elementEnhancement: 15,
    speed: {
      attackSpeed: 25 + 25,
    },
  },
  {
    name: '五感之灵项链',
    type: '项链',
    attackEnhancement: 6952,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '生命的脉动',
    type: '项链',
    skillAttacks: [3],
    attackEnhancement: 6414,
    elementEnhancement: 30,
  },
  {
    name: '温柔的旋律',
    type: '项链',
    skillAttacks: [10],
    attackEnhancement: 4258,
    elementEnhancement: 20,
  },
  {
    name: '风化的恶意',
    type: '项链',
    skillAttacks: [3],
    attackEnhancement: 6414,
    elementEnhancement: 30,
  },
  {
    name: '浮光跃金项链',
    type: '项链',
    skillAttacks: [8],
    attackEnhancement: 4528 + 741 * 4,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
      moveSpeed: 10,
    },
  },
  {
    name: '石巨人之心项链',
    type: '项链',
    skillAttacks: [3],
    attackEnhancement: 6414,
    elementEnhancement: 30,
  },
  {
    name: '蓝色自然的种子',
    type: '项链',
    attackEnhancement: 5604,
    elementEnhancement: 15,
    abnormal: {
      type: '灼烧',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.35,
    },
  },
  {
    name: '高科技闪影项链',
    type: '项链',
    skillAttacks: [10],
    attackEnhancement: 4876,
    elementEnhancement: 15,
    coldDownReduce: 0.15,
  },
  {
    name: '领域之心项链',
    type: '项链',
    skillAttacks: [3],
    attackEnhancement: 5416 + 222 * 20,
    elementEnhancement: 15,
    speed: 5 * 3,
  },
  {
    name: '守护龙的庇护 - 勇气',
    type: '项链',
    attackEnhancement: 5874,
    elementEnhancement: 30,
  },
  {
    name: '遥感之心项链',
    type: '项链',
    attackEnhancement: 5510,
    elementEnhancement: 15,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '骑士的赎罪',
    type: '项链',
    skillAttacks: [10],
    attackEnhancement: 5604,
    speed: {
      attackSpeed: 20,
      castingSpeed: 30,
      moveSpeed: 20,
    },
  },
  {
    name: '熔丝项链',
    type: '项链',
    skillAttacks: [5],
    attackEnhancement: 6682 + 1778,
  },
  {
    name: '残忍之心项链',
    type: '项链',
    skillAttacks: [3],
    attackEnhancement: 6414,
    elementEnhancement: 30,
  },
  {
    name: '无尽的愤怒项链',
    type: '项链',
    skillAttacks: [8.5],
    attackEnhancement: 5240,
    elementEnhancement: 15,
    other: '减防估算为 8.5% 技攻',
  },
  {
    name: '原子核项链',
    type: '项链',
    attackEnhancement: 4702,
    elementEnhancement: 15,
    coldDownRecover: 0.05 * 5,
  },
  {
    name: '正气傲然的理念',
    type: '项链',
    attackEnhancement: 4258 + 356 * 10,
    elementEnhancement: 10,
  },
  {
    name: '暴龙王的支配 - 恐怖',
    type: '项链',
    attackEnhancement: 7396,
    elementEnhancement: 10 + 15,
    speed: {
      attackSpeed: 20,
      castingSpeed: 30,
      moveSpeed: 20,
    },
  },
  {
    name: '命运的领航标',
    type: '项链',
    skillAttacks: [7],
    attackEnhancement: 6048,
    elementEnhancement: 15,
    speed: 10,
  },
]

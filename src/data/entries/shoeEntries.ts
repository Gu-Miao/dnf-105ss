import { Entry } from '.'

export const shoeEntries: Entry[] = [
  {
    name: '空技能栏 12% 技攻',
    type: '鞋',
    from: '恩特精灵战靴',
    skillAttacks: [12],
    attackEnhancement: 296,
  },
  {
    name: 'Lv70 20% 技攻，Lv70 加 30% CD',
    type: '鞋',
    from: '恩特精灵战靴',
    skillAttacks: [20 * 0.15],
    attackEnhancement: 296,
    coldDownReduce: -0.3 * 0.15,
    other: '按女漫游 9 保压制射击 15% 占比计算',
  },
  {
    name: 'Lv70 20% 技攻，Lv75 加 30% CD',
    type: '鞋',
    from: '恩特精灵战靴',
    skillAttacks: [20 * 0.15],
    attackEnhancement: 296,
    coldDownReduce: -0.3 * 0.07,
    other: '按女漫游 9 保压制射击 15% 和 7% 占比计算',
  },
  {
    name: 'Lv75 20% 技攻，Lv75 加 30% CD',
    type: '鞋',
    from: '恩特精灵战靴',
    skillAttacks: [5.6],
    attackEnhancement: 296,
    coldDownReduce: -0.3 * 0.28,
    other: '按男气功深潜裤子雷切 28% 占比计算',
  },
  {
    name: 'Lv75 20% 技攻，Lv80 加 30% CD',
    type: '鞋',
    from: '恩特精灵战靴',
    skillAttacks: [5.6],
    attackEnhancement: 296,
    coldDownReduce: -0.3 * 0.06,
    other: '按男气功深潜裤子雷切 28% 和 6% 占比计算',
  },
  {
    name: '25 属强',
    type: '鞋',
    from: '深潜迷航长靴',
    attackEnhancement: 593,
    elementEnhancement: 25,
  },
]

import { Data } from '.'

export const shoeOptions: Data[] = [
  {
    name: '空技能栏 12% 技攻',
    type: 'shoe',
    from: '恩特精灵战靴',
    damageValue: 296,
    skillAtk: [12],
  },
  {
    name: 'Lv70 20% 技攻，Lv70 +30% CD',
    type: 'shoe',
    from: '恩特精灵战靴',
    damageValue: 1334,
    skillAtk: [20 * 0.15],
    cooldownReduction: -30 * 0.15,
    other: '按女漫游 9 保压制射击 Lv70 15% 占比计算',
  },
  {
    name: 'Lv70 20% 技攻，Lv75 +30% CD',
    type: 'shoe',
    from: '恩特精灵战靴',
    damageValue: 1334,
    skillAtk: [20 * 0.15],
    cooldownReduction: -30 * 0.07,
    other: '按女漫游 9 保压制射击 Lv70 15% 和 Lv75 7% 占比计算',
  },
  {
    name: 'Lv75 20% 技攻，Lv75 +30% CD',
    type: 'shoe',
    from: '恩特精灵战靴',
    damageValue: 1334,
    skillAtk: [5.6],
    cooldownReduction: -30 * 0.28,
    other: '按男气功双 75 深潜裤子特化雷切 Lv75 28% 占比计算',
  },
  {
    name: 'Lv75 20% 技攻，Lv80 +30% CD',
    type: 'shoe',
    from: '恩特精灵战靴',
    damageValue: 1334,
    skillAtk: [5.6],
    cooldownReduction: -1.8,
    other: '按男气功双 75 深潜裤子特化雷切 Lv75 28% 和 Lv80 6% 占比计算',
  },
  {
    name: '25 属强',
    type: 'shoe',
    from: '深潜迷航长靴',
    damageValue: 593,
    elementalDamage: 25,
  },
]

import { Data } from '.'

export const bottomOptions: Data[] = [
  {
    name: 'Lv45 20% CD',
    type: 'bottom',
    from: '森林之魔女护腿',
    damageValue: 1186,
    cooldownReduction: 20 * 0.24,
    other: '按旅人双 45 恩特肩 Lv45 24% 占比计算',
  },
  {
    name: 'Lv35 20% CD',
    type: 'bottom',
    from: '森林之魔女护腿',
    damageValue: 1186,
    cooldownReduction: 3.4,
    other: '按特工 9 保月步 Lv35 17% 占比计算',
  },
  {
    name: 'Lv45 20% 技攻',
    type: 'bottom',
    from: '森林之魔女护腿',
    damageValue: 1186,
    skillAtk: [20 * 0.24],
    other: '按旅人双 45 恩特肩 Lv45 24% 占比计算',
  },
  {
    name: 'Lv35 20% 技攻',
    type: 'bottom',
    from: '森林之魔女护腿',
    damageValue: 1186,
    skillAtk: [3.4],
    other: '按特工 9 保月步 Lv35 17% 占比计算',
  },
  {
    name: 'Lv45 +1',
    type: 'bottom',
    from: '森林之魔女护腿',
    damageValue: 1482,
    skillAtk: [0.48],
    other: '旅人 Lv45 +1 提升 2%，按双 45 恩特肩 Lv45 24% 占比计算',
  },
  {
    name: 'Lv35 +1',
    type: 'bottom',
    from: '森林之魔女护腿',
    damageValue: 1482,
    skillAtk: [0.306],
    other: '特工 Lv35 +1 提升 1.8%，按 9 保月步 Lv35 17% 占比计算',
  },
  {
    name: '20% 出血伤害',
    type: 'bottom',
    from: '恩特精灵护腿',
    damageValue: 593,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '20% 感电伤害',
    type: 'bottom',
    from: '恩特精灵护腿',
    damageValue: 593,
    abnormal: {
      type: 'shock',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: 'Lv35 20% 技攻，Lv35 +30% CD',
    type: 'bottom',
    from: '恩特精灵护腿',
    damageValue: 1134,
    skillAtk: [3.4],
    cooldownReduction: -5.1,
    other: '按特工 9 保月步 Lv35 17% 占比计算',
  },
  {
    name: 'Lv35 20% 技攻，Lv40 +30% CD',
    type: 'bottom',
    from: '恩特精灵护腿',
    damageValue: 1134,
    skillAtk: [3.4],
    cooldownReduction: -30 * 0.04,
    other: '按特工 9 保月步 Lv35 17% 和 Lv40 4% 占比计算',
  },
  {
    name: 'Lv40 20% 技攻，Lv40 +30% CD',
    type: 'bottom',
    from: '恩特精灵护腿',
    damageValue: 1134,
    skillAtk: [20 * 0.16],
    cooldownReduction: -30 * 0.16,
    other: '按魔灵 9 保碎灵屠戮 Lv40 16% 占比计算',
  },
  {
    name: 'Lv40 20% 技攻，Lv45 +30% CD',
    type: 'bottom',
    from: '恩特精灵护腿',
    damageValue: 1134,
    skillAtk: [20 * 0.16],
    other: '按魔灵 9 保碎灵屠戮 Lv40 16% 占比且不点 Lv45 计算',
  },
  {
    name: 'Lv70~75 +3',
    type: 'bottom',
    from: '蓝灵绿玉石护腿',
    damageValue: 296,
    skillAtk: [6.36],
    other:
      '男气功风雷啸 +3 提升 4%，Lv70 +3 提升 8.6%，Lv75 +3 提升 8.8%，按 9 保雷切 Lv70 8% 和 Lv75 19% 占比计算',
  },
  {
    name: '异抗 35 属强',
    type: 'bottom',
    from: '蓝灵绿玉石护腿',
    damageValue: 593,
    elementalDamage: 35,
  },
  {
    name: 'Lv80 20% CD',
    type: 'bottom',
    from: '深潜迷航长裤',
    damageValue: 1186,
    cooldownReduction: 20 * 0.3,
    other: '按 CP 鹦鹉双 80 恩特上衣 Lv80 30% 占比计算',
  },
  {
    name: 'Lv80 20% 技攻',
    type: 'bottom',
    from: '深潜迷航长裤',
    damageValue: 1186,
    skillAtk: [20 * 0.3],
    other: '按 CP 鹦鹉双 80 恩特上衣 Lv80 30% 占比计算',
  },
  {
    name: 'Lv80 +1',
    type: 'bottom',
    from: '深潜迷航长裤',
    damageValue: 1482,
    skillAtk: [3.4 * 0.3],
    other: '鹦鹉 Lv80 +1 提升 3.4%，按 CP 鹦鹉双 80 恩特上衣 Lv80 30% 占比计算',
  },
  {
    name: 'Lv75 20% CD',
    type: 'bottom',
    from: '深潜迷航长裤',
    damageValue: 1186,
    cooldownReduction: 20 * 0.19,
    other: '按男气功 9 保雷切 Lv75 19% 占比计算',
  },
  {
    name: 'Lv75 20% 技攻',
    type: 'bottom',
    from: '深潜迷航长裤',
    damageValue: 1186,
    skillAtk: [20 * 0.19],
    other: '按男气功 9 保雷切 Lv75 19% 占比计算',
  },
  {
    name: 'Lv75 +1',
    type: 'bottom',
    from: '深潜迷航长裤',
    damageValue: 1482,
    skillAtk: [1.4 + 3 * 0.19],
    other: '男气功风雷啸 +1 提升 1.4%，Lv75 +1 提升 3%，按 9 保雷切 Lv75 19% 占比计算',
  },
]

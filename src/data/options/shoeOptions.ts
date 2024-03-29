import { Data } from '.'

export const shoeOptions: Data[] = [
  {
    name: '低血 6% 技攻',
    type: 'shoe',
    from: 'logo',
    damageValue: 741,
    skillAtk: 6,
  },
  {
    name: '15% 灼烧伤害',
    type: 'shoe',
    from: 'logo',
    damageValue: 148,
    abnormal: {
      type: 'burn',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 15,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '10 连击内 6% 技攻',
    type: 'shoe',
    from: '森林之魔女长靴',
    damageValue: 1186,
    skillAtk: 6,
  },
  {
    name: '50 打击层数 8% 技攻',
    type: 'shoe',
    from: '森林之魔女长靴',
    damageValue: 1186,
    skillAtk: 8,
    speed: 10,
  },
  {
    name: '空技能栏 12% 技攻',
    type: 'shoe',
    from: '恩特精灵战靴',
    damageValue: 296,
    skillAtk: 12,
  },
  {
    name: 'Lv70 20% 技攻，Lv70 +15% CD',
    type: 'shoe',
    from: '恩特精灵战靴',
    damageValue: 1334,
    skillAtk: 20 * 0.15,
    cooldownReduction: -15 * 0.15,
    other: '按女漫游 9 保压制射击 Lv70 15% 占比计算',
  },
  {
    name: 'Lv70 20% 技攻，Lv75 +15% CD',
    type: 'shoe',
    from: '恩特精灵战靴',
    damageValue: 1334,
    skillAtk: 20 * 0.15,
    cooldownReduction: -15 * 0.07,
    other: '按女漫游 9 保压制射击 Lv70 15% 和 Lv75 7% 占比计算',
  },
  {
    name: 'Lv75 20% 技攻，Lv75 +15% CD',
    type: 'shoe',
    from: '恩特精灵战靴',
    damageValue: 1334,
    skillAtk: 5.6,
    cooldownReduction: -15 * 0.28,
    other: '按男气功双 75 深潜裤子特化雷切 Lv75 28% 占比计算',
  },
  {
    name: 'Lv75 20% 技攻，Lv80 +15% CD',
    type: 'shoe',
    from: '恩特精灵战靴',
    damageValue: 1334,
    skillAtk: 5.6,
    cooldownReduction: -1.8,
    other: '按男气功双 75 深潜裤子特化雷切 Lv75 28% 和 Lv80 6% 占比计算',
  },
  {
    name: '25 属强，4% 技攻',
    type: 'shoe',
    from: '深潜迷航长靴',
    damageValue: 593,
    skillAtk: [4],
    elementalDamage: 25,
  },
  {
    name: '移动 5% 技攻',
    type: 'shoe',
    from: '深潜迷航长靴',
    damageValue: 1186,
    skillAtk: [5],
    speed: 20,
  },
  {
    name: '15% 灼烧伤害',
    type: 'shoe',
    from: '蓝色海贼鞋',
    damageValue: 1186,
    skillAtk: [5],
    abnormal: {
      type: 'burn',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 15,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '20% 灼烧伤害',
    type: 'shoe',
    from: '蓝色海贼鞋',
    damageValue: 1186,
    skillAtk: [5],
    abnormal: {
      type: 'burn',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '20% 感电伤害',
    type: 'shoe',
    from: '蓝色海贼鞋',
    damageValue: 593,
    skillAtk: [5],
    abnormal: {
      type: 'shock',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '非无色 10% 技攻 +10% CD',
    prefix: '非无色',
    type: 'shoe',
    from: '蓝色海贼鞋',
    damageValue: 593,
    skillAtk: [10],
    cooldownReduction: -10,
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '海贼专属攻强',
    type: 'shoe',
    from: '蓝色海贼鞋',
    damageValue: 1186 + 111 * 20,
  },
  {
    name: '攻击 CDR',
    type: 'shoe',
    from: '蓝色海贼鞋',
    damageValue: 1186,
    cooldownRecovery: 1 * 15,
  },
]

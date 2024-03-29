import { Data } from '.'

export const magicStoneOptions: Data[] = [
  {
    name: '觉醒 11% 技攻',
    prefix: '觉醒',
    type: 'magic-stone',
    from: 'logo',
    damageValue: 1186,
    skillAtk: 11,
  },
  {
    name: '保护罩 4% 技攻',
    type: 'magic-stone',
    from: 'logo',
    damageValue: 1037,
    skillAtk: 4,
  },
  {
    name: 'Lv40 40% CDR',
    type: 'magic-stone',
    from: '森林之魔女精灵石',
    damageValue: 1037,
    cooldownRecovery: 10 * 4 * 0.21,
    other: '按魔灵双 40 恩特裤子 Lv40 21% 占比计算',
  },
  {
    name: 'Lv70 40% CDR',
    type: 'magic-stone',
    from: '森林之魔女精灵石',
    damageValue: 1037,
    cooldownRecovery: 10 * 4 * 0.15,
    other: '按女漫游 9 保压制射击 Lv70 15% 占比计算',
  },
  {
    name: 'Lv75 40% CDR',
    type: 'magic-stone',
    from: '森林之魔女精灵石',
    damageValue: 1037,
    cooldownRecovery: 11.2,
    other: '按男气功双 75 深潜裤子特化雷切 Lv75 28% 占比计算',
  },
  {
    name: 'Lv70 韧性 CDR',
    type: 'magic-stone',
    from: '森林之魔女精灵石',
    damageValue: 1334,
    cooldownRecovery: 16.5 * 0.15,
    other: '期望 16.5% CDR，按女漫游 9 保压制射击 Lv70 15% 占比计算',
  },
  {
    name: '25 属强',
    type: 'magic-stone',
    from: '恩特精灵之心',
    damageValue: 741,
    elementalDamage: 25,
  },
  {
    name: '250 属抗 15% 灼烧伤害',
    type: 'magic-stone',
    from: '恩特精灵之心',
    damageValue: 889,
    abnormal: {
      type: 'burn',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 15,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '领主 20% 灼烧伤害',
    type: 'magic-stone',
    from: '蓝灵绿玉石宝石',
    damageValue: 296,
    abnormal: {
      type: 'burn',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '领主 20% 灼烧伤害',
    prefix: '期望',
    type: 'magic-stone',
    from: '蓝灵绿玉石宝石',
    damageValue: 296,
    abnormal: {
      type: 'burn',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20 * 0.667,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '领主 35 属强',
    type: 'magic-stone',
    from: '蓝灵绿玉石宝石',
    damageValue: 741,
    elementalDamage: 35,
  },
  {
    name: '领主 35 属强',
    prefix: '期望',
    type: 'magic-stone',
    from: '蓝灵绿玉石宝石',
    damageValue: 741,
    elementalDamage: 23,
  },
  {
    name: '破招 8% 技攻',
    type: 'magic-stone',
    from: '深潜迷航面罩',
    damageValue: 741,
    skillAtk: 8,
  },
  {
    name: '5% 灼烧伤害',
    type: 'magic-stone',
    from: '深潜迷航面罩',
    damageValue: 1186,
    abnormal: {
      type: 'burn',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 5,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '5% 感电伤害',
    type: 'magic-stone',
    from: '深潜迷航面罩',
    damageValue: 1186,
    abnormal: {
      type: 'burn',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 5,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '韧性攻强',
    type: 'magic-stone',
    from: '深潜迷航面罩',
    damageValue: 1186 + 267 * 10,
  },
  {
    name: '远距离 4% 技攻',
    type: 'magic-stone',
    from: '蓝色海贼魔法石',
    damageValue: 1186,
    skillAtk: 4,
  },
  {
    name: '15% 出血伤害',
    type: 'magic-stone',
    from: '蓝色海贼魔法石',
    damageValue: 1186,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20,
      abnormalDamage: 3 * 5,
    },
  },
  {
    name: '正面/背击 4% 技攻',
    type: 'magic-stone',
    from: '蓝色海贼魔法石',
    damageValue: 1186,
    skillAtk: 4,
  },
]

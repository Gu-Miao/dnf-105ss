import { Option } from '.'

export const magicStoneOptions: Option[] = [
  {
    name: '减少 70 级技能剩余 CD',
    type: 'magic-stone',
    from: '森林之魔女精灵石',
    damageValue: 1037,
    cooldownReduction: 7.2 * 0.15,
    other:
      '按攻速出血女漫游 40% CDR 模拟，期望 CD 约为 7.2%。按女漫游 9 保压制射击 Lv70 15% 占比计算',
  },
  {
    name: '减少 75 级技能剩余 CD',
    type: 'magic-stone',
    from: '森林之魔女精灵石',
    damageValue: 1037,
    cooldownReduction: 6.85 * 0.5,
    other:
      '按 75 级技能 35 冷却，30% CDR 计算，期望冷却减少约为 6.85%，按 75 级技能 50% 占比计算。收益低，主要还是给奶用',
  },
  {
    name: '减少 40 级技能剩余 CD',

    type: 'magic-stone',
    from: '森林之魔女精灵石',
    damageValue: 1037,
    cooldownReduction: 5.66 * 0.5,
    other:
      '按 40 级技能 20 冷却，30% CDR 计算，期望冷却减少约为 5.66%，按 40 级技能 50% 占比计算。收益低，主要还是给奶用',
  },
  {
    name: '70 级技能韧性 CDR',

    type: 'magic-stone',
    from: '森林之魔女精灵石',
    damageValue: 1334,
    cooldownRecovery: 16.5 * 0.5,
    other: '期望 16.5% CDR，按 70 级技能 50% 占比计算',
  },
  {
    name: '25 属强',
    type: 'magic-stone',
    from: '恩特精灵之心',
    damageValue: 741,
    elementalDamage: 25,
  },
  {
    name: '15 灼烧伤害',
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
    elementalDamage: Math.floor((35 * 2) / 3),
  },
  {
    name: '破招 8% 技攻',
    type: 'magic-stone',
    from: '深潜迷航面罩',
    damageValue: 741,
    skillAtk: [8],
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
    damageValue: 1186 + 193 * 10,
  },
]

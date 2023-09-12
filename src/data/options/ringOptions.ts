import { Option } from '.'

export const ringOptions: Option[] = [
  {
    name: '10% 灼烧伤害',
    type: 'ring',
    from: '森林之魔女戒指',
    damageValue: 296,
    abnormal: {
      type: 'burn',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.1,
    },
  },
  {
    name: '韧性攻强',
    prefix: '50% 韧性',
    type: 'ring',
    from: '森林之魔女戒指',
    damageValue: 1186 + 593 * 5,
  },
  {
    name: '韧性攻强',
    prefix: '期望',
    type: 'ring',
    from: '森林之魔女戒指',
    damageValue: 1186 + 593 * 3.5,
  },
  {
    name: '75 级技能韧性 CDR',
    prefix: '50% 占比',
    type: 'ring',
    from: '森林之魔女戒指',
    damageValue: 1186,
    coldDownReduce: 0.165 * 0.5,
    other: '期望 16.5% CDR，按 75 级技能 50% 占比计算',
  },
  {
    name: '15% 中毒伤害',
    type: 'ring',
    from: '恩特精灵戒指',
    damageValue: 889,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.15,
    },
  },
  {
    name: '15% 中毒伤害',
    prefix: '毒王',
    type: 'ring',
    from: '恩特精灵戒指',
    damageValue: 889,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.74,
      prevAbnormalDamageEnhancement: 0.5,

      increasedAbnormalDamageEnhancement: 0.15,
    },
  },
  {
    name: '50% HP 攻强',
    type: 'ring',
    from: '恩特精灵戒指',
    damageValue: 1186 + 1778,
  },
  {
    name: '10% 中毒转伤',
    type: 'ring',
    from: '恩特精灵戒指',
    damageValue: 1482,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.5,
      increasedConversionRate: 0.1,
    },
    other: '按配代中毒手和蓝灵top计算',
  },
  {
    name: '10% 中毒转伤',
    prefix: '毒王',
    type: 'ring',
    from: '恩特精灵戒指',
    damageValue: 1482,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.74,
      prevAbnormalDamageEnhancement: 0.5,
      increasedConversionRate: 0.1,
    },
  },
  {
    name: '10% 灼烧转伤',
    type: 'ring',
    from: '恩特精灵戒指',
    damageValue: 1482,
    abnormal: {
      type: 'burn',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.5,
      increasedConversionRate: 0.1,
    },
    other: '按配代灼烧bracelet和蓝灵top计算',
  },
  {
    name: '10% 感电转伤',
    type: 'ring',
    from: '恩特精灵戒指',
    damageValue: 1482,
    abnormal: {
      type: 'shock',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.5,
      increasedConversionRate: 0.1,
    },
    other: '按配代感电bracelet和蓝灵top计算',
  },
  {
    name: '10% 出血转伤',
    type: 'ring',
    from: '恩特精灵戒指',
    damageValue: 1482,
    abnormal: {
      type: 'bleed',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.5,
      increasedConversionRate: 0.1,
    },
    other: '按配代出血bracelet和蓝灵top计算',
  },
  {
    name: '领主 20% 中毒伤害',
    type: 'ring',
    from: '蓝灵绿玉石戒指',
    damageValue: 296,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.2,
    },
  },
  {
    name: '领主 20% 中毒伤害',
    prefix: '毒王',
    type: 'ring',
    from: '蓝灵绿玉石戒指',
    damageValue: 296,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.74,
      prevAbnormalDamageEnhancement: 0.5,

      increasedAbnormalDamageEnhancement: 0.2,
    },
  },
  {
    name: '领主 20% 中毒伤害',
    prefix: '期望',
    type: 'ring',
    from: '蓝灵绿玉石戒指',
    damageValue: 296,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: (0.2 * 2) / 3,
    },
  },
  {
    name: '领主 20% 中毒伤害',
    prefix: '期望，毒王',
    type: 'ring',
    from: '蓝灵绿玉石戒指',
    damageValue: 296,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.74,
      prevAbnormalDamageEnhancement: 0.5,

      increasedAbnormalDamageEnhancement: (0.2 * 2) / 3,
    },
  },
  {
    name: '领主 35 属强',
    type: 'ring',
    from: '蓝灵绿玉石戒指',
    damageValue: 741,
    elementalDamage: 35,
  },
  {
    name: '领主 35 属强',
    prefix: '期望',
    type: 'ring',
    from: '蓝灵绿玉石戒指',
    damageValue: 741,
    elementalDamage: Math.ceil((35 * 2) / 3),
  },
  {
    name: '基础精通 20% 中毒伤害',
    type: 'ring',
    from: '蓝灵绿玉石戒指',
    damageValue: 741,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.2,
    },
  },
  {
    name: '基础精通 20% 中毒伤害',
    prefix: '毒王',
    type: 'ring',
    from: '蓝灵绿玉石戒指',
    damageValue: 741,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.74,
      prevAbnormalDamageEnhancement: 0.5,

      increasedAbnormalDamageEnhancement: 0.2,
    },
  },
  {
    name: '基础精通 20% 中毒伤害',
    prefix: '期望',
    type: 'ring',
    from: '蓝灵绿玉石戒指',
    damageValue: 741,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: (0.2 * 2) / 3,
    },
  },
  {
    name: '基础精通 20% 中毒伤害',
    prefix: '期望，毒王',
    type: 'ring',
    from: '蓝灵绿玉石戒指',
    damageValue: 741,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.74,
      prevAbnormalDamageEnhancement: 0.5,

      increasedAbnormalDamageEnhancement: (0.2 * 2) / 3,
    },
  },
  {
    name: '基础精通 20% 灼烧伤害',
    type: 'ring',
    from: '蓝灵绿玉石戒指',
    damageValue: 741,
    abnormal: {
      type: 'burn',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.2,
    },
  },
  {
    name: '基础精通 20% 灼烧伤害',
    prefix: '期望',
    type: 'ring',
    from: '蓝灵绿玉石戒指',
    damageValue: 741,
    abnormal: {
      type: 'burn',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: (0.2 * 2) / 3,
    },
  },
  {
    name: '基础精通 20% 感电伤害',
    type: 'ring',
    from: '蓝灵绿玉石戒指',
    damageValue: 741,
    abnormal: {
      type: 'shock',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.2,
    },
  },
  {
    name: '基础精通 20% 感电伤害',
    prefix: '期望',
    type: 'ring',
    from: '蓝灵绿玉石戒指',
    damageValue: 741,
    abnormal: {
      type: 'shock',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: (0.2 * 2) / 3,
    },
  },
  {
    name: '自异常 80 级技能 30% CDR',
    prefix: '50% 占比',
    type: 'ring',
    from: '蓝灵绿玉石戒指',
    damageValue: 1334,
    coldDownReduce: 0.3 * 0.5,
    other: '按 80 级技能 50% 占比计算',
  },
  {
    name: '自异常 95 级技能 30% CDR',
    prefix: '16% 占比',
    type: 'ring',
    from: '蓝灵绿玉石戒指',
    damageValue: 1334,
    coldDownReduce: 0.3 * 0.16,
    other: '按 95 级技能 16% 占比计算',
  },
  {
    name: '10 无色 30% CDR',
    type: 'ring',
    from: '深潜迷航导航环',
    damageValue: 741,
    coldDownReduce: 0.3,
  },
  {
    name: '25 属强',
    type: 'ring',
    from: '深潜迷航导航环',
    damageValue: 889,
    elementalDamage: 25,
  },
]

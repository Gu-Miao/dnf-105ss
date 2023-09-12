import { Data } from '.'

export const tops: Data[] = [
  {
    name: '御力装甲上衣',
    prefix: '单异常对象',
    type: 'top',
    damageValue: 5604 + 712,
    elementalDamage: 10,
    abnormal: {
      type: 'burn',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.2,
    },
  },
  {
    name: '御力装甲上衣',
    prefix: '2个异常对象',
    type: 'top',
    damageValue: 5604 + 712 * 2,
    elementalDamage: 10,
    abnormal: {
      type: 'burn',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.2,
    },
  },
  {
    name: '白金流光夹克',
    type: 'top',
    damageValue: 5604,
  },
  {
    name: '死亡蚕食胸甲',
    type: 'top',
    damageValue: 4528 + 445 * 5,
    skillAtk: [5],
    speed: {
      attackSpeed: 15,
      castingSpeed: 22.5,
    },
  },
  {
    name: '暗影流光战袍',
    prefix: '未破韧',
    type: 'top',
    damageValue: 5336 + 1037,
    coldDownRecover: 0.2,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '暗影流光战袍',
    prefix: '破韧',
    type: 'top',
    damageValue: 5336 + 1037 + 1284,
    coldDownRecover: 0.2,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '古老的探险家大衣',
    type: 'top',
    damageValue: 5604,
    elementalDamage: 10,
    abnormal: {
      type: 'bleed',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.2,
    },
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '双面星云皮大衣',
    type: 'top',
    damageValue: 6803,
    skillAtk: [5],
    elementalDamage: 20,
    speed: {
      attackSpeed: 5,
      castingSpeed: 7.5,
    },
  },
  {
    name: '百折不挠的梦想',
    type: 'top',
    damageValue: 6952,
    elementalDamage: 15,
  },
  {
    name: '冤魂的执念上衣',
    type: 'top',
    damageValue: 5604,
    elementalDamage: 10,
    abnormal: {
      type: 'shock',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.2,
    },
  },
  {
    name: '守护之王者铠甲',
    type: 'top',
    damageValue: 4647 + 445 * 5,
    elementalDamage: 15,
  },
  {
    name: '轰天裂地石甲',
    type: 'top',
    damageValue: 5604,
    elementalDamage: 10,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.2,
    },
  },
  {
    name: '大地的馈赠上衣',
    prefix: '单异常对象',
    type: 'top',
    damageValue: 6414 + 712,
    skillAtk: [2],
    elementalDamage: 15,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
  },
  {
    name: '大地的馈赠上衣',
    prefix: '2个异常对象',
    type: 'top',
    damageValue: 6414 + 712 * 2,
    skillAtk: [2],
    elementalDamage: 15,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
  },
  {
    name: '高科技战术指挥上衣',
    type: 'top',
    damageValue: 6414 + 1927,
    elementalDamage: 30,
    speed: {
      moveSpeed: 30,
    },
  },
  {
    name: '澎湃之心上衣',
    type: 'top',
    damageValue: 5995,
    elementalDamage: 10,
  },
  {
    name: '屠龙者',
    type: 'top',
    damageValue: 5874 + 1186,
    elementalDamage: 15,
  },
  {
    name: '天才技术大师的研究服上衣',
    type: 'top',
    damageValue: 5187,
    elementalDamage: 15,
    coldDownRecover: 0.2,
  },
  {
    name: '高贵的神意上衣',
    type: 'top',
    damageValue: 6414,
  },
  {
    name: '极魂之驱上衣',
    type: 'top',
    damageValue: 4768,
  },
  {
    name: '玉化亡灵胸甲',
    type: 'top',
    damageValue: 6144,
    speed: '8% 移速；跳跃 10% 攻速，15% 施放',
  },
  {
    name: '深渊之源上衣',
    type: 'top',
    damageValue: 6414 + 1927,
    elementalDamage: 30,
  },
  {
    name: '混乱核心胸甲',
    type: 'top',
    damageValue: 5604,
    elementalDamage: 10,
    abnormal: {
      type: 'bleed',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.15,
    },
    other: '按出血计算',
  },
  {
    name: '冷静的谋略家上衣',
    type: 'top',
    damageValue: 4796 + 296 * 5,
    coldDownRecover: 0.3,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '铭记长夜的黎明',
    type: 'top',
    damageValue: 6414 + 445 * 10,
  },
  {
    name: '临界崩坏之隙',
    type: 'top',
    damageValue: 6144 + 2223,
  },
  {
    name: '蓝灵绿玉石胸甲',
    type: 'top',
    damageValue: 148 + 1186 + 1186 + 1186,
    abnormal: {
      type: 'bleed',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.3,
    },
    other: '30% 出血伤害，3 个无用',
  },
  {
    name: '蓝灵绿玉石胸甲',
    type: 'top',
    damageValue: 148 + 1186 + 111 * 20 + 1186 + 1630,
    elementalDamage: 15 + 15,
    abnormal: {
      type: 'bleed',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.3,
    },
    other: '30% 出血伤害，蓝灵专属攻强，15单，15全',
  },
  {
    name: '蓝灵绿玉石胸甲',
    prefix: '毒王',
    type: 'top',
    damageValue: 148 + 1186 + 111 * 20 + 1186 + 1630,
    elementalDamage: 15 + 15,
    abnormal: {
      type: 'bleed',
      prevConversionRate: 0.74,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.3,
    },
    other: '30% 中毒伤害，蓝灵专属攻强，15单，15全',
  },
  {
    name: '恩特精灵胸甲',
    type: 'top',
    damageValue: 741 + 1186 + 852 * 4 + 1186 + 1186,
    skillAtk: [8],
    speed: 24,
    other: '低血技攻，低血速度攻强，2 个无用',
  },
  {
    name: '恩特精灵胸甲',
    type: 'top',
    damageValue: 741 + 1186 + 852 * 4 + 1186 + 1630,
    skillAtk: [8],
    elementalDamage: 15 + 15,
    speed: 24,
    other: '低血技攻，低血速度攻强，15单，15全',
  },
  {
    name: '森林之魔女上衣',
    type: 'top',
    damageValue: 1186 + 1186 + 264 * 10 + 1186 + 1186,
    skillAtk: [6],
    other: '直伤技攻，魔女专属攻强，2 个无用',
  },
  {
    name: '森林之魔女上衣',
    type: 'top',
    damageValue: 1186 + 1186 + 264 * 10 + 889 + 1630,
    skillAtk: [6],
    elementalDamage: 25 + 15,
    other: '直伤技攻，魔女专属攻强，25 属强，15 全',
  },
]
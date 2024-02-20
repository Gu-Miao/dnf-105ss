import { Data } from '.'

export const headerShoulders: Data[] = [
  {
    name: '沙漠星芒披肩',
    prefix: '单异常对象',
    type: 'header-shoulder',
    damageValue: 6144 + 712,
    skillAtk: 2,
    abnormal: {
      type: 'burn',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20,
    },
    speed: '自身灼烧时 5% 攻速，7.5% 施放',
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '沙漠星芒披肩',
    prefix: '2 个异常对象',
    type: 'header-shoulder',
    damageValue: 6144 + 712 * 2,
    skillAtk: 2,
    abnormal: {
      type: 'burn',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20,
    },
    speed: '自身灼烧时 5% 攻速，7.5% 施放',
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '沙漠星芒披肩',
    prefix: '5 个异常对象',
    type: 'header-shoulder',
    damageValue: 6144 + 712 * 5,
    skillAtk: 2,
    abnormal: {
      type: 'burn',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 15,
      abnormalDamage: 20,
    },
    speed: '自身灼烧时 5% 攻速，7.5% 施放',
    other: '按佩戴异常手镯和混乱核心计算',
  },
  {
    name: '白色的信念斗篷',
    type: 'header-shoulder',
    damageValue: 5604,
    skillAtk: 3,
    other: '按 3% 技攻附魔计算',
  },
  {
    name: '望穿尽头的视线',
    type: 'header-shoulder',
    damageValue: 5066 + 3705 + 2223,
    skillAtk: 3,
  },
  {
    name: '黑猫头盔',
    prefix: 'Lv1~30',
    type: 'header-shoulder',
    damageValue: 4528,
    skillAtk: 10,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '钢筋铁骨披肩',
    type: 'header-shoulder',
    damageValue: 5604,
  },
  {
    name: '电磁搜索者护肩',
    prefix: '单异常对象',
    type: 'header-shoulder',
    damageValue: 6144 + 712,
    skillAtk: 2,
    abnormal: {
      type: 'shock',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20,
    },
    speed: '自身感电时 5% 攻速，7.5% 施放',
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '电磁搜索者护肩',
    prefix: '2 个异常对象',
    type: 'header-shoulder',
    damageValue: 6144 + 712 * 2,
    skillAtk: 2,
    abnormal: {
      type: 'shock',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20,
    },
    speed: '自身感电时 5% 攻速，7.5% 施放',
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '电磁搜索者护肩',
    prefix: '5 个异常对象',
    type: 'header-shoulder',
    damageValue: 6144 + 712 * 5,
    skillAtk: 2,
    abnormal: {
      type: 'shock',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 15,
      abnormalDamage: 20,
    },
    speed: '自身感电时 5% 攻速，7.5% 施放',
    other: '按佩戴异常手镯和混乱核心计算',
  },
  {
    name: '华丽的清音护肩',
    type: 'header-shoulder',
    damageValue: 5604,
    cooldownRecovery: 10 * 5,
    speed: {
      attackSpeed: 10,
      castingSpeed: 10,
      moveSpeed: 10 + 8,
    },
  },
  {
    name: '远古之法则护肩',
    type: 'header-shoulder',
    damageValue: 3988,
    skillAtk: -2 * 5,
    cooldownRecovery: 10 * 5,
  },
  {
    name: '自由之翼护肩',
    prefix: '单异常对象',
    type: 'header-shoulder',
    damageValue: 6414 + 712,
    skillAtk: 5,
    elementalDamage: 20,
    speed: 30,
  },
  {
    name: '自由之翼护肩',
    prefix: '2 个异常对象',
    type: 'header-shoulder',
    damageValue: 6414 + 712 * 2,
    skillAtk: 5,
    elementalDamage: 20,
    speed: 30,
  },
  {
    name: '自由之翼护肩',
    prefix: '5 个异常对象',
    type: 'header-shoulder',
    damageValue: 6414 + 712 * 5,
    skillAtk: 5,
    elementalDamage: 20,
    speed: 30,
  },
  {
    name: '冰玉之蚀肩甲',
    prefix: '单异常对象',
    type: 'header-shoulder',
    damageValue: 6682 + 712,
    skillAtk: 2,
    abnormal: {
      type: 'posion',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20,
    },
    speed: '自身中毒时 5% 攻速，7.5% 施放',
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '冰玉之蚀肩甲',
    prefix: '2 个异常对象',
    type: 'header-shoulder',
    damageValue: 6682 + 712 * 2,
    skillAtk: 2,
    abnormal: {
      type: 'posion',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20,
    },
    speed: '自身中毒时 5% 攻速，7.5% 施放',
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '冰玉之蚀肩甲',
    prefix: '5 个异常对象',
    type: 'header-shoulder',
    damageValue: 6682 + 712 * 5,
    skillAtk: 2,
    abnormal: {
      type: 'posion',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 15,
      abnormalDamage: 20,
    },
    speed: '自身中毒时 5% 攻速，7.5% 施放',
    other: '按佩戴异常手镯和混乱核心计算',
  },
  {
    name: '冰玉之蚀肩甲',
    prefix: '单异常对象，毒王',
    type: 'header-shoulder',
    damageValue: 6682 + 712,
    skillAtk: 2,
    abnormal: {
      type: 'posion',
      prevConvert: 74,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20,
    },
    speed: '自身中毒时 5% 攻速，7.5% 施放',
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '冰玉之蚀肩甲',
    prefix: '5 个异常对象，毒王',
    type: 'header-shoulder',
    damageValue: 6682 + 712 * 5,
    skillAtk: 2,
    abnormal: {
      type: 'posion',
      prevConvert: 74,
      prevAbnormalDamage: 20 + 15,
      abnormalDamage: 20,
    },
    speed: '自身中毒时 5% 攻速，7.5% 施放',
    other: '按佩戴异常手镯和混乱核心计算',
  },
  {
    name: '绽放的自然生命',
    prefix: '未破韧',
    type: 'header-shoulder',
    damageValue: 6414,
    skillAtk: 2,
    elementalDamage: 20,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
  },
  {
    name: '绽放的自然生命',
    prefix: '破韧',
    type: 'header-shoulder',
    damageValue: 6414 + 1284,
    skillAtk: 2,
    elementalDamage: 20,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
  },
  {
    name: '绽放的自然生命',
    prefix: '破韧，3 个异常对象',
    type: 'header-shoulder',
    damageValue: 6414 + 1284 * 3,
    skillAtk: 2,
    elementalDamage: 20,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
  },
  {
    name: '高科技御敌护肩',
    type: 'header-shoulder',
    damageValue: 5604 + 534 * 5,
    skillAtk: 5,
    elementalDamage: 2 * 5,
  },
  {
    name: '隐匿之光护肩',
    prefix: '单异常对象',
    type: 'header-shoulder',
    damageValue: 5604 + 712,
    skillAtk: 2,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20,
    },
    speed: '自身出血时 5% 攻速，7.5% 施放',
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '隐匿之光护肩',
    prefix: '2 个异常对象',
    type: 'header-shoulder',
    damageValue: 5604 + 712 * 2,
    skillAtk: 2,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20,
    },
    speed: '自身出血时 5% 攻速，7.5% 施放',
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '隐匿之光护肩',
    prefix: '5 个异常对象',
    type: 'header-shoulder',
    damageValue: 5604 + 712 * 5,
    skillAtk: 2,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 15,
      abnormalDamage: 20,
    },
    speed: '自身出血时 5% 攻速，7.5% 施放',
    other: '按佩戴异常手镯和混乱核心计算',
  },
  {
    name: '猎龙者',
    type: 'header-shoulder',
    damageValue: 5874 + 1186,
    elementalDamage: 4 * 5,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '天才技术大师的保护面罩',
    type: 'header-shoulder',
    damageValue: 5604 + 2223,
    skillAtk: 8,
  },
  {
    name: '耀武之威护肩',
    prefix: '单异常对象',
    type: 'header-shoulder',
    damageValue: 4647 + 712,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20,
      abnormalDamage: 15,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '耀武之威护肩',
    prefix: '2 个异常对象',
    type: 'header-shoulder',
    damageValue: 4647 + 712 * 2,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20,
      abnormalDamage: 15,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '耀武之威护肩',
    prefix: '5 个异常对象',
    type: 'header-shoulder',
    damageValue: 4647 + 712 * 5,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20,
      abnormalDamage: 15,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '六方式脉冲肩甲',
    prefix: '未破韧',
    type: 'header-shoulder',
    damageValue: 5604 + 2519,
    skillAtk: 5,
    elementalDamage: 15,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '六方式脉冲肩甲',
    prefix: '破韧',
    type: 'header-shoulder',
    damageValue: 5604 + 2519 + 1284,
    skillAtk: 5,
    elementalDamage: 15,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '六方式脉冲肩甲',
    prefix: '破韧，3 个异常对象',
    type: 'header-shoulder',
    damageValue: 5604 + 2519 + 1284 * 3,
    skillAtk: 5,
    elementalDamage: 15,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '玉化亡灵肩甲',
    type: 'header-shoulder',
    damageValue: 5604 + 1482,
    skillAtk: 9,
  },
  {
    name: '灵巧的支配者护肩',
    type: 'header-shoulder',
    damageValue: 4528 + 2223,
    skillAtk: 10,
  },
  {
    name: '金属齿轮护肩',
    type: 'header-shoulder',
    damageValue: 3450 + 2964,
    cooldownRecovery: 25,
  },
  {
    name: '欢笑中的祈盼',
    type: 'header-shoulder',
    damageValue: 5066 + 1778 + 741 * 6,
    skillAtk: 4,
    other: '按 6 点计算',
  },
  {
    name: '庇佑伤痛的威严',
    type: 'header-shoulder',
    damageValue: 4528 + 185 * 12,
    skillAtk: 1 * 8,
    elementalDamage: 18,
  },
  {
    name: '触手可及之记忆',
    type: 'header-shoulder',
    damageValue: 4796 + 1778,
    skillAtk: 5,
    cooldownRecovery: 10,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '虚蚀之神兽斗篷',
    type: 'header-shoulder',
    damageValue: 6144,
    skillAtk: 9,
  },
  {
    name: '守护晴烟的意志',
    prefix: '单异常对象',
    type: 'header-shoulder',
    damageValue: 5066 + 712,
    skillAtk: 7,
    abnormal: {
      type: 'burn',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 10,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '守护晴烟的意志',
    prefix: '2 个异常对象',
    type: 'header-shoulder',
    damageValue: 5066 + 712 * 2,
    skillAtk: 7,
    abnormal: {
      type: 'burn',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 10,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '守护晴烟的意志',
    prefix: '5 个异常对象',
    type: 'header-shoulder',
    damageValue: 5066 + 712 * 5,
    skillAtk: 7,
    abnormal: {
      type: 'burn',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 15,
      abnormalDamage: 10,
    },
    other: '按佩戴异常手镯和混乱核心计算',
  },
  {
    name: '化虚为实之想象',
    type: 'header-shoulder',
    damageValue: 6144,
    skillAtk: 9,
  },
  {
    name: '忍耐骑士肩甲',
    type: 'header-shoulder',
    damageValue: 6400,
    skillAtk: [6, 5 * 0.15],
    other: '按旅人 Lv30 和 Lv35 总共 15% 计算',
  },
  {
    name: '恩特精灵护肩',
    type: 'header-shoulder',
    damageValue: 296 + 1186 + 1186 + 1186,
    skillAtk: 12,
    elementalDamage: 20,
    other: '手搓 12% 技攻，20 单，2 个无用',
  },
  {
    name: '恩特精灵护肩',
    type: 'header-shoulder',
    damageValue: 296 + 1630 + 1186 + 1186 + 356 * 10,
    skillAtk: 12,
    elementalDamage: 20 + 20,
    other: '手搓 12% 技攻，20 全，20 单，连击减防攻强',
  },
  {
    name: '蓝灵绿玉石肩甲',
    type: 'header-shoulder',
    damageValue: 1186 + 1186 + 712 * 5 + 1630 + 1186,
    skillAtk: 5.4,
    elementalDamage: 20,
    other: '50% 消耗品效果，领主异常对象攻强，20 全，无用',
  },
  {
    name: '蓝灵绿玉石肩甲',
    type: 'header-shoulder',
    damageValue: 1186 + 1186 + 712 * 5 + 296 + 1630,
    skillAtk: [5.4, 5.21],
    elementalDamage: 20,
    other: '50% 消耗品效果，领主异常对象攻强，Lv35~40 +3，20 全。',
  },
  {
    name: '深潜迷航气囊',
    type: 'header-shoulder',
    damageValue: 296 + 889 + 4446 + 1186 + 1186,
    elementalDamage: 4 * 10 + 20,
    speed: 20,
    other: '40 属强，速度攻强，20 单，无用',
  },
  {
    name: '深潜迷航气囊',
    type: 'header-shoulder',
    damageValue: 296 + 889 + 4446 + 1630 + 1186,
    elementalDamage: 4 * 10 + 20 + 20,
    speed: 20,
    other: '40 属强，速度攻强，20 全，20 单',
  },
  {
    name: '深潜迷航气囊',
    type: 'header-shoulder',
    damageValue: 1037 + 889 + 4446 + 1186 + 1186,
    elementalDamage: 18,
    skillAtk: 6,
    speed: 20,
    other: '保护罩 6% 技攻，速度攻强，18 全，无用',
  },
  {
    name: '深潜迷航气囊',
    type: 'header-shoulder',
    damageValue: 1037 + 296 + 889 + 4446 + 1630,
    elementalDamage: 4 * 10 + 20,
    skillAtk: 6,
    speed: 20,
    other: '保护罩 6% 技攻，40 属强，速度攻强，20 全',
  },
  {
    name: '蓝色海贼头肩',
    type: 'header-shoulder',
    damageValue: 593 + 1186 + 1186 + 1186,
    skillAtk: 6,
    elementalDamage: 18,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 15,
    },
    other: '15% 出血伤害，移动 6% 技攻，2 个无用',
  },
  {
    name: '蓝色海贼头肩',
    type: 'header-shoulder',
    damageValue: 593 + 1186 + 1186 + 1186,
    skillAtk: [6, 5],
    cooldownReduction: 10,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 15,
    },
    other: '15% 出血伤害，移动 6% 技攻，5% 技攻，10% CD',
  },
  {
    name: '蓝色海贼头肩',
    type: 'header-shoulder',
    damageValue: 1186 + 1482 + 1186 + 1630,
    skillAtk: [6, 5],
    elementalDamage: 20,
    cooldownReduction: 4 * 5,
    other: '移动 6% 技攻，MP 5% 技攻，MP CD，20 全',
  },
]

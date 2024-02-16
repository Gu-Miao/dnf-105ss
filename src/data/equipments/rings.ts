import { Data } from '.'

export const rings: Data[] = [
  {
    name: '瞬息千里戒指',
    type: 'ring',
    damageValue: 5604,
    skillAtk: 5,
    cooldownRecovery: 10,
  },
  {
    name: '第三个黑桃 - 死亡',
    type: 'ring',
    damageValue: 4528,
    elementalDamage: 35,
    other: '按 35 属强附魔计算',
  },
  {
    name: '血红生命之戒',
    type: 'ring',
    damageValue: 5133 + 2223,
    skillAtk: [2, 5],
    elementalDamage: 10,
  },
  {
    name: '双音交映戒指',
    type: 'ring',
    damageValue: 4258,
    cooldownRecovery: 30,
    speed: {
      attackSpeed: 24,
      castingSpeed: 36,
      moveSpeed: 28,
    },
  },
  {
    name: '磁场探测者戒指',
    prefix: '单人',
    type: 'ring',
    damageValue: 4258 + 1112 + 1112,
    skillAtk: [2, 2],
  },
  {
    name: '磁场探测者戒指',
    prefix: '2 人',
    type: 'ring',
    damageValue: 4258 + 1112 * 2,
    skillAtk: 2 * 2,
    speed: {
      attackSpeed: 2 * 5,
      castingSpeed: 2 * 5,
    },
  },
  {
    name: '磁场探测者戒指',
    prefix: '3 人',
    type: 'ring',
    damageValue: 4258 + 1112 * 3,
    skillAtk: 2 * 3,
    speed: {
      attackSpeed: 2 * 5,
      castingSpeed: 2 * 5,
    },
  },
  {
    name: '磁场探测者戒指',
    prefix: '4 人',
    type: 'ring',
    damageValue: 4258 + 1112 * 4,
    skillAtk: 2 * 4,
    speed: {
      attackSpeed: 2 * 5,
      castingSpeed: 2 * 5,
    },
  },
  {
    name: '闪耀的生命之戒',
    type: 'ring',
    damageValue: 5133 + 2223,
    skillAtk: [2, 5],
    elementalDamage: 10,
  },
  {
    name: '闪耀的音律',
    type: 'ring',
    damageValue: 6048,
    skillAtk: 6,
    elementalDamage: 20,
  },
  {
    name: '隐没的邪念戒指',
    type: 'ring',
    damageValue: 6414,
  },
  {
    name: '金翼戒指',
    type: 'ring',
    damageValue: 6858 + 800 * 5,
    elementalDamage: 20,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '石巨人之枢戒指',
    type: 'ring',
    damageValue: 6414 + 445 * 3,
    skillAtk: [4, 4],
  },
  {
    name: '绽放的神秘之花',
    prefix: '未破韧',
    type: 'ring',
    damageValue: 4984 + 445 * 5,
    elementalDamage: 10,
  },
  {
    name: '绽放的神秘之花',
    prefix: '破韧',
    type: 'ring',
    damageValue: 4984 + 445 * 5,
    skillAtk: [10, 10],
    elementalDamage: 10,
  },
  {
    name: '雷达战网戒指',
    prefix: '42%',
    type: 'ring',
    damageValue: 3450,
    cooldownRecovery: 42,
  },
  {
    name: '雷达战网戒指',
    prefix: '38.5%',
    type: 'ring',
    damageValue: 3450,
    cooldownRecovery: 38.5,
  },
  {
    name: '雷达战网戒指',
    prefix: '35%',
    type: 'ring',
    damageValue: 3450,
    cooldownRecovery: 35,
  },
  {
    name: '雷达战网戒指',
    prefix: '31.5%',
    type: 'ring',
    damageValue: 3450,
    cooldownRecovery: 31.5,
  },
  {
    name: '无尽的痛苦之戒',
    type: 'ring',
    damageValue: 4258 + 4446,
    skillAtk: 7,
  },
  {
    name: '守护龙的庇护 - 祝福',
    type: 'ring',
    damageValue: 5874,
    elementalDamage: 30,
  },
  {
    name: '全能主宰者之戒',
    type: 'ring',
    damageValue: 4796 + 2668,
    skillAtk: 7,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
      moveSpeed: 20,
    },
  },
  {
    name: '骑士的骄傲',
    prefix: '未破韧',
    type: 'ring',
    damageValue: 4984 + 445 * 5,
    elementalDamage: 10,
  },
  {
    name: '骑士的骄傲',
    prefix: '1/3',
    type: 'ring',
    damageValue: 4984 + 445 * 5,
    skillAtk: [1.67, 5],
    elementalDamage: 10,
  },
  {
    name: '骑士的骄傲',
    prefix: '破韧',
    type: 'ring',
    damageValue: 4984 + 445 * 5,
    skillAtk: [5, 15],
    elementalDamage: 10,
  },
  {
    name: '电流星散指环',
    prefix: '未破韧',
    type: 'ring',
    damageValue: 4984 + 445 * 5,
    elementalDamage: 10,
  },
  {
    name: '电流星散指环',
    prefix: '破韧',
    type: 'ring',
    damageValue: 4984 + 445 * 5,
    skillAtk: [5, 15],
    elementalDamage: 10,
  },
  {
    name: '血色结晶戒指',
    type: 'ring',
    damageValue: 3368 + 2223 + 2223,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 15 + 10,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '永不停歇的命运',
    prefix: '未破韧',
    type: 'ring',
    damageValue: 4714,
  },
  {
    name: '永不停歇的命运',
    prefix: '1/3',
    type: 'ring',
    damageValue: 4714,
    skillAtk: [1.67, 5],
  },
  {
    name: '永不停歇的命运',
    prefix: '破韧',
    type: 'ring',
    damageValue: 4714,
    skillAtk: [5, 15],
  },
  {
    name: '能量搜索环',
    type: 'ring',
    damageValue: 3988 + 2816 + 1482,
    skillAtk: 7,
  },
  {
    name: '炽热的渴望之证',
    type: 'ring',
    damageValue: 3988 + 445 * 10,
    elementalDamage: 36,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '暴龙王的支配 - 压制',
    prefix: '攻击强化',
    type: 'ring',
    damageValue: 5604 + 790 * 3 + 741,
    skillAtk: 5,
  },
  {
    name: '暴龙王的支配 - 压制',
    prefix: '属强',
    type: 'ring',
    damageValue: 5604 + 790 * 3,
    skillAtk: 5,
    elementalDamage: 5,
  },
  {
    name: '世界的中心轴',
    type: 'ring',
    damageValue: 5604 + 2668,
    skillAtk: 7,
    speed: -15,
  },
  {
    name: '迷雾探求者戒指',
    type: 'ring',
    damageValue: 4528,
    cooldownRecovery: 15 * 2,
    speed: {
      moveSpeed: 15,
    },
  },
  {
    name: '典狱长的证明',
    type: 'ring',
    damageValue: 6144,
    skillAtk: 5,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 15,
      abnormalDamage: 10,
    },
    other: '按出血异常计算',
  },
  {
    name: '典狱长的证明',
    prefix: '毒王',
    type: 'ring',
    damageValue: 6144,
    skillAtk: 5,
    abnormal: {
      type: 'posion',
      prevConvert: 74,
      prevAbnormalDamage: 20 + 15,
      abnormalDamage: 10,
    },
    other: '对毒王提升',
  },
  {
    name: '眺望夜色的工程师的视线',
    prefix: '觉醒',
    type: 'ring',
    damageValue: 7144,
    skillAtk: 20,
    cooldownRecovery: 40,
  },
  {
    name: '压倒性的勇猛',
    type: 'ring',
    damageValue: 5066,
    skillAtk: 10,
    speed: {
      attackSpeed: 50,
      castingSpeed: 75,
      moveSpeed: 8,
    },
  },
  {
    name: '森林之魔女戒指',
    type: 'ring',
    damageValue: 1186 + 1037 + 1186 + 1186,
    cooldownRecovery: 30,
    other: '异抗 30% CDR，30% 异抗，2 个无用',
  },
  {
    name: '森林之魔女戒指',
    prefix: '期望',
    type: 'ring',
    damageValue: 1186 + 1037 + 1334 + 1630,
    skillAtk: 5 * 0.9,
    elementalDamage: 20,
    cooldownRecovery: 30 + 16.5 * 0.15,
    other:
      '异抗 30% CDR，30% 异抗，20 全，韧性 5% 技攻，Lv75 韧性 CDR。期望 CDR 为 16.5%，按 Lv75 15% 占比计算',
  },
  {
    name: '森林之魔女戒指',
    prefix: '期望',
    type: 'ring',
    damageValue: 1186 + 1334 + 1630 + 296,
    skillAtk: 5 * 0.9,
    elementalDamage: 20,
    cooldownRecovery: 30 + 16.5 * 0.2,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 10,
    },
    other:
      '异抗 30% CDR，20 全，10% 出血伤害，韧性 5% 技攻，Lv75 韧性 CDR。按自带高异抗职业计算。期望 CDR 为 16.5%，按红眼 Lv75 20% 占比计算。出血伤害按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '恩特精灵戒指',
    type: 'ring',
    damageValue: 1482 + 296 + 1630 + 1186,
    elementalDamage: 20,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      convert: 10,
      abnormalDamage: 10,
    },
    other: '10% 出血转伤，10% 出血伤害，20 全，无用。按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '恩特精灵戒指',
    type: 'ring',
    damageValue: 1482 + 296 + 1630 + 1186,
    elementalDamage: 20 + 20,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      convert: 10,
      abnormalDamage: 10,
    },
    other: '10% 出血转伤，10% 出血伤害，20 全，20 单。按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '恩特精灵戒指',
    prefix: '毒王',
    type: 'ring',
    damageValue: 889 + 1482 + 296 + 1630,
    elementalDamage: 20,
    abnormal: {
      type: 'bleed',
      prevConvert: 74,
      prevAbnormalDamage: 20 + 30,
      convert: 10,
      abnormalDamage: 15 + 10,
    },
    other:
      '10% 中毒转伤，15% 中毒伤害，10% 中毒伤害，20 全。对毒王提升，按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '蓝灵绿玉石戒指',
    prefix: '毒王',
    type: 'ring',
    damageValue: 296 + 741 + 741 + 296,
    elementalDamage: 35 + 20,
    abnormal: {
      type: 'posion',
      prevConvert: 74,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20 + 20 + 10,
    },
    other:
      '领主 20% 中毒伤害，基础精通 20% 中毒伤害，领主 35 暗强，10% 中毒伤害。对毒王提升，按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '蓝灵绿玉石戒指',
    prefix: '毒王，期望',
    type: 'ring',
    damageValue: 296 + 741 + 741 + 296,
    elementalDamage: 23 + 20,
    abnormal: {
      type: 'posion',
      prevConvert: 74,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 26.67 + 10,
    },
    other:
      '领主 20% 中毒伤害，基础精通 20% 中毒伤害，领主 35 暗强，10% 中毒伤害。对毒王提升，按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '蓝灵绿玉石戒指',
    type: 'ring',
    damageValue: 1334 + 1334 + 1630 + 1186,
    skillAtk: [2, 2],
    elementalDamage: 20 + 20,
    cooldownRecovery: 30 * 0.43 + 30 * 0.08,
    other:
      'Lv80 30% CDR 2% 技攻，Lv95 30% CDR 2% 技攻，20 全，20 单。按 CP 鹦鹉双 80 恩特上衣双 80 恩特裤子 Lv80 43% 和 Lv95 8% 占比计算',
  },
  {
    name: '深潜迷航导航环',
    type: 'ring',
    damageValue: 741 + 889 + 1630 + 1186,
    elementalDamage: 30 + 20 + 20,
    cooldownRecovery: 30,
    other: '10 无色 30% CDR，30 属强，20 全，20 单',
  },
  {
    name: '蓝色海贼戒指',
    type: 'ring',
    damageValue: 1186 + 1186 + 1186 + 1630,
    skillAtk: [8 * 0.8, 4],
    elementalDamage: 25 + 20,
    other: '无色 8% 技攻，自石化 4% 技攻，直伤 25 属强，20 全。按无色 80% 占比计算',
  },
]

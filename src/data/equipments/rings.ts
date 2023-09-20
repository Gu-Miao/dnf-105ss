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
]

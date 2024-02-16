import { Data } from '.'

export const shoes: Data[] = [
  {
    name: 'HEM 加固鞋',
    prefix: '单异常对象',
    type: 'shoe',
    damageValue: 6414 + 2964 + 712,
    skillAtk: 7,
    elementalDamage: 20,
  },
  {
    name: 'HEM 加固鞋',
    prefix: '2 个异常对象',
    type: 'shoe',
    damageValue: 6414 + 2964 + 712 * 2,
    skillAtk: 7,
    elementalDamage: 20,
  },
  {
    name: 'HEM 加固鞋',
    prefix: '5 个异常对象',
    type: 'shoe',
    damageValue: 6414 + 2964 + 712 * 5,
    skillAtk: 7,
    elementalDamage: 20,
  },
  {
    name: '白色秘境皮鞋',
    type: 'shoe',
    damageValue: 5604,
    skillAtk: 5,
    other: '按 5% 技攻附魔计算',
  },
  {
    name: '万念俱灰短靴',
    type: 'shoe',
    damageValue: 5874 + 800 * 5,
    skillAtk: 17,
  },
  {
    name: '暗影之迹短靴',
    prefix: 'Lv15~30',
    type: 'shoe',
    damageValue: 5066,
    skillAtk: 6 * 3,
    speed: {
      attackSpeed: 10 * 2,
      castingSpeed: 15 * 2,
    },
  },
  {
    name: '大地的践踏短靴',
    type: 'shoe',
    damageValue: 6952,
    skillAtk: 7,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
      moveSpeed: 8,
    },
  },
  {
    name: '流星飞电战靴',
    prefix: '2 个异常对象',
    type: 'shoe',
    damageValue: 6858 + 712 * 2,
    skillAtk: 17,
    speed: {
      attackSpeed: 20,
      castingSpeed: 30,
      moveSpeed: 20,
    },
  },
  {
    name: '流星飞电战靴',
    prefix: '5 个异常对象',
    type: 'shoe',
    damageValue: 6858 + 712 * 5,
    skillAtk: 17,
    speed: {
      attackSpeed: 20,
      castingSpeed: 30,
      moveSpeed: 20,
    },
  },
  {
    name: '祈愿之息短靴',
    type: 'shoe',
    damageValue: 3988 + 2964,
    skillAtk: [5, 12],
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
      moveSpeed: 8,
    },
  },
  {
    name: '摇曳的残影短靴',
    type: 'shoe',
    damageValue: 5604 + 3260,
    skillAtk: 9,
    cooldownReduction: 5 * 3,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '天翼之守护短靴',
    type: 'shoe',
    damageValue: 5604 + 4001,
    skillAtk: 10,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '黑暗吞噬短靴',
    prefix: '技攻',
    type: 'shoe',
    damageValue: 5510,
    skillAtk: 10,
    abnormal: {
      type: 'posion',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 10,
    },
    speed: 15,
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '黑暗吞噬短靴',
    prefix: 'CD',
    type: 'shoe',
    damageValue: 5510,
    abnormal: {
      type: 'posion',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 10,
    },
    cooldownRecovery: 30,
    speed: 15,
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '黑暗吞噬短靴',
    prefix: '技攻，毒王',
    type: 'shoe',
    damageValue: 5510,
    skillAtk: 10,
    abnormal: {
      type: 'posion',
      prevConvert: 74,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 10,
    },
    speed: 15,
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '循环的自然之法',
    prefix: '未破韧',
    type: 'shoe',
    damageValue: 6414,
    skillAtk: 2,
    elementalDamage: 20,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
  },
  {
    name: '循环的自然之法',
    prefix: '破韧',
    type: 'shoe',
    damageValue: 6414 + 1284,
    skillAtk: 2,
    elementalDamage: 20,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
  },
  {
    name: '循环的自然之法',
    prefix: '破韧，3 个异常对象',
    type: 'shoe',
    damageValue: 6414 + 1284 * 3,
    skillAtk: 2,
    elementalDamage: 20,
    speed: {
      attackSpeed: 10,
      castingSpeed: 15,
    },
  },
  {
    name: '高科技战术强化靴',
    type: 'shoe',
    damageValue: 5780,
    skillAtk: 11,
    elementalDamage: 20,
    cooldownReduction: 5 * 4,
    speed: 5,
  },
  {
    name: '暴走之驱战靴',
    type: 'shoe',
    damageValue: 6414 + 741 * 4,
    skillAtk: 13,
  },
  {
    name: '龙之开拓者短靴',
    type: 'shoe',
    damageValue: 5874 + 1778,
    elementalDamage: 4 * 5,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
      moveSpeed: 8,
    },
  },
  {
    name: '天才技术大师的加厚长靴',
    prefix: '375% 蓝耗',
    type: 'shoe',
    damageValue: 2910 + 815 * 4,
    skillAtk: 5 * 3.75,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '天才技术大师的加厚长靴',
    prefix: '475% 蓝耗',
    type: 'shoe',
    damageValue: 2910 + 815 * 4,
    skillAtk: 5 * 4.75,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '天才技术大师的加厚长靴',
    prefix: '500% 蓝耗',
    type: 'shoe',
    damageValue: 2910 + 815 * 4,
    skillAtk: 5 * 5,
    elementalDamage: 15,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '无畏的勇气短靴',
    type: 'shoe',
    damageValue: 6414 + 3260,
    skillAtk: [9, 6.7],
    speed: {
      moveSpeed: 8,
    },
    other: '按剑魂 Lv1~25 +2 提升 6.7% 计算',
  },
  {
    name: '蒸汽朋克音速鞋',
    type: 'shoe',
    damageValue: 4972,
    skillAtk: 13,
    cooldownRecovery: 10,
  },
  {
    name: '蒸汽朋克音速鞋',
    prefix: '破韧',
    type: 'shoe',
    damageValue: 4972 + 1284,
    skillAtk: 13,
    cooldownRecovery: 10,
  },
  {
    name: '蒸汽朋克音速鞋',
    prefix: '破韧，3 个异常对象',
    type: 'shoe',
    damageValue: 4972 + 1284 * 3,
    skillAtk: 13,
    cooldownRecovery: 10,
  },
  {
    name: '玉化亡灵长靴',
    type: 'shoe',
    damageValue: 5604 + 3409,
    skillAtk: 17,
    speed: {
      attackSpeed: 24,
      castingSpeed: 24,
      moveSpeed: 8,
    },
  },
  {
    name: '流星追月短靴',
    type: 'shoe',
    damageValue: 4917 + 371 * 10,
    skillAtk: 5,
    cooldownReduction: 15,
  },
  {
    name: '赛博音速长靴',
    prefix: '100% 攻速',
    type: 'shoe',
    damageValue: 2642,
    skillAtk: 10,
  },
  {
    name: '赛博音速长靴',
    prefix: '120% 攻速',
    type: 'shoe',
    damageValue: 2642,
    skillAtk: 20,
  },
  {
    name: '赛博音速长靴',
    prefix: '140% 攻速',
    type: 'shoe',
    damageValue: 2642,
    skillAtk: 30,
  },
  {
    name: '所愿之行动',
    type: 'shoe',
    damageValue: 7126,
    skillAtk: 16,
    elementalDamage: 20,
  },
  {
    name: '告别过去的前进',
    type: 'shoe',
    damageValue: 6318 + 3705,
    skillAtk: 16,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '超界次元',
    prefix: '非 TP',
    type: 'shoe',
    damageValue: 6682,
    skillAtk: 13,
    elementalDamage: 10,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '超界次元',
    prefix: 'TP',
    type: 'shoe',
    damageValue: 6682,
    skillAtk: [13, 7],
    elementalDamage: 10,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
    other: 'TP +1 提升约为 7%',
  },
  {
    name: '迷雾追随者长靴',
    type: 'shoe',
    damageValue: 6144,
    skillAtk: 13,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '信守承诺的步伐',
    prefix: '未破韧，单异常对象',
    type: 'shoe',
    damageValue: 5524 + 712,
    skillAtk: [5, 5],
  },
  {
    name: '信守承诺的步伐',
    prefix: '未破韧，2 个异常对象',
    type: 'shoe',
    damageValue: 5524 + 712 * 2,
    skillAtk: [5, 5],
  },
  {
    name: '信守承诺的步伐',
    prefix: '未破韧，5 个异常对象',
    type: 'shoe',
    damageValue: 5524 + 712 * 5,
    skillAtk: [5, 5],
  },
  {
    name: '信守承诺的步伐',
    prefix: '破韧，单异常对象',
    type: 'shoe',
    damageValue: 5524 + 712,
    skillAtk: [5, 15],
  },
  {
    name: '信守承诺的步伐',
    prefix: '破韧，2 个异常对象',
    type: 'shoe',
    damageValue: 5524 + 712 * 2,
    skillAtk: [5, 15],
  },
  {
    name: '信守承诺的步伐',
    prefix: '破韧，5 个异常对象',
    type: 'shoe',
    damageValue: 5524 + 712 * 5,
    skillAtk: [5, 15],
  },
  {
    name: '满怀梦想的工程师工作靴',
    type: 'shoe',
    damageValue: 6144,
    skillAtk: 6 * 3,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '华丽骑士长靴',
    type: 'shoe',
    damageValue: 5510 + 4446,
    skillAtk: 17,
  },
  {
    name: '森林之魔女长靴',
    type: 'shoe',
    damageValue: 1186 + 1186 + 741 + 1630,
    skillAtk: [6, 8, 6],
    elementalDamage: 20,
    other: '10 连击内 5% 技攻，50 打击层数 8% 技攻，低血 6% 技攻，20 全',
  },
  {
    name: '恩特精灵战靴',
    type: 'shoe',
    damageValue: 296 + 1630 + 1186 + 1186 + 356 * 10,
    skillAtk: 12,
    elementalDamage: 20 + 20,
    other: '10 连击内 5% 技攻，50 打击层数 8% 技攻，低血 6% 技攻，20 全',
  },
  {
    name: '蓝色海贼鞋',
    type: 'shoe',
    damageValue: 1186 + 1186 + 145 + 1186 + 356 * 10,
    abnormal: {
      type: 'burn',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 20 + 15 + 15,
    },
    other: '20% 灼烧伤害，破冰 15% 灼烧伤害，15% 灼烧伤害，连击减防攻强',
  },
]

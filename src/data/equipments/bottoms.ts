import { Data } from '.'

export const bottoms: Data[] = [
  {
    name: '荒漠之界长裤',
    type: 'bottom',
    damageValue: 4528,
    elementalDamage: 25 + 20,
  },
  {
    name: '白虹贯日长裤',
    type: 'bottom',
    damageValue: 5604,
  },
  {
    name: '混沌之幕护腿',
    type: 'bottom',
    damageValue: 5066 + 445 * 4,
    skillAtk: [1.5 * 4],
  },
  {
    name: '梵塔黑色长裤',
    type: 'bottom',
    damageValue: 4258,
    skillAtk: [5],
    cooldownReduction: -5,
    speed: {
      attackSpeed: 5 * 3 + 8,
      castingSpeed: 5 * 3 + 12,
    },
  },
  {
    name: '不倦旅程护腿',
    type: 'bottom',
    damageValue: 4796 + 2223,
    skillAtk: [-4],
    speed: {
      moveSpeed: 18,
    },
  },
  {
    name: '霜云暗影长裤',
    prefix: '未被击',
    type: 'bottom',
    damageValue: 3450,
    elementalDamage: 30 + 20,
  },
  {
    name: '霜云暗影长裤',
    prefix: '被击',
    type: 'bottom',
    damageValue: 3450,
    elementalDamage: 30 + 20 + 20,
  },
  {
    name: '舞台的华丽',
    type: 'bottom',
    damageValue: 4796 + 2223,
    elementalDamage: 15,
  },
  {
    name: '永不破碎的信念',
    prefix: '被击',
    type: 'bottom',
    damageValue: 3450,
    elementalDamage: 30 + 20 + 20,
  },
  {
    name: '和平之翼长裤',
    type: 'bottom',
    damageValue: 5336 + 2223,
  },
  {
    name: '沧海之覆护腿',
    prefix: '单异常对象',
    type: 'bottom',
    damageValue: 6682 + 712,
    abnormal: {
      type: 'posion',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 15,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '沧海之覆护腿',
    prefix: '2 个异常对象',
    type: 'bottom',
    damageValue: 6682 + 712 * 2,
    abnormal: {
      type: 'posion',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 15,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '沧海之覆护腿',
    prefix: '5 个异常对象',
    type: 'bottom',
    damageValue: 6682 + 712 * 5,
    abnormal: {
      type: 'posion',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 15,
      abnormalDamage: 15,
    },
    other: '按佩戴异常手镯和混乱核心计算',
  },
  {
    name: '沧海之覆护腿',
    prefix: '单异常对象，毒王',
    type: 'bottom',
    damageValue: 6682 + 712,
    abnormal: {
      type: 'posion',
      prevConvert: 74,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 15,
    },
    other: '对毒王提升，按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '沧海之覆护腿',
    prefix: '5 个异常对象，毒王',
    type: 'bottom',
    damageValue: 6682 + 712 * 5,
    abnormal: {
      type: 'posion',
      prevConvert: 74,
      prevAbnormalDamage: 20 + 15,
      abnormalDamage: 15,
    },
    other: '对毒王提升，按佩戴异常手镯和混乱核心计算',
  },
  {
    name: '隐匿的自然生命',
    prefix: '单异常对象',
    type: 'bottom',
    damageValue: 6414 + 712,
    elementalDamage: 10,
  },
  {
    name: '隐匿的自然生命',
    prefix: '2 个异常对象',
    type: 'bottom',
    damageValue: 6414 + 712 * 2,
    elementalDamage: 10,
  },
  {
    name: '隐匿的自然生命',
    prefix: '5 个异常对象',
    type: 'bottom',
    damageValue: 6414 + 712 * 5,
    elementalDamage: 10,
  },
  {
    name: '高科技战术护腿',
    type: 'bottom',
    damageValue: 5604,
    skillAtk: [6],
  },
  {
    name: '侵蚀的意志护腿',
    prefix: '被击',
    type: 'bottom',
    damageValue: 3450,
    elementalDamage: 30 + 20 + 20,
  },
  {
    name: '苍龙闪影护腿',
    type: 'bottom',
    damageValue: 5066 + 1186,
    elementalDamage: 4 * 5 + 3 * 5,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '天才技术大师的百宝裤',
    type: 'bottom',
    damageValue: 4796 + 3705,
    skillAtk: [3],
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '神谕之信念',
    prefix: '被击',
    type: 'bottom',
    damageValue: 3450,
    elementalDamage: 30 + 20 + 20,
  },
  {
    name: '终极掌控者护腿',
    type: 'bottom',
    damageValue: 5874,
    cooldownReduction: 15,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '玉化亡灵腿甲',
    type: 'bottom',
    damageValue: 5066 + 2668,
    cooldownReduction: 8,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
      moveSpeed: 8,
    },
  },
  {
    name: '暴风骑士',
    type: 'bottom',
    damageValue: 6414 + 1037,
    cooldownRecovery: 10,
  },
  {
    name: '机械装甲下装',
    prefix: '全身红 10',
    type: 'bottom',
    damageValue: 3988 + 136 * 20,
    skillAtk: [0.2 * 20],
    elementalDamage: 18,
    speed: 2 * 10,
  },
  {
    name: '机械装甲下装',
    prefix: '全身红 12',
    type: 'bottom',
    damageValue: 3988 + 136 * 24,
    skillAtk: [4.8],
    elementalDamage: 18,
    speed: 2 * 12,
  },
  {
    name: '指引胜利的正义',
    prefix: '90% 韧性',
    type: 'bottom',
    damageValue: 5604 + 296 * 10,
    skillAtk: [2],
    elementalDamage: 15,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '战胜噩梦的捷报',
    type: 'bottom',
    damageValue: 5336 + 2223,
    elementalDamage: 20,
  },
  {
    name: '穿云破雾之光',
    type: 'bottom',
    damageValue: 5604 + 2705,
  },
  {
    name: '迷雾追随者下装',
    prefix: '90% 韧性',
    type: 'bottom',
    damageValue: 5604 + 296 * 10,
    skillAtk: [2],
    elementalDamage: 15,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '溪谷监视者下装',
    type: 'bottom',
    damageValue: 4917,
    skillAtk: [10],
  },
  {
    name: '满怀梦想的工程师长裤',
    type: 'bottom',
    damageValue: 5066 + 1186,
    skillAtk: [2 * 3],
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '光荣骑士下装',
    type: 'bottom',
    damageValue: 4824,
    skillAtk: [10, 5 * 0.26],
    other: '按红眼 Lv75 和 Lv80 总共 26% 占比计算',
  },
]

import { Data } from '.'

export const pants: Data[] = [
  {
    name: '荒漠之界长裤',
    type: '下装',
    attackEnhancement: 4528,
    elementEnhancement: 5 * 5 + 15,
  },
  {
    name: '白虹贯日长裤',
    type: '下装',
    attackEnhancement: 5604,
  },
  {
    name: '混沌之幕护腿',
    type: '下装',
    skillAttacks: [1.5 * 4],
    attackEnhancement: 5066 + 445 * 4,
  },
  {
    name: '梵塔黑色长裤',
    type: '下装',
    skillAttacks: [5],
    attackEnhancement: 4258,
    coldDownReduce: -0.08,
    speed: {
      attackSpeed: 18,
      castingSpeed: 22,
    },
  },
  {
    name: '不倦旅程护腿',
    type: '下装',
    skillAttacks: [-4],
    attackEnhancement: 4796 + 2223,
    speed: {
      moveSpeed: 18,
    },
  },
  {
    name: '霜云暗影长裤',
    prefix: '未被击',
    type: '下装',
    attackEnhancement: 3450,
    elementEnhancement: 30 + 15,
  },
  {
    name: '霜云暗影长裤',
    prefix: '被击',
    type: '下装',
    attackEnhancement: 3450,
    elementEnhancement: 30 + 20 + 15,
  },
  {
    name: '舞台的华丽',
    type: '下装',
    attackEnhancement: 4796 + 2223,
    elementEnhancement: 15,
  },
  {
    name: '永不破碎的信念',
    prefix: '被击',
    type: '下装',
    attackEnhancement: 3450,
    elementEnhancement: 30 + 20 + 15,
  },
  {
    name: '和平之翼长裤',
    type: '下装',
    attackEnhancement: 5336 + 2223,
  },
  {
    name: '沧海之覆护腿',
    prefix: '单异常对象',
    type: '下装',
    attackEnhancement: 6682 + 712,
    abnormal: {
      type: '中毒',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.15,
    },
  },
  {
    name: '沧海之覆护腿',
    prefix: '2 个异常对象',
    type: '下装',
    attackEnhancement: 6682 + 712 * 2,
    abnormal: {
      type: '中毒',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.15,
    },
  },
  {
    name: '沧海之覆护腿',
    prefix: '5 个异常对象',
    type: '下装',
    attackEnhancement: 6682 + 712 * 5,
    abnormal: {
      type: '中毒',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.15,
    },
  },
  {
    name: '沧海之覆护腿',
    prefix: '单异常对象，毒王',
    type: '下装',
    attackEnhancement: 6682 + 712,
    abnormal: {
      type: '中毒',
      prevConversionRate: 0.74,
      prevAbnormalDamageEnhancement: 0.5,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.15,
    },
    other: '毒王收益按中毒手镯加蓝灵上衣计算',
  },
  {
    name: '隐匿的自然生命',
    prefix: '单异常对象',
    type: '下装',
    attackEnhancement: 6414 + 712,
    elementEnhancement: 10,
  },
  {
    name: '隐匿的自然生命',
    prefix: '2 个异常对象',
    type: '下装',
    attackEnhancement: 6414 + 712 * 2,
    elementEnhancement: 10,
  },
  {
    name: '隐匿的自然生命',
    prefix: '5 个异常对象',
    type: '下装',
    attackEnhancement: 6414 + 712 * 5,
    elementEnhancement: 10,
  },
  {
    name: '高科技战术护腿',
    type: '下装',
    skillAttacks: [6],
    attackEnhancement: 5604,
  },
  {
    name: '侵蚀的意志护腿',
    prefix: '被击',
    type: '下装',
    attackEnhancement: 3450,
    elementEnhancement: 30 + 20 + 15,
  },
  {
    name: '苍龙闪影护腿',
    type: '下装',
    attackEnhancement: 5066 + 1186,
    elementEnhancement: 4 * 5 + 3 * 5,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
  },
  {
    name: '天才技术大师的百宝裤',
    type: '下装',
    attackEnhancement: 4796 + 3705,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '神谕之信念',
    prefix: '被击',
    type: '下装',
    attackEnhancement: 3450,
    elementEnhancement: 30 + 20 + 15,
  },
  {
    name: '终极掌控者护腿',
    type: '下装',
    attackEnhancement: 5874,
    coldDownReduce: 0.15,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '玉化亡灵腿甲',
    type: '下装',
    attackEnhancement: 5066 + 2668,
    coldDownReduce: 0.08,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
      moveSpeed: 8,
    },
  },
  {
    name: '暴风骑士',
    type: '下装',
    attackEnhancement: 6414 + 1037,
    coldDownRecover: 0.1,
  },
  {
    name: '机械装甲下装',
    prefix: '全身红 10',
    type: '下装',
    skillAttacks: [0.2 * 20],
    attackEnhancement: 3988 + 136 * 20,
    elementEnhancement: 10,
    speed: 2 * 10,
  },
  {
    name: '机械装甲下装',
    prefix: '全身红 12',
    type: '下装',
    skillAttacks: [4.8],
    attackEnhancement: 3988 + 136 * 24,
    elementEnhancement: 10,
    speed: 2 * 12,
  },
  {
    name: '指引胜利的正义',
    type: '下装',
    attackEnhancement: 5604 + 296 * 10,
    elementEnhancement: 15,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '战胜噩梦的捷报',
    type: '下装',
    attackEnhancement: 5336 + 2223,
    elementEnhancement: 20,
  },
  {
    name: '穿云破雾之光',
    type: '下装',
    attackEnhancement: 5604 + 2705,
  },
]

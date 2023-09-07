import { Entry } from '.'

export const jewelryEntries: Entry[] = [
  {
    name: '10 中毒伤害',
    type: '首饰',
    attackEnhancement: 296,
    abnormal: {
      type: '中毒',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.1,
    },
  },
  {
    name: '10 中毒伤害',
    prefix: '毒王',
    type: '首饰',
    attackEnhancement: 296,
    abnormal: {
      type: '中毒',
      prevConversionRate: 0.74,
      prevAbnormalDamageEnhancement: 0.5,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.1,
    },
  },
  {
    name: '10 灼烧伤害',
    type: '首饰',
    attackEnhancement: 296,
    abnormal: {
      type: '灼烧',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.1,
    },
  },
  {
    name: '10 感电伤害',
    type: '首饰',
    attackEnhancement: 296,
    abnormal: {
      type: '感电',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.1,
    },
  },
  {
    name: '10 出血伤害',
    type: '首饰',
    attackEnhancement: 296,
    abnormal: {
      type: '出血',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.1,
    },
  },
  {
    name: '种族 7 技攻',
    type: '首饰',
    skillAttacks: [7],
    attackEnhancement: 296,
  },
  {
    name: '前冲/跳跃霸体',
    type: '首饰',
    attackEnhancement: 296,
  },
  {
    name: '抗性防御',
    type: '首饰',
    attackEnhancement: 1186,
  },
  {
    name: '单异常对象',
    type: '首饰',
    attackEnhancement: 1186 + 741,
  },
  {
    name: '韧性攻强',
    type: '首饰',
    attackEnhancement: 1186 + 148 * 5,
  },
]

import { Option } from '.'

export const jewelryOptions: Option[] = [
  {
    name: '10 中毒伤害',
    type: 'jewelry',
    damageValue: 296,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.1,
    },
  },
  {
    name: '10 中毒伤害',
    prefix: '毒王',
    type: 'jewelry',
    damageValue: 296,
    abnormal: {
      type: 'posion',
      prevConversionRate: 0.74,
      prevAbnormalDamageEnhancement: 0.5,

      increasedAbnormalDamageEnhancement: 0.1,
    },
  },
  {
    name: '10 灼烧伤害',
    type: 'jewelry',
    damageValue: 296,
    abnormal: {
      type: 'burn',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.1,
    },
  },
  {
    name: '10 感电伤害',
    type: 'jewelry',
    damageValue: 296,
    abnormal: {
      type: 'shock',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.1,
    },
  },
  {
    name: '10 出血伤害',
    type: 'jewelry',
    damageValue: 296,
    abnormal: {
      type: 'bleed',
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,

      increasedAbnormalDamageEnhancement: 0.1,
    },
  },
  {
    name: '种族 7 技攻',
    type: 'jewelry',
    damageValue: 296,
    skillAtk: [7],
  },
  {
    name: '单异常对象',
    type: 'jewelry',
    damageValue: 1186 + 741,
  },
  {
    name: '韧性攻强',
    type: 'jewelry',
    damageValue: 1186 + 148 * 5,
  },
]

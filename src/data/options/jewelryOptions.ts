import { Option } from '.'

export const jewelryOptions: Option[] = [
  {
    name: '10 中毒伤害',
    type: 'jewelry',
    damageValue: 296,
    abnormal: {
      type: 'posion',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 10,
    },
    other: '按佩戴中毒手镯和蓝灵上衣计算',
  },
  {
    name: '10 中毒伤害',
    prefix: '毒王',
    type: 'jewelry',
    damageValue: 296,
    abnormal: {
      type: 'posion',
      prevConvert: 74,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 10,
    },
    other: '按佩戴中毒手镯和蓝灵上衣计算',
  },
  {
    name: '10 灼烧伤害',
    type: 'jewelry',
    damageValue: 296,
    abnormal: {
      type: 'burn',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 10,
    },
    other: '按佩戴灼烧手镯和蓝灵上衣计算',
  },
  {
    name: '10 感电伤害',
    type: 'jewelry',
    damageValue: 296,
    abnormal: {
      type: 'shock',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 10,
    },
    other: '按佩戴感电手镯和蓝灵上衣计算',
  },
  {
    name: '10 出血伤害',
    type: 'jewelry',
    damageValue: 296,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 10,
    },
    other: '按佩戴出血手镯和蓝灵上衣计算',
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

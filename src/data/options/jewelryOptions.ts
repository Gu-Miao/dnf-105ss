import { Data } from '.'

export const jewelryOptions: Data[] = [
  {
    name: '10% 中毒伤害',
    from: 'logo',
    type: 'jewelry',
    damageValue: 296,
    abnormal: {
      type: 'posion',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 10,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '10% 中毒伤害',
    prefix: '毒王',
    from: 'logo',
    type: 'jewelry',
    damageValue: 296,
    abnormal: {
      type: 'posion',
      prevConvert: 74,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 10,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '10% 灼烧伤害',
    from: 'logo',
    type: 'jewelry',
    damageValue: 296,
    abnormal: {
      type: 'burn',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 10,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '10% 感电伤害',
    from: 'logo',
    type: 'jewelry',
    damageValue: 296,
    abnormal: {
      type: 'shock',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 10,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '10% 出血伤害',
    from: 'logo',
    type: 'jewelry',
    damageValue: 296,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 10,
    },
    other: '按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '种族技攻',
    from: 'logo',
    type: 'jewelry',
    damageValue: 296,
    skillAtk: [2, 5],
  },
  {
    name: '单异常对象',
    from: 'logo',
    type: 'jewelry',
    damageValue: 1186 + 2223,
  },
  {
    name: '韧性攻强',
    from: 'logo',
    type: 'jewelry',
    damageValue: 1186 + 445 * 5,
  },
]

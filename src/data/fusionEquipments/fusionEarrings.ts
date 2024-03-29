import { Data } from '.'

export const fusionEarrings: Data[] = [
  {
    name: '灵魂拘束：绝对封印',
    type: 'fusion-earring',
    damageValue: 2000,
    skillAtk: [3, 3, 1],
  },
  {
    name: '罪恶支配：原初之恐怖',
    type: 'fusion-earring',
    damageValue: 2350,
    skillAtk: 3,
    elementalDamage: 18,
  },
  {
    name: '深渊结集：未定之力',
    type: 'fusion-earring',
    damageValue: 2350,
    skillAtk: [3, 3],
  },
  {
    name: '卓越：宇宙耳环',
    type: 'fusion-earring',
    damageValue: 8560,
    skillAtk: 3,
  },
  {
    name: '光辉：传承的智慧',
    prefix: '未被击',
    type: 'fusion-earring',
    damageValue: 3500,
    skillAtk: [3, 3],
  },
  {
    name: '光辉：传承的智慧',
    prefix: '被击',
    type: 'fusion-earring',
    damageValue: 3500 - 2000,
    skillAtk: [3, 3],
  },
  {
    name: '无信：失信的言语',
    type: 'fusion-earring',
    damageValue: 10010,
    skillAtk: 3,
  },
  {
    name: '监视者：顾虑的意志',
    type: 'fusion-earring',
    damageValue: 3800,
    skillAtk: 6,
  },
  {
    name: '孤岛：深邃的黑暗',
    prefix: '未被击',
    type: 'fusion-earring',
    damageValue: 4950,
    skillAtk: 6,
  },
  {
    name: '孤岛：深邃的黑暗',
    prefix: '被击',
    type: 'fusion-earring',
    damageValue: 4950 - 2000,
    skillAtk: 6,
  },
  {
    name: '因果毁灭：透彻的祸乱',
    type: 'fusion-earring',
    damageValue: 1450,
    skillAtk: 5,
    abnormal: {
      type: 'bleed',
      prevConvert: 50,
      prevAbnormalDamage: 20 + 30,
      abnormalDamage: 4,
    },
    other: '按出血异常，按佩戴异常手镯和蓝灵上衣计算',
  },
  {
    name: '怪异：刻骨的咆哮',
    type: 'fusion-earring',
    damageValue: 3450,
    skillAtk: [6, 1],
  },
  {
    name: '斗志：变换的流风',
    type: 'fusion-earring',
    damageValue: 3800,
    skillAtk: 3,
    elementalDamage: 18,
  },
]

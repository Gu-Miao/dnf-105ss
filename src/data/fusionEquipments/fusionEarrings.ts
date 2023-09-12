import { Data } from '.'

export const fusionEarrings: Data[] = [
  {
    name: '灵魂拘束：绝对封印',
    type: 'fusion-earring',
    damageValue: 2000,
    skillAtk: [4],
  },
  {
    name: '罪恶支配：原初之恐怖',
    type: 'fusion-earring',
    damageValue: 2350,
    elementalDamage: 18,
  },
  {
    name: '深渊结集：未定之力',
    type: 'fusion-earring',
    damageValue: 2350,
    skillAtk: [3],
  },
  {
    name: '卓越：宇宙耳环',
    type: 'fusion-earring',
    damageValue: 8560,
  },
  {
    name: '光辉：传承的智慧',
    prefix: '未被击',
    type: 'fusion-earring',
    damageValue: 3500,
    skillAtk: [3],
  },
  {
    name: '光辉：传承的智慧',
    prefix: '被击',
    type: 'fusion-earring',
    damageValue: 3500 - 2000,
    skillAtk: [3],
  },
]

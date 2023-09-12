import { Data } from '.'

export const fusionMagicStones: Data[] = [
  {
    name: '灵魂拘束：沉重罪魇',
    type: 'fusion-magic-stone',
    damageValue: 2000,
    skillAtk: [4],
  },
  {
    name: '罪恶支配：哀鸣之恐怖',
    type: 'fusion-magic-stone',
    damageValue: 3250,
    elementalDamage: 16,
  },
  {
    name: '深渊结集：无限坍塌',
    type: 'fusion-magic-stone',
    damageValue: 2350,
    skillAtk: [3],
  },

  {
    name: '卓越：魔力之环',
    type: 'fusion-magic-stone',
    damageValue: 8560,
  },
  {
    name: '光辉：无畏的意志',
    prefix: '未被击',
    type: 'fusion-magic-stone',
    damageValue: 3500,
    skillAtk: [3],
  },
  {
    name: '光辉：无畏的意志',
    prefix: '被击',
    type: 'fusion-magic-stone',
    damageValue: 3500 - 2000,
    skillAtk: [3],
  },
]

import { Data } from '.'

export const fusionMagicStones: Data[] = [
  {
    name: '灵魂拘束：沉重罪魇',
    type: 'fusion-magic-stone',
    damageValue: 2000,
    skillAtk: [3, 3, 1],
  },
  {
    name: '罪恶支配：哀鸣之恐怖',
    type: 'fusion-magic-stone',
    damageValue: 3250,
    skillAtk: 3,
    elementalDamage: 16,
  },
  {
    name: '深渊结集：无限坍塌',
    type: 'fusion-magic-stone',
    damageValue: 2350,
    skillAtk: [3, 3],
  },
  {
    name: '卓越：魔力之环',
    type: 'fusion-magic-stone',
    damageValue: 8560,
    skillAtk: 3,
  },
  {
    name: '光辉：无畏的意志',
    prefix: '未被击',
    type: 'fusion-magic-stone',
    damageValue: 3500,
    skillAtk: [3, 3],
  },
  {
    name: '光辉：无畏的意志',
    prefix: '被击',
    type: 'fusion-magic-stone',
    damageValue: 3500 - 2000,
    skillAtk: [3, 3],
  },
  {
    name: '隔阂：恶毒的微笑',
    type: 'fusion-magic-stone',
    damageValue: 10010,
    skillAtk: 3,
  },
  {
    name: '监视：自觉的执念',
    type: 'fusion-magic-stone',
    damageValue: 3800,
    skillAtk: 6,
  },
  {
    name: '孤岛：掩埋的恐怖',
    prefix: '未被击',
    type: 'fusion-magic-stone',
    damageValue: 4950,
    skillAtk: 6,
  },
  {
    name: '孤岛：掩埋的恐怖',
    prefix: '被击',
    type: 'fusion-magic-stone',
    damageValue: 4950 - 2000,
    skillAtk: 6,
  },
  {
    name: '解放：透彻的混乱',
    type: 'fusion-magic-stone',
    damageValue: 4950,
    skillAtk: 5,
  },
  {
    name: '怪异：增值的混乱',
    type: 'fusion-magic-stone',
    damageValue: 3450,
    skillAtk: [6, 1],
  },
  {
    name: '斗志：光辉斗魂',
    type: 'fusion-magic-stone',
    damageValue: 4700,
    skillAtk: 3,
    elementalDamage: 16,
    speed: {
      moveSpeed: 4,
    },
  },
]

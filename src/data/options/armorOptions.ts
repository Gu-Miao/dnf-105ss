import { Data } from '.'

export const armorOptions: Data[] = [
  {
    name: '异常对象攻强',
    prefix: '单异常对象',
    type: 'armor',
    damageValue: 1186 + 712,
  },
  {
    name: '异常对象攻强',
    prefix: '2 个异常对象',
    type: 'armor',
    damageValue: 1186 + 712 * 2,
  },
  {
    name: '异常对象攻强',
    prefix: '5 个异常对象',
    type: 'armor',
    damageValue: 1186 + 712 * 5,
  },
  {
    name: '大异常对象攻强',
    prefix: '破韧',
    type: 'armor',
    damageValue: 1186 + 1284,
  },
  {
    name: '大异常对象攻强',
    prefix: '破韧，3 个异常对象',
    type: 'armor',
    damageValue: 1186 + 1284 * 3,
  },
  {
    name: '连击减防攻强',
    type: 'armor',
    damageValue: 1186 + 178 * 10,
  },
  {
    name: '单技能 5% 技攻',
    type: 'armor',
    damageValue: 1334,
    skillAtk: [5 * 0.5],
    other: '按 50% 伤害占比计算',
  },
  {
    name: '单技能 5% 技攻',
    type: 'armor',
    damageValue: 1334,
    skillAtk: [5 * 0.4],
    other: '按 40% 伤害占比计算',
  },
]

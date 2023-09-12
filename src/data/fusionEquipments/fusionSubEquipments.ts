import { Data } from '.'

export const fusionSubEquipments: Data[] = [
  {
    name: '灵魂拘束：支配权能',
    type: 'fusion-sub-equipment',
    damageValue: 2000,
    skillAtk: [4],
  },
  {
    name: '罪恶支配：绝望之恐怖',
    type: 'fusion-sub-equipment',
    damageValue: 4200,
    elementalDamage: 14,
    speed: {
      attackSpeed: 4,
      castingSpeed: 6,
    },
  },
  {
    name: '深渊结集：无法定义之存在',
    type: 'fusion-sub-equipment',
    damageValue: 2350,
    skillAtk: [3],
  },
  {
    name: '卓越：玛尔本源',
    type: 'fusion-sub-equipment',
    damageValue: 8560,
  },
  {
    name: '光辉：崇高的使命',
    prefix: '未被击',
    type: 'fusion-sub-equipment',
    damageValue: 3500,
    skillAtk: [3],
  },
  {
    name: '光辉：崇高的使命',
    prefix: '被击',
    type: 'fusion-sub-equipment',
    damageValue: 3500 - 2000,
    skillAtk: [3],
  },
]

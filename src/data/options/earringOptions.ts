import { Option } from '.'

export const earringOptions: Option[] = [
  {
    name: '领主 20 属强',
    type: 'earring',
    from: '森林之魔女耳环',
    damageValue: 741,
    elementalDamage: 20,
  },
  {
    name: '施放 Lv60~80 减 Lv95 剩余 CD',
    type: 'earring',
    from: '森林之魔女耳环',
    damageValue: 1037,
    coolDownReduction: 0.089 * 0.12,
    other: '按鹦鹉 Lv95 技能 30% CDR 模拟，期望 CD 为 8.9%，按制式鹦鹉 Lv95 12% 占比计算',
  },
  {
    name: '施放 Lv45~75 减 Lv80 剩余 CD',
    type: 'earring',
    from: '森林之魔女耳环',
    damageValue: 1037,
    coolDownReduction: 0.077 * 0.35,
    other: '按鹦鹉 Lv95 技能 30% CDR 模拟，期望 CD 为 7.7%，按特化剜心 35% 占比计算',
  },
  {
    name: 'Lv35 韧性 CDR',
    type: 'earring',
    from: '森林之魔女耳环',
    damageValue: 1334,
    coolDownReduction: 0.165 * 0.2,
    other: '期望 16.5% CDR，按特工恩特裤子 9 保月步 20% 占比计算',
  },
  // {
  //   name: 'Lv40 韧性 CDR',
  //   type: 'earring',
  //   from: '森林之魔女耳环',
  //   damageValue: 1334,
  //   coolDownReduction: 0.165 * 0.2,
  //   other: '期望 16.5% CDR，按特工恩特裤子 9 保月步 20% 占比计算',
  // },
]

import { Data } from '.'

export const braceletsOptions: Data[] = [
  {
    name: '直伤技攻',
    type: 'bracelet',
    from: 'logo',
    damageValue: 1186,
    skillAtk: [2, 5],
  },
  {
    name: '移动技攻',
    type: 'bracelet',
    from: 'logo',
    damageValue: 1186,
    skillAtk: 6,
    speed: 10,
  },
  {
    name: '每个目标属强',
    type: 'bracelet',
    from: '森林之魔女手镯',
    damageValue: 148,
    elementalDamage: 5 * 4 + 20,
  },
  {
    name: '15% 中毒伤害',
    prefix: '毒王',
    type: 'bracelet',
    from: '森林之魔女手镯',
    damageValue: 296,
    abnormal: {
      type: 'posion',
      prevConvert: 48,
      prevAbnormalDamage: 30,
      abnormalDamage: 10,
    },
    other: '手镯位毒伤，仅有毒王可以使用，按穿蓝灵上衣计算',
  },
  {
    name: '30% 感电转伤',
    type: 'bracelet',
    from: '森林之魔女手镯',
    damageValue: 1186,
    abnormal: {
      type: 'shock',
      convert: 30,
    },
  },
  {
    name: '每名队员攻强',
    type: 'bracelet',
    from: '恩特精灵手镯',
    damageValue: 1186 + 1112,
    other: '按 1 名队员计算',
  },
  {
    name: '自异常 Lv35 30% CDR',
    type: 'bracelet',
    from: '蓝灵绿玉石手镯',
    damageValue: 1334,
    cooldownRecovery: 30 * 0.2,
    other: '按特工单 35 恩特裤子 9 保月步 20% 占比计算',
  },
  {
    name: '自异常 Lv45 30% CDR',
    type: 'bracelet',
    from: '蓝灵绿玉石手镯',
    damageValue: 1334,
    cooldownRecovery: 30 * 0.3,
    other: '按旅人双 45 恩特肩双 45 魔女裤子 Lv45 30% 占比计算',
  },
  {
    name: '自异常 Lv60 30% CDR',
    type: 'bracelet',
    from: '蓝灵绿玉石手镯',
    damageValue: 1334,
    cooldownRecovery: 3.9,
    other: '按关羽 9 保长虹贯日 Lv60 13% 占比计算',
  },
  {
    name: '攻强减伤',
    prefix: '期望',
    type: 'bracelet',
    from: '深潜迷航腕表',
    damageValue: 1186 + (3409 + 2223) / 2,
  },
  {
    name: '攻强速度',
    prefix: '期望',
    type: 'bracelet',
    from: '深潜迷航腕表',
    damageValue: 1334 + (3409 + 2223) / 2,
  },
]

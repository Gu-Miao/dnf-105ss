import { Data } from '.'

export const fusionTops: Data[] = [
  {
    name: '冰花：绽放花瓣',
    type: 'fusion-top',
    damageValue: 1704 * 4,
  },
  {
    name: '猎食：破碎伤痕',
    type: 'fusion-top',
    damageValue: 7034,
  },
  {
    name: '灵通：协同生命',
    type: 'fusion-top',
    damageValue: 5311,
    cooldownRecovery: 20 * 0.1,
    other: '期望为 20% CDR，按 Lv30 和 Lv60 总共 10% 占比计算',
  },
  {
    name: '灵通：协同生命',
    type: 'fusion-top',
    damageValue: 5311,
    cooldownRecovery: 20 * 0.11,
    other: '期望为 20% CDR，按 Lv30 和 Lv60 总共 11% 占比计算',
  },
  {
    name: '暴怒：吞噬终末的气息',
    type: 'fusion-top',
    damageValue: 6213,
    speed: {
      moveSpeed: 4,
    },
  },
  {
    name: '雷光：汇聚天雷的龙心',
    type: 'fusion-top',
    damageValue: 4685,
    speed: '组队最多 16% 攻速，24% 施放，16% 移速',
  },
]

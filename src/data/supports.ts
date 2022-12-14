import { Data } from '.'

export const supports: Data[] = [
  {
    name: '虚影幻息眼镜',
    type: '辅助装备',
    skillAttacks: [12, 2, 5],
    attackEnhancement: 5673,
    other: '特效；使敌人灼烧',
  },
  {
    name: '命运的魔法箱',
    type: '辅助装备',
    skillAttacks: [12],
    attackEnhancement: 5604,
    elementEnhancement: 12,
    other: '按 12 属强计算',
  },
  {
    name: '挖掘之王部件',
    type: '辅助装备',
    skillAttacks: [12],
    attackEnhancement: 7100,
    cd: 25,
    speed: {
      attackSpeed: 25,
      castingSpeed: 40,
    },
    elementEnhancement: 10,
    other: '特效；使敌人感电',
  },
  {
    name: '不祥的暗纹石板',
    type: '辅助装备',
    skillAttacks: [12, 5],
    attackEnhancement: 5874,
    speed: {
      moveSpeed: 8,
    },
    other: '增加跳跃功能性',
  },
  {
    name: '全息通话器',
    type: '辅助装备',
    skillAttacks: [12],
    attackEnhancement: 6414,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
      moveSpeed: 8,
    },
    other: '减少/增加小技能 CD',
  },
  {
    name: '生命本源背包',
    type: '辅助装备',
    skillAttacks: [12],
    attackEnhancement: 5510,
    elementEnhancement: 30,
    other: '50 光抗；-20 火，冰，暗抗；限定光强；-10% 全异抗',
  },
  {
    name: '梦之呼唤',
    type: '辅助装备',
    skillAttacks: [12],
    attackEnhancement: 4528,
    cd: 50,
    other: '搭配睡眠流装备；-10% 睡眠抗性',
  },
  {
    name: '飘渺的知识',
    type: '辅助装备',
    skillAttacks: [12],
    attackEnhancement: 5510,
    elementEnhancement: 30,
    other: '50 暗抗；-20 火，冰，光抗；限定暗强；-10% 全异抗',
  },
  {
    name: '正义骑士面具',
    type: '辅助装备',
    skillAttacks: [12],
    attackEnhancement: 5336,
    speed: {
      moveSpeed: 8,
    },
    other: '增加跳跃功能性',
  },
  {
    name: '未知文明 - 人面石',
    type: '辅助装备',
    skillAttacks: [12],
    attackEnhancement: 5510,
    elementEnhancement: 30,
    other: '50 冰抗；-20 火，光，暗抗；限定冰强；-10% 全异抗',
  },
  {
    name: '摇曳的生命之水',
    prefix: '破韧冰冻',
    type: '辅助装备',
    skillAttacks: [12, 15],
    attackEnhancement: 4714,
    other: '特效；使敌人冰冻',
  },
  {
    name: '摇曳的生命之水',
    prefix: '未破韧',
    type: '辅助装备',
    skillAttacks: [12],
    attackEnhancement: 4714,
    other: '特效；使敌人冰冻',
  },
  {
    name: '空战型：战术螺旋桨无人机',
    type: '辅助装备',
    skillAttacks: [12],
    attackEnhancement: 10320,
    elementEnhancement: 5,
    other: '回蓝回血',
  },
  {
    name: '心之潜影',
    type: '辅助装备',
    skillAttacks: [12],
    attackEnhancement: 5510,
    elementEnhancement: 30,
    other: '50 火抗；-20 冰，光，暗抗；限定火强；-10% 全异抗',
  },
  {
    name: '猎龙者之证 - 龙骨角笛',
    type: '辅助装备',
    skillAttacks: [12],
    attackEnhancement: 4796,
    elementEnhancement: 30,
    other: 'Lv60 技能 +10 级',
  },
  {
    name: '幻影之触控制面板',
    type: '辅助装备',
    skillAttacks: [12],
    attackEnhancement: 9781,
    elementEnhancement: 10,
    other: '50% 以上 HP',
  },
  {
    name: '黎明圣杯',
    type: '辅助装备',
    skillAttacks: [12, 15],
    attackEnhancement: 5066,
    speed: 15,
    other: '4 键手搓',
  },
  {
    name: '德卡制导装置',
    prefix: '控制异常',
    type: '辅助装备',
    skillAttacks: [12, 3, 1],
    attackEnhancement: 2910,
    cd: 20,
  },
  {
    name: '德卡制导装置',
    type: '辅助装备',
    skillAttacks: [12, 3],
    attackEnhancement: 2910,
    cd: 15,
  },
  {
    name: '生命的喘息',
    type: '辅助装备',
    skillAttacks: [12, 7],
    attackEnhancement: 6751,
    speed: {
      attackSpeed: 8,
      castingSpeed: 12,
    },
    other: '搭配低血流装备',
  },
  {
    name: '死亡之冠',
    type: '辅助装备',
    skillAttacks: [12],
    attackEnhancement: 9378,
    elementEnhancement: 10,
    speed: {
      moveSpeed: 8,
    },
  },
  {
    name: '光学工程眼镜',
    type: '辅助装备',
    skillAttacks: [12, 5],
    attackEnhancement: 8085,
    speed: {
      attackSpeed: 5,
      castingSpeed: 7.5,
      moveSpeed: 5,
    },
    other: '装备品级',
  },
  {
    name: '鲁莽而合理的作战',
    type: '辅助装备',
    skillAttacks: [12],
    attackEnhancement: 8704,
    other: '70% 以上 HP',
  },
  {
    name: '生命酒杯',
    type: '辅助装备',
    skillAttacks: [12],
    attackEnhancement: 5874 + 2964,
    elementEnhancement: 10,
    speed: {
      moveSpeed: 8,
    },
    other: '死亡之舞',
  },
  {
    name: '中止的知识',
    type: '辅助装备',
    skillAttacks: [12, 3],
    attackEnhancement: 8301,
    speed: '普攻，跳攻，前冲攻击时 35% 攻速',
  },
  {
    name: '蓝灵绿玉石香水',
    prefix: '三词条',
    type: '辅助装备',
    skillAttacks: [12, 5, 5],
    attackEnhancement: 445 + 445 + 1186 + 1334,
    elementEnhancement: 15,
    other: '出血 5；感电 5；15 属强',
  },
  {
    name: '蓝灵绿玉石香水',
    prefix: '四词条1',
    type: '辅助装备',
    skillAttacks: [12, 5],
    attackEnhancement: 1186 + 1630 + 1186 + 445,
    elementEnhancement: 40,
    other: '10 属强；15 属强；15 单属强；感电 5',
  },
  {
    name: '蓝灵绿玉石香水',
    prefix: '四词条2',
    type: '辅助装备',
    skillAttacks: [12, 5, 5],
    attackEnhancement: 1186 + 1630 + 445 + 445,
    elementEnhancement: 30,
    other: '15 单属强；15 属强；出血 5；感电 5',
  },
  {
    name: '蓝灵绿玉石香水',
    prefix: '四词条3',
    type: '辅助装备',
    skillAttacks: [12, 5, 5, 5],
    attackEnhancement: 1186 + 445 + 445 + 445,
    elementEnhancement: 15,
    other: '15 单属强；灼烧 5；出血 5；感电 5',
  },
  {
    name: '蓝灵绿玉石香水',
    prefix: '四词条4',
    type: '辅助装备',
    skillAttacks: [12, 5, 5, 5, 5],
    attackEnhancement: 445 + 445 + 445 + 445,
    other: '中毒 5；灼烧 5；出血 5；感电 5',
  },
  {
    name: '蓝灵绿玉石香水',
    prefix: '四词条5',
    type: '辅助装备',
    skillAttacks: [12, 7, 5, 5, 5],
    attackEnhancement: 296 + 445 + 445 + 445,
    other: '龙 7；灼烧 5；出血 5；感电 5',
  },
  {
    name: '蓝灵绿玉石香水',
    prefix: '四词条6',
    type: '辅助装备',
    skillAttacks: [12, 7, 5, 5],
    attackEnhancement: 296 + 445 + 445 + 296,
    abnormal: {
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.2,
    },
    other: '龙 7；出血 5；感电 5; 20 出血伤害',
  },
  {
    name: '森林之魔女篮子',
    prefix: '四词条7',
    type: '辅助装备',
    skillAttacks: [12, 7, 5, 5],
    attackEnhancement: 296 + 445 + 445 + 296,
    abnormal: {
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.1,
    },
    other: '龙 7；出血 5；感电 5; 10 感电伤害',
  },
  {
    name: '恩特精灵圣杯',
    prefix: '四词条8',
    type: '辅助装备',
    skillAttacks: [12, 5],
    attackEnhancement: 1186 + 1186 + 3112 + 445 + 889,
    abnormal: {
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.15,
    },
    other: '低血 5；低血攻强；出血 5; 15 出血伤害',
  },
  {
    name: '深潜迷航脚蹼',
    prefix: '四词条9',
    type: '辅助装备',
    skillAttacks: [12, 7, 5, 5],
    attackEnhancement: 296 + 445 + 445 + 1186,
    abnormal: {
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.05,
    },
    other: '龙 7；出血 5；感电 5; 5 出血伤害',
  },
]

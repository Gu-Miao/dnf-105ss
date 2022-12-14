import { ATTACK_ENHANCE_ARG, ELEMENT_ENHANCEMENT } from './constants'

type Abnormal = {
  prevConversionRate: number
  prevAbnormalDamageEnhancement: number
  increasedConversionRate: number
  increasedAbnormalDamageEnhancement: number
}

type Data = {
  name: string
  type:
    | '上衣'
    | '下装'
    | '头肩'
    | '腰带'
    | '鞋'
    | '手镯'
    | '项链'
    | '戒指'
    | '辅助装备'
    | '魔法石'
    | '耳环'
  skillAttacks: number[]
  attackEnhancement: number
  elementEnhancement?: number
  abnormal?: Abnormal
  extra?: number
  speed?: string
  cd?: number
  other?: string
  increaseRate?: number
}

const data: Data[] = [
  {
    name: '御力装甲上衣',
    type: '上衣',
    skillAttacks: [12],
    attackEnhancement: 6316,
    elementEnhancement: 10,
    abnormal: {
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.2,
    },
    other: '灼烧',
  },
  {
    name: '白金流光夹克',
    type: '上衣',
    skillAttacks: [12],
    attackEnhancement: 5604,
    other: '附魔提升未计算',
  },
  {
    name: '死亡蚕食胸甲',
    type: '上衣',
    skillAttacks: [12, 5],
    attackEnhancement: 6753,
    speed: '15攻速，22.5释放',
  },
  {
    name: '暗影流光战袍',
    type: '上衣',
    skillAttacks: [12],
    attackEnhancement: 6373,
    speed: '8攻速，12释放',
    cd: 20,
  },
  {
    name: '古老的探险家大衣',
    type: '上衣',
    skillAttacks: [12],
    attackEnhancement: 5604,
    elementEnhancement: 10,
    abnormal: {
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.2,
    },
    speed: '8移速',
    other: '出血',
  },
  {
    name: '双面星云皮大衣',
    type: '上衣',
    skillAttacks: [12, 5],
    attackEnhancement: 6803,
    elementEnhancement: 20,
    speed: '5攻速，7.5释放',
    other: '空血',
  },
  {
    name: '百折不挠的梦想',
    type: '上衣',
    skillAttacks: [12],
    attackEnhancement: 6952,
    elementEnhancement: 15,
    other: '睡眠',
  },
  {
    name: '冤魂的执念上衣',
    type: '上衣',
    skillAttacks: [12],
    attackEnhancement: 5604,
    elementEnhancement: 10,
    abnormal: {
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.2,
    },
    other: '感电',
  },
  {
    name: '守护之王者铠甲',
    type: '上衣',
    skillAttacks: [12],
    attackEnhancement: 6872,
    elementEnhancement: 15,
  },
  {
    name: '轰天裂地石甲',
    type: '上衣',
    skillAttacks: [12],
    attackEnhancement: 5604,
    elementEnhancement: 10,
    abnormal: {
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.2,
    },
    other: '中毒',
  },
  {
    name: '大地的馈赠上衣',
    type: '上衣',
    skillAttacks: [12, 2],
    attackEnhancement: 7126,
    elementEnhancement: 15,
    speed: '10攻速，15释放',
    other: '物体，20火炕',
  },
  {
    name: '高科技战术指挥上衣',
    type: '上衣',
    skillAttacks: [12],
    attackEnhancement: 8341,
    elementEnhancement: 30,
    speed: '30移速',
    other: '每20s可前冲一次',
  },
  {
    name: '澎湃之心上衣',
    type: '上衣',
    skillAttacks: [12],
    attackEnhancement: 5995,
    elementEnhancement: 10,
  },
  {
    name: '屠龙者',
    type: '上衣',
    skillAttacks: [12],
    attackEnhancement: 7060,
    elementEnhancement: 15,
    other: '25全属抗',
  },
  {
    name: '天才技术大师的研究服上衣',
    type: '上衣',
    skillAttacks: [12],
    attackEnhancement: 5187,
    elementEnhancement: 15,
    cd: 20,
  },
  {
    name: '高贵的神意上衣',
    type: '上衣',
    skillAttacks: [12],
    attackEnhancement: 6414,
    speed: '10s内30三速',
  },
  {
    name: '极魂之驱上衣',
    type: '上衣',
    skillAttacks: [12],
    attackEnhancement: 4768,
  },
  {
    name: '玉化亡灵胸甲',
    type: '上衣',
    skillAttacks: [12],
    attackEnhancement: 6144,
    speed: '8移速；跳跃10攻速，15释放',
  },
  {
    name: '深渊之源上衣',
    type: '上衣',
    skillAttacks: [12],
    attackEnhancement: 8341,
    elementEnhancement: 30,
    other: '赋予属性攻击',
  },
  {
    name: '混乱核心胸甲',
    type: '上衣',
    skillAttacks: [12],
    attackEnhancement: 5604,
    elementEnhancement: 10,
    abnormal: {
      prevConversionRate: 0.5,
      prevAbnormalDamageEnhancement: 0.2,
      increasedConversionRate: 0,
      increasedAbnormalDamageEnhancement: 0.15,
    },
    other: '全异常增上，配合异常对象增加攻强的部位提升会增加',
  },
]

data.forEach(item => {
  console.log(`==== ${item.name} ====`)
  console.log(`技工：${item.skillAttacks}，提升：${getSkillAttackIncreaseRate(item.skillAttacks)}`)
  console.log(
    `攻强：${item.attackEnhancement}，提升：${getAttackEnhancementIncreaseRate(
      item.attackEnhancement,
    )}`,
  )
  if (item.elementEnhancement) {
    console.log(
      `属强：${item.elementEnhancement}，提升：${getElementEnhancementIncreaseRate(
        item.elementEnhancement,
      )}`,
    )
  }
  if (item.abnormal) {
    console.log(
      `原异常转换：${item.abnormal.prevConversionRate}，原异常伤害增加：${
        item.abnormal.prevAbnormalDamageEnhancement
      }，异常转换增加：${item.abnormal.increasedConversionRate}，异常伤害增加：${
        item.abnormal.increasedAbnormalDamageEnhancement
      }，提升：${getAbnormalDamageIncreaseRate(item.abnormal)}`,
    )
  }
  console.log(`总提升：${(getIncreaseRate(item) * 100).toFixed(2)}%`)
  console.log('')

  item.increaseRate = getIncreaseRate(item)
})

export { data }

function getSkillAttackIncreaseRate(skillAttacks: number[]) {
  return skillAttacks.reduce(
    (increaseRate, skillAttack) => increaseRate * (1 + skillAttack / 100),
    1,
  )
}

function getAttackEnhancementIncreaseRate(attackEnhancement: number) {
  return 1 + attackEnhancement / ATTACK_ENHANCE_ARG
}

function getElementEnhancementIncreaseRate(increasedElementEnhancement: number) {
  return 1 + increasedElementEnhancement / (ELEMENT_ENHANCEMENT + 233)
}

function getAbnormalDamageIncreaseRate({
  prevConversionRate,
  prevAbnormalDamageEnhancement,
  increasedConversionRate,
  increasedAbnormalDamageEnhancement,
}: Abnormal) {
  return (
    (prevConversionRate * increasedAbnormalDamageEnhancement +
      prevAbnormalDamageEnhancement * increasedConversionRate +
      increasedConversionRate * increasedAbnormalDamageEnhancement) /
      (1 + prevConversionRate * prevAbnormalDamageEnhancement) +
    1
  )
}

function getIncreaseRate(data: Data) {
  return (
    getSkillAttackIncreaseRate(data.skillAttacks) *
      getAttackEnhancementIncreaseRate(data.attackEnhancement) *
      (data.elementEnhancement ? getElementEnhancementIncreaseRate(data.elementEnhancement) : 1) *
      (data.abnormal ? getAbnormalDamageIncreaseRate(data.abnormal) : 1) +
    (data.extra ?? 0) -
    1
  )
}

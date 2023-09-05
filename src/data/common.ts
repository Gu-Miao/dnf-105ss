import { ATTACK_ENHANCE_PER } from '@/constants'

export type Abnormal = {
  type: '出血' | '中毒' | '灼烧' | '感电'
  prevConversionRate: number // 原异常伤害转换率
  prevAbnormalDamageEnhancement: number // 原异常伤害增加量
  increasedConversionRate: number // 新增异常伤害转换率
  increasedAbnormalDamageEnhancement: number // 新增异常伤害增加量
}

export type Data = {
  name: string
  prefix?: string
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
    | '融合 - 上衣'
    | '融合 - 下装'
    | '融合 - 头肩'
    | '融合 - 腰带'
    | '融合 - 鞋'
    | '融合 - 手镯'
    | '融合 - 项链'
    | '融合 - 戒指'
    | '融合 - 辅助装备'
    | '融合 - 魔法石'
    | '融合 - 耳环'
  skillAttacks?: number[]
  attackEnhancement: number
  elementEnhancement?: number
  abnormal?: Abnormal
  coldDownRecover?: number
  coldDownReduce?: number
  speed?:
    | {
        attackSpeed?: number
        castingSpeed?: number
        moveSpeed?: number
      }
    | string
    | number
  other?: string
  increaseRate?: number
}

/**
 * 获取技攻提升率
 * @param skillAttacks 所有技攻加成
 * @returns 技攻提升率
 */
function getSkillAttackIncreaseRate(skillAttacks: number[]) {
  return skillAttacks.reduce(
    (increaseRate, skillAttack) => increaseRate * (1 + skillAttack / 100),
    1,
  )
}

/**
 * 获取攻击强化提升率
 * @param increasedAttackEnhancement 增加的攻击强化
 * @param attackEnhacment 攻强分母
 * @returns 攻击强化提升率
 */
function getAttackEnhancementIncreaseRate(
  increasedAttackEnhancement: number,
  attackEnhacment: number,
) {
  return 1 + (increasedAttackEnhancement / attackEnhacment) * ATTACK_ENHANCE_PER
}

/**
 * 获取属强提升率
 * @param increasedElementEnhancement 属强
 * @param elementEnhancement 原属强
 * @returns 属强提升率
 */
function getElementEnhancementIncreaseRate(
  increasedElementEnhancement: number,
  elementEnhancement: number,
) {
  return 1 + increasedElementEnhancement / (elementEnhancement + 233)
}

/**
 * 获取异常伤害提升率
 * @param param0 异常伤害对象
 * @returns 异常伤害提升率
 */
function getAbnormalDamageIncreaseRate({
  type,
  prevConversionRate,
  prevAbnormalDamageEnhancement,
  increasedConversionRate,
  increasedAbnormalDamageEnhancement,
}: Abnormal) {
  const conversionRate = prevConversionRate + increasedConversionRate
  const abnormalDamageEnhancement =
    prevAbnormalDamageEnhancement + increasedAbnormalDamageEnhancement
  const abnormalTypeEnhancement = type === '出血' ? 1.1 : type === '灼烧' ? 1.075 : 1

  const prevDamage =
    1 -
    prevConversionRate +
    prevConversionRate * abnormalTypeEnhancement * (1 + prevAbnormalDamageEnhancement)
  const damage =
    1 - conversionRate + conversionRate * abnormalTypeEnhancement * (1 + abnormalDamageEnhancement)

  return damage / prevDamage
}

/**
 * 获取冷却时间恢复速度提升率
 * @param coldDownRecover 冷却时间恢复速度
 * @returns 冷却时间恢复速度提升率
 */
function getColdDownRecoverIncreaseRate(coldDownRecover: number) {
  return coldDownRecover / 3 + 1
}

/**
 * 获取冷却时间减少提升率
 * @param coldDownReduce 冷却时间减少
 * @returns 冷却时间减少提升率
 */
function getColdDownReduceIncreaseRate(coldDownReduce: number) {
  return coldDownReduce / 2 + 1
}

/**
 * 获取装备提升率
 * @param data 装备数据
 * @param attackEnhacment 攻强分母
 * @param elementEnhancement 原属强
 * @returns 装备提升率
 */
export function getIncreaseRate(data: Data, attackEnhacment: number, elementEnhancement: number) {
  let increaseRate = 1

  console.log(`==== ${data.prefix ? `【${data.prefix}】` : ''}${data.name} ====`)

  if (data.attackEnhancement) {
    const attackEnhancementIncreaseRate = getAttackEnhancementIncreaseRate(
      data.attackEnhancement,
      attackEnhacment,
    )

    increaseRate *= attackEnhancementIncreaseRate
    console.log(`攻击强化：${data.attackEnhancement}，提升：${attackEnhancementIncreaseRate}`)
  }

  if (data.skillAttacks) {
    const skillAttackIncreaseRate = getSkillAttackIncreaseRate(data.skillAttacks)

    increaseRate *= skillAttackIncreaseRate
    console.log(
      `技攻：${data.skillAttacks
        .map(num => num + '%')
        .join(', ')}，提升：${skillAttackIncreaseRate}`,
    )
  }

  if (data.elementEnhancement) {
    const elementEnhancementIncreaseRate = getElementEnhancementIncreaseRate(
      data.elementEnhancement,
      elementEnhancement,
    )

    increaseRate *= elementEnhancementIncreaseRate
    console.log(`属强：${data.elementEnhancement}，提升：${elementEnhancementIncreaseRate}`)
  }

  if (data.coldDownRecover) {
    const coldDownRecoverIncreaseRate = getColdDownRecoverIncreaseRate(data.coldDownRecover)

    increaseRate *= coldDownRecoverIncreaseRate
    console.log(`冷却时间恢复：${data.coldDownRecover}，提升：${coldDownRecoverIncreaseRate}`)
  }

  if (data.coldDownReduce) {
    const coldDownReduceIncreaseRate = getColdDownReduceIncreaseRate(data.coldDownReduce)

    increaseRate *= coldDownReduceIncreaseRate
    console.log(`冷却时间减少：${data.coldDownReduce}，提升：${coldDownReduceIncreaseRate}`)
  }

  if (data.abnormal) {
    const abnormalDamageIncreaseRate = getAbnormalDamageIncreaseRate(data.abnormal)

    increaseRate *= abnormalDamageIncreaseRate
    console.log(
      `异常伤害类型: ${data.abnormal.type}，原异常转换：${data.abnormal.prevConversionRate}，原异常伤害增加：${data.abnormal.prevAbnormalDamageEnhancement}}，异常转换增加：${data.abnormal.increasedConversionRate}，异常伤害增加：${data.abnormal.increasedAbnormalDamageEnhancement}，提升：${abnormalDamageIncreaseRate}`,
    )
  }

  console.log(`总提升：${((increaseRate - 1) * 100).toFixed(2)}%`)

  return increaseRate
}

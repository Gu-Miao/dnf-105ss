import { DAMAGE_VALUE_PERCENTAGE } from '@/constants'

export type Abnormal = {
  type: '出血' | '中毒' | '灼烧' | '感电'
  prevConversionRate: number // 原异常伤害转换率
  prevAbnormalDamageEnhancement: number // 原异常伤害增加量
  increasedConversionRate?: number // 新增异常伤害转换率
  increasedAbnormalDamageEnhancement?: number // 新增异常伤害增加量
}

export type Data = {
  name: string
  prefix?: string
  type:
    | 'top'
    | 'bottom'
    | 'header-shoulder'
    | 'belt'
    | 'shoe'
    | 'bracelet'
    | 'necklace'
    | 'ring'
    | 'sub-equipment'
    | 'magic-stone'
    | 'earring'
    | 'fusion-top'
    | 'fusion-bottom'
    | 'fusion-header-shoulder'
    | 'fusion-belt'
    | 'fusion-shoe'
    | 'fusion-bracelet'
    | 'fusion-necklace'
    | 'fusion-ring'
    | 'fusion-sub-equipment'
    | 'fusion-magic-stone'
    | 'fusion-earring'
  damageValue?: number
  skillAtk?: number[]
  elementalDamage?: number
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
 * @param skillAtk 所有技攻加成
 * @returns 技攻提升率
 */
function getSkillAtkIncreaseRate(skillAtk: number[]) {
  return skillAtk.reduce((increaseRate, skillAttack) => increaseRate * (1 + skillAttack / 100), 1)
}

/**
 * 获取攻击强化提升率
 * @param damageValue 增加的攻击强化
 * @param prevDamageValue 攻强分母
 * @returns 攻击强化提升率
 */
function getDamageValueIncreaseRate(damageValue: number, prevDamageValue: number) {
  return 1 + (damageValue / prevDamageValue) * (1 + DAMAGE_VALUE_PERCENTAGE / 100)
}

/**
 * 获取属强提升率
 * @param elementalDamage 属强
 * @param prevElementalDamage 原属强
 * @returns 属强提升率
 */
function getElementalDamageIncreaseRate(elementalDamage: number, prevElementalDamage: number) {
  return 1 + elementalDamage / (prevElementalDamage + 233)
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
  const conversionRate = prevConversionRate + (increasedConversionRate || 0)
  const abnormalDamageEnhancement =
    prevAbnormalDamageEnhancement + (increasedAbnormalDamageEnhancement || 0)
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
 * @param damageValue 攻强分母
 * @param elementalDamage 原属强
 * @returns 装备提升率
 */
export function getIncreaseRate(data: Data, damageValue: number, elementalDamage: number) {
  let increaseRate = 1

  console.log(`==== ${data.prefix ? `【${data.prefix}】` : ''}${data.name} ====`)

  if (data.damageValue) {
    const damageValueIncreaseRate = getDamageValueIncreaseRate(data.damageValue, damageValue)

    increaseRate *= damageValueIncreaseRate
    console.log(`攻击强化：${data.damageValue}，提升：${damageValueIncreaseRate}`)
  }

  if (data.skillAtk) {
    const skillAtkIncreaseRate = getSkillAtkIncreaseRate(data.skillAtk)

    increaseRate *= skillAtkIncreaseRate
    console.log(
      `技攻：${data.skillAtk.map(num => num + '%').join(', ')}，提升：${skillAtkIncreaseRate}`,
    )
  }

  if (data.elementalDamage) {
    const elementalDamageIncreaseRate = getElementalDamageIncreaseRate(
      data.elementalDamage,
      elementalDamage,
    )

    increaseRate *= elementalDamageIncreaseRate
    console.log(`属强：${data.elementalDamage}，提升：${elementalDamageIncreaseRate}`)
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

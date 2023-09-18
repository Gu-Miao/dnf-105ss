import { BURN_BREAK_ICE_RATE, DAMAGE_VALUE_PERCENTAGE } from '@/constants'

export type Abnormal = {
  type: 'bleed' | 'posion' | 'burn' | 'shock'
  prevConvert?: number
  prevAbnormalDamage?: number
  convert?: number
  abnormalDamage?: number
}

export type Data = {
  name: string
  prefix?: string
  type:
    | 'public'
    | 'armor'
    | 'jewelry'
    | 'special-equipment'
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
  from?: string
  damageValue?: number
  skillAtk?: number[]
  elementalDamage?: number
  abnormal?: Abnormal
  cooldownRecovery?: number
  cooldownReduction?: number
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

const abnormalTypeMap = {
  bleed: '出血',
  posion: '中毒',
  burn: '灼烧',
  shock: '感电',
}

/**
 * 获取技攻提升率
 * @param skillAtk 所有技攻加成
 * @returns 技攻提升率
 */
function getSkillAtkIncreaseRate(skillAtk: number[]) {
  return skillAtk.reduce((increaseRate, skillAttack) => increaseRate * (1 + skillAttack * 0.01), 1)
}

/**
 * 获取攻击强化提升率
 * @param damageValue 攻击强化
 * @param prevDamageValue 攻强分母
 * @returns 攻击强化提升率
 */
function getDamageValueIncreaseRate(damageValue: number, prevDamageValue: number) {
  return 1 + (damageValue / prevDamageValue) * (1 + DAMAGE_VALUE_PERCENTAGE * 0.01)
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
 * @param param 异常伤害对象
 * @returns 异常伤害提升率
 */
function getAbnormalDamageIncreaseRate({
  type,
  prevConvert = 0,
  prevAbnormalDamage = 0,
  convert = 0,
  abnormalDamage = 0,
}: Abnormal) {
  const currentConvert = prevConvert + convert
  const currentAbnormalDamage = prevAbnormalDamage + abnormalDamage
  const additionalDamage =
    type === 'shock' ? 5 : type === 'burn' ? 10 * (BURN_BREAK_ICE_RATE * 0.01) : 10

  const prevDamage =
    1 -
    prevConvert * 0.01 +
    prevConvert * 0.01 * (1 + additionalDamage * 0.01) * (1 + prevAbnormalDamage * 0.01)
  const damage =
    1 -
    currentConvert * 0.01 +
    currentConvert * 0.01 * (1 + additionalDamage * 0.01) * (1 + currentAbnormalDamage * 0.01)

  return damage / prevDamage
}

/**
 * 获取冷却时间恢复速度提升率
 * @param cooldownRecovery 冷却时间恢复速度
 * @returns 冷却时间恢复速度提升率
 */
function getCooldownRecoveryIncreaseRate(cooldownRecovery: number) {
  return (cooldownRecovery * 0.01) / 3 + 1
}

/**
 * 获取冷却时间减少提升率
 * @param cooldownReduction 冷却时间减少
 * @returns 冷却时间减少提升率
 */
function getCooldownReductionIncreaseRate(cooldownReduction: number) {
  return (cooldownReduction * 0.01) / 2 + 1
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

  if (data.cooldownRecovery) {
    const cooldownRecoveryIncreaseRate = getCooldownRecoveryIncreaseRate(data.cooldownRecovery)

    increaseRate *= cooldownRecoveryIncreaseRate
    console.log(`冷却时间恢复：${data.cooldownRecovery}，提升：${cooldownRecoveryIncreaseRate}`)
  }

  if (data.cooldownReduction) {
    const cooldownReductionIncreaseRate = getCooldownReductionIncreaseRate(data.cooldownReduction)

    increaseRate *= cooldownReductionIncreaseRate
    console.log(`冷却时间减少：${data.cooldownReduction}，提升：${cooldownReductionIncreaseRate}`)
  }

  if (data.abnormal) {
    const abnormalDamageIncreaseRate = getAbnormalDamageIncreaseRate(data.abnormal)

    increaseRate *= abnormalDamageIncreaseRate

    console.log(
      `异常伤害类型: ${abnormalTypeMap[data.abnormal.type]}，原异常转换：${
        data.abnormal.prevConvert
      }，原异常伤害增加：${data.abnormal.prevAbnormalDamage}，异常转换增加：${
        data.abnormal.convert
      }，异常伤害增加：${data.abnormal.abnormalDamage}，提升：${abnormalDamageIncreaseRate}`,
    )
  }

  console.log(`总提升：${((increaseRate - 1) * 100).toFixed(2)}%`)

  return increaseRate
}

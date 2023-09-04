import { ATTACK_ENHANCE_ARG, ELEMENT_ENHANCEMENT, ATTACK_ENHANCE_PER } from '../constants'
import { coats } from './coats'
import { pants } from './pants'
import { spaulders } from './spaulders'
import { belts } from './belts'
import { shoes } from './shoes'
import { bracelets } from './bracelets'
import { necklaces } from './necklaces'
import { rings } from './ring'
import { supports } from './supports'
import { magicStones } from './magicStones'
import { earrings } from './earrings'
// import { mixCoats } from './mixCoats'
// import { mixPants } from './mixPants'
// import { mixSpaulders } from './mixSpaulders'
// import { mixBelts } from './mixBelts'
// import { mixShoes } from './mixShoes'
// import { mixBracelets } from './mixBracelets'
// import { mixNecklaces } from './mixNecklaces'
// import { mixRings } from './mixRings'
// import { mixSupports } from './mixSupports'
// import { mixMagicStones } from './mixMagicStones'
// import { mixEarrings } from './mixEarrings'

type Abnormal = {
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

const data: Data[] = [
  ...coats,
  ...pants,
  ...spaulders,
  ...belts,
  ...shoes,
  ...bracelets,
  ...necklaces,
  ...rings,
  ...supports,
  ...magicStones,
  ...earrings,
  // ...mixCoats,
  // ...mixPants,
  // ...mixSpaulders,
  // ...mixBelts,
  // ...mixShoes,
  // ...mixBracelets,
  // ...mixNecklaces,
  // ...mixRings,
  // ...mixSupports,
  // ...mixMagicStones,
  // ...mixEarrings,
]
  .map(item => {
    printProcess(item)
    item.increaseRate = getIncreaseRate(item)
    return item
  })
  .sort((a, b) => (b.increaseRate as number) - (a.increaseRate as number))

export { data }

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
 * @param attackEnhancement 攻击强化
 * @returns 攻击强化提升率
 */
function getAttackEnhancementIncreaseRate(attackEnhancement: number) {
  return 1 + (attackEnhancement / ATTACK_ENHANCE_ARG) * ATTACK_ENHANCE_PER
}

/**
 * 获取属强提升率
 * @param increasedElementEnhancement 属强
 * @returns 属强提升率
 */
function getElementEnhancementIncreaseRate(increasedElementEnhancement: number) {
  return 1 + increasedElementEnhancement / (ELEMENT_ENHANCEMENT + 233)
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
 * @returns 装备提升率
 */
function getIncreaseRate(data: Data) {
  return (
    (data.skillAttacks ? getSkillAttackIncreaseRate(data.skillAttacks) : 1) *
      getAttackEnhancementIncreaseRate(data.attackEnhancement) *
      (data.elementEnhancement ? getElementEnhancementIncreaseRate(data.elementEnhancement) : 1) *
      (data.abnormal ? getAbnormalDamageIncreaseRate(data.abnormal) : 1) *
      (data.coldDownRecover ? getColdDownRecoverIncreaseRate(data.coldDownRecover) : 1) *
      (data.coldDownReduce ? getColdDownReduceIncreaseRate(data.coldDownReduce) : 1) -
    1
  )
}

function printProcess(item: Data) {
  console.log(`==== ${item.name} ====`)
  if (item.skillAttacks) {
    console.log(
      `技攻：${item.skillAttacks}，提升：${getSkillAttackIncreaseRate(item.skillAttacks)}`,
    )
  }
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
  if (item.coldDownRecover) {
    console.log(
      `冷却时间恢复：${item.coldDownRecover}，提升：${getColdDownRecoverIncreaseRate(
        item.coldDownRecover,
      )}`,
    )
  }
  if (item.coldDownReduce) {
    console.log(
      `冷却时间减少：${item.coldDownReduce}，提升：${getColdDownReduceIncreaseRate(
        item.coldDownReduce,
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
}

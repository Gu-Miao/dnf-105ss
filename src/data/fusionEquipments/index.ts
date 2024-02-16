import { DAMAGE_VALUE_FUSION_COMPARATION, ELEMENTAL_DAMAGE } from '@/constants'
import { getIncreaseRate, Data } from '../common'
import { fusionTops } from './fusionTops'
import { fusionBottoms } from './fusionBottoms'
import { fusionHeaderShoulders } from './fusionHeaderShoulders'
import { fusionBelts } from './fusionBelts'
import { fusionShoes } from './fusionShoes'
import { fusionBracelets } from './fusionBracelets'
import { fusionNecklaces } from './fusionNecklaces'
import { fusionRings } from './fusionRings'
import { fusionSubEquipments } from './fusionSubEquipments'
import { fusionMagicStones } from './fusionMagicStones'
import { fusionEarrings } from './fusionEarrings'

const fusionEquipments: Data[] = [
  ...fusionTops,
  ...fusionBottoms,
  ...fusionHeaderShoulders,
  ...fusionBelts,
  ...fusionShoes,
  ...fusionBracelets,
  ...fusionNecklaces,
  ...fusionRings,
  ...fusionSubEquipments,
  ...fusionMagicStones,
  ...fusionEarrings,
]
  .map(item => {
    item.increaseRate = getIncreaseRate(item, DAMAGE_VALUE_FUSION_COMPARATION, ELEMENTAL_DAMAGE)
    return item
  })
  .sort((a, b) => (b.increaseRate as number) - (a.increaseRate as number))

export { fusionEquipments, type Data }

import { DAMAGE_VALUE_BASE, ELEMENTAL_DAMAGE } from '@/constants'
import { getIncreaseRate, Data } from '../common'
import { tops } from './tops'
import { bottoms } from './bottoms'
import { headerShoulders } from './headerShoulders'
import { belts } from './belts'
import { shoes } from './shoes'
import { bracelets } from './bracelets'
import { necklaces } from './necklaces'
import { rings } from './rings'
import { subEquipments } from './subEquipments'
import { magicStones } from './magicStones'
import { earrings } from './earrings'

const equipments: Data[] = [
  ...tops,
  ...bottoms,
  ...headerShoulders,
  ...belts,
  ...shoes,
  ...bracelets,
  ...necklaces,
  ...rings,
  ...subEquipments,
  ...magicStones,
  ...earrings,
]
  .map(item => {
    item.increaseRate = getIncreaseRate(item, DAMAGE_VALUE_BASE, ELEMENTAL_DAMAGE)
    return item
  })
  .sort((a, b) => (b.increaseRate as number) - (a.increaseRate as number))

export { equipments, type Data }

import { ATTACK_ENHANCE_ARG, ELEMENT_ENHANCEMENT } from '@/constants'
import { getIncreaseRate, Data } from '../common'
import { coats } from './coats'
import { pants } from './pants'
import { spaulders } from './spaulders'
import { belts } from './belts'
import { shoes } from './shoes'
import { bracelets } from './bracelets'
import { necklaces } from './necklaces'
import { rings } from './rings'
import { supports } from './supports'
import { magicStones } from './magicStones'
import { earrings } from './earrings'

const equipments: Data[] = [
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
]
  .map(item => {
    item.increaseRate = getIncreaseRate(item, ATTACK_ENHANCE_ARG, ELEMENT_ENHANCEMENT)
    return item
  })
  .sort((a, b) => (b.increaseRate as number) - (a.increaseRate as number))

export { equipments, type Data }

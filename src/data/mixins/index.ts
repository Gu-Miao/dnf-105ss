import { ATTACK_ENHANCE_MIX, ELEMENT_ENHANCEMENT } from '@/constants'
import { getIncreaseRate, Data } from '../common'
import { mixCoats } from './mixCoats'
import { mixPants } from './mixPants'
import { mixSpaulders } from './mixSpaulders'
import { mixBelts } from './mixBelts'
import { mixShoes } from './mixShoes'
import { mixBracelets } from './mixBracelets'
import { mixNecklaces } from './mixNecklaces'
import { mixRings } from './mixRings'
import { mixSupports } from './mixSupports'
import { mixMagicStones } from './mixMagicStones'
import { mixEarrings } from './mixEarrings'

const mixins: Data[] = [
  ...mixCoats,
  ...mixPants,
  ...mixSpaulders,
  ...mixBelts,
  ...mixShoes,
  ...mixBracelets,
  ...mixNecklaces,
  ...mixRings,
  ...mixSupports,
  ...mixMagicStones,
  ...mixEarrings,
]
  .map(item => {
    item.increaseRate = getIncreaseRate(item, ATTACK_ENHANCE_MIX, ELEMENT_ENHANCEMENT)
    return item
  })
  .sort((a, b) => (b.increaseRate as number) - (a.increaseRate as number))

export { mixins, type Data }

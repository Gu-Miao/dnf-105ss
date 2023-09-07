import { ATTACK_ENHANCE_ARG, ELEMENT_ENHANCEMENT } from '@/constants'
import { getIncreaseRate, Data } from '../common'
import { publicEntries } from './publicEntries'
import { armorEntries } from './armorEntries'
import { jewelryEntries } from './jewelryEntries'
import { specialEquipmentEntries } from './specialEquipmentEntries'
import { coatEntries } from './coatEntries'
import { pantsEntries } from './pantsEntries'
import { spaulderEntries } from './spaulderEntries'
import { beltEntries } from './beltEntries'
import { shoeEntries } from './shoeEntries'
import { braceletsEntries } from './braceletsEntries'
import { necklaceEntries } from './necklaceEntries'
import { ringEntries } from './ringEntries'
import { supportEntires } from './supportEntires'
import { magicStoneEntries } from './magicStoneEntries'
import { earringEntries } from './earringEntries'

export type Entry = Omit<Data, 'type'> & {
  type: Data['type'] | '公共' | '防具' | '首饰' | '特殊装备'
  from?: string
}

export const entries: Entry[] = [
  ...publicEntries,
  ...armorEntries,
  ...jewelryEntries,
  ...specialEquipmentEntries,
  ...coatEntries,
  ...pantsEntries,
  ...spaulderEntries,
  ...beltEntries,
  ...shoeEntries,
  ...braceletsEntries,
  ...necklaceEntries,
  ...ringEntries,
  ...supportEntires,
  ...magicStoneEntries,
  ...earringEntries,
]
  .map(item => {
    item.increaseRate = getIncreaseRate(item as Data, ATTACK_ENHANCE_ARG, ELEMENT_ENHANCEMENT)
    return item
  })
  .sort((a, b) => (b.increaseRate as number) - (a.increaseRate as number))

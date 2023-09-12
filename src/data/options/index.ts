import { DAMAGE_VALUE_BASE, ELEMENTAL_DAMAGE } from '@/constants'
import { getIncreaseRate, Data } from '../common'
import { publicOptions } from './publicOptions'
import { armorOptions } from './armorOptions'
import { jewelryOptions } from './jewelryOptions'
import { specialEquipmentOptions } from './specialEquipmentOptions'
import { topOptions } from './topOptions'
import { bottomOptions } from './bottomOptions'
import { headerShoulderOptions } from './headerShoulderOptions'
import { beltOptions } from './beltOptions'
import { shoeOptions } from './shoeOptions'
import { braceletsOptions } from './braceletsOptions'
import { necklaceOptions } from './necklaceOptions'
import { ringOptions } from './ringOptions'
import { subEquipmentOptions } from './subEquipmentOptions'
import { magicStoneOptions } from './magicStoneOptions'
import { earringOptions } from './earringOptions'

export type Option = Omit<Data, 'type'> & {
  type: Data['type'] | 'public' | 'armor' | 'jewelry' | 'special-equipment'
  from?: string
}

export const options: Option[] = [
  ...publicOptions,
  ...armorOptions,
  ...jewelryOptions,
  ...specialEquipmentOptions,
  ...topOptions,
  ...bottomOptions,
  ...headerShoulderOptions,
  ...beltOptions,
  ...shoeOptions,
  ...braceletsOptions,
  ...necklaceOptions,
  ...ringOptions,
  ...subEquipmentOptions,
  ...magicStoneOptions,
  ...earringOptions,
]
  .map(item => {
    item.increaseRate = getIncreaseRate(item as Data, DAMAGE_VALUE_BASE, ELEMENTAL_DAMAGE)
    return item
  })
  .sort((a, b) => (b.increaseRate as number) - (a.increaseRate as number))

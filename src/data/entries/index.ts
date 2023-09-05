import { ATTACK_ENHANCE_ARG, ELEMENT_ENHANCEMENT } from '@/constants'
import { getIncreaseRate, Data } from '../common'
import { publicEntries } from './publicEntries'
import { armorEntries } from './armorEntries'

export type Entry = Omit<Data, 'type'> & {
  type: Data['type'] | '公共' | '防具' | '首饰' | '特殊装备'
  from?: string
}

export const entries: Entry[] = [
  //
  ...publicEntries,
  ...armorEntries,
]
  .map(item => {
    item.increaseRate = getIncreaseRate(item as Data, ATTACK_ENHANCE_ARG, ELEMENT_ENHANCEMENT)
    return item
  })
  .sort((a, b) => (b.increaseRate as number) - (a.increaseRate as number))

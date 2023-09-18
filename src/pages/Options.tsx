import { options, Data } from '@/data/options'
import Page from '@/components/Page'

const cacheName = 'options'
const types: Data['type'][] = [
  'public',
  'armor',
  'jewelry',
  'special-equipment',
  'top',
  'bottom',
  'header-shoulder',
  'belt',
  'shoe',
  'bracelet',
  'necklace',
  'ring',
  'sub-equipment',
  'magic-stone',
  'earring',
]

function Options() {
  return <Page data={options} cacheName={cacheName} types={types} />
}

export default Options

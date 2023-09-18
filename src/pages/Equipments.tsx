import { equipments, Data } from '@/data/equipments'
import Page from '@/components/Page'

const cacheName = 'equipments'
const types: Data['type'][] = [
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

function Equipments() {
  return <Page data={equipments} cacheName={cacheName} types={types} />
}

export default Equipments

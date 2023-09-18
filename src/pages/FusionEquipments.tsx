import { fusionEquipments, Data } from '@/data/fusionEquipments'
import Page from '@/components/Page'

const cacheName = 'fusion-equipments'
const types: Data['type'][] = [
  'fusion-top',
  'fusion-bottom',
  'fusion-header-shoulder',
  'fusion-belt',
  'fusion-shoe',
  'fusion-bracelet',
  'fusion-necklace',
  'fusion-ring',
  'fusion-sub-equipment',
  'fusion-magic-stone',
  'fusion-earring',
]

function FusionEquipments() {
  return <Page data={fusionEquipments} cacheName={cacheName} types={types} />
}

export default FusionEquipments

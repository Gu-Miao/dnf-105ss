import { useState, useMemo } from 'react'
import { fusionEquipments, Data } from '@/data/fusionEquipments'
import Table from '@/components/Table'
import Selector from '@/components/Selector'

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
  const [type, setType] = useState<Data['type']>(
    (localStorage.getItem(cacheName) as null | Data['type']) ?? types[0],
  )
  const filteredData = useMemo(() => fusionEquipments.filter(item => item.type === type), [type])

  return (
    <div>
      <p>
        <Selector
          cacheName={cacheName}
          types={types}
          value={type}
          onChange={type => setType(type)}
        />
      </p>
      <Table data={filteredData} />
    </div>
  )
}

export default FusionEquipments

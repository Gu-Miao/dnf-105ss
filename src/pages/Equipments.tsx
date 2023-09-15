import { useState, useMemo } from 'react'
import { equipments, Data } from '@/data/equipments'
import Table from '@/components/Table'
import Selector from '@/components/Selector'

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
  const [type, setType] = useState<Data['type']>(
    (localStorage.getItem(cacheName) as null | Data['type']) ?? types[0],
  )
  const filteredData = useMemo(() => equipments.filter(item => item.type === type), [type])

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

export default Equipments

import { useState, useMemo } from 'react'
import { options, Data } from '@/data/options'
import Table from '@/components/Table'
import Selector from '@/components/Selector'

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
  const [type, setType] = useState<Data['type']>(
    (localStorage.getItem(cacheName) as null | Data['type']) ?? types[0],
  )
  const filteredData = useMemo(() => options.filter(item => item.type === type), [type])

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

export default Options

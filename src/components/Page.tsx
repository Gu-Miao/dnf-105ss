import { useState, useMemo } from 'react'
import { Data } from '@/data/equipments'
import Selector from './Selector'
import Table from './Table'

export type PageProps = {
  cacheName: string
  data: Data[]
  types: Data['type'][]
}

function Page({ data, cacheName, types }: PageProps) {
  const [type, setType] = useState<Data['type']>(
    (localStorage.getItem(cacheName) as null | Data['type']) ?? types[0],
  )
  const filteredData = useMemo(() => data.filter(item => item.type === type), [type])

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

export default Page

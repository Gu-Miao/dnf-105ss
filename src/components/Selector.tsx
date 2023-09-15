import { useState, ChangeEvent } from 'react'
import { Data } from '@/data/common'

const map: Record<Data['type'], string> = {
  public: '公共',
  armor: '防具',
  jewelry: '首饰',
  'special-equipment': '特殊装备',
  top: '上衣',
  bottom: '下装',
  'header-shoulder': '头肩',
  belt: '腰带',
  shoe: '鞋',
  bracelet: '手镯',
  necklace: '项链',
  ring: '戒指',
  'sub-equipment': '辅助装备',
  'magic-stone': '魔法石',
  earring: '耳环',
  'fusion-top': '融合 - 上衣',
  'fusion-bottom': '融合 - 下装',
  'fusion-header-shoulder': '融合 - 头肩',
  'fusion-belt': '融合 - 腰带',
  'fusion-shoe': '融合 - 鞋',
  'fusion-bracelet': '融合 - 手镯',
  'fusion-necklace': '融合 - 项链',
  'fusion-ring': '融合 - 戒指',
  'fusion-sub-equipment': '融合 - 辅助装备',
  'fusion-magic-stone': '融合 - 魔法石',
  'fusion-earring': '融合 - 耳环',
}

export type SelectorProps = {
  types: Data['type'][]
  cacheName: string
  value: Data['type']
  onChange: (type: Data['type']) => any
}

function Selector({ types, cacheName, value, onChange }: SelectorProps) {
  const [current, setCurrent] = useState<Data['type']>(value)
  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const newType = e.target.value as Data['type']
    setCurrent(newType)
    localStorage.setItem(cacheName, newType)
    onChange(newType)
  }

  return (
    <div>
      <select value={current} onChange={handleChange}>
        {types.map(type => {
          return <option value={type}>{map[type]}</option>
        })}
      </select>
    </div>
  )
}

export default Selector

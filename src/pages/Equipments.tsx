import { useState, useMemo, ChangeEvent } from 'react'
import { equipments, Data } from '@/data/equipments'

function Equipments() {
  const [type, setType] = useState<Data['type']>(
    (localStorage.getItem('type') as null | Data['type']) ?? '上衣',
  )
  const filteredData = useMemo(() => equipments.filter(item => item.type === type), [type])
  function handleTypeChange(e: ChangeEvent<HTMLSelectElement>) {
    const newType = e.target.value as Data['type']
    setType(newType)
    localStorage.setItem('type', newType)
  }

  return (
    <div>
      <p>
        <select value={type} onChange={handleTypeChange}>
          <option value="上衣">上衣</option>
          <option value="下装">下装</option>
          <option value="头肩">头肩</option>
          <option value="腰带">腰带</option>
          <option value="鞋">鞋</option>
          <option value="手镯">手镯</option>
          <option value="项链">项链</option>
          <option value="戒指">戒指</option>
          <option value="辅助装备">辅助装备</option>
          <option value="魔法石">魔法石</option>
          <option value="耳环">耳环</option>
        </select>
      </p>
      <table>
        <thead>
          <tr>
            <th>图标</th>
            <th>名称</th>
            <th>技攻</th>
            <th>攻强</th>
            <th>属强</th>
            <th>异常转化增加</th>
            <th>异常伤害增加</th>
            <th>速度</th>
            <th>冷却时间恢复</th>
            <th>冷却时间减少</th>
            <th>备注</th>
            <th>提升率</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.name + item.prefix + item.other}>
              <td>
                <img className="icon" src={`/${item.name}.png`} alt={item.name} />
              </td>
              <td>
                {item.prefix ? `【${item.prefix}】` : ''}
                {item.name}
              </td>
              <td>{renderSkillAttack(item.skillAttacks)}</td>
              <td>{item.attackEnhancement || ''}</td>
              <td>{item.elementEnhancement}</td>
              <td>{renderPercent(item.abnormal?.increasedConversionRate)}</td>
              <td>{renderPercent(item.abnormal?.increasedAbnormalDamageEnhancement)}</td>
              <td>{renderSpeed(item.speed)}</td>
              <td>{renderPercent(item.coldDownRecover)}</td>
              <td>{renderPercent(item.coldDownReduce)}</td>
              <td>{item.other}</td>
              <td>{(((item.increaseRate as number) - 1) * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function renderPercent(num: number | undefined) {
  if (!num) return ''
  return num * 100 + '%'
}

function renderSkillAttack(skillAttacks: Data['skillAttacks']) {
  if (!skillAttacks || skillAttacks[0] === 0) return ''
  return skillAttacks.map(num => num + '%').join(', ')
}

function renderSpeed(speed: Data['speed']) {
  if (typeof speed === 'number') {
    return `${speed}% 三速`
  } else if (typeof speed === 'object') {
    const slices = []
    if (speed.attackSpeed) slices.push(`${speed.attackSpeed}% 攻速`)
    if (speed.castingSpeed) slices.push(`${speed.castingSpeed}% 施放`)
    if (speed.moveSpeed) slices.push(`${speed.moveSpeed}% 移速`)
    return slices.join('，')
  }

  return speed
}

export default Equipments

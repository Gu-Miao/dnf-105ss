import { useState, useMemo, ChangeEvent } from 'react'
import { fusionEquipments, Data } from '@/data/fusionEquipments'
import { renderSkillAttack, renderSpeed } from './utils'

function FusionEquipments() {
  const [type, setType] = useState<Data['type']>(
    (localStorage.getItem('fusionEquipments') as null | Data['type']) ?? 'fusion-top',
  )
  const filteredData = useMemo(() => fusionEquipments.filter(item => item.type === type), [type])
  function handleTypeChange(e: ChangeEvent<HTMLSelectElement>) {
    const newType = e.target.value as Data['type']
    setType(newType)
    localStorage.setItem('fusionEquipments', newType)
  }

  return (
    <div>
      <p>
        <select value={type} onChange={handleTypeChange}>
          <option value="fusion-top">融合 - 上衣</option>
          <option value="fusion-bottom">融合 - 下装</option>
          <option value="fusion-header-shoulder">融合 - 头肩</option>
          <option value="fusion-belt">融合 - 腰带</option>
          <option value="fusion-shoe">融合 - 鞋</option>
          <option value="fusion-bracelet">融合 - 手镯</option>
          <option value="fusion-necklace">融合 - 项链</option>
          <option value="fusion-ring">融合 - 戒指</option>
          <option value="fusion-sub-equipment">融合 - 辅助装备</option>
          <option value="fusion-magic-stone">融合 - 魔法石</option>
          <option value="fusion-earring">融合 - 耳环</option>
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
            <tr key={item.name + item.prefix + item.damageValue + item.other}>
              <td>
                <img className="icon" src={`/${item.name}.png`} alt={item.name} />
              </td>
              <td>
                {item.prefix ? `【${item.prefix}】` : ''}
                {item.name}
              </td>
              <td>{renderSkillAttack(item.skillAtk)}</td>
              <td>{item.damageValue}</td>
              <td>{item.elementalDamage}</td>
              <td>{item.abnormal?.convert && item.abnormal.convert + '%'}</td>
              <td>{item.abnormal?.abnormalDamage && item.abnormal.abnormalDamage + '%'}</td>
              <td>{renderSpeed(item.speed)}</td>
              <td>{item.cooldownRecovery && item.cooldownRecovery + '%'}</td>
              <td>{item.cooldownReduction && item.cooldownReduction + '%'}</td>
              <td>{item.other}</td>
              <td>{(((item.increaseRate as number) - 1) * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FusionEquipments

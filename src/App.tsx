import { useState, useMemo, ChangeEvent } from 'react'
import { ATTACK_ENHANCE_ARG, ELEMENT_ENHANCEMENT } from './constants'
import { data, Data } from './data'
import './App.less'

function App() {
  const [type, setType] = useState<Data['type']>(
    (localStorage.getItem('type') as null | Data['type']) ?? '上衣',
  )
  const filteredData = useMemo(() => data.filter(item => item.type === type), [type])
  function handleTypeChange(e: ChangeEvent<HTMLSelectElement>) {
    const newType = e.target.value as Data['type']
    setType(newType)
    localStorage.setItem('type', newType)
  }

  return (
    <div className="App">
      <p>
        数据来源：
        <a
          href="https://www.skycity.top:8016/dictionary?from=home"
          target="_blank"
          rel="noopener noreferrer"
        >
          无名空岛
        </a>
        ， 公式参考：
        <a
          href="https://bbs.colg.cn/thread-8672452-1-1.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          110版本伤害计算与装备对比，授人以渔。告诉你怎么算装备。
        </a>
      </p>
      <p>
        <strong>计算仅供参考</strong>
      </p>
      <p>
        装备为 2022/10/27 韩服史诗改版后，已更新大魔法师的次元回廊装备，所有装备攻强取 1
        级，攻强分母 {ATTACK_ENHANCE_ARG}，属强 {ELEMENT_ENHANCEMENT}
        ，只有一个领主怪物，异常默认单挂异常手镯，MP流蓝耗增加技攻只计算鞋子，基础精通只计算了小技能提升率
      </p>
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
          <option value="融合 - 上衣">融合 - 上衣</option>
          <option value="融合 - 下装">融合 - 下装</option>
          <option value="融合 - 头肩">融合 - 头肩</option>
          <option value="融合 - 腰带">融合 - 腰带</option>
          <option value="融合 - 鞋">融合 - 鞋</option>
          <option value="融合 - 手镯">融合 - 手镯</option>
          <option value="融合 - 项链">融合 - 项链</option>
          <option value="融合 - 戒指">融合 - 戒指</option>
          <option value="融合 - 辅助装备">融合 - 辅助装备</option>
          <option value="融合 - 魔法石">融合 - 魔法石</option>
          <option value="融合 - 耳环">融合 - 耳环</option>
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
            <th>CD</th>
            <th>备注</th>
            <th>提升率</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.name + item.prefix}>
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
              <td>{item.abnormal?.increasedConversionRate}</td>
              <td>{item.abnormal?.increasedAbnormalDamageEnhancement}</td>
              <td>{renderSpeed(item.speed)}</td>
              <td>{item.cd}</td>
              <td>{item.other}</td>
              <td>{((item.increaseRate as number) * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function renderSkillAttack(skillAttacks: Data['skillAttacks']) {
  if (skillAttacks[0] === 0) return ''
  return skillAttacks.join(', ')
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

export default App

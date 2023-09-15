import { Data } from '@/data/common'

export type TableProps = {
  data: Data[]
}

function Table({ data }: TableProps) {
  return (
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
        {data.map(item => {
          const key = item.name + item.prefix + item.damageValue + item.other
          const name = getIconName(item)
          console.log(name)

          return (
            <tr key={key}>
              <td>
                <img className="icon" src={`/${name}.png`} alt={name} />
              </td>
              <td>
                {item.prefix && `【${item.prefix}】`}
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
          )
        })}
      </tbody>
    </table>
  )
}

function getIconName(item: Data) {
  return ['public', 'armor', 'jewelry', 'special-equipment'].includes(item.type)
    ? 'logo'
    : item.from ?? item.name
}

function renderSkillAttack(skillAtk: Data['skillAtk']) {
  if (!skillAtk || skillAtk[0] === 0) return ''
  return skillAtk.map(num => num + '%').join(', ')
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

export default Table

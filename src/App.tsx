import { ATTACK_ENHANCE_ARG, ELEMENT_ENHANCEMENT } from './constants'
import { data } from './data'
import './App.less'

console.table(data)

function App() {
  return (
    <div className="App">
      <h1>DNF 105 SS</h1>
      <p>
        公式参考：
        <a
          href="https://bbs.colg.cn/tdread-8672452-1-1.html?PC_forum171_strategy"
          target="_blank"
          rel="noopener noreferrer"
        >
          110版本伤害计算与装备对比，授人以渔。告诉你怎么算装备。
        </a>
      </p>
      <p>
        攻强分母 {ATTACK_ENHANCE_ARG}，属强 {ELEMENT_ENHANCEMENT}
        ，只有一个领主怪物，异常默认单挂异常手镯，MP流蓝耗增加技攻只计算鞋子
      </p>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>类型</th>
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
          {data.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.skillAttacks.join(', ')}</td>
              <td>{item.attackEnhancement}</td>
              <td>{item.elementEnhancement}</td>
              <td>{item.abnormal?.increasedConversionRate}</td>
              <td>{item.abnormal?.increasedAbnormalDamageEnhancement}</td>
              <td>{item.speed}</td>
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

export default App

import {
  ATTACK_ENHANCE_ARG,
  ELEMENT_ENHANCEMENT,
  ATTACK_ENHANCE_PER,
  ATTACK_ENHANCE_MIX,
} from '@/constants'

function Header() {
  return (
    <header>
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
      <p>更新至国服弓箭手版本。</p>
      <p>
        所有装备攻强取 1 级，攻强分母 {ATTACK_ENHANCE_ARG}，百分比攻强{' '}
        {((ATTACK_ENHANCE_PER - 1) * 100).toFixed(0)}% ，贴膜计算模板攻强为 {ATTACK_ENHANCE_MIX}
        ，属强 {ELEMENT_ENHANCEMENT}，CD 提升率计算方式为 1 技攻 = 2 冷却减少 = 3 冷却恢复
        ，只有一个领主怪物，异常流默认单挂异常手镯，灼烧破冰率为
        75%，中毒伤害对毒王收益按中毒手镯加蓝灵上衣计算，MP 流蓝耗增加技攻只计算鞋子。
      </p>
    </header>
  )
}

export default Header

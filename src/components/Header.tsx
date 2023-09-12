import {
  DAMAGE_VALUE_BASE,
  ELEMENTAL_DAMAGE,
  DAMAGE_VALUE_PERCENTAGE,
  DAMAGE_VALUE_FUSION,
  BURN_BREAK_ICE_RATE,
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
        所有装备攻强取 1 级，攻强分母 {DAMAGE_VALUE_BASE}，百分比攻强 {DAMAGE_VALUE_PERCENTAGE}
        %，属强 {ELEMENTAL_DAMAGE}。计算贴膜时的模板攻强为 {DAMAGE_VALUE_FUSION}。CD
        提升率估算方式为 1% 技攻 = 2% 冷却减少 = 3%
        冷却恢复。只有一个领主怪物。异常流提升根据大众搭配计算，灼烧破冰率为 {BURN_BREAK_ICE_RATE}
        %，中毒对毒王提升会单独计算。MP 流蓝耗增加的技攻只计算鞋。单技能提升按 40
        秒占比计算，仅供参考，特化流派实战技能占比可能会更高，职业与占比均会写在备注中。
      </p>
    </header>
  )
}

export default Header

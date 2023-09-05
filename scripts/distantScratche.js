// 遥远的刻痕装备模拟
// 结论：触发刻印的平均概率为 8.7%，平均施放 16.5 个技能才会触发刻印

main()

/** 多次模拟，取平均值 */
function main() {
  const total = 1000000
  let rate = 0
  let times = 0

  for (let i = 0; i < total; i++) {
    const [r, t] = test()
    rate += r
    times += t
  }

  console.log(`触发刻印的平均概率为 ${((rate / total) * 100).toFixed(2)}%`)
  console.log(`平均施放 ${times / total} 个技能才会触发刻印`)
}

/**
 * 单次模拟，模拟施放多少次技能才会触发刻印
 * @returns {[number, number]} 触发刻印时的几率和技能施放次数
 */
function test() {
  let rate = 0.01
  let times = 1

  while (!run(rate)) {
    if (rate < 0.21) rate += 0.005
    times += 1
  }

  return [rate, times]
}

/**
 * 模拟装备是否发动
 * @param {number} rate 发动几率
 * @returns
 */
function run(rate) {
  return Math.random() <= rate
}

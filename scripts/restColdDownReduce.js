forestWitchSeries()
divSupport()

/**
 * 完美触发下魔女系列 CD 减少模拟
 */
function forestWitchSeries() {
  const skills = [
    // 攻速出血灵通肩恩特裤子双 40 特化碎灵屠戮 21% 占比
    { name: '混沌魔灵 Lv40 碎灵屠戮', cd: 47.3, cdr: 22.5 + 15 + 25 },
    // 空血静谧双音 CP 鹦鹉双 80 恩特上衣，双 80 恩特裤子灵通腰带武器 Lv80 减 CD，34% 占比
    { name: '鹦鹉 Lv80 剜心', cd: 34.7, cdr: 12 + 22.5 + 30 },
    // 空血静谧双音制式鹦鹉灵通鞋 Lv95 11% 占比
    { name: '鹦鹉 Lv95 影缚追魂锁', cd: 51.3, cdr: 30 + 20 },
  ]
  const cd = 10

  console.log('=== 森林之魔女系列 ===')

  for (let i = 0; i < skills.length; i++) {
    const skill = skills[i]
    test(skill.name, skill.cd, skill.cdr, cd)
  }
}

/**
 * 深潜左槽破招减 CD 模拟
 * 以 CP 女气功为例，念气波 4s，幻爆 10s，蛇波 12s
 * cdr 30%，小技能伤害占比 30%
 */
function divSupport() {
  const skills = [
    { name: '念气波', cd: 4 },
    { name: '幻影爆碎', cd: 10 },
    { name: '念兽螺旋波', cd: 12 },
  ]
  const cdr = 0.3
  const cd = 5

  let sum = 0

  console.log('=== 深潜左槽破招减 CD ===')

  for (let i = 0; i < skills.length; i++) {
    sum += test(skills[i].name, skills[i].cd, cdr, cd)[1]
  }

  const ave = sum / skills.length

  console.log(`小技能平均冷却减少：${(ave * 100).toFixed(2)}%`)
  console.log(`30% 伤害占比下收益：${((ave / 2) * 0.3 * 100).toFixed(2)}%`)
}

/**
 * 测试
 * @param {name} name 技能名
 * @param {number} total 技能总共 CD
 * @param {number} cdr 当前模板冷却时间恢复
 * @param {number} cd 触发装备特效的冷却
 * @returns {[number, number]} 平均减少的冷却时间，期望冷却时间减少
 */
function test(name, total, cdr, cd) {
  let reduced = 0

  // 第一次触发减 CD 时的剩余 CD
  for (let start = total; start > 0; start--) {
    let rest = start
    while (rest > 0) {
      const r = rest / 10
      reduced += r
      rest -= r + cd * (1 + cdr)
    }
  }

  // 根据所有的情况求平均值
  const ave = reduced / total
  const coldDownReduce = ave / total

  console.log(`=== ${name} ===`)
  console.log(`冷却时间 ${total} 秒，CDR ${cdr * 100}%，装备冷却 ${cd}秒`)
  console.log(`平均减少的冷却时间为：${ave.toFixed(2)} 秒`)
  console.log(`平均冷却减少：${(coldDownReduce * 100).toFixed(2)}%\n`)

  return [ave, coldDownReduce]
}

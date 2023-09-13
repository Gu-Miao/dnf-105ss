import { Data } from '@/data/common'

export function renderSkillAttack(skillAtk: Data['skillAtk']) {
  if (!skillAtk || skillAtk[0] === 0) return ''
  return skillAtk.map(num => num + '%').join(', ')
}

export function renderSpeed(speed: Data['speed']) {
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

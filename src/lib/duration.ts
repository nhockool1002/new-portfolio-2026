function parseMonthYear(value: string): { month: number; year: number } {
  const [month, year] = value.trim().split('/').map(Number)
  return { month, year }
}

export function formatDuration(period: string): string {
  const [startRaw, endRaw] = period.split('—').map((s) => s.trim())
  const start = parseMonthYear(startRaw)
  const now = new Date()
  const end =
    endRaw === 'Present' ? { month: now.getMonth() + 1, year: now.getFullYear() } : parseMonthYear(endRaw)

  const totalMonths = Math.max((end.year - start.year) * 12 + (end.month - start.month), 1)
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const parts: string[] = []
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`)
  if (months > 0 || years === 0) parts.push(`${months} mo${months !== 1 ? 's' : ''}`)
  return parts.join(' ')
}

export interface MonthPoint {
  month: number
  year: number
}

export function parsePeriod(period: string): { start: MonthPoint; end: MonthPoint; isPresent: boolean } {
  const [startRaw, endRaw] = period.split('—').map((s) => s.trim())
  const start = parseMonthYear(startRaw)
  const isPresent = endRaw === 'Present'
  const now = new Date()
  const end = isPresent ? { month: now.getMonth() + 1, year: now.getFullYear() } : parseMonthYear(endRaw)
  return { start, end, isPresent }
}

export function monthIndex(point: MonthPoint): number {
  return point.year * 12 + (point.month - 1)
}

function parseMonthYear(value: string): MonthPoint {
  const [month, year] = value.trim().split('/').map(Number)
  return { month, year }
}

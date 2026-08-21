import { translations } from '../i18n/translations'
import type { Lang } from '../i18n/types'

function parseMonthYear(value: string): { month: number; year: number } {
  const [month, year] = value.trim().split('/').map(Number)
  return { month, year }
}

export function formatDuration(period: string, lang: Lang = 'en'): string {
  const [startRaw, endRaw] = period.split('—').map((s) => s.trim())
  const start = parseMonthYear(startRaw)
  const now = new Date()
  const end =
    endRaw === 'Present' ? { month: now.getMonth() + 1, year: now.getFullYear() } : parseMonthYear(endRaw)

  const totalMonths = Math.max((end.year - start.year) * 12 + (end.month - start.month), 1)
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const { year: yearWord, month: monthWord } = translations[lang].duration

  const parts: string[] = []
  if (years > 0) parts.push(`${years} ${yearWord(years)}`)
  if (months > 0 || years === 0) parts.push(`${months} ${monthWord(months)}`)
  return parts.join(' ')
}

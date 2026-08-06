import type { Accent } from '../data/experience'

export const accentStyles: Record<
  Accent,
  { dot: string; text: string; border: string; badgeBg: string; badgeText: string; glow: string }
> = {
  coral: {
    dot: 'bg-orange-400',
    text: 'text-orange-300',
    border: 'border-orange-400/40',
    badgeBg: 'bg-orange-400/10',
    badgeText: 'text-orange-200',
    glow: 'shadow-[0_0_0_1px_rgba(251,146,60,0.25)]',
  },
  cyan: {
    dot: 'bg-cyan-400',
    text: 'text-cyan-300',
    border: 'border-cyan-400/40',
    badgeBg: 'bg-cyan-400/10',
    badgeText: 'text-cyan-200',
    glow: 'shadow-[0_0_0_1px_rgba(34,211,238,0.25)]',
  },
  violet: {
    dot: 'bg-violet-400',
    text: 'text-violet-300',
    border: 'border-violet-400/40',
    badgeBg: 'bg-violet-400/10',
    badgeText: 'text-violet-200',
    glow: 'shadow-[0_0_0_1px_rgba(167,139,250,0.25)]',
  },
  amber: {
    dot: 'bg-amber-400',
    text: 'text-amber-300',
    border: 'border-amber-400/40',
    badgeBg: 'bg-amber-400/10',
    badgeText: 'text-amber-200',
    glow: 'shadow-[0_0_0_1px_rgba(251,191,36,0.25)]',
  },
  mint: {
    dot: 'bg-emerald-400',
    text: 'text-emerald-300',
    border: 'border-emerald-400/40',
    badgeBg: 'bg-emerald-400/10',
    badgeText: 'text-emerald-200',
    glow: 'shadow-[0_0_0_1px_rgba(52,211,153,0.25)]',
  },
  sky: {
    dot: 'bg-sky-400',
    text: 'text-sky-300',
    border: 'border-sky-400/40',
    badgeBg: 'bg-sky-400/10',
    badgeText: 'text-sky-200',
    glow: 'shadow-[0_0_0_1px_rgba(56,189,248,0.25)]',
  },
  pink: {
    dot: 'bg-pink-400',
    text: 'text-pink-300',
    border: 'border-pink-400/40',
    badgeBg: 'bg-pink-400/10',
    badgeText: 'text-pink-200',
    glow: 'shadow-[0_0_0_1px_rgba(244,114,182,0.25)]',
  },
}

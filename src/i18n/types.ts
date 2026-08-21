export type Lang = 'vi' | 'en' | 'lo' | 'ja'

export type Localized = Record<Lang, string>
export type LocalizedList = Record<Lang, string[]>

export function pick(lang: Lang, value: Localized): string {
  return value[lang] ?? value.en
}

export function pickList(lang: Lang, value: LocalizedList): string[] {
  return value[lang] ?? value.en
}

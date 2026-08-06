export interface SideProject {
  name: string
  description: string
  stack: string[]
  href?: string
}

export const sideProjects: SideProject[] = [
  {
    name: 'khomanguon.org',
    description:
      'Community site sharing game/web/app source code and server setup guides (1-click VM builds, GM tools) for the Vietnamese dev community.',
    stack: ['Community', 'Server Tooling'],
    href: 'https://khomanguon.org',
  },
  {
    name: 'Self JP App',
    description:
      'Cross-platform Japanese self-study app (kana, N5–N1 kanji, Minna no Nihongo vocab/grammar, listening drills) with a Vietnamese-language UI.',
    stack: ['Tauri', 'React', 'TypeScript', 'iOS', 'Android'],
  },
  {
    name: 'Cost Of Trips (Chi Phí Chuyến Đi)',
    description:
      'Native Android app for tracking trip expenses by category with local export — no account, ads, or network access required.',
    stack: ['Kotlin', 'Jetpack Compose'],
  },
  {
    name: 'CozyPomo — Focus App',
    description:
      'Gamified Pomodoro timer on Google Play: focus sessions hatch and grow collectible creatures in a personal "forest," with account sync and an admin console for content management.',
    stack: ['Kotlin', 'Jetpack Compose', 'NestJS', 'PostgreSQL'],
  },
  {
    name: 'AWS Kinesis Video Stream for React',
    description: 'Open-source SDK wrapper for the AWS Kinesis Video Stream JS SDK.',
    stack: ['React', 'TypeScript', 'AWS Kinesis'],
  },
]

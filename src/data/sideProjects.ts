import type { Localized } from '../i18n/types'

export interface SideProject {
  name: string
  description: Localized
  stack: string[]
  href?: string
}

export const sideProjects: SideProject[] = [
  {
    name: 'khomanguon.org',
    description: {
      en: 'Community site sharing game/web/app source code and server setup guides (1-click VM builds, GM tools) for the Vietnamese dev community.',
      vi: 'Trang cộng đồng chia sẻ mã nguồn game/web/app và hướng dẫn cài đặt server (dựng VM 1-click, công cụ GM) cho cộng đồng lập trình viên Việt Nam.',
      lo: 'ເວັບໄຊທ໌ຊຸມຊົນທີ່ແບ່ງປັນ source code game/web/app ແລະ ຄູ່ມືຕັ້ງຄ່າ server (ສ້າງ VM ແບບ 1-click, ເຄື່ອງມື GM) ສຳລັບຊຸມຊົນນັກພັດທະນາຊາວຫວຽດນາມ.',
      ja: 'ゲーム/Web/アプリのソースコードとサーバー構築ガイド(1クリックVM構築、GMツール)をベトナムの開発者コミュニティに向けて共有するサイト。',
    },
    stack: ['Community', 'Server Tooling'],
    href: 'https://khomanguon.org',
  },
  {
    name: 'Self JP App',
    description: {
      en: 'Cross-platform Japanese self-study app (kana, N5–N1 kanji, Minna no Nihongo vocab/grammar, listening drills) with a Vietnamese-language UI.',
      vi: 'Ứng dụng tự học tiếng Nhật đa nền tảng (kana, kanji N5–N1, từ vựng/ngữ pháp Minna no Nihongo, luyện nghe) với giao diện tiếng Việt.',
      lo: 'ແອັບຮຽນພາສາຍີ່ປຸ່ນດ້ວຍຕົນເອງແບບຂ້າມແພລດຟອມ (kana, kanji N5–N1, ຄຳສັບ/ໄວຍາກອນ Minna no Nihongo, ຝຶກຟັງ) ດ້ວຍ UI ພາສາຫວຽດນາມ.',
      ja: '多言語対応のクロスプラットフォーム日本語自習アプリ(かな、N5〜N1漢字、みんなの日本語の語彙・文法、リスニング練習)で、UIはベトナム語対応。',
    },
    stack: ['Tauri', 'React', 'TypeScript', 'iOS', 'Android'],
  },
  {
    name: 'Cost Of Trips (Chi Phí Chuyến Đi)',
    description: {
      en: 'Native Android app for tracking trip expenses by category with local export — no account, ads, or network access required.',
      vi: 'Ứng dụng Android gốc theo dõi chi phí chuyến đi theo danh mục, xuất dữ liệu cục bộ — không cần tài khoản, quảng cáo hay kết nối mạng.',
      lo: 'ແອັບ Android ຕົ້ນສະບັບສຳລັບຕິດຕາມຄ່າໃຊ້ຈ່າຍໃນການເດີນທາງຕາມໝວດໝູ່ ພ້ອມສົ່ງອອກຂໍ້ມູນທ້ອງຖິ່ນ — ບໍ່ຕ້ອງມີບັນຊີ, ໂຄສະນາ, ຫຼືການເຊື່ອມຕໍ່ອິນເຕີເນັດ.',
      ja: 'カテゴリ別に旅行の費用を記録するネイティブAndroidアプリ。ローカルエクスポート対応 — アカウント、広告、ネットワークアクセス不要。',
    },
    stack: ['Kotlin', 'Jetpack Compose'],
  },
  {
    name: 'CozyPomo — Focus App',
    description: {
      en: 'Gamified Pomodoro timer on Google Play: focus sessions hatch and grow collectible creatures in a personal "forest," with account sync and an admin console for content management.',
      vi: 'Ứng dụng Pomodoro dạng game trên Google Play: các phiên tập trung giúp ấp nở và nuôi lớn các sinh vật sưu tầm trong "khu rừng" cá nhân, có đồng bộ tài khoản và trang quản trị nội dung.',
      lo: 'ແອັບ Pomodoro ແບບເກມເທິງ Google Play: ໄລຍະເວລາໂຟກັດຊ່ວຍຟັກ ແລະ ລ້ຽງໂຕລະຄອນສະສົມໃນ "ປ່າ" ສ່ວນຕົວ, ພ້ອມການຊິ້ງບັນຊີ ແລະ ໜ້າຄວບຄຸມສຳລັບຈັດການເນື້ອຫາ.',
      ja: 'Google Play向けゲーム化ポモドーロタイマー。集中セッションで個人の「森」に集められるクリーチャーが孵化・成長。アカウント同期とコンテンツ管理用の管理コンソールを搭載。',
    },
    stack: ['Kotlin', 'Jetpack Compose', 'NestJS', 'PostgreSQL'],
  },
  {
    name: 'AWS Kinesis Video Stream for React',
    description: {
      en: 'Open-source SDK wrapper for the AWS Kinesis Video Stream JS SDK.',
      vi: 'Thư viện SDK mã nguồn mở bọc quanh AWS Kinesis Video Stream JS SDK.',
      lo: 'SDK wrapper ແບບ open-source ສຳລັບ AWS Kinesis Video Stream JS SDK.',
      ja: 'AWS Kinesis Video Stream JS SDKのオープンソースSDKラッパー。',
    },
    stack: ['React', 'TypeScript', 'AWS Kinesis'],
  },
]

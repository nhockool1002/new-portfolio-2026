import type { Localized, LocalizedList } from '../i18n/types'

export type Accent = 'coral' | 'cyan' | 'violet' | 'amber' | 'mint' | 'sky' | 'pink'

export interface Project {
  name: string
  period: string
  role: Localized
  team?: Localized
  note?: string
  description: Localized
  highlights?: LocalizedList
  stack: string[]
}

export interface Company {
  name: string
  period: string
  role: Localized
  summary: Localized
  accent: Accent
  current?: boolean
  projects: Project[]
  additionalProjects?: Project[]
}

export const companies: Company[] = [
  {
    name: 'Sacombank',
    period: '07/2024 — Present',
    role: {
      en: 'System Integration Specialist',
      vi: 'Chuyên viên Tích hợp Hệ thống',
      lo: 'ຜູ້ຊ່ຽວຊານດ້ານການເຊື່ອມໂຍງລະບົບ',
      ja: 'システム統合スペシャリスト',
    },
    summary: {
      en: 'Own core banking integration and card-issuing systems, partnering with card organizations, external vendors and the State Bank on regulatory-driven changes.',
      vi: 'Phụ trách tích hợp core banking và hệ thống phát hành thẻ, phối hợp với các tổ chức thẻ, đối tác bên ngoài và Ngân hàng Nhà nước cho các thay đổi theo yêu cầu quy định.',
      lo: 'ຮັບຜິດຊອບການເຊື່ອມໂຍງ core banking ແລະ ລະບົບອອກບັດ, ຮ່ວມມືກັບອົງກອນບັດ, ຄູ່ຮ່ວມງານພາຍນອກ ແລະ ທະນາຄານແຫ່ງລັດ ສຳລັບການປ່ຽນແປງຕາມກົດລະບຽບ.',
      ja: 'コアバンキング統合とカード発行システムを担当し、カード会社、外部ベンダー、国家銀行と連携して規制対応の変更を推進。',
    },
    accent: 'sky',
    current: true,
    projects: [
      {
        name: 'Omnicard / Card Issuing Platform',
        period: '07/2024 — Present',
        role: {
          en: 'System Integration Specialist',
          vi: 'Chuyên viên Tích hợp Hệ thống',
          lo: 'ຜູ້ຊ່ຽວຊານດ້ານການເຊື່ອມໂຍງລະບົບ',
          ja: 'システム統合スペシャリスト',
        },
        note: 'Omnicard / Omnicard v7 / OmniWS / Issuing Card (Java Spring Boot), CPV/CNS, Portal Card / E-Portal Card (.NET), Epay Services',
        description: { en: '', vi: '', lo: '', ja: '' },
        highlights: {
          en: [
            'Analyze and deliver changes to the Omnicard core system driven by business, card-organization, or State Bank requirements, coordinating directly with partner units to keep releases compliant and on schedule.',
            'Contributed to the Omnicard v7 core upgrade, developing OmniWebservices input APIs under the API 360 initiative to strengthen integration consistency across downstream services.',
            'Own end-to-end implementation of the CPV/CNS (card personalization verification) process, coordinating with external partners MKGroup and FIME to streamline card-issuance turnaround.',
            'Design and build report-export and job-scheduler systems on the Portal Card platform, serving business, corporate and individual banking users.',
            'Lead migration of services from C# to Java as part of a monolith-to-microservices transition; implement real-time data synchronization between T24 and Omnicard.',
          ],
          vi: [
            'Phân tích và triển khai các thay đổi cho hệ thống lõi Omnicard theo yêu cầu nghiệp vụ, tổ chức thẻ hoặc Ngân hàng Nhà nước, phối hợp trực tiếp với các đơn vị đối tác để đảm bảo các bản phát hành tuân thủ quy định và đúng tiến độ.',
            'Tham gia nâng cấp lõi Omnicard v7, phát triển các API đầu vào OmniWebservices trong sáng kiến API 360 nhằm tăng tính nhất quán khi tích hợp với các hệ thống downstream.',
            'Phụ trách triển khai toàn trình quy trình CPV/CNS (xác minh cá nhân hóa thẻ), phối hợp với các đối tác bên ngoài MKGroup và FIME để rút ngắn thời gian phát hành thẻ.',
            'Thiết kế và xây dựng hệ thống xuất báo cáo và lập lịch tác vụ trên nền tảng Portal Card, phục vụ khách hàng doanh nghiệp và cá nhân.',
            'Dẫn dắt việc chuyển đổi các service từ C# sang Java trong quá trình chuyển từ monolith sang microservices; triển khai đồng bộ dữ liệu thời gian thực giữa T24 và Omnicard.',
          ],
          lo: [
            'ວິເຄາະ ແລະ ຈັດສົ່ງການປ່ຽນແປງໃຫ້ລະບົບຫຼັກ Omnicard ຕາມຄວາມຕ້ອງການທຸລະກິດ, ອົງກອນບັດ, ຫຼືທະນາຄານແຫ່ງລັດ, ປະສານງານໂດຍກົງກັບໜ່ວຍງານຄູ່ຮ່ວມເພື່ອຮັກສາການອອກລຸ້ນໃຫ້ຖືກຕ້ອງຕາມກົດລະບຽບ ແລະ ທັນເວລາ.',
            'ມີສ່ວນຮ່ວມໃນການອັບເກຣດຫຼັກ Omnicard v7, ພັດທະນາ API ນຳເຂົ້າ OmniWebservices ພາຍໃຕ້ໂຄງການ API 360 ເພື່ອເສີມສ້າງຄວາມສອດຄ່ອງໃນການເຊື່ອມໂຍງກັບລະບົບປາຍທາງ.',
            'ຮັບຜິດຊອບການປະຕິບັດແບບຄົບວົງຈອນຂອງຂະບວນການ CPV/CNS (ການກວດສອບການປັບແຕ່ງບັດສ່ວນບຸກຄົນ), ປະສານງານກັບຄູ່ຮ່ວມພາຍນອກ MKGroup ແລະ FIME ເພື່ອຫຍໍ້ໄລຍະເວລາການອອກບັດ.',
            'ອອກແບບ ແລະ ພັດທະນາລະບົບສົ່ງອອກລາຍງານ ແລະ ຕົວກຳນົດເວລາວຽກ (job scheduler) ເທິງແພລດຟອມ Portal Card, ຮັບໃຊ້ຜູ້ໃຊ້ທະນາຄານທັງອົງກອນ ແລະ ບຸກຄົນ.',
            'ນຳພາການຍົກຍ້າຍ services ຈາກ C# ໄປ Java ເປັນສ່ວນໜຶ່ງຂອງການປ່ຽນຈາກ monolith ໄປສູ່ microservices; ພັດທະນາການຊິ້ງຂໍ້ມູນແບບ real-time ລະຫວ່າງ T24 ແລະ Omnicard.',
          ],
          ja: [
            'ビジネス要件、カード会社、または国家銀行の要求に基づきOmnicardコアシステムの変更を分析・実装し、パートナー部門と直接調整してリリースのコンプライアンス遵守とスケジュール厳守を実現。',
            'Omnicard v7のコアアップグレードに貢献し、API 360イニシアチブのもとOmniWebservicesの入力APIを開発してダウンストリームサービス間の統合一貫性を強化。',
            'CPV/CNS(カードパーソナライゼーション検証)プロセスをエンドツーエンドで担当し、外部パートナーのMKGroupおよびFIMEと連携してカード発行のリードタイムを短縮。',
            'Portal Cardプラットフォーム上でレポート出力とジョブスケジューラシステムを設計・構築し、法人・個人の銀行利用者にサービスを提供。',
            'モノリスからマイクロサービスへの移行の一環としてC#からJavaへのサービス移行を主導し、T24とOmnicard間のリアルタイムデータ同期を実装。',
          ],
        },
        stack: ['Java', 'Spring Boot', 'C#', '.NET', 'T24 Core Banking', 'Omnicard', 'CPV/CNS', 'REST API'],
      },
    ],
  },
  {
    name: 'Salto Vietnam',
    period: '05/2020 — 07/2024',
    role: {
      en: 'Team Lead / DevOps',
      vi: 'Trưởng nhóm / DevOps',
      lo: 'ຫົວໜ້າທີມ / DevOps',
      ja: 'チームリード / DevOps',
    },
    summary: {
      en: 'Led full-stack teams of 3–15 across international client projects, owning CI/CD, requirement analysis and delivery end-to-end.',
      vi: 'Dẫn dắt các nhóm full-stack từ 3–15 người trong các dự án khách hàng quốc tế, phụ trách CI/CD, phân tích yêu cầu và triển khai toàn trình.',
      lo: 'ນຳພາທີມ full-stack ຂະໜາດ 3–15 ຄົນ ໃນໂຄງການລູກຄ້າສາກົນ, ຮັບຜິດຊອບ CI/CD, ການວິເຄາະຄວາມຕ້ອງການ ແລະ ການສົ່ງມອບແບບຄົບວົງຈອນ.',
      ja: '国際クライアント案件で3〜15名のフルスタックチームを率い、CI/CD、要件分析、エンドツーエンドの納品を担当。',
    },
    accent: 'violet',
    projects: [
      {
        name: 'Leap-it',
        period: '11/2023 — 07/2024',
        role: {
          en: 'Team Lead / DevOps',
          vi: 'Trưởng nhóm / DevOps',
          lo: 'ຫົວໜ້າທີມ / DevOps',
          ja: 'チームリード / DevOps',
        },
        team: { en: 'Team of 5', vi: 'Nhóm 5 người', lo: 'ທີມ 5 ຄົນ', ja: '5名のチーム' },
        description: {
          en: 'Restaurant & HR management web application; owned CI/CD and full environment setup.',
          vi: 'Ứng dụng web quản lý nhà hàng & nhân sự; phụ trách CI/CD và thiết lập toàn bộ môi trường.',
          lo: 'ແອັບພລິເຄຊັນເວັບຄຸ້ມຄອງຮ້ານອາຫານ ແລະ ຊັບພະຍາກອນມະນຸດ; ຮັບຜິດຊອບ CI/CD ແລະ ການຕັ້ງຄ່າສະພາບແວດລ້ອມທັງໝົດ.',
          ja: 'レストラン・人事管理Webアプリケーション。CI/CDと環境構築全般を担当。',
        },
        stack: ['React', 'Next.js', 'AWS', 'Laravel', 'Django', 'PostgreSQL'],
      },
      {
        name: 'Justfine',
        period: '11/2022 — 11/2023',
        role: {
          en: 'Frontend Team Lead / DevOps',
          vi: 'Trưởng nhóm Frontend / DevOps',
          lo: 'ຫົວໜ້າທີມ Frontend / DevOps',
          ja: 'フロントエンドチームリード / DevOps',
        },
        team: { en: 'Team of 6', vi: 'Nhóm 6 người', lo: 'ທີມ 6 ຄົນ', ja: '6名のチーム' },
        description: {
          en: 'Job-matching platform syncing data from partner systems; owned design docs, QA and the CI/CD pipeline.',
          vi: 'Nền tảng kết nối việc làm đồng bộ dữ liệu từ hệ thống đối tác; phụ trách tài liệu thiết kế, QA và pipeline CI/CD.',
          lo: 'ແພລດຟອມຈັບຄູ່ວຽກທີ່ຊິ້ງຂໍ້ມູນຈາກລະບົບຄູ່ຮ່ວມ; ຮັບຜິດຊອບເອກະສານອອກແບບ, QA ແລະ pipeline CI/CD.',
          ja: 'パートナーシステムからデータを同期する求人マッチングプラットフォーム。設計ドキュメント、QA、CI/CDパイプラインを担当。',
        },
        stack: ['AWS', 'React', 'Redux', 'Laravel', 'Docker'],
      },
      {
        name: 'Flagman',
        period: '03/2022 — 11/2022',
        role: { en: 'Team Lead', vi: 'Trưởng nhóm', lo: 'ຫົວໜ້າທີມ', ja: 'チームリード' },
        team: {
          en: 'Cross-border team of 15 (VN/PH/JP)',
          vi: 'Nhóm xuyên biên giới 15 người (VN/PH/JP)',
          lo: 'ທີມຂ້າມຊາຍແດນ 15 ຄົນ (VN/PH/JP)',
          ja: '国境を越えたチーム15名(ベトナム/フィリピン/日本)',
        },
        description: {
          en: 'Built a draw.io-style diagramming tool with a distributed, cross-border team.',
          vi: 'Xây dựng công cụ vẽ sơ đồ kiểu draw.io cùng nhóm phân tán, xuyên biên giới.',
          lo: 'ພັດທະນາເຄື່ອງມືແຕ້ມແຜນຜັງແບບ draw.io ຮ່ວມກັບທີມທີ່ກະຈາຍຢູ່ຫຼາຍປະເທດ.',
          ja: '分散した国際チームでdraw.io風の作図ツールを構築。',
        },
        stack: ['React', 'Redux', 'Jest', 'Laravel', 'Socket.IO'],
      },
      {
        name: 'GS-System',
        period: '03/2022 — 10/2022',
        role: {
          en: 'Full Stack Developer',
          vi: 'Lập trình viên Full Stack',
          lo: 'ນັກພັດທະນາ Full Stack',
          ja: 'フルスタック開発者',
        },
        team: { en: 'Team of 10', vi: 'Nhóm 10 người', lo: 'ທີມ 10 ຄົນ', ja: '10名のチーム' },
        description: {
          en: 'Map-based data platform spanning Web, iOS and React Native; set up the Docker base, built key modules and led cross-code reviews.',
          vi: 'Nền tảng dữ liệu dựa trên bản đồ trải rộng trên Web, iOS và React Native; thiết lập nền tảng Docker, xây dựng các module chính và dẫn dắt cross-code review.',
          lo: 'ແພລດຟອມຂໍ້ມູນອີງໃສ່ແຜນທີ່ ຄອບຄຸມ Web, iOS ແລະ React Native; ຕັ້ງຄ່າພື້ນຖານ Docker, ພັດທະນາໂມດູນຫຼັກ ແລະ ນຳພາການກວດທານໂຄ້ດຂ້າມທີມ.',
          ja: 'Web、iOS、React Nativeにまたがる地図ベースのデータプラットフォーム。Docker基盤の構築、主要モジュールの開発、クロスコードレビューを主導。',
        },
        stack: ['React Native', 'Flux', 'TypeScript', 'Laravel', 'React', 'Docker'],
      },
    ],
    additionalProjects: [
      {
        name: 'SelfPro',
        period: '08/2022 — 05/2023',
        role: {
          en: 'Team Leader / Full Stack Developer',
          vi: 'Trưởng nhóm / Lập trình viên Full Stack',
          lo: 'ຫົວໜ້າທີມ / ນັກພັດທະນາ Full Stack',
          ja: 'チームリーダー / フルスタック開発者',
        },
        description: {
          en: 'Member ranking / evaluation system.',
          vi: 'Hệ thống xếp hạng / đánh giá thành viên.',
          lo: 'ລະບົບຈັດອັນດັບ / ປະເມີນສະມາຊິກ.',
          ja: 'メンバーランキング・評価システム。',
        },
        stack: ['Python', 'Django', 'Laravel', 'Next.js', 'React'],
      },
      {
        name: 'Yuushi Seiko',
        period: '11/2021 — 02/2022',
        role: {
          en: 'Team Leader / Business Analyst',
          vi: 'Trưởng nhóm / Chuyên viên Phân tích Nghiệp vụ',
          lo: 'ຫົວໜ້າທີມ / ນັກວິເຄາະທຸລະກິດ',
          ja: 'チームリーダー / ビジネスアナリスト',
        },
        description: {
          en: 'Money-lending application.',
          vi: 'Ứng dụng cho vay tiền.',
          lo: 'ແອັບພລິເຄຊັນໃຫ້ກູ້ຢືມເງິນ.',
          ja: '融資アプリケーション。',
        },
        stack: ['Laravel', 'PHPUnit', 'JavaScript', 'jQuery', 'Docker'],
      },
      {
        name: 'Everbank Integration',
        period: '09/2021 — 11/2021',
        role: {
          en: 'Full Stack Developer / Business Analyst',
          vi: 'Lập trình viên Full Stack / Chuyên viên Phân tích Nghiệp vụ',
          lo: 'ນັກພັດທະນາ Full Stack / ນັກວິເຄາະທຸລະກິດ',
          ja: 'フルスタック開発者 / ビジネスアナリスト',
        },
        description: {
          en: 'Synced purchase/sale data between Salesforce, Kintone and cloud storage.',
          vi: 'Đồng bộ dữ liệu mua/bán giữa Salesforce, Kintone và lưu trữ đám mây.',
          lo: 'ຊິ້ງຂໍ້ມູນຊື້/ຂາຍລະຫວ່າງ Salesforce, Kintone ແລະ ບ່ອນເກັບຂໍ້ມູນຄລາວ.',
          ja: 'Salesforce、Kintone、クラウドストレージ間で購買・販売データを同期。',
        },
        stack: ['Salesforce', 'Kintone', 'React', 'Redux', 'Python', 'Docker', 'Atomic Design'],
      },
      {
        name: 'CallForce AutoBot',
        period: '09/2021',
        role: {
          en: 'Team Leader / Full Stack Developer',
          vi: 'Trưởng nhóm / Lập trình viên Full Stack',
          lo: 'ຫົວໜ້າທີມ / ນັກພັດທະນາ Full Stack',
          ja: 'チームリーダー / フルスタック開発者',
        },
        description: {
          en: 'Automation tool bypassing CAPTCHA for predefined workflows.',
          vi: 'Công cụ tự động hóa vượt qua CAPTCHA cho các quy trình định sẵn.',
          lo: 'ເຄື່ອງມືອັດຕະໂນມັດຂ້າມ CAPTCHA ສຳລັບຂະບວນການທີ່ກຳນົດໄວ້ລ່ວງໜ້າ.',
          ja: '定型ワークフロー向けにCAPTCHAを回避する自動化ツール。',
        },
        stack: ['Python', 'Tkinter', 'OpenCV', 'Pytesseract', 'Selenium', 'React', 'Redux'],
      },
      {
        name: 'iOS Taiyou',
        period: '06/2021 — 09/2021',
        role: { en: 'iOS Developer', vi: 'Lập trình viên iOS', lo: 'ນັກພັດທະນາ iOS', ja: 'iOS開発者' },
        description: {
          en: 'App for uploading construction-site photos/videos to the cloud.',
          vi: 'Ứng dụng tải ảnh/video công trường lên đám mây.',
          lo: 'ແອັບອັບໂຫຼດຮູບ/ວິດີໂອສະຖານທີ່ກໍ່ສ້າງຂຶ້ນຄລາວ.',
          ja: '建設現場の写真・動画をクラウドにアップロードするアプリ。',
        },
        stack: ['Objective-C', 'Xcode'],
      },
      {
        name: 'Smart Shukatsu',
        period: '05/2020 — 08/2020',
        role: {
          en: 'Full Stack Developer / Business Analyst',
          vi: 'Lập trình viên Full Stack / Chuyên viên Phân tích Nghiệp vụ',
          lo: 'ນັກພັດທະນາ Full Stack / ນັກວິເຄາະທຸລະກິດ',
          ja: 'フルスタック開発者 / ビジネスアナリスト',
        },
        description: {
          en: 'Recruitment platform matching employers and graduating students.',
          vi: 'Nền tảng tuyển dụng kết nối nhà tuyển dụng và sinh viên sắp tốt nghiệp.',
          lo: 'ແພລດຟອມສະໝັກງານທີ່ຈັບຄູ່ນາຍຈ້າງ ແລະ ນັກສຶກສາທີ່ກຳລັງຈະຮຽນຈົບ.',
          ja: '企業と卒業予定の学生をマッチングする採用プラットフォーム。',
        },
        stack: ['Laravel', 'PHPUnit', 'AMP', 'JavaScript', 'jQuery', 'React', 'Docker'],
      },
      {
        name: 'Bebit',
        period: '05/2020 — 08/2020',
        role: {
          en: 'Full Stack Developer / Business Analyst',
          vi: 'Lập trình viên Full Stack / Chuyên viên Phân tích Nghiệp vụ',
          lo: 'ນັກພັດທະນາ Full Stack / ນັກວິເຄາະທຸລະກິດ',
          ja: 'フルスタック開発者 / ビジネスアナリスト',
        },
        description: {
          en: 'Vue.js module development with unit testing for a warehouse management app.',
          vi: 'Phát triển module Vue.js kèm unit test cho ứng dụng quản lý kho.',
          lo: 'ພັດທະນາໂມດູນ Vue.js ພ້ອມ unit testing ສຳລັບແອັບຄຸ້ມຄອງສາງສິນຄ້າ.',
          ja: '倉庫管理アプリ向けにユニットテストを伴うVue.jsモジュールを開発。',
        },
        stack: ['Vue.js', 'Node.js', 'Docker'],
      },
    ],
  },
  {
    name: 'Pascalia Asia Vietnam',
    period: '08/2020 — 06/2021',
    role: {
      en: 'Full Stack Developer / Business Analyst (Onsite)',
      vi: 'Lập trình viên Full Stack / Chuyên viên Phân tích Nghiệp vụ (Onsite)',
      lo: 'ນັກພັດທະນາ Full Stack / ນັກວິເຄາະທຸລະກິດ (Onsite)',
      ja: 'フルスタック開発者 / ビジネスアナリスト(常駐)',
    },
    summary: {
      en: 'Onsite engagement building Phantom-3D, a virtual seller chat platform with live video-streaming integration for real-time customer shopping interactions.',
      vi: 'Làm việc onsite xây dựng Phantom-3D, nền tảng chat bán hàng ảo tích hợp livestream video cho tương tác mua sắm thời gian thực với khách hàng.',
      lo: 'ເຮັດວຽກ onsite ພັດທະນາ Phantom-3D, ແພລດຟອມແຊັດຜູ້ຂາຍສະເໝືອນທີ່ເຊື່ອມໂຍງການຖ່າຍທອດວິດີໂອສົດ ສຳລັບການພົວພັນຊື້ເຄື່ອງແບບ real-time ກັບລູກຄ້າ.',
      ja: 'Phantom-3Dの構築に常駐で従事。ライブ配信を統合したバーチャル販売員チャットプラットフォームで、顧客とのリアルタイムなショッピング体験を実現。',
    },
    accent: 'coral',
    projects: [
      {
        name: 'Phantom-3D',
        period: '08/2020 — 06/2021',
        role: {
          en: 'Full Stack Developer / Business Analyst',
          vi: 'Lập trình viên Full Stack / Chuyên viên Phân tích Nghiệp vụ',
          lo: 'ນັກພັດທະນາ Full Stack / ນັກວິເຄາະທຸລະກິດ',
          ja: 'フルスタック開発者 / ビジネスアナリスト',
        },
        team: { en: 'Team of 5', vi: 'Nhóm 5 người', lo: 'ທີມ 5 ຄົນ', ja: '5名のチーム' },
        note: 'Virtual seller chat platform with live video-streaming integration',
        description: { en: '', vi: '', lo: '', ja: '' },
        highlights: {
          en: [
            'Analyzed client requirements and designed the project roadmap (BDD/DDD); broke work into phases and assigned tasks across the team.',
            'Implemented core modules, led end-to-end product testing, and built the CI/CD pipeline with GitHub Actions.',
          ],
          vi: [
            'Phân tích yêu cầu khách hàng và thiết kế lộ trình dự án (BDD/DDD); chia nhỏ công việc theo giai đoạn và phân công cho nhóm.',
            'Triển khai các module lõi, dẫn dắt kiểm thử sản phẩm toàn trình và xây dựng pipeline CI/CD với GitHub Actions.',
          ],
          lo: [
            'ວິເຄາະຄວາມຕ້ອງການລູກຄ້າ ແລະ ອອກແບບແຜນທາງໂຄງການ (BDD/DDD); ແບ່ງວຽກເປັນໄລຍະ ແລະ ມອບໝາຍວຽກໃຫ້ທີມ.',
            'ພັດທະນາໂມດູນຫຼັກ, ນຳພາການທົດສອບຜະລິດຕະພັນແບບຄົບວົງຈອນ, ແລະ ສ້າງ pipeline CI/CD ດ້ວຍ GitHub Actions.',
          ],
          ja: [
            '顧客要件を分析し、プロジェクトロードマップ(BDD/DDD)を設計。作業をフェーズに分割しチームにタスクを割り当て。',
            '主要モジュールを実装し、エンドツーエンドの製品テストを主導、GitHub ActionsによるCI/CDパイプラインを構築。',
          ],
        },
        stack: ['React', 'Redux', 'Node.js', 'Express', 'AWS S3', 'AWS Kinesis Video Stream'],
      },
    ],
  },
  {
    name: 'Sharing Innovation',
    period: '07/2018 — 05/2020',
    role: {
      en: 'Web / PHP Developer',
      vi: 'Lập trình viên Web / PHP',
      lo: 'ນັກພັດທະນາ Web / PHP',
      ja: 'Web / PHP開発者',
    },
    summary: {
      en: 'Started as a PHP developer on a travel-services platform, then took ownership of an e-commerce application covering goods, warehousing and product trading.',
      vi: 'Bắt đầu với vai trò lập trình viên PHP trên nền tảng dịch vụ du lịch, sau đó phụ trách ứng dụng thương mại điện tử về hàng hóa, kho vận và giao dịch sản phẩm.',
      lo: 'ເລີ່ມຕົ້ນເປັນນັກພັດທະນາ PHP ເທິງແພລດຟອມບໍລິການທ່ອງທ່ຽວ, ຈາກນັ້ນຮັບຜິດຊອບແອັບພລິເຄຊັນອີຄອມເມີຊກ່ຽວກັບສິນຄ້າ, ຄັງສິນຄ້າ ແລະ ການຊື້ຂາຍຜະລິດຕະພັນ.',
      ja: '旅行サービスプラットフォームのPHP開発者としてスタートし、その後、商品・倉庫・製品取引を扱うEコマースアプリケーションを担当。',
    },
    accent: 'amber',
    projects: [
      {
        name: 'HameeMF',
        period: '10/2019 — 05/2020',
        role: {
          en: 'Web / PHP Developer',
          vi: 'Lập trình viên Web / PHP',
          lo: 'ນັກພັດທະນາ Web / PHP',
          ja: 'Web / PHP開発者',
        },
        description: {
          en: 'E-commerce platform for warehousing & trading; implementation, cross-code review and PHPUnit testing.',
          vi: 'Nền tảng thương mại điện tử cho kho vận & giao dịch; triển khai, cross-code review và kiểm thử PHPUnit.',
          lo: 'ແພລດຟອມອີຄອມເມີຊສຳລັບຄັງສິນຄ້າ ແລະ ການຊື້ຂາຍ; ພັດທະນາ, cross-code review ແລະ ທົດສອບດ້ວຍ PHPUnit.',
          ja: '倉庫・取引向けEコマースプラットフォーム。実装、クロスコードレビュー、PHPUnitテストを担当。',
        },
        stack: ['PHP (Zend/FuelPHP)', 'React', 'Elasticsearch', 'PHPUnit'],
      },
      {
        name: 'Ana Veltra',
        period: '07/2018 — 10/2019',
        role: {
          en: 'Web / PHP Developer',
          vi: 'Lập trình viên Web / PHP',
          lo: 'ນັກພັດທະນາ Web / PHP',
          ja: 'Web / PHP開発者',
        },
        description: {
          en: 'Travel services application; implementation and testing, plus supporting Spring Boot modules for a third-party integration.',
          vi: 'Ứng dụng dịch vụ du lịch; triển khai và kiểm thử, đồng thời hỗ trợ các module Spring Boot cho tích hợp bên thứ ba.',
          lo: 'ແອັບພລິເຄຊັນບໍລິການທ່ອງທ່ຽວ; ພັດທະນາ ແລະ ທົດສອບ, ພ້ອມທັງສະໜັບສະໜູນໂມດູນ Spring Boot ສຳລັບການເຊື່ອມໂຍງກັບພາກສ່ວນທີສາມ.',
          ja: '旅行サービスアプリケーション。実装とテストに加え、サードパーティ統合のためのSpring Bootモジュールをサポート。',
        },
        stack: ['PHP', 'Laravel 5.7', 'jQuery', 'Spring Boot'],
      },
    ],
  },
  {
    name: 'Ha Do General Clinic',
    period: '07/2016 — 08/2018',
    role: {
      en: 'Intern / Developer',
      vi: 'Thực tập sinh / Lập trình viên',
      lo: 'ນັກຝຶກງານ / ນັກພັດທະນາ',
      ja: 'インターン / 開発者',
    },
    summary: {
      en: 'Internship and early developer role building internal systems for a general clinic — appointment booking, and revenue/expense calculation & statistics.',
      vi: 'Vai trò thực tập và lập trình viên đầu đời, xây dựng các hệ thống nội bộ cho phòng khám đa khoa — hệ thống đặt hẹn khám bệnh và hệ thống tính toán, thống kê thu chi.',
      lo: 'ບົດບາດຝຶກງານ ແລະ ນັກພັດທະນາໄວເລີ່ມຕົ້ນ, ພັດທະນາລະບົບພາຍໃນສຳລັບໂຮງໝໍທົ່ວໄປ — ລະບົບຈອງນັດກວດພະຍາດ ແລະ ລະບົບຄິດໄລ່/ສະຖິຕິລາຍຮັບ-ລາຍຈ່າຍ.',
      ja: '総合クリニック向けの社内システム構築を担当したインターン・初期開発者としての役割 — 予約システム、および収支計算・統計システム。',
    },
    accent: 'mint',
    projects: [
      {
        name: 'Clinic Internal Systems',
        period: '07/2016 — 08/2018',
        role: {
          en: 'Intern / Developer',
          vi: 'Thực tập sinh / Lập trình viên',
          lo: 'ນັກຝຶກງານ / ນັກພັດທະນາ',
          ja: 'インターン / 開発者',
        },
        note: 'Appointment booking system, revenue/expense calculation & statistics system',
        description: { en: '', vi: '', lo: '', ja: '' },
        highlights: {
          en: [
            'Built internal operational systems for the clinic to digitize day-to-day administrative workflows.',
            'Developed an appointment booking system letting patients schedule examinations online.',
            'Built a revenue/expense calculation and statistics system for clinic management reporting.',
          ],
          vi: [
            'Xây dựng các hệ thống vận hành nội bộ cho phòng khám nhằm số hóa quy trình hành chính hàng ngày.',
            'Phát triển hệ thống đặt hẹn khám bệnh giúp bệnh nhân đặt lịch khám trực tuyến.',
            'Xây dựng hệ thống tính toán và thống kê thu chi phục vụ báo cáo quản lý phòng khám.',
          ],
          lo: [
            'ພັດທະນາລະບົບປະຕິບັດງານພາຍໃນສຳລັບໂຮງໝໍ ເພື່ອປ່ຽນຂະບວນການບໍລິຫານປະຈຳວັນເປັນລະບົບດິຈິຕອລ.',
            'ພັດທະນາລະບົບຈອງນັດກວດພະຍາດ ໃຫ້ຄົນເຈັບສາມາດຈອງເວລາກວດຜ່ານອອນລາຍ.',
            'ພັດທະນາລະບົບຄິດໄລ່ ແລະ ສະຖິຕິລາຍຮັບ-ລາຍຈ່າຍ ສຳລັບການລາຍງານການບໍລິຫານໂຮງໝໍ.',
          ],
          ja: [
            '日常の管理業務をデジタル化するため、クリニック向けの社内業務システムを構築。',
            '患者がオンラインで診察予約できる予約システムを開発。',
            'クリニック管理レポート向けの収支計算・統計システムを構築。',
          ],
        },
        stack: ['PHP', 'MySQL', 'jQuery', 'Bootstrap'],
      },
    ],
  },
]

export const skillGroups = [
  {
    key: 'languages' as const,
    skills: ['JavaScript/TypeScript', 'PHP', 'Python', 'Java', 'Objective-C', 'HTML5', 'CSS3'],
  },
  {
    key: 'frontend' as const,
    skills: ['React', 'Vue.js', 'Next.js', 'Redux', 'React Native'],
  },
  {
    key: 'backend' as const,
    skills: ['Laravel', 'CodeIgniter', 'Yii2', 'Express.js', 'Django', 'Spring Boot'],
  },
  {
    key: 'cloud' as const,
    skills: ['AWS', 'GCP', 'Docker', 'GitHub Actions', 'CircleCI', 'Vercel'],
  },
  {
    key: 'databases' as const,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'DB2', 'MSSQL', 'Oracle'],
  },
  {
    key: 'testing' as const,
    skills: ['Jest', 'PHPUnit', 'Selenium', 'Cypress', 'API Testing'],
  },
  {
    key: 'tools' as const,
    skills: ['Git (GitHub/GitLab/Bitbucket/SVN)', 'Jira', 'Notion', 'Figma', 'Photoshop'],
  },
  {
    key: 'banking' as const,
    skills: [
      'Card Issuing & Personalization (CPV/CNS)',
      'Omnicard Core Operations & Upgrades (v7, OmniWS, API 360)',
      'Portal Card / E-Portal Card',
      'T24 Core-Banking Sync',
      'Monolith-to-Microservices Migration',
      'Coordination with Card Networks, Partner Vendors (MKGroup, FIME) & State Bank',
    ],
  },
]

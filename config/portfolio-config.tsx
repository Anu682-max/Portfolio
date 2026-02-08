import { Mail, Phone, MapPin, Clock, Coffee } from "lucide-react";
import { SiGmail } from "react-icons/si";

// =============================================================================
// PERSONAL INFORMATION CONFIGURATION
// =============================================================================
// Энд өөрийн хувийн мэдээллээ оруулна уу / Enter your personal information here
export const personalInfo = {
  // Үндсэн мэдээлэл / Basic Information
  name: "Lkhagvazaya Anu",
  nickname: "Anu", // Товч нэр / Short name
  nameJapanese: "ルハグバザヤ アヌ", // Япон хэл дээрх нэр / Japanese name
  title: "フルスタック開発者（学生）", // Албан тушаал / Job title
  
  // Холбоо барих мэдээлэл / Contact Information
  email: "anulkhagvazaya5@gmail.com",
  phone: "070-8530-3580",
  location: "横浜市緑区、神奈川県",
  address: "〒225-0026 神奈川県横浜市緑区十日市場ホウメステW-529",
  
  // Хувийн мэдээлэл / Personal Details
  nationality: "Mongolia",
  dateOfBirth: "2001年03月27日",
  age: 24,
  gender: "Female",
  
  // Танилцуулга / Bio descriptions
  bio: "フルスタック開発を学んでいる学生です。Web開発に情熱を持ち、フロントエンドとバックエンドの両方に強い基盤を持っています。",

  longBio: "フロントエンドとバックエンドの両方に強い基盤を持つフルスタック開発者の学生です。Web開発の旅は、裏側でどのように動いているのかという好奇心から始まり、さまざまなプログラミング言語やフレームワークを探求するようになりました。特に、実世界の問題を解決するユーザーフレンドリーなアプリケーションの開発に興味があります。現在、最新のWeb技術を磨きながら、エキサイティングなプロジェクトに貢献する機会を探しています。",

  description: "ポートフォリオへようこそ！アヌです。革新的なWebソリューションの開発に情熱を注ぐフルスタック開発者の学生です。私のプロジェクト、スキル、Web開発の旅をご覧ください。",
  
  // Зураг / Images
  avatar: "/portfolio.png", // public фолдер дотор байрлуулна / Place in public folder (filename corrected)
  
  // Ажлын статус / Work Status
  availability: "フリーランスプロジェクト受付中",
  // Resume URL (public folder)
  resumeUrl: "/resume.pdf",

  // Хэлний мэдлэг / Language Skills
  languages: [
    { name: "Japanese", level: "N3", proficiency: 97 },
    { name: "Mongolian", level: "Native", proficiency: 100 }
  ],
  
  // Сонирхол / Interests
  interests: [
    "バイオリン - 初心者ですが、クラシック曲を弾くのが大好きです",
    "語学学習",
    "テクニカルドローイング - 鉛筆画が得意で、特に自動車のスケッチを描きます",
    "自動車技術 - 日本とモンゴルで自動車技術を学び、産業メンテナンスの経験があります"
  ],
  
  // Боловсрол / Education
  education: [
    {
      id: 1,
      degree: "モンゴル国立大学 医学部",
      institution: "ウランバートル国立大学 医学部（医者のクラス）",
      institutionEn: "Mongolia National University - Faculty of Medicine",
      period: "2018年9月 - 2024年5月",
      type: "学士号",
    },
    {
      id: 2,
      degree: "ウエストコースト語学院",
      institution: "東京都大田区東峰町",
      institutionEn: "WESTCOAST Language School, Tokyo",
      period: "2024年7月 - 2026年3月（卒業予定）",
      type: "日本語学校",
    },
    {
      id: 3,
      degree: "Full Stack Deployment",
      institution: "オンライン学習",
      institutionEn: "Online Course",
      period: "2025年6月 - 2026年3月（卒業予定）",
      type: "オンライン",
    },
  ],

  // 免許・資格 / Certifications
  certifications: [
    { year: "2024年6月", name: "バイクの運転免許" },
    { year: "2024年12月", name: "日本語能力試験 N4 合格" },
    { year: "2025年7月", name: "日本語能力試験 N3 合格" },
    { year: "2026年1月", name: "介護日本語評価テスト（日本語）合格" },
    { year: "2026年1月", name: "介護評価試験（モンゴル語）合格" },
  ],
  
  // Миний тухай / About Me sections
  aboutSections: {
    mainDescription: "ITの基礎知識と医療分野への強い関心を持っています。プログラミングやデータ管理を学ぶ中で、問題を整理し、分かりやすくまとめる力を身につけました。丁寧で正確に作業することが得意で、新しいことを積極的に学び、現場で役立つ人材を目指しています。",
    detailedDescription: "視覚的に整理し、分かりやすく伝える力に自信があります。複雑な情報を図や表でまとめ、誰にでも理解しやすい形にすることが得意です。このスキルは、医療スタッフとのコミュニケーションやシステム導入時の説明など、現場で大きく役立つと考えています。",
    professionalSummary: "常に向上心を持ち、新しい技術を積極的に吸収しながら、医療の発展に貢献できるエンジニアを目指しています。フロントエンドとバックエンドの両方の経験を活かし、シームレスで効率的なアプリケーションを構築します。",
  }
};

// =============================================================================
// SOCIAL MEDIA & EXTERNAL LINKS CONFIGURATION
// =============================================================================
// Нийгмийн сүлжээ болон гадаад холбоосууд / Social media and external links
export const socialLinks = {
  github: "https://github.com/Anu682-max/Portfolio",
  instagram: "https://www.instagram.com/maris______________________",
  facebook: "https://www.facebook.com/Л'Г Ану",
  email: "anulkhagvazaya5@gmail.com",
  // Дэмжлэгийн холбоосууд / Support links
  buyMeCoffee: "https://buymeacoffee.com/anulkhagvai", // "Buy me a coffee" холбоос / "Buy me a coffee" link
  paypal: "" // PayPal холбоос (хэрэгтэй бол)

};

// =============================================================================
// SKILLS CONFIGURATION
// =============================================================================
// Ур чадварын тохиргоо / Skills configuration
export const skills = [
  {
    category: "フロントエンド開発",
    icon: "Layout",
    items: [
      { name: "React",  color: "#61DAFB" },
      { name: "JavaScript",  color: "#F7DF1E" },
      { name: "AWS",  color: "#FF9900"},

    ]
  },
  {
    category: "バックエンド開発",
    icon: "Server",
    items: [
      { name: "PHP",  color: "#777BB4" },
      { name: "MySQL",  color: "#4479A1" },
      { name: "Node.js",  color: "#339933" },
      { name: "Python",  color: "#3776AB" },
      { name: "PostgreSQL",  color: "#336791" },
      { name: "MongoDB",  color: "#47A248" }
    ]
  },
  {
    category: "言語",
    icon: "Globe",
    items: [
      { name: "日本語 (N3)",  color: "#FF6B6B" },
      { name: "モンゴル語 (母国語)",  color: "#45B7D1" }
    ]
  }
];

// ================================================================================ 
// STATISTICS CONFIGURATION
// =============================================================================
// About хэсэгт харуулах статистик / Statistics for About section
export const stats = [
  {
    label: "言語",
    value: "2",
    icon: "*"
  }
];

// =============================================================================
// PROJECTS CONFIGURATION
// =============================================================================
// Анхдагч төслүүдийн жагсаалт / Default projects list
export const projects = [
  {
    id: 1,
    title: "CatApp",
    description: "猫の写真を楽しめるインタラクティブなWebアプリ",
    longDescription: "猫の写真を閲覧・共有できるモダンなWebアプリケーションです。React、HTML、TypeScriptを使用して構築され、ユーザーフレンドリーなインターフェースで猫の写真を楽しむことができます。",
    image: "/CatApp.png",
    technologies: ["React", "HTML", "TypeScript"],
    githubUrl: "https://catphoto1.netlify.app/catapp",
    demoUrl: "https://catphoto1.netlify.app/",
    category: "fullstack",
    features: [
      "猫の写真ギャラリー",
      "レスポンシブデザイン",
      "TypeScriptで型安全",
      "ユーザーフレンドリーなUI"
    ],
    
  },
  {
    id: 2,
    title: "BuyMeCoffee",
    description: "クリエイターを応援するコーヒー購入プラットフォーム",
    longDescription: "クリエイターを応援するためのWebアプリケーションです。React.js、HTML、CSSを使用して構築され、シンプルで使いやすいインターフェースを提供します。",
    image: "/BuyMeCoffee.png",
    technologies: ["React.js", "HTML", "CSS"],
    githubUrl: "https://github.com/Anu682-max/Anu682-max.github",
    demoUrl: "https://quiz-app-c66t.vercel.app/",
    category: "fullstack",
    features: [
      "クリエイター支援機能",
      "シンプルなUI",
      "レスポンシブデザイン",
      "モダンなWeb技術"
    ],
  },
  {
    id: 3,
    title: "BOOKSTORE",
    description: "オンライン書店プラットフォーム。書籍の閲覧・管理機能付き",
    longDescription: "JavaScript、HTML5、CSS3、Chart.jsを使用して構築されたオンライン書店アプリケーションです。書籍の一覧表示、検索、統計グラフの表示機能を備えています。",
    image: "/bookstore.png",
    technologies: ["JavaScript", "HTML5", "CSS3", "Chart.js", "Local Storage", ],
    githubUrl: "https://github.com/Anu682-max/",
    demoUrl: "https://6-3-4-direct-push-xxz8.vercel.app/",
    category: "frontend",
    features: [
      "書籍カタログ表示",
      "Chart.jsによる統計グラフ",
      "ローカルストレージでデータ保存",
      "レスポンシブデザイン"
    ],
  },
  {
    id: 4,
    title: "Registration Project",
    description: "フルスタックCRUDユーザー登録システム",
    longDescription: "React、Node.js、Express、MongoDBを使用したフルスタックのユーザー登録・管理システムです。CRUD操作（作成・読取・更新・削除）の全機能を備えています。",
    image: "/Registration project.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", ],
    githubUrl: "https://github.com/Anu682-max/",
    demoUrl: "https://splendorous-brioche-ba78e6.netlify.app/",
    category: "fullstack",
    features: [
      "ユーザー登録・ログイン",
      "CRUD操作（作成・読取・更新・削除）",
      "MongoDBデータベース連携",
      "RESTful API設計",
      "レスポンシブデザイン"
    ],
  },
  {
    id: 5,
    title: "Burger Build",
    description: "自分だけのバーガーを作れるインタラクティブゲーム",
    longDescription: "firebase、CSS、JavaScriptで構築されたバーガー作成ゲームです。さまざまな具材やソースを選んで、オリジナルのバーガーを作ることができます。",
    image: "/Burger build.png",
    technologies: ["firebase", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Anu682-max/",
    demoUrl: "https://burger-build-uadt.vercel.app/",
    category: "fullstack",
    features: [
      "具材のカスタマイズ",
      "インタラクティブなUI",
      "楽しいグラフィックス",
      "レスポンシブデザイン"
    ],
  },
  {
    id: 6,
    title: "FireMovie",
    description: "映画データベース＆おすすめプラットフォーム",
    longDescription: "映画の検索、詳細情報の閲覧、レビューの確認、視聴履歴に基づくおすすめ映画の表示ができるWebアプリケーションです。React、JavaScript、CSSで構築されています。",
    image: "/FireMovie.png",
    technologies: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/Anu682-max/",
    demoUrl: "https://firemovie-git-main-anu682-maxs-projects.vercel.app/",
    category: "fullstack",
    features: [
      "映画データベース検索",
      "おすすめ映画の表示",
      "レビュー・評価機能",
      "詳細な検索・フィルター",
      "ウォッチリスト管理",
      "レスポンシブデザイン"
    ],
  },
  {    
    id: 7,
    title: "Burger-Ai",
    description: "好きな具材でオリジナルバーガーを作って注文できるアプリ",
    longDescription: "Burger-Aiは、豊富な具材からオリジナルバーガーを作成できるWebアプリです。バンズ、パティ、トッピング、ソースを選んで理想のバーガーを作り、デリバリーまたはテイクアウトで注文できます。ReactとFirebaseで構築されています。",
    image: "/Burger-Ai.png",
    technologies: ["React","Firebase"],
    githubUrl: "https://github.com/Anu682-max/burger-ai",
    demoUrl: "https://burger-ai-eta.vercel.app/",
    category: "fullstack",
    features: [
      "カスタムバーガー作成",
      "豊富な具材の選択",
      "デリバリー・テイクアウト注文",
      "ユーザーフレンドリーなUI",
      "リアルタイム注文追跡",
      "レスポンシブデザイン"
    ],
  },
  {
    id: 8,
    title: "Burger land",
    description: "バーガーレストラン経営シミュレーションゲーム",
    longDescription: "バーガーレストランの経営をシミュレーションするインタラクティブなゲームです。注文管理、バーガーのカスタマイズ、レストラン運営の最適化を体験できます。Next.jsとFirebaseで構築されています。",
    image: "/Burger land.png",
    technologies: [ "Next.js", "Firebase"],
    githubUrl: "https://github.com/Anu682-max/burger-butee",
    demoUrl: "https://burger-butee-gou8.vercel.app/",
    category: "fullstack",
    features: [
      "注文管理システム",
      "バーガーカスタマイズ",
      "スコア追跡",
      "ユーザーフレンドリーなUI",
      "レスポンシブデザイン"
    ],
  },
  {
    id: 9,
    title: "Company Website",
    description: "Next.js 15、Firebase、Tailwind CSSで構築された建設会社のWebサイト。管理ダッシュボード付き",
    longDescription: "建設会社向けの総合Webサイトです。Next.js 15でフロントエンド、Firebaseでバックエンドサービス、Tailwind CSSでスタイリングを実現。管理者がコンテンツ管理、プロジェクト情報の更新、問い合わせ対応を効率的に行える管理ダッシュボードを搭載しています。",
    image: "/Company Website.png",
    technologies: ["Next.js 15", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/Anu682-max/studio",
    demoUrl: "https://company-website-demo.vercel.app/",
    category: "fullstack",
    features: [
      "モダンデザイン：Tailwind CSSによるレスポンシブデザイン",
      "管理ダッシュボード：コンテンツ管理CMS",
      "Firebase連携：認証、Firestore、ストレージ",
      "画像管理：フォールバック付きスマート画像処理",
      "多言語対応：モンゴル語インターフェース",
      "SEO最適化：サーバーサイド生成とメタタグ",
      "パフォーマンス：Core Web Vitals最適化"
    ],
  },
  { 
    id: 10,  
    title: "shoe-sphere-connect",
    description: "靴のオンライン販売ECプラットフォーム。ユーザーアカウント・決済機能付き",
    longDescription: "靴のオンライン売買ができるフル機能のECプラットフォームです。ユーザーアカウント管理、商品一覧、ショッピングカート、安全な決済処理を備えています。Vite、TypeScript、React、shadcn-uiで構築されています。",
    image: "/shoe-sphere-connect.png",
    technologies: 
    ["Vite",
     "TypeScript",
    "React",
    "shadcn-ui",
    "Tailwind CSS"],
    githubUrl: "https://github.com/Anu682-max/shoe-sphere-connect",  
    demoUrl: "https://shoe-sphere-connect.vercel.app/",
    category: "fullstack",
    features: []                                                     
  },
  {
    id: 11,  
    title: "MedShoes",
    description: "医療用シューズ専門ECプラットフォーム。管理ダッシュボード付き",
    longDescription: "医療用シューズに特化したECプラットフォームです。ユーザーアカウント管理、商品一覧、ショッピングカート、商品・注文管理の管理ダッシュボードを搭載。React 18、TypeScript、Supabaseで構築されています。",
    image: "/MedShoes.png",
    technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase"],
    githubUrl: "https://github.com/Anu682-max/MedShoes",  
    demoUrl: "https://med-shoes-dih9.vercel.app/",
    category: "fullstack",
    features: [
      "多言語対応商品カタログ（英語/モンゴル語）",
      "ショッピングカート機能",
      "クレジット・デビットカード決済",
      "注文管理システム",
      "モバイル・デスクトップ対応レスポンシブデザイン"
    ],
  },
  {    
    id: 12,  
    title: "Pv0-flappy-bird",
    description: "ブラウザで遊べるFlappy Birdゲーム",
    longDescription: "ブラウザで楽しめるFlappy Birdゲームです。シンプルな操作でプレイでき、カラフルなグラフィックスと中毒性のあるゲームプレイが特徴です。Next.jsとCSS3で構築されています。",
    image: "/Pv0-flappy-bird.png",
    technologies: ["CSS3", "Next.js"],
    githubUrl: "https://github.com/Anu682-max/v0-flappy-bird",
    demoUrl: "https://v0-flappy-bird-k2f8.vercel.app/",
    category: "frontend",   
    features: [
      "ワンボタンのシンプル操作",
      "難易度が上がるレベル",
      "カラフルなグラフィックス",
      "スコア追跡・ランキング",
      "モバイル・デスクトップ対応"
    ],
  },
  {
    id: 13,
    title: "v0-newsletter-template",
    description: "メールクライアント対応のレスポンシブニュースレターテンプレート",
    longDescription: "プロフェッショナルなデザインのレスポンシブメールニュースレターテンプレートです。HTMLとインラインCSSで構築され、各種メールクライアントやデバイスとの互換性を確保。クリーンなレイアウトとカスタマイズ可能なセクションで、読みやすさを重視しています。",
    technologies: ["Next.js", "CSS3"],
    image: "/v0-newsletter-template.png",
    githubUrl: "https://github.com/Anu682-max/v0-newsletter-template",
    demoUrl: "https://v0-newsletter-template-mr2e.vercel.app/en",
    category: "frontend",   
    features: [
      "各種メールクライアント対応レスポンシブデザイン",
      "クリーンでカスタマイズ可能なレイアウト",
      "互換性のためのインラインCSS",
      "読みやすさに最適化",
      "セクションの簡単カスタマイズ"
    ],
  },
  {
    id: 14,
    title: "Hotel.book",
    description: "Next.js 14、Tailwind CSS、楽天トラベルAPIで構築されたホテル予約プラットフォーム",
    longDescription: "Hotel.bookは、ユーザーが簡単にホテルを検索・予約できるプラットフォームです。Next.js 14で最適なパフォーマンス、Tailwind CSSで洗練されたUI、楽天トラベルAPIとの連携により、豊富なホテルオプション、リアルタイムの空室状況、競争力のある価格を提供します。",
    image: "/Hotel.book.png",
    technologies: ["Next.js 14", "Tailwind CSS", "Rakuten Travel API"],
    githubUrl: "https://github.com/Anu682-max/Hotel.book",  
    demoUrl: "https://hotel-book1.vercel.app/",
    category: "fullstack",
    features: [
        "シームレスなホテル検索・予約",
        "リアルタイムの空室・料金表示",
        "Tailwind CSSによるユーザーフレンドリーなUI",
        "楽天トラベルAPI連携",
        "全デバイス対応レスポンシブデザイン"
    ],
  },
  {
    id: 15,
    title: "thread-supabase",
    description: "Supabaseで構築された完全なSNSプラットフォーム。Google認証、投稿、いいね、フォロー機能付き",
    longDescription: "thread-supabaseは、ユーザーがつながり、コンテンツを共有し、交流できるフル機能のSNSプラットフォームです。Supabaseをバックエンドに使用し、Google認証、投稿、いいね、フォロー機能をサポート。プロフィール作成、近況共有、コミュニティとの交流が可能です。",                                                          
    image: "/thread-supabase.png",  
    technologies: ["Supabase", "Node.js", "Google Authentication"],
    githubUrl: "https://github.com/Anu682-max/thread-supabase",
    demoUrl: "https://hotel-book1.vercel.app/",
    category: "fullstack",  
    features: [ "Google OAuthログイン",
"投稿（280文字）",
"いいね/取り消し（リアルタイム）",
"フォロー/アンフォロー",
"プロフィール編集",
"コミュニティ作成",
"ストーリー投稿",
"メッセージ送信",
"ダークUIテーマ" ],
  },
  {
    id: 16,
    title: "Virtual Mouse",
    description: "手のジェスチャーでコンピューターのマウスを制御するAIシステム",
    longDescription: "Pythonを使用したハンドジェスチャー認識＋バーチャルマウス制御システムです。OpenCVとMediaPipeを活用し、カメラを通じて手の動きを認識。マウスカーソルの移動、クリック、ドラッグ＆ドロップ、ダブルクリックなど、実際のマウスの全機能を手のジェスチャーで実現します。",
    image: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?w=800&q=80",
    technologies: ["Python 3.11", "Flask", "OpenCV", "MediaPipe", "WebRTC"],
    githubUrl: "https://github.com/Hellobraincode-lesson/virtual_mouse",
    demoUrl: "https://github.com/Hellobraincode-lesson/virtual_mouse#demo",
    category: "backend",
    features: [
      "手のジェスチャーでマウス制御",
      "カーソル移動・クリック・ドラッグ対応",
      "OpenCV + MediaPipeによるリアルタイム認識",
      "5種類の手のジェスチャー（1本指、2本指、3本指、親指、5本指）",
      "WebRTCによるビデオストリーミング",
      "Flaskバックエンド",
      "タッチレス操作で衛生的",
      "リアルタイムデモ動画あり"
    ],
  }
];

// =============================================================================
// WORK EXPERIENCE CONFIGURATION
// =============================================================================
// Ажлын туршлагын мэдээлэл / Work experience data
export const experiences = [
  {
    id: 1,
    title: "ウェイター",
    company: "Green Hill Restaurant",
    period: "2022年5月",
    date: "2023年9月",
    location: "モンゴル",
    type: "アルバイト",
    description: "忙しいレストランでウェイターとして勤務。優れた接客サービスを提供し、お客様に快適な食事体験を提供しました。",
    responsibilities: [
      "お客様の注文受付と料理・飲料の提供",
      "ダイニングエリアの清潔さと整理整頓の維持",
      "メニューのおすすめと問い合わせ対応",
      "キッチンスタッフとの連携で迅速な注文配達",
      "社内自動化ツールの開発"
    ],
    technologies: ["接客サービス", "飲食サービス", "チーム協力"]
  },
    {
    id: 2,
    title: "オートメーションエンジニア（パートタイム）",
    company: "Data Mongolia LLC",
    period: "2022年6月 - 2024年12月",
    date: "2022年6月 - 2024年12月",
    location: "モンゴル",
    type: "アルバイト",
    description: "石炭採掘会社でパートタイムのオートメーションエンジニアとして勤務。採掘オペレーションの自動化ソリューションの開発・導入に従事しました。",
    responsibilities: [
      "採掘自動化システムの設計・導入",
      "石炭採掘オペレーション向けカスタムソフトウェア開発",
      "AutoCADによる技術図面・システム設計",
      "設備プログラミング・メンテナンス",
      "プロジェクト管理・技術文書作成"
    ],
    technologies: ["自動化システム", "AutoCAD", "設備プログラミング", "プロジェクト管理"]
  },
  {
    id: 3,
    title: "新聞配達",
    company: "読売新聞",
    period: "2024年6月 - 2025年3月",
    date: "2024年9月 - 2025年5月",
    location: "日本",
    type: "正社員",
    description: "日本で新聞配達員として勤務。担当エリアの購読者への正確でタイムリーな新聞配達を行いました。",
    responsibilities: [
      "新聞の配達・配布",
      "配達ルートの計画・最適化",
      "顧客サービス・サポート",
      "在庫管理・報告",
      "編集チームとの連携"
    ],
    achievements: [
      "最適化されたルーティングにより配達効率を30%向上",
      "新聞配達用デジタル追跡システムの導入",
      "5名以上の新規配達員への配達手順・接客研修"
    ],
  }
];

// =============================================================================
// CONTACT INFORMATION CONFIGURATION
// =============================================================================
// Холбоо барих мэдээллийн жагсаалт / Contact information list
export const contactInfo = [
  {
    label: "メール",
    title: "メール",
    value: personalInfo.email,
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    link: `mailto:${personalInfo.email}`
  },
  {
    label: "電話",
    title: "電話",
    value: personalInfo.phone,
    icon: Phone,
    href: `tel:${personalInfo.phone}`,
    link: `tel:${personalInfo.phone}`
  },
  {
    label: "所在地",
    title: "所在地",
    value: personalInfo.location,
    icon: MapPin,
    href: "#",
    link: "#"
  },
  {
    label: "住所",
    title: "住所",
    value: personalInfo.address,
    icon: MapPin,
    href: "#",
    link: "#"
  },
  {
    label: "対応状況",
    title: "対応状況",
    value: personalInfo.availability,
    icon: Clock,
    href: "#",
    link: "#"
  },
  {
    label: "返信時間",
    title: "返信時間",
    value: "24時間以内",
    icon: Clock,
    href: "#",
    link: "#"
  }
];

// =============================================================================
// SUPPORT LINKS CONFIGURATION
// =============================================================================
// Дэмжлэгийн холбоосууд / Support links configuration
export const supportLinks = {
  buyMeCoffee: {
    url: socialLinks.buyMeCoffee,
    text: "コーヒーをおごる",
    icon: Coffee,
    enabled: true // false болговол харагдахгүй / Set to false to hide
  },
  paypal: {
    url: socialLinks.paypal,
    text: "PayPalで支援する",
    icon: Mail,
    enabled: false // PayPal ашиглахгүй бол false / Set to false if not using PayPal
  }
};

// =============================================================================
// SEO AND META INFORMATION CONFIGURATION
// =============================================================================
// SEO болон мета мэдээллийн тохиргоо / SEO and meta information configuration
export const seoData = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.description,
  keywords: [
    "フルスタック開発者",
    "PHP開発者",
    "React開発者",
    "JavaScript開発者",
    "日本の開発者",
    "日本語N3",
    "Web開発",
    personalInfo.name
  ],
  author: personalInfo.name,
  ogImage: personalInfo.avatar
};

// =============================================================================
// THEME AND STYLING CONFIGURATION
// =============================================================================
// Загварын тохиргоо / Theme configuration
export const themeConfig = {
  // Үндсэн өнгө / Primary colors
  primaryColor: "#06B6D4", // Cyan
  secondaryColor: "#8B5CF6", // Purple
  accentColor: "#EC4899", // Pink
  
  // Градиент / Gradients
  primaryGradient: "from-cyan-400 via-purple-400 to-cyan-400",
  secondaryGradient: "from-purple-500 to-pink-500",
  
  // Анимацийн хугацаа / Animation durations
  animationDuration: {
    fast: "0.2s",
    normal: "0.3s",
    slow: "0.5s"
  }
};

// =============================================================================
// NAVIGATION CONFIGURATION
// =============================================================================
// Навигацийн цэсний тохиргоо / Navigation menu configuration
export const navigationConfig = {
  // Цэсний элементүүд / Menu items
  menuItems: [
    { id: "home", label: "ホーム", href: "#home" },
    { id: "about", label: "自己紹介", href: "#about" },
    { id: "projects", label: "プロジェクト", href: "#projects" },
    { id: "skills", label: "スキル", href: "#skills" },
    { id: "contact", label: "お問い合わせ", href: "#contact" }
  ],
  
  // Лого тохиргоо / Logo configuration
  logo: {
    text: personalInfo.nickname,
    domain: ".online"
  }
};

// =============================================================================
// ADMIN CONFIGURATION
// =============================================================================
// Админ панелын тохиргоо / Admin panel configuration
export const adminConfig = {
  // Админ нууц үг (production дээр илүү аюулгүй байх ёстой) / Admin password (should be more secure in production)
  password: "admin123",
  
  // Админ панелын тохиргоо / Admin panel settings
  settings: {
    maxImageSize: 5 * 1024 * 1024, // 5MB
    allowedImageTypes: ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"],
    maxProjectsPerPage: 12
  }
};

// =============================================================================
// INSTRUCTIONS FOR OTHER DEVELOPERS
// =============================================================================
/*
БУСАД ХӨГЖҮҮЛЭГЧДЭД ЗОРИУЛСАН ЗААВАР / INSTRUCTIONS FOR OTHER DEVELOPERS:

1. ХУВИЙН МЭДЭЭЛЭЛ ӨӨРЧЛӨХ / CHANGING PERSONAL INFORMATION:
   - personalInfo объект дотор өөрийн мэдээллээ оруулна уу
   - Нэр, имэйл, утас, байршил зэргийг өөрчилнө үү
   - Bio болон longBio-г өөрийн тухай бичнэ үү

2. НИЙГМИЙН СҮЛЖЭЭНИЙ ХОЛБООС / SOCIAL MEDIA LINKS:
   - socialLinks объект дотор өөрийн нийгмийн сүлжээний холбоосуудыг оруулна уу
   - GitHub, Instagram, Facebook зэрэг холбоосуудыг өөрчилнө үү
   - buyMeCoffee холбоосыг өөрийн дэмжлэгийн хуудсаар солино уу

3. UR ЧАДВАР ӨӨРЧЛӨХ / CHANGING SKILLS:
   - skills массив дотор өөрийн ур чадваруудыг оруулна уу
   - Ангилал (category), нэр (name), түвшин (level), өнгө (color) өөрчилнө үү

4. ТӨСӨЛ НЭМЭХ / ADDING PROJECTS:
   - projects массив дотор өөрийн төслүүдийг оруулна уу
   - Эсвэл /admin хуудас ашиглан шинэ төсөл нэмнэ үү

5. ЗУРАГ СОЛИХ / CHANGING IMAGES:
   - public фолдер дотор portfolio.jpg файлыг өөрийн зургаар солино уу
   - personalInfo.avatar зам нь зөв байгаа эсэхийг шалгана уу

6. ӨНГӨ ЗАГВАР / THEME COLORS:
   - themeConfig объект дотор өнгөнүүдийг өөрчилж болно
   - CSS файл дотор custom өнгөнүүд нэмж болно

7. ХОЛБОО БАРИХ МЭДЭЭЛЭЛ / CONTACT INFORMATION:
   - contactInfo массив дотор холбоо барих мэдээллээ оруулна уу
   - Шинэ холбоо барих арга нэмж болно

АНХААРАХ ЗҮЙЛ / IMPORTANT NOTES:
- Энэ файлыг өөрчилсний дараа аппликейшнийг дахин эхлүүлэх хэрэггүй
- Бүх өөрчлөлт шууд харагдана
- Зураг файлуудыг public фолдерт хийнэ үү
- Production дээр deploy хийхээсээ өмнө бүх холбоосууд ажиллаж байгаа эсэхийг шалгана уу
*/
export const navItems = [
  { label: "Нүүр", href: "#hero" },
  { label: "Workflow", href: "#workflow" },
  { label: "Ялгаа", href: "#proof" },
  { label: "Платформ", href: "#platform" },
  { label: "Хэнд зориулав", href: "#audience" },
] as const;

export const heroContent = {
  badge: "Монголд зориулсан freelance workflow",
  title: ["Компани ба фрилансерийг", "нэг цэвэр workflow-д."],
  subtitle:
    "Montask нь ажлаа нийтлэх, зөв хүнтэй match хийх, хамтралаа эхлүүлэх гэсэн гол алхмуудыг Монгол хэрэглэгчдэд илүү хурдан, илүү ойлгомжтой болгоно.",
  primaryCta: "Эрт нэгдэх",
  secondaryCta: "Яаж ажилладгийг үзэх",
  microItems: ["Компани", "Фрилансер", "Early access"],
} as const;

export const workflowSteps = [
  {
    step: "01",
    title: "Ажлаа нийтэл",
    eyebrow: "Компани тал",
    description:
      "Project brief, scope, budget, deadline-аа хэдхэн мөрөөр цэгцтэй оруулна.",
    preview: ["Brief", "Scope", "Budget"],
  },
  {
    step: "02",
    title: "Зөв хүнээ match хий",
    eyebrow: "Montask систем",
    description:
      "Skill, availability, context дээр суурилсан shortlist-оо нэг дор харна.",
    preview: ["Skill", "Profile", "Match"],
  },
  {
    step: "03",
    title: "Хамтралаа эхлүүл",
    eyebrow: "Хоёр тал",
    description:
      "Chat, update, handoff flow-оо олон чат хооронд алдалгүй эхлүүлнэ.",
    preview: ["Chat", "Update", "Start"],
  },
] as const;

export const proofSection = {
  badge: "Яагаад өөр вэ?",
  title: "Тархай hiring flow-оос илүү цэвэр эхлэл",
  subtitle:
    "Montask нь олон сувгийн тархай харилцааг нэг workflow болгон цэгцэлж, шийдвэр гаргах мөчийг илүү ойлгомжтой болгоно.",
  before: {
    title: "Одоогийн тархай урсгал",
    points: [
      "Chat, DM, spreadsheet, call зэрэг олон цэгт тарамдана",
      "Project scope ба хүлээлт бүрэн цэгцэрдэггүй",
      "Response quality, availability нь урьдчилан тодорхой биш",
      "Хэнтэй эхлэхээ шийдэхэд илүү их цаг алддаг",
    ],
  },
  after: {
    title: "Montask workflow",
    points: [
      "Brief, people, shortlist-оо нэг орчинд харна",
      "Profile ба skill context нь илүү ойлгомжтой харагдана",
      "Match signal дээр тулгуурлаж хурдан shortlist гаргана",
      "Эхний холбоо, эхний алхамыг цэвэр эхлүүлнэ",
    ],
  },
  highlights: [
    {
      title: "Монгол хэлтэй UX",
      description: "Локал хэрэглэгчдэд эвтэйхэн, modern copy-той.",
    },
    {
      title: "Profile-first matching",
      description: "Хүмүүсийн бодит чадварыг илүү тод харуулах зорилготой.",
    },
    {
      title: "Short project friendly",
      description: "Богино төсөл, sprint work, support task бүгдэд тохирно.",
    },
  ],
} as const;

export const platformPreview = {
  badge: "Платформ preview",
  title: "Платформ дээрх мэдрэмж",
  subtitle:
    "Нэг том dashboard биш, харин ажлыг эхлүүлэхэд яг хэрэгтэй мэдээлэл, shortlist, next step-үүдийг төвд нь авчирсан бүтэц.",
  project: {
    label: "Selected project",
    title: "Landing page redesign",
    budget: "2.5M₮",
    timeline: "7 хоног",
    summary:
      "Hero, proof, CTA урсгалтай modern launch page. Brand tone нь premium, clean, conversion-first байх шаардлагатай.",
    skills: ["UI/UX", "Copy", "Web"],
  },
  shortlist: [
    {
      name: "Н. Дөлгөөн",
      role: "UI/UX Designer",
      match: "92%",
      response: "2ц",
      tags: ["Landing", "Brand", "Figma"],
    },
    {
      name: "Т. Ганзориг",
      role: "Front-end Developer",
      match: "88%",
      response: "3ц",
      tags: ["React", "Motion", "Tailwind"],
    },
  ],
  updates: [
    "Shortlist 2 хүнтэй бэлэн",
    "Brief ба deliverable цэгцтэй байна",
    "Эхний холбоог 24 цагийн дотор эхлүүлэх зорилготой",
  ],
  imageSlots: [
    {
      title: "Dashboard image slot",
      description: "Product overview эсвэл company dashboard image.",
      path: "public/images/platform-dashboard.webp",
    },
    {
      title: "Freelancer profile slot",
      description: "Freelancer card эсвэл profile detail image.",
      path: "public/images/platform-profile.webp",
    },
  ],
} as const;

export const audienceCards = [
  {
    id: "freelancers",
    title: "Фрилансеруудад",
    summary:
      "Өөрийгөө илүү цэвэр, илүү professional байдлаар харуулж, тохирох ажлууд руу хурдан ойртох орчин.",
    bullets: [
      "Ур чадвараа profile дээрээ илүү ойлгомжтой харуул",
      "Тохирох ажлуудаа context-тэй нь харж шийд",
      "Шинэ клиенттэй эхний холбоогоо хурдан үүсгэ",
      "Олон чат, олон файл дунд төөрөхгүйгээр ажлаа эхлүүл",
    ],
    cta: "Фрилансерээр эрт нэгдэх",
  },
  {
    id: "companies",
    title: "Компаниудад",
    summary:
      "Full-time hire биш байсан ч ажлаа урагшлуулахад хэрэгтэй shortlist, context, next step-үүдийг нэг дор төвлөрүүлнэ.",
    bullets: [
      "Төслийн brief-ээ богино хугацаанд цэгцэлж нийтэл",
      "Зөв skill-тэй хүнийг profile context-тэй нь харьцуул",
      "Шийдвэр гаргах мөчийг хурдан, илүү итгэлтэй болго",
      "Эхний хамтралаа олон сувгаар биш нэг урсгалаар эхлүүл",
    ],
    cta: "Компаниар эрт нэгдэх",
  },
] as const;

export const trustStats = [
  {
    value: "500+",
    title: "эрт нэгдэх хүсэлт",
    description: "launch үеийн эхний урсгал",
  },
  {
    value: "20+",
    title: "skill category",
    description: "эрэлттэй ур чадварууд",
  },
  {
    value: "<24ц",
    title: "response target",
    description: "эхний холбоог хурдлуулах зорилт",
  },
  {
    value: "MN",
    title: "onboarding",
    description: "Монгол хэрэглэгчдэд зориулсан flow",
  },
] as const;

export const ctaContent = {
  title: "Montask-д эрт нэгдэж, launch үеийн эхний урсгалын нэг болоорой.",
  subtitle:
    "Компани ч бай, freelancer ч бай — илүү цэвэр workflow дээр эхний алхмаа хийхэд зориулагдсан early access-аа бид нээж байна.",
  primaryCta: "Эрт нэгдэх",
  secondaryCta: "Платформ preview үзэх",
} as const;

export const footerLinks = [
  { label: "Нүүр", href: "#hero" },
  { label: "Workflow", href: "#workflow" },
  { label: "Ялгаа", href: "#proof" },
  { label: "Платформ", href: "#platform" },
  { label: "Холбоо барих", href: "#footer" },
] as const;

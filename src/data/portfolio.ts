export type ProjectSection = {
  heading: string;
  body: string;
};

export type ProjectCategory = {
  id: string;
  title: string;
  english: string;
  description: string;
  note: string;
  tags: string[];
};

export type Project = {
  id: string;
  index: string;
  name: string;
  slug: string;
  categoryId: string;
  category: string;
  role: string;
  year: string;
  image: string;
  videoSlug?: string;
  summary: string;
  tags: string[];
  intro: string;
  challenge: string;
  detailSections: ProjectSection[];
  keyScreens: string[];
};

export type PortfolioProfile = {
  name: string;
  title: string;
  location: string;
  status: string;
  statement: string;
  email: string;
  phone: string;
  wechat: string;
  pdfHref: string;
  archiveHref: string;
  archiveCode: string;
};

export type AboutCard = {
  title: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
};

export type Publication = {
  title: string;
  date: string;
  excerpt: string;
};

export const portfolioData = {
  profile: {
    name: "李明岩",
    title: "虚拟现实 / 数字媒体 / 交互体验研究",
    location: "",
    status: "正在寻找虚拟现实、数字媒体与游戏设计相关机会",
    statement: "设计不是装饰，是让复杂变得可感知。",
    email: "1169596647@qq.com",
    phone: "15617322977",
    wechat: "lmy371325",
    pdfHref: "/resume.pdf",
    archiveHref: "https://pan.baidu.com/s/1GKGSHmvGM3HvjnCqmjN2Rg?pwd=7qkj",
    archiveCode: "7qkj",
  } satisfies PortfolioProfile,
  categories: [
    {
      id: "virtual-exhibitions",
      title: "虚拟展馆",
      english: "Virtual Exhibitions",
      description: "围绕历史叙事、数字纪念与空间导览展开的沉浸式展馆项目。",
      note: "此类作品的重点并不在于复制线下场馆形态，而在于重建观众理解内容的顺序、停留层级与浏览节奏。",
      tags: ["历史叙事", "空间导览", "数字纪念"],
    },
    {
      id: "vr-works",
      title: "VR作品",
      english: "VR Works",
      description: "包含仿真训练、工业展示、教学演示与空间化信息表达的虚拟现实作品。",
      note: "该部分更关注虚拟现实场景中的方向感、操作反馈与认知层级，而非单纯的模型搭建与氛围营造。",
      tags: ["仿真训练", "工业展示", "教学演示"],
    },
    {
      id: "award-game",
      title: "获奖游戏",
      english: "Award-winning Game",
      description: "以玩法循环、战斗反馈和关卡节奏为核心的游戏设计作品。",
      note: "游戏部分主要呈现机制设计、反馈判断与完整体验编排能力，是我在游戏设计方向上的集中表达。",
      tags: ["玩法循环", "关卡节奏", "战斗反馈"],
    },
    {
      id: "award-films",
      title: "获奖影片",
      english: "Award-winning Films",
      description: "涵盖影像、动画与文化表达的获奖短片作品。",
      note: "该部分更强调情绪、节奏与视觉语言如何共同服务叙事，而非仅停留于风格层面的呈现。",
      tags: ["影像叙事", "动画表达", "文化气质"],
    },
  ] satisfies ProjectCategory[],
  projects: [
    {
      id: "dongbei-kanglian",
      index: "01",
      name: "东北抗联数字展馆",
      slug: "dongbei-kanglian",
      categoryId: "virtual-exhibitions",
      category: "虚拟展馆 / 历史叙事体验",
      role: "体验架构、界面设计、内容导览、空间叙事",
      year: "2024",
      image: "/images/projects/dongbei-kanglian.jpg",
      videoSlug: "dongbei-kanglian",
      summary: "把历史展陈重构成可漫游、可理解、可停留的沉浸式数字空间。",
      tags: ["虚拟展馆", "红色文化", "空间导览", "叙事体验"],
      intro:
        "这个项目的重点不是简单复制线下展馆，而是重新设计观众理解历史内容的顺序、停留点与浏览节奏。",
      challenge:
        "历史内容信息量大、路径复杂、展项关系密集。如何让用户在虚拟空间里既不迷失，也不被过量说明打断，是设计上的关键难点。",
      detailSections: [
        {
          heading: "项目背景",
          body: "项目面向数字展陈与教育传播场景，希望把线性、静态的展览内容转化为可自主探索的空间体验，让历史信息具备更高的传播效率与更强的现场感。",
        },
        {
          heading: "问题定义",
          body: "传统展陈容易出现内容密集却缺少层次、空间完整却缺少导向的问题。用户知道自己正在看什么，但不清楚接下来为什么应该继续看下一部分。",
        },
        {
          heading: "解决方案",
          body: "我采用“主线浏览 + 章节切换 + 展项聚焦”的三层结构，先建立整体认知，再提供章节式导览，最后进入具体展项内容，让空间路径与信息结构保持一致。",
        },
        {
          heading: "设计结果",
          body: "最终形成了一套可用于线上传播与线下演示的数字展馆体验方案，让内容讲解、自主浏览与重点展项阅读能够在同一结构里自然切换。",
        },
      ],
      keyScreens: [
        "入口空间与主导航建立首次认知层级",
        "章节缩略图帮助用户快速切换主题场景",
        "重点展项采用聚焦式呈现，降低理解负担",
      ],
    },
    {
      id: "liaoshen-battle",
      index: "02",
      name: "六地全视频——辽沈战役",
      slug: "liaoshen-battle",
      categoryId: "virtual-exhibitions",
      category: "虚拟展馆 / 历史主题数字空间",
      role: "空间导览、历史叙事、视觉节奏",
      year: "2024",
      image: "/images/projects/liaoshen-battle.jpg",
      videoSlug: "liaoshen-battle",
      summary: "围绕战役历史建立沉浸式浏览路径，让数字空间承载叙事与纪念双重角色。",
      tags: ["历史展示", "空间叙事", "数字纪念", "导览体验"],
      intro:
        "它更像是一次历史场景与数字纪念空间之间的转换，而不只是素材拼接后的长视频展示。",
      challenge:
        "历史题材需要足够庄重，但如果缺少路径设计，用户会很快失去进入感与持续浏览的动力。",
      detailSections: [],
      keyScreens: [
        "场景切换帮助用户理解战役线索",
        "纪念性空间与导览结构需要同时成立",
      ],
    },
    {
      id: "mr-shooting",
      index: "03",
      name: "仿真射击 MR 训练体验",
      slug: "mr-shooting",
      categoryId: "vr-works",
      category: "VR / MR 交互训练",
      role: "交互流程、体验设计、场景反馈、演示录制",
      year: "2024",
      image: "/images/projects/mr-shooting.jpg",
      videoSlug: "mr-shooting",
      summary: "用沉浸式射击场景强化训练型体验中的参与感、反馈感与可展示性。",
      tags: ["MR 合成", "训练体验", "交互反馈", "沉浸感"],
      intro:
        "我把它视作一次“如何让训练逻辑被设计成可理解体验”的实践，而不是单纯的技术演示。",
      challenge:
        "既要保证用户获得足够强的代入感，又要避免操作逻辑失控，还要兼顾体验者使用与对外展示传播两个场景。",
      detailSections: [],
      keyScreens: [
        "射击场景里的位置判断与目标反馈",
        "MR 合成帮助体验过程具备传播说服力",
      ],
    },
    {
      id: "auto-production",
      index: "04",
      name: "汽车生产线沉浸式展示",
      slug: "auto-production",
      categoryId: "vr-works",
      category: "工业展示 / 数字空间体验",
      role: "视觉叙事、场景导览、展示节奏",
      year: "2023",
      image: "/images/projects/auto-production.jpg",
      videoSlug: "auto-production",
      summary: "让工业展示既具备品牌感，也具备清晰的观看顺序和空间体验。",
      tags: ["工业视觉", "品牌展示", "空间体验", "高质感界面"],
      intro:
        "这个项目更像是把品牌空间、产品细节和用户浏览顺序重新编排成一段有节奏的展示叙事。",
      challenge:
        "工业内容天然偏硬核，容易展示成资料库。如何仍然保持品牌感、距离感与高级感，是核心问题。",
      detailSections: [],
      keyScreens: [
        "空间动线服务于内容理解与视觉停留",
        "产品展示不只看细节，也看浏览节奏",
      ],
    },
    {
      id: "human-body",
      index: "05",
      name: "认识人体系统",
      slug: "human-body",
      categoryId: "vr-works",
      category: "VR 教育 / 医学与科普交互",
      role: "三维信息组织、交互说明、教学体验设计",
      year: "2023",
      image: "/images/projects/human-body.jpg",
      videoSlug: "human-body",
      summary: "把抽象的人体知识转成可观察、可交互的空间化学习体验。",
      tags: ["教育 VR", "人体系统", "三维信息", "科普体验"],
      intro:
        "它的核心是让人体知识不再停留在二维图示，而是变成可以进入、可以理解的空间结构。",
      challenge:
        "医学与科普内容术语密集，如何在保证准确性的同时降低理解门槛，是设计重点。",
      detailSections: [],
      keyScreens: [
        "系统结构需要在空间中维持可读性",
        "说明面板既要解释知识，也不能打断沉浸感",
      ],
    },
    {
      id: "j15-training",
      index: "06",
      name: "VR+歼-15虚拟驾驶及实战演练操作系统",
      slug: "j15-training",
      categoryId: "vr-works",
      category: "VR 军事仿真 / 飞行训练",
      role: "驾驶视角设计、交互流程、情境模拟",
      year: "2023",
      image: "/images/projects/j15-training.jpg",
      videoSlug: "j15-training",
      summary: "通过驾驶舱视角和实战化情境模拟，建立高沉浸度的飞行训练体验。",
      tags: ["飞行训练", "驾驶视角", "情境模拟", "军事仿真"],
      intro:
        "这个项目聚焦的是用户如何在高强度模拟环境里完成感知、判断与操作，而不是单纯浏览模型。",
      challenge:
        "高沉浸场景会天然增加感官压力，需要在真实感与可理解性之间找到平衡。",
      detailSections: [],
      keyScreens: [
        "驾驶舱内的信息层级决定操作理解效率",
        "训练场景需要同时提供氛围与方向感",
      ],
    },
    {
      id: "deck-operations",
      index: "07",
      name: "舰载机起落体系演练创新设计",
      slug: "deck-operations",
      categoryId: "vr-works",
      category: "VR 军事仿真 / 甲板流程训练",
      role: "流程还原、角色分工可视化、训练体验",
      year: "2023",
      image: "/images/projects/deck-operations.jpg",
      videoSlug: "deck-operations",
      summary: "围绕舰载机起降过程中的协同流程与岗位逻辑建立可训练、可理解的演练场景。",
      tags: ["流程训练", "角色分工", "协同体验", "甲板场景"],
      intro:
        "它更关注复杂流程中的协同关系如何被看见，而不是只看单一设备操作。",
      challenge:
        "流程类项目的难点在于用户需要同时理解场景、角色和时序，任何一个层级混乱都会导致整体失效。",
      detailSections: [],
      keyScreens: [
        "流程理解必须通过场景和角色同步建立",
        "复杂训练项目需要更强的时序表达能力",
      ],
    },
    {
      id: "battle-tank",
      index: "08",
      name: "BattleTank 获奖游戏",
      slug: "battle-tank",
      categoryId: "award-game",
      category: "游戏设计 / Unity 3D 坦克对战",
      role: "玩法设计、关卡推进、战斗反馈、系统整合",
      year: "2024",
      image: "/images/projects/battle-tank.svg",
      videoSlug: "battle-tank",
      summary: "围绕坦克对战、关卡推进与射击反馈构建完整玩法循环，体现游戏设计与交互节奏控制能力。",
      tags: ["游戏设计", "关卡节奏", "战斗反馈", "Unity"],
      intro:
        "这是一个更能直接体现我游戏设计能力的项目。它不只是一个可运行程序，而是一套围绕移动、射击、爆炸反馈、成长与关卡推进组织起来的完整体验。",
      challenge:
        "游戏项目的核心难点不是把功能堆出来，而是让玩法目标、战斗节奏、反馈层级和关卡推进之间形成稳定循环，让玩家愿意持续投入。",
      detailSections: [
        {
          heading: "项目背景",
          body: "BattleTank 是我用来集中验证游戏设计判断的一次完整实践。相比偏展示型的作品，它更强调玩家行为、实时反馈和目标推进之间的动态关系。",
        },
        {
          heading: "玩法目标",
          body: "我希望玩家在最短时间内建立明确目标感：看得懂敌我关系、理解射击结果，并在推进中持续感到节奏变化，而不是陷入重复操作。",
        },
        {
          heading: "核心循环",
          body: "核心体验围绕“移动观察 - 瞄准射击 - 命中反馈 - 风险规避 - 继续推进”展开。每一步都既服务操作判断，也服务爽感建立。",
        },
        {
          heading: "关卡与节奏",
          body: "关卡推进不是单纯增加敌人数，而是通过空间关系、压迫感和反馈频率的变化，让玩家感受到难度在被设计，而不是随机变难。",
        },
        {
          heading: "反馈设计",
          body: "战斗反馈包含命中感、爆炸感、受击感和阶段推进感。它们不仅决定是否好玩，也直接决定玩家是否能快速理解自己的行为结果。",
        },
        {
          heading: "我的反思",
          body: "这个项目让我更明确地意识到，游戏设计最考验的不是单点创意，而是是否能把目标、规则、反馈和节奏组织成一个稳定且可持续的体验系统。",
        },
      ],
      keyScreens: [
        "移动、瞄准、射击与规避必须形成连续判断链条",
        "关卡推进需要让难度抬升可感但不过载",
        "反馈设计既服务爽感，也服务策略判断",
      ],
    },
    {
      id: "mai",
      index: "09",
      name: "获奖作品《霾》",
      slug: "mai",
      categoryId: "award-films",
      category: "获奖影像 / 氛围叙事短片",
      role: "氛围构建、镜头语言、情绪表达",
      year: "2022",
      image: "/images/projects/mai.jpg",
      videoSlug: "mai",
      summary: "用电影化光影与场景细节建立压抑而克制的情绪空间。",
      tags: ["影像叙事", "氛围构建", "情绪表达", "视觉控制"],
      intro:
        "这是一支更偏气质控制与情绪叙事的作品，它的重点在于让观众感到空间本身在说话。",
      challenge:
        "情绪型作品很容易只剩风格，如何让画面质感与叙事意味同时成立，是表达核心。",
      detailSections: [],
      keyScreens: [
        "场景和道具共同参与叙事",
        "光影并不是装饰，而是情绪组织方式",
      ],
    },
    {
      id: "xiaozhihui",
      index: "10",
      name: "获奖短片《小智慧大道理》",
      slug: "xiaozhihui",
      categoryId: "award-films",
      category: "获奖动画短片 / 二维卡通叙事",
      role: "角色风格、故事表达、节奏控制",
      year: "2022",
      image: "/images/projects/xiaozhihui.jpg",
      videoSlug: "xiaozhihui",
      summary: "以轻松鲜明的卡通风格承载寓言式主题，让表达更容易被观看与记住。",
      tags: ["二维动画", "卡通叙事", "寓言表达", "节奏感"],
      intro:
        "这个项目的重点不是复杂技法，而是用简洁直接的方式把主题讲清楚，让内容既轻松又有表达力。",
      challenge:
        "卡通风格容易停留在趣味层面，需要通过角色、色彩和节奏控制让它真正承载观点。",
      detailSections: [],
      keyScreens: [
        "视觉风格要服务叙事，而不只是装饰",
        "轻量表达更考验节奏与删减能力",
      ],
    },
    {
      id: "fuxi-story",
      index: "11",
      name: "获奖短片《伏羲传》",
      slug: "fuxi-story",
      categoryId: "award-films",
      category: "文化影像 / 东方视觉表达",
      role: "视觉风格、镜头氛围、叙事转译",
      year: "2022",
      image: "/images/projects/fuxi-story.jpg",
      videoSlug: "fuxi-story",
      summary: "以东方水墨气质重译传统文化叙事，让神话题材在现代影像中保持辨识度。",
      tags: ["中国文化", "水墨气质", "氛围叙事", "艺术表达"],
      intro:
        "它不是单纯的动画呈现，而是一次关于传统文化如何被现代视觉重新阅读的尝试。",
      challenge:
        "文化题材容易落入符号复刻，真正困难的是让观众感受到传统意象背后的气质，而不是只看到表面元素。",
      detailSections: [],
      keyScreens: [
        "风格化表达要服务文化气质，而不是表面符号",
        "神话叙事需要在现代语境里重新建立距离感",
      ],
    },
  ] satisfies Project[],
  about: {
    title: "我关注界面背后的秩序、情绪与决策。",
    body:
      "我的核心兴趣长期集中在虚拟现实、数字媒体、游戏设计与交互体验研究。对我来说，好的作品不只要能运行、能展示，还要在机制、空间、界面和内容之间建立清晰关系，让用户愿意理解、愿意探索、愿意继续停留。",
    cards: [
      {
        title: "清晰的信息结构",
        description:
          "无论是虚拟展馆、VR 教学还是游戏界面，我都会先梳理主次关系与认知顺序，再决定形式如何出现。",
      },
      {
        title: "有节奏的交互体验",
        description:
          "我重视反馈层级、目标感和推进节奏，希望用户始终知道自己在做什么，以及为什么愿意继续。",
      },
      {
        title: "可落地的系统化设计",
        description:
          "我会把审美、研究与实现放在同一个框架里理解，让表达不是孤立的美术结果，而是可以被执行和复用的方法。",
      },
    ] satisfies AboutCard[],
  },
  skillGroups: [
    {
      title: "虚拟现实与交互",
      items: ["沉浸式导览", "空间交互", "用户路径设计", "交互原型", "体验评估"],
    },
    {
      title: "游戏设计与数字媒体",
      items: ["玩法设计", "关卡节奏", "战斗反馈", "叙事体验", "动态影像"],
    },
    {
      title: "研究与方法",
      items: ["信息架构", "交互叙事", "可用性分析", "用户研究", "设计交付"],
    },
    {
      title: "工具与技术",
      items: ["C++", "Unreal Engine", "Unity", "Blender", "C4D", "Figma", "Framer"],
    },
  ] satisfies SkillGroup[],
  timeline: [
    {
      year: "2025 至今",
      title: "虚拟现实 / 数字媒体方向持续实践",
      subtitle: "围绕沉浸式体验、数字展陈与交互表达展开研究与设计",
      description:
        "重点处理虚拟空间中的导览路径、认知层级、界面节奏与内容表达，让复杂场景同时具备理解效率与观看质量。",
      keywords: ["虚拟现实", "数字媒体", "交互设计"],
    },
    {
      year: "2023 至 2025",
      title: "UI UX 与空间体验设计实践",
      subtitle: "从界面系统延展到场景化叙事与沉浸式内容组织",
      description:
        "在复杂项目中持续探索界面规范、空间叙事和视觉控制之间的关系，逐步形成更稳定的方法论与项目判断力。",
      keywords: ["界面系统", "叙事体验", "项目方法"],
    },
    {
      year: "2021 至 2023",
      title: "视觉表达与数字内容创作",
      subtitle: "以影像、动画和展示型内容为基础建立视觉语言",
      description:
        "这一阶段更关注气质控制、节奏把握与信息美感，为后续转向虚拟现实与数字媒体研究打下稳定的视觉基础。",
      keywords: ["视觉语言", "影像表达", "动画叙事"],
    },
  ] satisfies TimelineItem[],
  publications: [
    {
      title: "虚拟场景里的导览设计，解决的不是按钮问题",
      date: "2026.05",
      excerpt: "用户在沉浸式空间里最先需要的不是更多功能，而是方向感、判断依据与足够清晰的浏览节奏。",
    },
    {
      title: "数字媒体的高级感，来自秩序和克制",
      date: "2026.04",
      excerpt: "真正让作品显得成熟的，往往不是效果本身，而是比例、停顿、留白与视觉关系的校准。",
    },
    {
      title: "交互体验研究不只是测试，更是理解行为",
      date: "2026.03",
      excerpt: "我更关注用户如何在空间中建立认知、如何感到安心，以及怎样的设计会让他们愿意继续停留。",
    },
  ] satisfies Publication[],
};

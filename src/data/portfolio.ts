export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  id: string;
  index: string;
  name: string;
  slug: string;
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
    location: "上海 / 杭州 / 远程",
    status: "正在寻找虚拟现实、数字媒体与交互设计相关机会",
    statement: "设计不是装饰，是让复杂变得可感知。",
    email: "1169596647@qq.com",
    phone: "15617322977",
    wechat: "lmy371325",
    pdfHref: "/resume.pdf",
  } satisfies PortfolioProfile,
  projects: [
    {
      id: "dongbei-kanglian",
      index: "01",
      name: "东北抗联数字展馆",
      slug: "dongbei-kanglian",
      category: "VR 展示 / 历史叙事体验",
      role: "体验架构、界面设计、内容导览、空间叙事",
      year: "2024",
      image: "/images/projects/dongbei-kanglian.jpg",
      videoSlug: "dongbei-kanglian",
      summary: "把历史展陈重构成可漫游、可理解、可停留的沉浸式数字空间。",
      tags: ["虚拟展馆", "红色文化", "空间导览", "叙事体验"],
      intro:
        "这个项目的重点不是简单复刻线下展馆，而是重新设计用户理解历史内容的顺序、停留点与浏览节奏。",
      challenge:
        "历史内容信息量大、路径复杂、展项关系密集。要让用户在虚拟空间中既不迷失，也不被过度说明打断，是设计上的关键难点。",
      detailSections: [
        {
          heading: "项目背景",
          body:
            "项目面向数字展陈与教育传播场景，希望把线性、静态的展览内容转化为可自主探索的空间体验，让历史信息具备更高的传播效率与更强的现场感。",
        },
        {
          heading: "问题定义",
          body:
            "传统展陈容易出现内容密集却缺少层次、空间完整却缺少导向的问题。用户知道自己正在看什么，但不清楚接下来为什么应该看下一部分。",
        },
        {
          heading: "目标用户",
          body:
            "主要用户包括普通参观者、高校观众与讲解传播人员，因此设计需要同时兼顾首次浏览、目标检索与引导讲解三种使用路径。",
        },
        {
          heading: "设计挑战",
          body:
            "项目需要在纪念性空间的庄重感与数字产品的可用性之间建立平衡，既不能让界面喧宾夺主，也不能让用户在虚拟场景里失去方向。",
        },
        {
          heading: "解决方案",
          body:
            "我采用“主线浏览 + 节点切换 + 展项聚焦”的三层结构，先建立整体认知，再提供章节式导览，最后进入具体内容层级，使空间路径与信息结构保持一致。",
        },
        {
          heading: "设计结果",
          body:
            "最终形成了一套可用于线上传播与线下演示的数字展馆体验方案，让内容讲解、自主漫游与重点展项浏览能在同一结构里自然切换。",
        },
        {
          heading: "我的反思",
          body:
            "这个项目让我更明确地意识到，界面设计真正重要的不是堆叠信息，而是决定什么先出现、什么后出现，以及用户在什么时刻应该被安静引导。",
        },
      ],
      keyScreens: [
        "入口空间与主导航建立首次认知层",
        "章节缩略图帮助用户快速切换主题场景",
        "重点展项采用聚焦式呈现，降低理解负担",
      ],
    },
    {
      id: "battle-tank",
      index: "02",
      name: "BattleTank 获奖游戏",
      slug: "battle-tank",
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
        "游戏项目的核心难点不是把功能堆出来，而是让玩法目标、战斗节奏、反馈层级和关卡推进之间形成稳定循环，让玩家愿意继续玩下去。",
      detailSections: [],
      keyScreens: [
        "移动、瞄准、射击与爆炸反馈需要形成清晰闭环",
        "单人推进和多人对战都要求玩法结构足够稳定",
      ],
    },
    {
      id: "mr-shooting",
      index: "03",
      name: "仿真射击 MR 训练体验",
      slug: "mr-shooting",
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
        "射击场景中的位置判断与目标反馈",
        "MR 合成帮助体验过程具备传播说服力",
      ],
    },
    {
      id: "sand-casting",
      index: "04",
      name: "全自动砂型铸造生产系统",
      slug: "sand-casting",
      category: "工业仿真 / VR 教学系统",
      role: "流程可视化、交互设计、工业内容表达",
      year: "2024",
      image: "/images/projects/sand-casting.jpg",
      videoSlug: "sand-casting",
      summary: "把复杂工业流程转成可观察、可学习、可交互的虚拟教学场景。",
      tags: ["工业流程", "VR 教学", "工艺展示", "流程理解"],
      intro:
        "这个项目的重点不在于设备本身的复杂度，而在于如何让工业工艺被更直观地理解。",
      challenge:
        "现实生产系统逻辑复杂、节奏连续，如果只做模型展示，用户很难真正理解工艺之间的关系与顺序。",
      detailSections: [],
      keyScreens: [
        "生产设备与工艺环节的空间对应关系",
        "让抽象流程具备可学习的浏览顺序",
      ],
    },
    {
      id: "liaoshen-battle",
      index: "05",
      name: "六地全视频——辽沈战役",
      slug: "liaoshen-battle",
      category: "VR 展示 / 历史主题数字空间",
      role: "空间导览、历史叙事、视觉节奏",
      year: "2024",
      image: "/images/projects/liaoshen-battle.jpg",
      videoSlug: "liaoshen-battle",
      summary: "围绕战役历史建立沉浸式浏览路径，让数字空间承担叙事与纪念双重角色。",
      tags: ["历史展示", "空间叙事", "数字纪念", "导览体验"],
      intro:
        "它更像是一次历史场景与数字纪念空间之间的转换，而不只是简单的视频集合。",
      challenge:
        "历史题材需要足够庄重，但如果缺少路径设计，用户会快速失去进入感与持续浏览的动力。",
      detailSections: [],
      keyScreens: [
        "场景切换帮助用户理解战役线索",
        "纪念性空间与导览结构需要同时成立",
      ],
    },
    {
      id: "auto-production",
      index: "06",
      name: "汽车生产线沉浸式展示",
      slug: "auto-production",
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
        "工业内容天然偏硬核，容易展示成资料库；如何仍然保持品牌感、距离感与高级感，是核心问题。",
      detailSections: [],
      keyScreens: [
        "空间动线服务于内容理解与视觉停留",
        "产品展示不只看细节，也看浏览节奏",
      ],
    },
    {
      id: "virtual-sculpting",
      index: "07",
      name: "虚拟雕刻教学演示",
      slug: "virtual-sculpting",
      category: "三维数字艺术 / 教学演示",
      role: "创作流程展示、软件操作说明、视觉表达",
      year: "2023",
      image: "/images/projects/virtual-sculpting.jpg",
      videoSlug: "virtual-sculpting",
      summary: "把三维雕刻从软件操作转化为可理解、可学习的数字创作流程。",
      tags: ["三维艺术", "教学演示", "创作流程", "软件交互"],
      intro:
        "这个作品强调的不只是结果模型，而是从基础形体到细节塑造的完整创作方法。",
      challenge:
        "教学型内容容易碎片化，需要在过程、界面和讲解之间建立稳定节奏，避免信息过载。",
      detailSections: [],
      keyScreens: [
        "创作阶段要与软件界面信息同步对应",
        "教学表达需要比成品展示更注重步骤逻辑",
      ],
    },
    {
      id: "human-body",
      index: "08",
      name: "认识人体系统",
      slug: "human-body",
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
        "医学与科普内容常常术语密集，如何在保证准确性的同时降低理解门槛，是设计重点。",
      detailSections: [],
      keyScreens: [
        "系统结构需要在空间中维持可读性",
        "说明面板既要解释知识，也不能打断沉浸感",
      ],
    },
    {
      id: "j15-training",
      index: "09",
      name: "VR+歼-15虚拟驾驶及实战演练操作系统",
      slug: "j15-training",
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
      id: "carrier-fleet",
      index: "10",
      name: "VR+航母编队演练系统创新设计",
      slug: "carrier-fleet",
      category: "VR 军事仿真 / 编队与指挥展示",
      role: "信息组织、模型演示、交互导览",
      year: "2023",
      image: "/images/projects/carrier-fleet.jpg",
      videoSlug: "carrier-fleet",
      summary: "用交互界面与模型演示帮助用户理解航母编队的结构与协同逻辑。",
      tags: ["编队展示", "指挥逻辑", "交互导览", "模型理解"],
      intro:
        "项目更强调复杂系统如何被讲清楚，而不是只把编队关系可视化地摆出来。",
      challenge:
        "编队关系复杂、信息专业度高，如果没有良好结构，很难在短时间内建立认知。",
      detailSections: [],
      keyScreens: [
        "模型展示必须服务于关系理解",
        "界面语言需要足够克制，避免干扰认知",
      ],
    },
    {
      id: "liaoning-carrier",
      index: "11",
      name: "“辽宁号”航母虚拟仿真体验系统设计",
      slug: "liaoning-carrier",
      category: "VR 军事仿真 / 沉浸式体验系统",
      role: "空间还原、体验设计、场景浏览",
      year: "2023",
      image: "/images/projects/liaoning-carrier.jpg",
      videoSlug: "liaoning-carrier",
      summary: "以航母空间和舰载机环境为核心，建立更具现场感的沉浸式体验。",
      tags: ["空间还原", "沉浸体验", "设备认知", "场景浏览"],
      intro:
        "这个项目强调的是复杂装备环境如何被更容易理解和传播，而不是停留在展示层面。",
      challenge:
        "大型设备空间天然会让用户被场景吸引，但真正困难的是让浏览过程具备清晰导向与叙事次序。",
      detailSections: [],
      keyScreens: [
        "空间浏览需要有节奏地建立场景认知",
        "真实感不能取代信息设计本身",
      ],
    },
    {
      id: "deck-operations",
      index: "12",
      name: "舰载机起落体系演练创新设计",
      slug: "deck-operations",
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
      id: "mai",
      index: "13",
      name: "获奖作品《霾》",
      slug: "mai",
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
      index: "14",
      name: "获奖短片《小智慧大道理》",
      slug: "xiaozhihui",
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
      index: "15",
      name: "获奖短片《伏羲传》",
      slug: "fuxi-story",
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
        "风格化表达要服务文化气质而不是表面符号",
        "神话叙事需要在现代语言里重新建立距离感",
      ],
    },
  ] satisfies Project[],
  about: {
    title: "我关注界面背后的秩序、情绪与决策。",
    body:
      "我的核心兴趣长期集中在虚拟现实、数字媒体、游戏设计与交互体验研究。对我来说，好的作品不只是“能运行”或“看起来完整”，而是能在机制、空间、界面和内容之间建立清晰关系，让用户愿意理解、愿意探索、愿意继续停留。",
    cards: [
      {
        title: "清晰的信息结构",
        description:
          "无论是 VR 场景、数字展馆还是界面系统，我都会先梳理主次关系与认知顺序，再决定形式如何出现。",
      },
      {
        title: "有节奏的游戏与交互体验",
        description:
          "我重视反馈层级、目标感和推进节奏，希望用户在互动过程中始终知道自己在做什么，以及为什么愿意继续。",
      },
      {
        title: "可落地的研究方法",
        description:
          "我会把设计放在研究、叙事与实现之间理解，让表达不是孤立美术，而是可以被讲清楚、被执行、被验证。",
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
        "重点处理虚拟空间中的导览路径、认知层级、界面节奏与内容表达，让复杂场景既具备理解效率，也具备观看质量。",
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
        "这一阶段更关注气质控制、节奏把握与信息美感，为后续转向虚拟现实与数字媒体研究打下了稳定的视觉基础。",
      keywords: ["视觉语言", "影像表达", "动画叙事"],
    },
  ] satisfies TimelineItem[],
  publications: [
    {
      title: "虚拟场景里的导览设计，解决的不是按钮问题",
      date: "2026.05",
      excerpt:
        "用户在沉浸式空间中最先需要的不是更多功能，而是方向感、判断依据与足够清晰的浏览节奏。",
    },
    {
      title: "数字媒体高级感，来自秩序和克制",
      date: "2026.04",
      excerpt:
        "真正让作品显得成熟的，往往不是效果本身，而是比例、停顿、留白与视觉关系的校准。",
    },
    {
      title: "交互体验研究不只是测试，更是理解行为",
      date: "2026.03",
      excerpt:
        "我更关注用户如何在空间中建立认知、如何感到安心，以及怎样的设计会让他们愿意继续停留。",
    },
  ] satisfies Publication[],
};

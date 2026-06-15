const questions = [
  {
    title: "如果新的一岁是一座花园，你最想让它发生什么变化？",
    options: [
      ["认真照料一种植物，看它缓慢生长", "ROOT", "quiet", "living", "quiet"],
      ["收集来自不同地方的种子，让花园充满未知", "ROAM", "explore", "play", "wonder"],
      ["让树干变得更坚韧，足以迎接风雨", "RISE", "brave", "power", "brave"],
      ["修复一个被遗忘的角落，让旧事物重新发光", "ROOT", "repair", "repair", "repair"],
    ],
  },
  {
    title: "一个完全属于你的下午，哪种节奏最吸引你？",
    options: [
      ["重复练习一门手上技艺，直到进入忘我的状态", "ROOT", "shape", "form", "earth"],
      ["沿着地图拜访几间旧工坊，认识流传至今的技艺", "ROAM", "shape", "heritage", "heritage"],
      ["为自己设定一个小目标，并认真完成它", "RISE", "brave", "power", "brave"],
      ["从零开始，创造一件此前不存在的东西", "ROAM", "shape", "build", "material"],
    ],
  },
  {
    title: "未来的自己准备送你一件礼物，你希望是什么？",
    options: [
      ["一件保留着手作痕迹、能够长久陪伴的物品", "ROOT", "shape", "form", "earth"],
      ["一个更加稳定、有力量感的身体", "RISE", "brave", "power", "brave"],
      ["一种能够让内心重新安静下来的方法", "ROOT", "quiet", "ritual", "quiet"],
      ["一盒能让你探索不同质地与变化的材料", "ROAM", "shape", "build", "material"],
    ],
  },
  {
    title: "走进一座安静的旧房子，什么最先吸引你？",
    options: [
      ["光影、植物与空间形成的微妙秩序", "ROOT", "quiet", "living", "quiet"],
      ["留有岁月痕迹、等待被修复的旧物", "ROOT", "repair", "repair", "repair"],
      ["木材、织物与不同表面带来的触感", "ROAM", "shape", "build", "material"],
      ["一片可以随着音乐自由移动的空地", "RISE", "express", "rhythm", "poet"],
    ],
  },
  {
    title: "哪种挑战最容易让你产生成就感？",
    options: [
      ["用耐心完成一件精细、不能着急的事", "ROOT", "repair", "repair", "repair"],
      ["走进一门陌生的古老技艺，理解它的来处", "ROAM", "shape", "heritage", "heritage"],
      ["把抽象想法反复塑造成真实的作品", "ROOT", "shape", "form", "earth"],
      ["不借助语言，也能准确表达自己", "RISE", "express", "rhythm", "poet"],
    ],
  },
  {
    title: "如果要记录这个夏天，你更愿意留下什么？",
    options: [
      ["一件经过多次打磨、逐渐完整的作品", "ROOT", "shape", "form", "earth"],
      ["一组来自不同周末的小物与故事", "ROAM", "explore", "play", "wonder"],
      ["一段记录身体与节奏越来越协调的影像", "RISE", "express", "align", "poet"],
      ["一种由古老香方留住的夏日气味", "ROAM", "shape", "heritage", "heritage"],
    ],
  },
  {
    title: "当生活有些混乱时，哪种方式最能帮助你重新找回自己？",
    options: [
      ["整理空间，观察季节与细微变化", "ROOT", "quiet", "living", "quiet"],
      ["用双手接触材料，专注于眼前的创造", "ROAM", "shape", "fire", "material"],
      ["让身体充分发力，痛快地流一次汗", "RISE", "brave", "strike", "brave"],
      ["跟随音乐和节奏，让身体自然移动", "RISE", "express", "rhythm", "poet"],
    ],
  },
  {
    title: "你最希望朋友用哪个词形容新一岁的你？",
    options: [
      ["沉静而有深度", "ROOT", "quiet", "ink", "quiet"],
      ["好奇而不设边界", "ROAM", "explore", "play", "wonder"],
      ["勇敢而有力量", "RISE", "brave", "strike", "brave"],
      ["灵巧而富有创造力", "ROAM", "shape", "heritage", "heritage"],
    ],
  },
  {
    title: "你更向往哪种学习关系？",
    options: [
      ["跟随一位老师，理解一门技艺漫长的来处", "ROOT", "repair", "repair", "repair"],
      ["在不同人的带领下，不断打开新世界", "ROAM", "explore", "play", "wonder"],
      ["获得清晰反馈，一步步找到更协调的动作", "RISE", "express", "align", "poet"],
      ["与同样喜欢创造的人交换灵感", "ROAM", "shape", "heritage", "heritage"],
    ],
  },
  {
    title: "面对暂时无法完成的事情，你通常更愿意怎么做？",
    options: [
      ["理解它的来历，耐心修复问题", "ROOT", "repair", "repair", "repair"],
      ["先做出一个版本，再在尝试中不断修正", "ROOT", "shape", "form", "earth"],
      ["持续训练，直到自己拥有解决它的能力", "RISE", "brave", "power", "brave"],
      ["改变规则，用自己的方式继续探索", "ROAM", "explore", "play", "wonder"],
    ],
  },
  {
    title: "哪组感受最令你着迷？",
    tagWeight: 3,
    options: [
      ["光影、留白与恰到好处的平衡", "ROOT", "quiet", "ink", "quiet"],
      ["古老香方、呼吸与安静流动的时间", "ROAM", "shape", "heritage", "heritage"],
      ["温度、碰撞与材料发生变化的瞬间", "ROAM", "shape", "fire", "material"],
      ["泥土、形状与器物逐渐成形", "ROOT", "shape", "form", "earth"],
    ],
  },
  {
    title: "新的一岁，你最想相信哪句话？",
    directionWeight: 3,
    options: [
      ["理解来处，也是在为未来留下新的可能", "ROOT", "repair", "repair", "repair"],
      ["我不必急着定义自己", "ROAM", "explore", "play", "wonder"],
      ["我的身体，会用自己的语言带我抵达更远的地方", "RISE", "express", "align", "poet"],
      ["我可以亲手重建自己的生活", "ROAM", "shape", "fire", "material"],
    ],
  },
];

const activities = {
  root: {
    living: ["花道", "在花与季节的变化中，练习观察、取舍与温柔的秩序。"],
    ritual: ["香道", "让气味、呼吸与仪式感，为日常建立一处安静的停泊地。"],
    ink: ["国画", "在水墨与留白之间，找到属于自己的观看与表达方式。"],
    repair: ["古籍／文物修复", "以耐心回应时间，让旧事物在手中重新获得生命。"],
    form: ["陶艺", "从泥土开始，借由反复塑造，创造能够长久陪伴的器物。"],
  },
  rise: {
    strike: ["拳击", "在出拳与防守中释放能量，也练习面对未知时的果断。"],
    align: ["普拉提", "通过呼吸、控制与稳定，重新认识身体内部的力量。"],
    rhythm: ["国标舞", "让节奏唤醒身体，在移动中建立自信与表达。"],
    power: ["健身", "用可感知的成长积累力量，让身体成为可靠的同行者。"],
  },
  roam: {
    heritage: ["蓝染", "掐丝珐琅", "篆刻", "刺绣"],
    fire: ["吹玻璃", "金工／银饰", "制香", "陶艺体验"],
    build: ["木工", "皮具", "Tufting", "银饰"],
    play: ["拼豆", "蓝染", "吹玻璃", "Tufting"],
  },
};

const recommendationPools = {
  quiet: ["花道", "香道", "国画"],
  repair: ["古籍／文物修复", "篆刻", "刺绣"],
  earth: ["陶艺", "国画", "木工"],
  heritage: ["蓝染", "掐丝珐琅", "篆刻", "刺绣", "制香", "画唐卡"],
  material: ["吹玻璃", "金工／银饰", "木工", "皮具", "Tufting", "陶艺体验"],
  brave: ["拳击", "健身"],
  poet: ["普拉提", "国标舞"],
};

const wonderCombinations = {
  play: {
    title: "轻盈色彩漫游",
    items: ["拼豆", "蓝染", "Tufting", "刺绣"],
  },
  fire: {
    title: "火光与材料实验",
    items: ["吹玻璃", "金工／银饰", "掐丝珐琅", "制香"],
  },
  build: {
    title: "双手建造计划",
    items: ["木工", "皮具", "银饰", "Tufting"],
  },
  heritage: {
    title: "古老技艺采集",
    items: ["蓝染", "篆刻", "刺绣", "掐丝珐琅"],
  },
  cross: {
    title: "跨界好奇组合",
    items: ["吹玻璃", "蓝染", "皮具", "拼豆"],
  },
};

const roamPersonaCombinations = {
  heritage: {
    heritage: ["蓝染", "篆刻", "刺绣", "画唐卡"],
    fire: ["掐丝珐琅", "制香", "蓝染", "篆刻"],
    build: ["篆刻", "刺绣", "掐丝珐琅", "蓝染"],
    play: ["蓝染", "刺绣", "掐丝珐琅", "画唐卡"],
  },
  material: {
    heritage: ["陶艺体验", "金工／银饰", "木工", "皮具"],
    fire: ["吹玻璃", "金工／银饰", "陶艺体验", "Tufting"],
    build: ["木工", "皮具", "金工／银饰", "Tufting"],
    play: ["Tufting", "吹玻璃", "皮具", "陶艺体验"],
  },
};

const personalities = {
  quiet: {
    en: "The Quiet Cultivator",
    cn: "静境耕耘者",
    symbol: "Q",
    poster: "./assets/personas/final-posters/quiet.jpg",
    quoteCn: "注意，是投入与热爱的开始。",
    quoteEn: "ATTENTION IS THE BEGINNING OF DEVOTION.",
    quoteAuthor: "MARY OLIVER",
    definition: "你相信真正重要的变化，常常安静地发生。",
    description:
      "你并不急于追逐所有新鲜事，而更愿意把注意力交给值得长久相处的人与事。你敏锐地感受季节、秩序和细节，也拥有让日常重新变得丰盛的能力。",
    psychology:
      "从心流理论看，持续练习与细微反馈更容易让你进入专注状态。对你而言，成长不是突然成为另一个人，而是在稳定投入中逐渐靠近自己。",
  },
  repair: {
    en: "The Time Mender",
    cn: "时光修复者",
    symbol: "M",
    poster: "./assets/personas/final-posters/repair.jpg",
    quoteCn: "要解开一团困扰，总要从某处开始。",
    quoteEn: "TO UNRAVEL A TORMENT YOU MUST BEGIN SOMEWHERE.",
    quoteAuthor: "LOUISE BOURGEOIS",
    definition: "你看见时间留下的痕迹，也愿意赋予它新的意义。",
    description:
      "你拥有少见的耐心与理解力。相比快速替换，你更相信观察、理解与修复。你并不困在过去，而是擅长从旧事物中辨认价值，再温柔地把它带向未来。",
    psychology:
      "你偏好的体验回应了自我决定理论中的胜任感与连接感：在复杂而精细的工作里，你能感受到能力增长，也能与一段更漫长的时间建立联系。",
  },
  earth: {
    en: "The Earth Shaper",
    cn: "泥火塑形者",
    symbol: "E",
    poster: "./assets/personas/final-posters/earth.jpg",
    quoteCn: "重要的是，让未知的自己逐渐显现。",
    quoteEn: "MAKING YOUR UNKNOWN KNOWN IS THE IMPORTANT THING.",
    quoteAuthor: "GEORGIA O’KEEFFE",
    definition: "你愿意反复塑造，直到心中的形状真正出现。",
    description:
      "你既享受沉浸，也需要创造留下真实痕迹。你明白作品不会一次成形，生活也是如此。反复调整并不令你沮丧，反而让你感到自己正在参与变化。",
    psychology:
      "具身认知认为，双手与材料的互动会参与思考本身。对你而言，触摸、塑造和修正不仅是制作过程，也是整理内心的方法。",
  },
  heritage: {
    en: "The Heritage Weaver",
    cn: "古意织梦者",
    symbol: "H",
    poster: "./assets/personas/final-posters/heritage.jpg",
    quoteCn: "定义属于定义者，而非被定义者。",
    quoteEn: "DEFINITIONS BELONG TO THE DEFINERS, NOT THE DEFINED.",
    quoteAuthor: "TONI MORRISON",
    definition: "你喜欢从古老技艺里，织出只属于此刻的新故事。",
    description:
      "你对精细、美感与文化痕迹保持天然好奇。你既尊重传统，也不愿被传统限制。每次学习一种技艺，都是你与世界建立新联系的方式。",
    psychology:
      "开放性让你愿意接近陌生文化，而创造需求又让你希望留下自己的表达。多样但相互呼应的体验，最能保持你的投入感。",
  },
  material: {
    en: "The Material Alchemist",
    cn: "材料炼金师",
    symbol: "A",
    poster: "./assets/personas/final-posters/material.jpg?v=2",
    quoteCn: "艺术家并非特殊的人，而是能让寻常之物变得特别的普通人。",
    quoteEn: "AN ARTIST IS AN ORDINARY PERSON WHO CAN TAKE ORDINARY THINGS AND MAKE THEM SPECIAL.",
    quoteAuthor: "RUTH ASAWA",
    definition: "你着迷于变化发生的瞬间，也享受亲手让它成为现实。",
    description:
      "火焰、纹理、结构和偶然性会迅速点亮你的好奇。你喜欢理解不同材料的脾气，也享受把抽象想法变成可触摸作品的过程。",
    psychology:
      "新奇寻求与即时反馈共同驱动着你的专注。当材料在手中发生变化时，你会自然进入探索、判断和创造不断循环的状态。",
  },
  wonder: {
    en: "The Wonder Collector",
    cn: "万象采集者",
    symbol: "W",
    poster: "./assets/personas/final-posters/wonder.jpg",
    quoteCn: "冒险本身就值得。",
    quoteEn: "ADVENTURE IS WORTHWHILE IN ITSELF.",
    quoteAuthor: "AMELIA EARHART",
    definition: "你不急着定义自己，因为世界仍有太多值得喜欢。",
    description:
      "你的生命力来自开放与好奇。你善于在陌生事物中发现乐趣，也允许兴趣自然发生。对你而言，每一次第一次，都是拓宽自我边界的邀请。",
    psychology:
      "你拥有较强的体验开放性。比起过早承诺一个答案，丰富而低压力的尝试更能帮助你辨认真正愿意继续投入的方向。",
  },
  brave: {
    en: "The Brave Striker",
    cn: "破界行动者",
    symbol: "B",
    poster: "./assets/personas/final-posters/brave.jpg",
    quoteCn: "你必须去做那件你以为自己做不到的事。",
    quoteEn: "YOU MUST DO THE THING YOU THINK YOU CANNOT DO.",
    quoteAuthor: "ELEANOR ROOSEVELT",
    definition: "你想要的成长，不只被理解，也要被身体真实地感受到。",
    description:
      "你渴望一种清晰、有力量的变化。面对挑战时，你愿意用行动回答犹豫。每一次比昨天多完成一点，都会让你更加相信自己的能力。",
    psychology:
      "身体训练能够持续提供清晰反馈，满足胜任感，也通过具身认知影响心理状态。对你而言，力量并非强硬，而是一种可靠的自我支持。",
  },
  poet: {
    en: "The Body Poet",
    cn: "身体诗人",
    symbol: "P",
    poster: "./assets/personas/final-posters/poet.jpg",
    quoteCn: "身体能说出语言无法表达的事。",
    quoteEn: "THE BODY SAYS WHAT WORDS CANNOT.",
    quoteAuthor: "MARTHA GRAHAM",
    definition: "你听见身体细微的语言，也愿意让它自由表达。",
    description:
      "你追求的不是单纯的速度或力量，而是协调、控制与表达。你敏锐地感受呼吸和节奏，并能在身体逐渐展开时，找回稳定与自信。",
    psychology:
      "具身认知强调身体状态与心理经验彼此影响。节奏、呼吸和控制感，能够帮助你在行动中重新建立与自己的联系。",
  },
};

const state = {
  screen: "welcome",
  current: 0,
  answers: [],
  result: null,
  saveHref: "",
  saveFilename: "",
};

const app = document.querySelector("#app");

const visualMotifs = [
  "garden",
  "path",
  "gift",
  "house",
  "mountain",
  "summer",
  "water",
  "star",
  "circle",
  "mend",
  "spark",
  "sun",
];

function motifSvg(name, className = "motif-svg") {
  const paths = {
    garden: `<path d="M38 78C39 52 43 28 49 13M48 38C31 29 21 35 20 52c15 3 24-2 28-14ZM48 58c18-12 29-6 31 11-14 5-25 2-31-11Z"/><circle cx="49" cy="13" r="5"/>`,
    path: `<path d="M18 82c7-30 46-22 58-48 5-11 2-20-2-27M25 77c19-8 35-7 52 1"/><circle cx="76" cy="11" r="5"/>`,
    gift: `<path d="M20 39h60v43H20zM15 28h70v14H15zM50 28v54M49 27C36 25 29 16 35 10c7-6 16 7 14 17Zm2 0c13-2 20-11 14-17-7-6-16 7-14 17Z"/>`,
    house: `<path d="M14 45 50 15l36 30M22 41v43h56V41M42 84V59h17v25"/><path d="M66 27v-9h10v18"/>`,
    mountain: `<path d="m10 80 25-48 15 23 12-18 28 43H10Z"/><path d="m29 43 7 6 7-6M57 45l6 7 7-6"/><circle cx="76" cy="19" r="8"/>`,
    summer: `<circle cx="50" cy="48" r="21"/><path d="M50 8v13M50 75v15M10 49h14M76 49h14M21 20l10 10M70 69l10 10M20 79l11-11M70 29l10-10"/>`,
    water: `<path d="M50 10C40 28 25 43 25 61a25 25 0 0 0 50 0c0-18-15-33-25-51Z"/><path d="M37 64c3 8 9 12 18 12"/>`,
    star: `<path d="m50 10 9 28 29 1-23 17 8 29-23-17-23 17 8-29-23-17 29-1 9-28Z"/>`,
    circle: `<circle cx="50" cy="50" r="33"/><circle cx="50" cy="50" r="18"/><path d="M50 17v66M17 50h66"/>`,
    mend: `<path d="M18 18 82 82M82 18 18 82"/><path d="m37 37 7 7-8 8 8 8-7 7M63 37l-7 7 8 8-8 8 7 7"/><circle cx="50" cy="50" r="38"/>`,
    spark: `<path d="M50 8c2 23 10 35 33 42-23 2-35 10-42 33-2-23-10-35-33-42 23-2 35-10 42-33Z"/><circle cx="78" cy="20" r="5"/>`,
    sun: `<circle cx="50" cy="50" r="18"/><path d="M50 8v20M50 72v20M8 50h20M72 50h20M20 20l15 15M65 65l15 15M20 80l15-15M65 35l15-15"/>`,
  };
  return `<svg class="${className}" viewBox="0 0 100 100" aria-hidden="true">${paths[name] || paths.spark}</svg>`;
}

function personaIllustration(key) {
  const art = {
    quiet: `<circle cx="100" cy="100" r="72"/><path d="M100 160V63M100 91C75 73 57 82 55 108c21 5 36-1 45-17Zm0 31c25-18 43-9 45 17-21 5-36-1-45-17Z"/><circle cx="100" cy="54" r="9"/>`,
    repair: `<circle cx="100" cy="100" r="72"/><path d="M53 48 147 152M147 48 53 152M85 82l14 14-16 16 16 16-14 14m30-60-14 14 16 16-16 16 14 14"/>`,
    earth: `<path d="M58 62h84l-8 92H66l-8-92Z"/><path d="M68 62c8-22 56-22 64 0M78 96c15 10 30 10 44 0"/><path d="M100 54V25M100 39c-19-13-32-6-34 14 16 4 27-1 34-14Zm0 0c19-13 32-6 34 14-16 4-27-1-34-14Z"/>`,
    heritage: `<circle cx="100" cy="100" r="70"/><path d="M45 100c19-34 38-34 56 0s37 34 54 0M45 100c19 34 38 34 56 0s37-34 54 0"/><circle cx="100" cy="100" r="10"/>`,
    material: `<path d="M100 24c5 37 19 57 55 68-36 5-56 19-67 55-5-36-19-56-55-67 36-5 56-19 67-56Z"/><path d="m54 45 18 18M135 128l18 18M142 49l-17 17M62 131l-17 17"/>`,
    wonder: `<path d="M64 78h72v78H64zM76 78V61h48v17"/><path d="M100 78V43M100 58c-17-12-29-5-30 13 14 3 24-1 30-13Zm0 0c17-12 29-5 30 13-14 3-24-1-30-13Z"/><circle cx="43" cy="54" r="7"/><circle cx="153" cy="42" r="5"/>`,
    brave: `<circle cx="100" cy="55" r="18"/><path d="M100 73v55M100 89 62 112M100 89l42 13M100 128l-28 42M100 128l35 37"/><path d="M37 112H12M163 102h25"/>`,
    poet: `<circle cx="100" cy="48" r="16"/><path d="M100 64c-5 32-24 55-51 70M100 64c6 30 27 47 56 56M78 91c15 9 31 9 48-1M49 134c15 1 27 12 34 34M156 120c-13 8-20 21-22 39"/><circle cx="100" cy="100" r="76"/>`,
  };
  return `<svg class="persona-illustration" viewBox="0 0 200 200" aria-hidden="true">${art[key] || art.wonder}</svg>`;
}

function coverMarkSvg(type = "sprout") {
  if (type === "window") {
    return `
      <svg class="cover-mark-svg" viewBox="0 0 160 160" aria-hidden="true">
        <circle cx="80" cy="80" r="66"/>
        <path d="M42 124V63c0-25 17-43 38-43s38 18 38 43v61"/>
        <path d="M80 22v102M42 73h76"/>
        <path d="M80 124c-10-22-5-40 13-55M80 124c13-18 26-23 40-21M80 124c-18-18-32-22-43-15"/>
        <circle cx="94" cy="67" r="4"/>
        <circle cx="120" cy="103" r="4"/>
        <circle cx="37" cy="109" r="4"/>
      </svg>
    `;
  }

  return `
    <svg class="cover-mark-svg" viewBox="0 0 160 160" aria-hidden="true">
      <circle cx="80" cy="80" r="66"/>
      <circle cx="80" cy="80" r="49"/>
      <path d="M80 130V55"/>
      <path d="M80 82C59 63 43 69 41 91c18 5 31-1 39-9Z"/>
      <path d="M80 68c20-18 36-11 38 11-17 5-30 0-38-11Z"/>
      <path d="M43 115c20-9 53-9 74 0M48 127c18-7 45-7 64 0"/>
      <path d="M30 80c8-6 12-6 20 0M110 80c8-6 12-6 20 0"/>
    </svg>
  `;
}

function render() {
  if (state.screen === "welcome") renderWelcome();
  if (state.screen === "quiz") renderQuestion();
  if (state.screen === "result") renderResult();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderWelcome() {
  app.innerHTML = `
    <section class="page paper-card hero">
      <div class="hero-top">
        <div class="dedication-row">
          <p class="eyebrow">Rebuild your world</p>
          <p class="dedication">TO LINDSEY</p>
        </div>
        <div class="hero-mark hero-mark-textured hero-mark-window" aria-hidden="true">${coverMarkSvg("window")}</div>
        <h1>重新认识自己，<br />也重新建造世界。</h1>
        <p class="hero-lead">
          Lindsey，新的一岁，不必急着成为一个确定的人。愿你靠近让自己感到鲜活的事物，在每一次新的体验里，重新认识自己，也重新建造与世界相处的方式。
        </p>
        <p class="hero-love">无论你走向哪里，我们永远陪着你，也永远爱你。</p>
        <p class="hero-theme">一场关于「重建周遭」的体验探索</p>
        <div class="hero-meta">
          <span>12 个片刻</span>
          <span>约 3 分钟</span>
          <span>凭直觉作答</span>
        </div>
      </div>
      <div class="botanical" aria-hidden="true"></div>
      <div class="cover-entry">
        <p class="cover-entry-hint">扉页之后，是十二个关于你的片刻</p>
        <button class="primary-button cover-start-button" data-action="start">
          <span>开始探索</span>
          <span class="cover-start-arrow" aria-hidden="true">→</span>
        </button>
        <p class="cover-entry-note">点击进入测试</p>
      </div>
    </section>
  `;
}

function renderQuestion() {
  const question = questions[state.current];
  const selected = state.answers[state.current];
  const progress = ((state.current + 1) / questions.length) * 100;
  const letters = ["A", "B", "C", "D"];

  app.innerHTML = `
    <section class="page paper-card question-card">
      <div class="question-top">
        <div class="progress-row">
          <button class="back-button" data-action="back" aria-label="返回上一题">←</button>
          <div class="progress-track" aria-hidden="true">
            <div class="progress-fill" style="width: ${progress}%"></div>
          </div>
          <span class="progress-label">${String(state.current + 1).padStart(2, "0")} / ${questions.length}</span>
        </div>
        <p class="question-kicker">A quiet question</p>
        <div class="question-visual">${motifSvg(visualMotifs[state.current])}<span>0${state.current + 1}</span></div>
        <h2 class="question-title">${question.title}</h2>
        <div class="options">
          ${question.options
            .map(
              (option, index) => `
                <button class="option ${selected === index ? "selected" : ""}" data-answer="${index}">
                  <span class="option-letter">${letters[index]}</span>
                  <span class="option-text">${option[0]}</span>
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function emptyScores() {
  return {
    direction: { ROOT: 0, ROAM: 0, RISE: 0 },
    persona: { quiet: 0, repair: 0, earth: 0, heritage: 0, material: 0, wonder: 0, brave: 0, poet: 0 },
    motive: { quiet: 0, repair: 0, shape: 0, explore: 0, brave: 0, express: 0 },
    tag: {
      living: 0,
      ritual: 0,
      ink: 0,
      repair: 0,
      form: 0,
      heritage: 0,
      fire: 0,
      build: 0,
      play: 0,
      strike: 0,
      align: 0,
      rhythm: 0,
      power: 0,
    },
  };
}

function calculateResult() {
  const scores = emptyScores();

  state.answers.forEach((answer, index) => {
    const question = questions[index];
    const option = question.options[answer];
    scores.direction[option[1]] += question.directionWeight || 2;
    scores.motive[option[2]] += 2;
    scores.tag[option[3]] += question.tagWeight || 1;
    scores.persona[option[4]] += 1;
  });

  const personalityKey = choosePersonality(scores);
  const direction = directionForPersonality(personalityKey);
  const recommendation = chooseRecommendation(direction, scores, personalityKey);
  return { direction, personalityKey, recommendation, scores };
}

function highestKey(record, allowed = Object.keys(record)) {
  return allowed.reduce((best, key) => (record[key] > record[best] ? key : best), allowed[0]);
}

function choosePersonality(scores) {
  const highest = Math.max(...Object.values(scores.persona));
  const tied = Object.keys(scores.persona).filter((key) => scores.persona[key] === highest);
  if (tied.length === 1) return tied[0];

  // A stable answer-based tie break avoids permanently favoring the first persona in the list.
  const answerSignature = state.answers.reduce((hash, answer, index) => (hash * 31 + (answer + 1) * (index + 7)) >>> 0, 17);
  return tied[answerSignature % tied.length];
}

function directionForPersonality(personalityKey) {
  if (["quiet", "repair", "earth"].includes(personalityKey)) return "ROOT";
  if (["heritage", "material", "wonder"].includes(personalityKey)) return "ROAM";
  return "RISE";
}

function chooseRecommendation(direction, scores, personalityKey) {
  if (personalityKey === "quiet") {
    return {
      type: "ranked",
      title: "优先推荐：花道",
      reason: "花道最贴近你对季节、观察与温柔秩序的感受。香道与国画同样适合成为持续练习的入口，可以在气味、留白与日常仪式中，继续寻找让自己安静生长的方式。",
      items: recommendationPools.quiet,
      itemLabel: "推荐顺序",
    };
  }

  if (personalityKey === "repair") {
    return {
      type: "ranked",
      title: "优先推荐：古籍／文物修复",
      reason: "你适合在需要耐心、理解与精细判断的技艺里建立深层连接。篆刻与刺绣也能让你通过缓慢而专注的动作，回应时间留下的痕迹。",
      items: recommendationPools.repair,
      itemLabel: "适合继续讨论",
    };
  }

  if (personalityKey === "earth") {
    return {
      type: "ranked",
      title: "优先推荐：陶艺",
      reason: "陶艺最能回应你对反复塑造、触摸材料与留下作品的需要。国画与木工则提供了不同的形塑方式，也值得作为后续深入方向。",
      items: recommendationPools.earth,
      itemLabel: "适合继续讨论",
    };
  }

  if (personalityKey === "brave") {
    const items = scores.tag.strike >= scores.tag.power ? ["拳击", "健身"] : ["健身", "拳击"];
    return {
      type: "ranked",
      title: `优先推荐：${items[0]}`,
      reason: "清晰的目标、身体反馈与持续突破，会让你真实感受到自己的力量正在增长。这两个方向都适合继续深入学习。",
      items,
      itemLabel: "推荐顺序",
    };
  }

  if (personalityKey === "poet") {
    const items = scores.tag.rhythm > scores.tag.align ? ["国标舞", "普拉提"] : ["普拉提", "国标舞"];
    return {
      type: "ranked",
      title: `优先推荐：${items[0]}`,
      reason: "你适合通过呼吸、控制与节奏重新认识身体。两种体验分别回应稳定与表达，也都值得成为长期学习方向。",
      items,
      itemLabel: "推荐顺序",
    };
  }

  const rankedTags = ["heritage", "fire", "build", "play"].sort((a, b) => scores.tag[b] - scores.tag[a]);

  if (personalityKey === "wonder") {
    const highest = scores.tag[rankedTags[0]];
    const second = scores.tag[rankedTags[1]];
    const comboKey = highest - second <= 1 ? "cross" : rankedTags[0];
    const combo = wonderCombinations[comboKey];
    return {
      type: "schedule",
      title: combo.title,
      reason: "你的好奇并不只通向一种答案。这组体验根据你本次作答中最鲜明的兴趣入口生成，也保留了跨类别的反差；重新测试时，你可能会采集到另一条路线。",
      items: combo.items,
      itemLabel: "本次探索组合",
    };
  }

  const selected = roamPersonaCombinations[personalityKey][rankedTags[0]];
  const fullPool = recommendationPools[personalityKey];
  const moreItems = fullPool.filter((item) => !selected.includes(item));

  return {
    type: "schedule",
    title: personalityKey === "heritage" ? "传统纹样与手艺探索" : "材料转化与创造探索",
    reason: "这些体验回应了你最鲜明的兴趣入口，也刻意保留了一点反差与未知。你可以在不同材料、技艺和感受之间穿行，从真实体验中发现值得继续深入的方向。",
    items: selected,
    moreItems,
    itemLabel: "本次精选组合",
  };
}

function renderResult() {
  const { direction, personalityKey, recommendation } = state.result;
  const personality = personalities[personalityKey];
  const directionNames = {
    ROOT: "ROOT · 向下扎根",
    ROAM: "ROAM · 向外漫游",
    RISE: "RISE · 向上跃升",
  };

  app.innerHTML = `
    <section class="page paper-card result-card">
      <div class="result-hero">
        <img class="result-poster" src="${personality.poster}" alt="${personality.en} ${personality.cn}人格海报" />
      </div>

      <section class="result-section">
        <p class="section-label">Your portrait</p>
        <h3>${personality.definition}</h3>
        <p>${personality.description}</p>
      </section>

      <section class="result-section">
        <p class="section-label">A psychology note</p>
        <h3>你如何与成长相遇</h3>
        <p>${personality.psychology}</p>
      </section>

      <section class="result-section">
        <p class="section-label">Your next experience</p>
        <h3>最适合你的新体验</h3>
        <div class="recommendation-box">
          <strong>${recommendation.title}</strong>
          <p>${recommendation.reason}</p>
          <p class="recommendation-label">${recommendation.itemLabel}</p>
          <ol class="schedule">${recommendation.items
            .map((item, index) => `<li><span>0${index + 1}</span>${item}</li>`)
            .join("")}</ol>
          ${recommendation.moreItems?.length
            ? `<div class="more-directions"><span>其他适合继续讨论的方向</span><p>${recommendation.moreItems.join(" · ")}</p></div>`
            : ""}
        </div>
      </section>

      <section class="result-section">
        <p class="section-label">A line for your journey</p>
        <blockquote class="quote">
          <p class="quote-translation">${personality.quoteCn}</p>
          <p class="quote-original">“${personality.quoteEn}”</p>
          <p class="quote-source">${personality.quoteAuthor}</p>
        </blockquote>
      </section>

      <div class="blessing">愿新一岁的你，<br />更自由、更丰盛，也更像自己。</div>
      <div class="result-signoff">
        <span>WITH LOVE</span>
        <strong>FROM LOVED LYNN &amp; OYSTER</strong>
      </div>

      <div class="result-actions">
        <button class="primary-button" data-action="open-save">保存我的体验画像</button>
        <button class="secondary-button" data-action="restart">重新探索一次</button>
      </div>
    </section>
    <div class="save-panel" data-save-panel hidden>
      <button class="save-panel-backdrop" data-action="close-save" aria-label="关闭保存选项"></button>
      <section class="save-sheet" role="dialog" aria-modal="true" aria-labelledby="save-sheet-title">
        <div class="save-sheet-handle" aria-hidden="true"></div>
        <p class="section-label">Keep your portrait</p>
        <h3 id="save-sheet-title">选择想保存的体验画像</h3>
        <p class="save-sheet-intro">两种版本都已为手机保存与分享排版。</p>
        <div class="save-choice" data-save-choice>
          <div class="save-options">
          <button class="save-option" data-action="download-card">
            <span class="save-option-preview save-option-preview-card" aria-hidden="true"></span>
            <span class="save-option-copy">
              <strong>人格卡片</strong>
              <small>人格形象、名称与女性名言</small>
            </span>
            <span class="save-option-arrow" aria-hidden="true">↓</span>
          </button>
          <button class="save-option" data-action="download-long">
            <span class="save-option-preview save-option-preview-long" aria-hidden="true"></span>
            <span class="save-option-copy">
              <strong>完整体验长图</strong>
              <small>解读、心理学注释、体验建议与祝福</small>
            </span>
            <span class="save-option-arrow" aria-hidden="true">↓</span>
          </button>
          </div>
          <button class="ghost-button" data-action="close-save">暂不保存</button>
        </div>
        <div class="save-preview" data-save-preview hidden>
          <p class="save-preview-hint">微信中可长按图片保存</p>
          <img data-save-preview-image alt="体验画像预览" />
          <button class="primary-button" data-action="download-preview">下载图片</button>
          <button class="ghost-button" data-action="back-save">返回选择其他版本</button>
        </div>
      </section>
    </div>
  `;
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 10) {
  const chars = [...text];
  let line = "";
  let lines = 0;

  for (let i = 0; i < chars.length && lines < maxLines; i += 1) {
    const test = line + chars[i];
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y + lines * lineHeight);
      line = chars[i];
      lines += 1;
    } else {
      line = test;
    }
  }

  if (line && lines < maxLines) {
    ctx.fillText(line, x, y + lines * lineHeight);
    lines += 1;
  }
  return y + lines * lineHeight;
}

function wrapCanvasWords(ctx, text, x, y, maxWidth, lineHeight, maxLines = 10) {
  const words = text.split(/\s+/);
  let line = "";
  let lines = 0;

  words.forEach((word) => {
    if (lines >= maxLines) return;
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y + lines * lineHeight);
      line = word;
      lines += 1;
    } else {
      line = test;
    }
  });

  if (line && lines < maxLines) {
    ctx.fillText(line, x, y + lines * lineHeight);
    lines += 1;
  }
  return y + lines * lineHeight;
}

function canvasSectionLabel(ctx, text, x, y) {
  ctx.fillStyle = "#b88250";
  ctx.font = "24px Georgia, serif";
  ctx.letterSpacing = "3px";
  ctx.fillText(text.toUpperCase(), x, y);
  ctx.letterSpacing = "0px";
}

function canvasSectionRule(ctx, y) {
  ctx.strokeStyle = "rgba(54, 95, 80, .18)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(120, y);
  ctx.lineTo(960, y);
  ctx.stroke();
}

function drawImageContained(ctx, image, x, y, width, radius = 32) {
  const height = Math.round(width * (image.naturalHeight / image.naturalWidth));
  ctx.save();
  roundRect(ctx, x, y, width, height, radius);
  ctx.clip();
  ctx.drawImage(image, x, y, width, height);
  ctx.restore();
  return height;
}

async function drawLongPortrait() {
  const canvas = document.querySelector("#share-canvas");
  const ctx = canvas.getContext("2d");
  const { direction, personalityKey, recommendation } = state.result;
  const personality = personalities[personalityKey];
  const image = new Image();
  await new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = reject;
    image.src = personality.poster;
  });

  canvas.width = 1080;
  canvas.height = 6500;

  const gradient = ctx.createLinearGradient(0, 0, 1080, canvas.height);
  gradient.addColorStop(0, "#eef0e5");
  gradient.addColorStop(0.5, "#f5efe3");
  gradient.addColorStop(1, "#d3dfd3");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(54, 95, 80, .12)";
  ctx.lineWidth = 2;
  [210, 420, 640].forEach((radius) => {
    ctx.beginPath();
    ctx.arc(1010, 220, radius, 0, Math.PI * 2);
    ctx.stroke();
  });

  ctx.fillStyle = "rgba(255, 253, 247, .78)";
  roundRect(ctx, 64, 64, 952, canvas.height - 128, 44);
  ctx.fill();

  ctx.fillStyle = "#b88250";
  ctx.font = "24px Georgia, serif";
  ctx.fillText("REBUILD YOUR WORLD", 120, 132);
  ctx.textAlign = "right";
  ctx.fillText(`${direction} · TO LINDSEY`, 960, 132);
  ctx.textAlign = "left";

  const posterHeight = drawImageContained(ctx, image, 120, 190, 840, 30);
  let nextY = 190 + posterHeight + 85;
  canvasSectionRule(ctx, nextY);

  nextY += 74;
  canvasSectionLabel(ctx, "Your portrait", 120, nextY);
  nextY += 72;
  ctx.fillStyle = "#183129";
  ctx.font = "600 40px serif";
  nextY = wrapCanvasText(ctx, personality.definition, 120, nextY, 840, 58, 3);
  nextY += 28;
  ctx.fillStyle = "#4e675e";
  ctx.font = "29px serif";
  nextY = wrapCanvasText(ctx, personality.description, 120, nextY, 840, 48, 7);

  nextY += 60;
  canvasSectionRule(ctx, nextY);
  nextY += 74;
  canvasSectionLabel(ctx, "A psychology note", 120, nextY);
  nextY += 70;
  ctx.fillStyle = "#183129";
  ctx.font = "600 38px serif";
  ctx.fillText("你如何与成长相遇", 120, nextY);
  nextY += 68;
  ctx.fillStyle = "#4e675e";
  ctx.font = "29px serif";
  nextY = wrapCanvasText(ctx, personality.psychology, 120, nextY, 840, 48, 7);

  nextY += 60;
  canvasSectionRule(ctx, nextY);
  nextY += 74;
  canvasSectionLabel(ctx, "Your next experience", 120, nextY);
  nextY += 70;
  ctx.fillStyle = "#183129";
  ctx.font = "600 42px serif";
  ctx.fillText(recommendation.title, 120, nextY);
  nextY += 68;
  ctx.fillStyle = "#4e675e";
  ctx.font = "29px serif";
  nextY = wrapCanvasText(ctx, recommendation.reason, 120, nextY, 840, 48, 8);

  nextY += 30;
  ctx.fillStyle = "#b88250";
  ctx.font = "21px serif";
  ctx.fillText(recommendation.itemLabel, 120, nextY);
  nextY += 52;
  recommendation.items.forEach((item, index) => {
    ctx.fillStyle = "#b88250";
    ctx.font = "22px Georgia, serif";
    ctx.fillText(`0${index + 1}`, 120, nextY);
    ctx.fillStyle = "#183129";
    ctx.font = "31px serif";
    ctx.fillText(item, 205, nextY);
    nextY += 58;
  });

  if (recommendation.moreItems?.length) {
    nextY += 16;
    ctx.fillStyle = "#b88250";
    ctx.font = "21px serif";
    ctx.fillText("其他适合继续讨论的方向", 120, nextY);
    nextY += 50;
    ctx.fillStyle = "#4e675e";
    ctx.font = "28px serif";
    nextY = wrapCanvasText(ctx, recommendation.moreItems.join(" · "), 120, nextY, 840, 44, 3);
  }

  nextY += 54;
  canvasSectionRule(ctx, nextY);
  nextY += 74;
  canvasSectionLabel(ctx, "A line for your journey", 120, nextY);
  nextY += 72;
  ctx.fillStyle = "#183129";
  ctx.font = "600 34px serif";
  nextY = wrapCanvasText(ctx, personality.quoteCn, 120, nextY, 840, 52, 4);
  nextY += 18;
  ctx.fillStyle = "#4e675e";
  ctx.font = "italic 25px Georgia, serif";
  nextY = wrapCanvasWords(ctx, `“${personality.quoteEn}”`, 120, nextY, 840, 40, 5);
  nextY += 18;
  ctx.fillStyle = "#b88250";
  ctx.font = "21px Georgia, serif";
  ctx.fillText(personality.quoteAuthor, 120, nextY);

  nextY += 100;
  canvasSectionRule(ctx, nextY);
  nextY += 110;
  ctx.textAlign = "center";
  ctx.fillStyle = "#183129";
  ctx.font = "500 38px serif";
  ctx.fillText("愿新一岁的你，更自由、更丰盛，也更像自己。", 540, nextY);
  nextY += 64;
  ctx.fillStyle = "#b88250";
  ctx.font = "20px Georgia, serif";
  ctx.fillText("WITH LOVE · FROM LOVED LYNN & OYSTER", 540, nextY);
  ctx.textAlign = "left";

  const finalHeight = Math.ceil(nextY + 150);
  const croppedCanvas = document.createElement("canvas");
  croppedCanvas.width = canvas.width;
  croppedCanvas.height = finalHeight;
  croppedCanvas.getContext("2d").drawImage(canvas, 0, 0, canvas.width, finalHeight, 0, 0, canvas.width, finalHeight);
  return croppedCanvas;
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function triggerDownload(href, filename) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = href;
  link.click();
}

function closeSavePanel() {
  const panel = document.querySelector("[data-save-panel]");
  if (panel) panel.hidden = true;
  document.body.classList.remove("save-panel-open");
  state.saveHref = "";
  state.saveFilename = "";
}

function showSaveChoice() {
  const choice = document.querySelector("[data-save-choice]");
  const preview = document.querySelector("[data-save-preview]");
  if (choice) choice.hidden = false;
  if (preview) preview.hidden = true;
}

function showSavePreview(href, filename) {
  const choice = document.querySelector("[data-save-choice]");
  const preview = document.querySelector("[data-save-preview]");
  const image = document.querySelector("[data-save-preview-image]");
  state.saveHref = href;
  state.saveFilename = filename;
  if (choice) choice.hidden = true;
  if (preview) preview.hidden = false;
  if (image) image.src = href;
}

function downloadPersonaCard() {
  const personality = personalities[state.result.personalityKey];
  showSavePreview(personality.poster, `人格卡片-${personality.cn}.jpg`);
}

async function downloadLongPortrait(button) {
  const personality = personalities[state.result.personalityKey];
  const originalText = button?.querySelector("strong")?.textContent;
  if (button) {
    button.disabled = true;
    const label = button.querySelector("strong");
    if (label) label.textContent = "正在生成长图…";
  }

  try {
    const canvas = await drawLongPortrait();
    const imageData = canvas.toDataURL("image/jpeg", 0.92);
    showSavePreview(imageData, `完整体验画像-${personality.cn}.jpg`);
  } catch (error) {
    console.error(error);
    showToast("长图生成失败，请稍后重试");
  } finally {
    if (button) {
      button.disabled = false;
      const label = button.querySelector("strong");
      if (label && originalText) label.textContent = originalText;
    }
  }
}

app.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");
  const answerButton = event.target.closest("[data-answer]");

  if (actionButton?.dataset.action === "start") {
    state.screen = "quiz";
    state.current = 0;
    state.answers = [];
    render();
    return;
  }

  if (actionButton?.dataset.action === "back") {
    if (state.current === 0) {
      state.screen = "welcome";
    } else {
      state.current -= 1;
    }
    render();
    return;
  }

  if (actionButton?.dataset.action === "restart") {
    state.screen = "welcome";
    state.current = 0;
    state.answers = [];
    state.result = null;
    render();
    return;
  }

  if (actionButton?.dataset.action === "open-save") {
    const panel = document.querySelector("[data-save-panel]");
    if (panel) panel.hidden = false;
    showSaveChoice();
    document.body.classList.add("save-panel-open");
    return;
  }

  if (actionButton?.dataset.action === "close-save") {
    closeSavePanel();
    return;
  }

  if (actionButton?.dataset.action === "download-card") {
    downloadPersonaCard();
    return;
  }

  if (actionButton?.dataset.action === "download-long") {
    downloadLongPortrait(actionButton);
    return;
  }

  if (actionButton?.dataset.action === "back-save") {
    showSaveChoice();
    return;
  }

  if (actionButton?.dataset.action === "download-preview") {
    triggerDownload(state.saveHref, state.saveFilename);
    showToast("图片已准备好");
    return;
  }

  if (answerButton) {
    const answer = Number(answerButton.dataset.answer);
    state.answers[state.current] = answer;
    answerButton.classList.add("selected");

    setTimeout(() => {
      if (state.current < questions.length - 1) {
        state.current += 1;
        render();
      } else {
        state.result = calculateResult();
        state.screen = "result";
        render();
      }
    }, 260);
  }
});

render();

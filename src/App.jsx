function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-head">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}

function Card({ children, className = '' }) {
  return <div className={`card ${className}`}>{children}<span className="corner corner-a" /><span className="corner corner-b" /></div>
}

function HeroWave() {
  return (
    <svg className="hero-wave-svg" viewBox="0 0 1440 680" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="waveMain" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#77bda8" stopOpacity="0" />
          <stop offset="0.25" stopColor="#77bda8" />
          <stop offset="0.65" stopColor="#8677df" />
          <stop offset="1" stopColor="#77bda8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="waveSoft" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d3b179" stopOpacity="0" />
          <stop offset="0.5" stopColor="#d3b179" />
          <stop offset="1" stopColor="#d3b179" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mountainFill" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#dceddf" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#f1eadb" stopOpacity="0.65" />
          <stop offset="1" stopColor="#d8efe7" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <g className="wave-layer wave-layer-a">
        <path d="M0 150C100 120 180 118 280 148C380 178 460 178 560 148C660 118 740 116 840 147C940 178 1020 177 1120 147C1220 117 1320 118 1440 142" stroke="url(#waveMain)" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M0 220C100 192 180 190 280 220C380 250 460 250 560 220C660 190 740 188 840 219C940 250 1020 249 1120 219C1220 189 1320 190 1440 214" stroke="url(#waveSoft)" strokeWidth="2.2" strokeLinecap="round" />
      </g>

      <g className="wave-layer wave-layer-b">
        <path d="M0 418C120 370 212 364 310 398C408 432 496 472 608 459C720 446 806 378 918 372C1030 366 1148 430 1256 446C1340 458 1402 452 1440 438" stroke="url(#waveMain)" strokeWidth="2.4" strokeLinecap="round" opacity="0.9" />
      </g>

      <g className="note-layer">
        <circle cx="350" cy="122" r="5" fill="#7ab9a7" opacity="0.9" />
        <circle cx="910" cy="206" r="4" fill="#8677df" opacity="0.82" />
        <path d="M1080 132V96L1104 88V124" stroke="#5d8f82" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="1081" cy="135" r="6" fill="#5d8f82" />
        <circle cx="1103" cy="127" r="6" fill="#5d8f82" />
      </g>

      <path d="M0 532C124 472 204 466 296 487C388 508 458 558 576 554C694 550 790 488 904 476C1018 464 1128 490 1234 508C1330 524 1400 518 1440 502V680H0V532Z" fill="url(#mountainFill)" />
      <path d="M0 532C124 472 204 466 296 487C388 508 458 558 576 554C694 550 790 488 904 476C1018 464 1128 490 1234 508C1330 524 1400 518 1440 502" stroke="#8eb8ac" strokeWidth="1.35" />
    </svg>
  )
}

const workflow = [
  ['EEG Input / 脑电输入', 'Collect EEG-related signals and prepare offline data for analysis. / 采集脑电相关信号，并将离线数据整理为可分析输入。'],
  ['Feature Extraction / 特征提取', 'Extract signal-inspired features such as rhythm tendency, arousal, and attention cues. / 提取节律倾向、唤醒度、注意力等脑电启发特征。'],
  ['Music Mapping / 音乐映射', 'Map these features into melody, rhythm density, dynamics, and harmonic tension. / 将特征映射到旋律、节奏密度、力度与和声张力等音乐维度。'],
  ['MIDI Sketch Generation / MIDI 草稿生成', 'Generate editable MIDI sketches instead of fixed black-box outputs. / 输出可编辑的 MIDI 草稿，而不是不可修改的黑盒结果。'],
  ['Evaluation & Iteration / 评估与迭代', 'Support playback, visualization, and intelligent evaluation for further refinement. / 结合试听、可视化与智能评估，为后续优化提供依据。'],
]

const team = [
  ['公衍浩 / Gong Yanhao', 'Front-end Development & System Integration / 前端开发与前后端对接', 'Responsible for front-end implementation and integration across front-end and back-end modules. / 负责前端页面开发，以及前后端模块之间的系统对接工作。'],
  ['卜靖航 / Bu Jinghang', 'Multi-Agent Evaluation System / 多智能体协作质量评估系统', 'Responsible for the development of the multi-agent collaborative quality evaluation module. / 负责多智能体协作质量评估系统模块的开发与实现。'],
  ['陈为 / Chen Wei', 'EEG-Music-Generation Module / EEG-Music-Generation 模块', 'Responsible for the development of the EEG-Music-Generation module, enabling the conversion of EEG signal files into MIDI files. / 负责 EEG-Music-Generation 模块的开发与实现，即将脑电波信号文件转换为 MIDI 文件。'],
  ['支殿畅 / Zhi Dianchang', 'MIDI Playback Module / MIDI 播放模块', 'Responsible for MIDI playback functions and related presentation support. / 负责 MIDI 播放功能实现及相关展示支持。'],
  ['赵家瑶 / Zhao Jiayao', 'Questionnaire & Market Research / 问卷设计与市场调研', 'Responsible for questionnaire design and market research analysis. / 负责问卷设计与市场调研分析。'],
]

export default function App() {
  return (
    <div className="page-shell">
      <div className="ink ink-1" />
      <div className="ink ink-2" />
      <div className="ink ink-3" />

      <header className="topbar">
        <div className="brand">
          <div className="logo">EQ</div>
          <div>
            <div className="brand-title">EMMA-Q</div>
            <div className="brand-sub">Digital Oriental Project Site</div>
          </div>
        </div>
        <nav className="nav desktop-only">
          <a href="#about">About / 项目概述</a>
          <a href="#culture">Culture / 文化灵感</a>
          <a href="#workflow">Workflow / 核心流程</a>
          <a href="#team">Team / 团队介绍</a>
        </nav>
      </header>

      <main>
        <section className="hero section-block">
          <HeroWave />
          <div className="hero-content">
            <div className="hero-text">
              <div className="badge-row">
                <span className="badge">International Track · Cultural Technology · Chinese Heritage</span>
              </div>
              <div className="badge-row">
                <span className="badge">Communication University of China · First-Year Student Team</span>
              </div>
              <div className="badge-row">
                <span className="badge badge-soft">Faculty Advisor · Meng Ming · Communication University of China</span>
              </div>

              <h1>
                Brainwaves into Music,
                <span> Tradition into New Expression</span>
              </h1>
              <p className="lead-en">
                EMMA-Q is a brainwave-driven assistant for ethnic music creation. It transforms EEG-inspired features into editable MIDI sketches for playback, visualization, and intelligent evaluation.
              </p>
              <p className="lead-zh">
                EMMA-Q 是一个面向民族音乐创作场景的脑电辅助系统，将脑电启发特征转化为可编辑的 MIDI 草稿，并支持试听、可视化与智能评估。
              </p>
              <p className="hero-meta">
                Created and developed by a first-year student team from the Communication University of China.<br />
                指导老师：孟明（中国传媒大学）。项目由中国传媒大学大一学生团队完成与推进。
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#about">Explore the Project</a>
                <a className="btn btn-secondary" href="#workflow">View Workflow</a>
              </div>
            </div>

            <Card className="hero-card">
              <div className="mini-title">Project Snapshot / 项目快照</div>
              <div className="snapshot-box highlight-box">
                <div className="mini-label">Core Positioning / 核心定位</div>
                <h3>Brainwave-driven ethnic music creation assistant</h3>
                <p>脑电驱动的民族音乐辅助创作系统</p>
              </div>
              <div className="grid two-col-gap">
                <div className="snapshot-box">
                  <div className="mini-label">Cultural Layer / 文化层</div>
                  <h4>Chinese heritage as creative context</h4>
                  <p>以中国传统音乐文化作为创作语境</p>
                </div>
                <div className="snapshot-box">
                  <div className="mini-label">Technical Layer / 技术层</div>
                  <h4>EEG-inspired mapping to editable MIDI</h4>
                  <p>脑电启发映射到可编辑 MIDI 草稿</p>
                </div>
              </div>
              <div className="snapshot-box soft-gold">
                <div className="mini-label">Design Direction / 设计方向</div>
                <h4>Modern technology framework with Chinese cultural expression</h4>
                <p>现代科技框架下的中国文化表达</p>
              </div>
            </Card>
          </div>
        </section>

        <section id="about" className="section-block content-width">
          <SectionTitle
            eyebrow="About / 项目概述"
            title="A project website for concept, culture, and credibility"
            subtitle="一个兼顾项目定位、文化表达与可信度的介绍型网站。EMMA-Q 更适合被呈现为“辅助创作系统”，而不是单纯的黑盒生成器。项目由中国传媒大学大一学生团队完成，并由中国传媒大学孟明老师指导。"
          />
          <div className="grid three-col">
            <Card>
              <div className="mini-label">What / 是什么</div>
              <h3>Brainwave-driven assistant</h3>
              <p>A system focused on ethnic music creation scenarios, using EEG-inspired features as the basis for music generation.</p>
              <p>一个面向民族音乐创作场景的系统，以脑电启发特征作为音乐生成依据。</p>
            </Card>
            <Card>
              <div className="mini-label">How / 怎么做</div>
              <h3>Editable MIDI sketches</h3>
              <p>It keeps outputs editable and suitable for later arrangement, scoring, and DAW workflows.</p>
              <p>它保留结果的可编辑性，便于后续编曲、制谱与 DAW 深化制作。</p>
            </Card>
            <Card>
              <div className="mini-label">Why / 为什么做</div>
              <h3>Culture meets computation</h3>
              <p>The project explores how Chinese musical heritage can enter new creative contexts through emerging technology.</p>
              <p>项目探索中国传统音乐文化如何借助新技术进入新的创作语境。</p>
            </Card>
          </div>
        </section>

        <section id="culture" className="section-block content-width culture-panel">
          <div className="culture-left">
            <SectionTitle
              eyebrow="Culture / 文化灵感"
              title="Inspired by Chinese Musical Heritage"
              subtitle="受中国传统音乐文化启发。立足中国传统音乐文化，EMMA-Q 关注的不是简单复刻，而是借助数字工具、交互系统与当代创作流程，让传统元素实现新的表达与连接。"
            />
            <div className="tag-row">
              <span>Chinese Heritage / 中国文化根基</span>
              <span>Ethnic Music Context / 民族音乐语境</span>
              <span>Digital Reinterpretation / 数字化再表达</span>
              <span>Contemporary Creativity / 当代创作连接</span>
            </div>
          </div>
          <Card className="culture-right">
            <div className="mini-label">Design Note / 设计提示</div>
            <h3>Not a retro display page, but a modern cultural technology narrative.</h3>
            <p>不是复古风展示页，而是面向国际赛道的现代文化科技叙事。</p>
            <ul>
              <li>东方审美用于建立辨识度</li>
              <li>现代排版用于提升国际表达</li>
              <li>科技逻辑用于增强项目可信度</li>
            </ul>
          </Card>
        </section>

        <section id="workflow" className="section-block content-width">
          <SectionTitle
            eyebrow="Workflow / 核心流程"
            title="From EEG-inspired features to editable musical sketches"
            subtitle="从脑电启发特征到可编辑音乐草稿的生成流程。这一部分突出可读性与清晰性，依次说明信号输入、映射逻辑、输出生成与智能评估。"
          />
          <div className="workflow-wrap">
            <div className="workflow-line" />
            <div className="grid five-col workflow-grid">
              {workflow.map(([title, text], index) => (
                <Card key={title} className="workflow-card">
                  <div className="step-chip">Step {String(index + 1).padStart(2, '0')}</div>
                  <div className="step-node" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="section-block content-width">
          <SectionTitle
            eyebrow="Team / 团队介绍"
            title="Clear roles, concise presentation"
            subtitle="明确分工，简洁呈现。每张成员卡片都以清晰、专业的方式呈现成员角色、负责内容与系统分工，而不是写成长篇简历。"
          />
          <div className="grid three-col team-grid">
            {team.map(([name, role, duty]) => (
              <Card key={name}>
                <div className="mini-label">Team Member / 团队成员</div>
                <h3>{name}</h3>
                <h4>{role}</h4>
                <p>{duty}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer content-width">
        <div>
          <div className="footer-title">EMMA-Q</div>
          <div>International Track · Cultural Technology · Project Introduction Website</div>
          <div>国际赛道 · 文化科技 · 项目介绍型网站</div>
        </div>
        <div>
          <div>Communication University of China · First-Year Student Team</div>
          <div>中国传媒大学 · 大一学生团队</div>
          <div>Faculty Advisor · Meng Ming · Communication University of China</div>
          <div>指导老师：孟明 · 中国传媒大学</div>
        </div>
      </footer>
    </div>
  )
}

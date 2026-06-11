import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Award, BookOpen, Brain, CalendarDays, CheckCircle2, ChevronLeft, ChevronRight, Clock, GraduationCap, Lightbulb, LayoutGrid, Phone, Plus, Scale, ShieldCheck, Star, Target, TrendingUp, Trophy, Building2, User, Users, Wallet, Zap, ArrowUpRight, PlayCircle, FolderCheck, Globe, ArrowRight } from 'lucide-react'
import { googleReviews } from '../data/siteContent'




const heroBadges = [
  { label: 'Delhi Chess Association Affiliated', Icon: Award },
  { label: 'Online & Offline Classes', Icon: BookOpen },
  { label: 'Tournament Preparation', Icon: Award },
  { label: '100+ Students Trained', Icon: Users },
]

const courses = [
  {
    id: 'walkers',
    name: 'Walkers',
    level: 'Beginner Level',
    color: '#16a34a',
    Icon: User,
    popular: false,
    features: [
      'Learn chess fundamentals',
      'Basic tactics & gameplay',
      'Strong foundation building',
    ],
    details: [
      { Icon: CalendarDays, label: 'Duration: 3 Months' },
      { Icon: Clock, label: 'Classes: 24 (1 Hr Each)' },
      { Icon: Users, label: 'Age Group: 5–12 Years' },
      { Icon: Wallet, label: 'Fees: ₹9,000' },
    ],
  },
  {
    id: 'joggers',
    name: 'Joggers',
    level: 'Intermediate Level',
    color: '#2563eb',
    Icon: TrendingUp,
    popular: true,
    features: [
      'Improve tactics & strategy',
      'Opening & endgame training',
      'Tournament readiness',
    ],
    details: [
      { Icon: CalendarDays, label: 'Duration: 6 Months' },
      { Icon: Clock, label: 'Classes: 48 (1 Hr Each)' },
      { Icon: Users, label: 'Age Group: 8–12 Years' },
      { Icon: Wallet, label: 'Fees: ₹21,000' },
    ],
  },
  {
    id: 'runner',
    name: 'Runner',
    level: 'Advanced Level',
    color: '#9333ea',
    Icon: Trophy,
    popular: false,
    features: [
      'Advanced strategy & openings',
      'FIDE tournament training',
      'Competitive match analysis',
    ],
    details: [
      { Icon: BookOpen, label: '20 Coaching Classes' },
      { Icon: Target, label: '20 Practice Sessions' },
      { Icon: Users, label: 'Age Group: Up to 15 Years' },
      { Icon: Star, label: 'For 1500+ Chess.com Rating' },
    ],
  },
  {
    id: 'crash',
    name: 'Crash Course',
    level: 'Fast Track Learning',
    color: '#f97316',
    Icon: Zap,
    popular: false,
    features: [
      'Fast track chess learning',
      'Essential openings & tactics',
      'Quick tournament preparation',
    ],
    details: [
      { Icon: CalendarDays, label: 'Duration: 3 Months' },
      { Icon: Clock, label: 'Classes: 24 (1 Hr Each)' },
      { Icon: Users, label: 'Age Group: 5–12 Years' },
      { Icon: Wallet, label: 'Fees: ₹11,000' },
    ],
  },
]

const pathwayLevels = [
  {
    id: 'walkers',
    label: 'Level 1',
    name: 'Walkers',
    color: '#22c55e',
    desc: 'Learn fundamentals, basic tactics & simple gameplay strategies.',
    duration: 'Duration: 3 Months',
    tag: 'Beginner Friendly',
    icon: 'fa-chess-pawn'
  },
  {
    id: 'joggers',
    label: 'Level 2',
    name: 'Joggers',
    color: '#3b82f6',
    desc: 'Improve openings, tactics, endgames & tournament readiness.',
    duration: 'Duration: 6 Months',
    tag: 'Skill Building',
    icon: 'fa-chess-knight'
  },
  {
    id: 'runner',
    label: 'Level 3',
    name: 'Runner',
    color: '#a855f7',
    desc: 'Advanced strategy, FIDE preparation & competitive training.',
    duration: 'Ongoing Training',
    tag: 'Competitive Edge',
    icon: 'fa-chess-rook'
  },
  {
    id: 'coach',
    label: 'Fast Track Option',
    name: 'Crash Course',
    color: '#f97316',
    desc: 'Accelerated learning for fast progress in shorter time.',
    duration: 'Duration: 3 Months',
    tag: 'Excellence & Mentorship',
    icon: 'fa-bolt'
  },
]

const curriculumTabs = [
  { id: 'walkers', label: 'Walkers', color: '#22c55e', icon: 'fa-person-walking' },
  { id: 'joggers', label: 'Joggers', color: '#3b82f6', icon: 'fa-person-running' },
  { id: 'runner', label: 'Runner', color: '#a855f7', icon: 'fa-person-running' },
  { id: 'crash', label: 'Crash Course', color: '#f97316', icon: 'fa-rocket' },
]

const detailedCurriculum = {
  walkers: [
    {
      Icon: GraduationCap,
      title: 'Fundamentals',
      items: [
        'Chess board & pieces',
        'Rules of the game',
        'Check, Checkmate & Stalemate',
        'Castling, Promotion, En Passant',
        'Opening principles',
      ],
    },
    {
      Icon: BookOpen,
      title: 'Openings',
      items: [
        'Basic opening ideas',
        'Common opening traps',
        'Ruy Lopez (Intro)',
        'Italian Game (Intro)',
        'Good opening habits',
      ],
    },
    {
      Icon: Target,
      title: 'Tactics',
      items: [
        'Fork, Pin, Skewer',
        'Discovered attack',
        'Back rank checkmate',
        'Elementary checkmates',
        'Puzzle solving',
      ],
    },
    {
      Icon: Trophy,
      title: 'Endgames & Activities',
      items: [
        'King & Queen checkmate',
        'King & Rook checkmate',
        'Basic pawn endgames',
        'Puzzle contests',
        'Fun mini tournaments',
      ],
    },
  ],
  joggers: [
    {
      Icon: BookOpen,
      title: 'Chess Openings',
      items: [
        'Italian Game basics',
        'Four Knights Opening',
        'Ruy Lopez',
        "Queen's Gambit (Declined)",
      ],
    },
    {
      Icon: Target,
      title: 'Middle Game Tactics',
      items: [
        'Double Attack',
        'Discovered Attack',
        'Removing the Defender',
        'Deflection & Decoy',
        'Pin, Fork, Skewer',
        'Discovered & Double Check',
      ],
    },
    {
      Icon: Trophy,
      title: 'Endgame Training',
      items: [
        'Queen & Rook Checkmate',
        'Double Bishops Checkmate',
        'Pawn Endgame — Fundamentals',
        'Rook Endgame — Fundamentals',
      ],
    },
    {
      Icon: Star,
      title: 'Activities',
      items: [
        'Timed puzzle contests',
        'Friendly chess tournaments',
        'Online gameplay sessions',
        'Checkmate in 2 & 3 moves',
        'Doubt clearing sessions',
      ],
    },
  ],
  runner: [
    {
      Icon: BookOpen,
      title: 'Advanced Openings',
      items: [
        'Sicilian Defence (multiple lines)',
        'Ruy Lopez — advanced theory',
        "Queen's Gambit (accepted & declined)",
        'French Defence',
      ],
    },
    {
      Icon: Target,
      title: 'Middle Game Strategy',
      items: [
        'Open Files and Outposts',
        'Decoy, Pin, Fork, Double Attack',
        'Creating tactical patterns',
        'Advanced pattern recognition',
      ],
    },
    {
      Icon: Trophy,
      title: 'Advanced Endgames',
      items: [
        'Bishop & Knight Checkmate',
        'Pawn Endgame — Advanced',
        'Rook Endgame — Advanced',
        'Queen Endgame — Advanced',
      ],
    },
    {
      Icon: Award,
      title: 'Tournament Prep',
      items: [
        'Practice sessions & doubt clearing',
        'Tournament rules & notation',
        'Tournament simulation games',
        'Online & OTB tournament play',
        'FIDE rating game exposure',
      ],
    },
  ],
  crash: [
    {
      Icon: ShieldCheck,
      title: 'Chess Basics (Accelerated)',
      items: [
        'Chess board, pieces, movement',
        'Piece capture, defence, attack',
        'Castling, En Passant rules',
        'Opening principles — fundamentals',
        'Checkmate in 1 & 2 moves',
      ],
    },
    {
      Icon: BookOpen,
      title: 'Openings Covered',
      items: [
        'Ruy Lopez',
        'French Defence',
        "Queen's Gambit (Declined)",
      ],
    },
    {
      Icon: Target,
      title: 'Tactics Training',
      items: [
        'Double Attack',
        'Discovered Attack',
        'Deflection & Decoy',
        'Pin, Fork, Skewer',
      ],
    },
    {
      Icon: Trophy,
      title: 'Endgames',
      items: [
        'Queen & Rook Checkmate',
        'Double Bishops Checkmate',
        'Pawn Endgame — Basic',
        'Rook Endgame — Basic',
      ],
    },
  ],
}

const tournamentFeatures = [
  'CBSE Tournament Preparation',
  'State Level Chess Events',
  'FIDE Rating Exposure',
  'Online Tournament Training',
  'Chess.com & Lichess Practice',
  'Over the Board Tournament Training',
]

const benefits = [
  { Icon: Target, label: 'Improves\nConcentration' },
  { Icon: Brain, label: 'Develops\nLogical Thinking' },
  { Icon: Scale, label: 'Better\nDecision Making' },
  { Icon: Clock, label: 'Improves\nPatience' },
  { Icon: Lightbulb, label: 'Enhances\nMemory' },
  { Icon: TrendingUp, label: 'Builds\nConfidence' },
]

const whyFeatures = [
  'Structured chess curriculum',
  'Beginner to advanced progression',
  'Tournament focused coaching',
  'Age appropriate batches',
  'Online and offline classes',
  'Personalized attention',
]

const faqs = [
  {
    q: 'What is the best age to start chess?',
    a: 'Chess can be started as early as age 5. Our programs are designed specifically for children aged 5–15, with age-appropriate curricula that build skills progressively.',
  },
  {
    q: 'Do beginners need prior experience?',
    a: 'No prior experience is needed! Our Walkers course starts from absolute basics — board setup, piece movement, and fundamental rules — so anyone can begin.',
  },
  {
    q: 'Are online chess classes available?',
    a: 'Yes! We offer both online and offline classes. Online sessions are conducted via Zoom/Google Meet with live coaching, puzzles, and interactive gameplay.',
  },
  {
    q: 'How long does it take to become tournament ready?',
    a: 'Most students are ready for their first tournament within 3–6 months. Our Runner and Crash Course tracks are specifically designed to accelerate tournament preparation.',
  },
  {
    q: 'Do students participate in competitions?',
    a: 'Absolutely. We prepare students for CBSE tournaments, state-level events, and FIDE-rated competitions. We also provide training on Chess.com and Lichess platforms.',
  },
  {
    q: 'What is included in the trial class?',
    a: 'The free trial includes a 45-minute live session with a coach, an assessment of the student\'s current level, and a personalised course recommendation.',
  },
]

function AnimatedNumber({ end, suffix = '+', duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}{suffix}</>;
}

const journeySteps = [
  {
    id: 1,
    title: "Level 1 — Walkers",
    subtitle: "Beginner Foundation Program",
    desc: "Students start by learning the rules, piece movements, board setup, and basic tactics to build a confident foundation in chess.",
    highlights: ["Basic rules of the game", "Understanding board positions", "Beginner tactical training", "Confidence building"],
    details: ["Duration: 3 Months", "Classes: 24 Sessions", "Age Group: 6–10 Years"],
    label: "Level 1",
    name: "Walkers",
    piece: "♟",
    icon: Star,
    image: "/walker bg.png"
  },
  {
    id: 2,
    title: "Level 2 — Joggers",
    subtitle: "Intermediate Skill Development",
    desc: "Students develop positional understanding, opening theory, and endgame techniques to sharpen their competitive edge in school and club chess.",
    highlights: ["Positional strategy & setup", "Core opening principles", "FIDE-ranked chess rating", "Tournament preparation"],
    details: ["Duration: 6 Months", "Classes: 48 Sessions", "Age Group: 8–13 Years"],
    label: "Level 2",
    name: "Joggers",
    piece: "♞",
    icon: FolderCheck,
    image: "/jogger bg.png"
  },
  {
    id: 3,
    title: "Level 3 — Runner",
    subtitle: "Advanced Tournament Training",
    desc: "Students compete confidently in school-level and open tournaments, developing deep tactical vision, game preparation and psychological match readiness.",
    highlights: ["Advanced Tournament Training", "Tactical pattern mastery", "Competitive preparation sessions", "Performance-focused coaching"],
    details: ["Ongoing Training", "Practice + Coaching Sessions", "For 1500+ Chess.com Rating", "Age Group: 10–15 Years"],
    label: "Level 3",
    name: "Runner",
    piece: "♜",
    icon: Globe,
    image: "/runner bg.png"
  },
  {
    id: 4,
    title: "Fast Track Program",
    subtitle: "Accelerated Chess Learning",
    desc: "An intensive learning program designed for talented students who need rapid chess development with focused guidance from expert SckoolChess coaches.",
    highlights: ["Learning openings by strategy", "Building endgame precision", "Result analysis & review", "Intensive practical sessions"],
    details: ["Duration: 3 Months", "Classes: 24 Sessions", "Age Group: All levels welcome"],
    label: "Crash Course",
    piece: "♛",
    icon: Zap,
    image: "/crash course bg.png"
  }
];

const premiumLevelsData = [
  {
    id: 'walkers',
    name: 'Walkers',
    levelLabel: 'LEVEL 1 — WALKERS',
    subtitle: 'Beginner Foundation Program',
    subheading: 'Beginner Level (Level 1)',
    description: 'Students start by learning the rules, piece movements, board setup, and basic tactics to build a confident foundation in chess.',
    marqueeText: 'BIG MOVES START WITH SMALL STEPS • LEARN CHESS. LOVE CHESS. LIVE CHESS.',
    piece: '♟',
    themeColor: '#2563eb',
    bgImage: '/walker bg.png',
    ageGroup: '6–12 Years',
    duration: '3 Months',
    fees: '₹9,000/- INR',
    goals: [
      'Understand legal moves / Piece movement',
      'Build pattern recognition',
      'Spot simple tactics',
      'Play basic Chess game'
    ],
    topics: [
      'Capturing Rules & Basic Attacks',
      'Check, Checkmate & Stalemate',
      'Castling, Pawn Promotion, En Passant',
      'Basic Opening Principles',
      'Simple Tactics (Fork, Pin, Skewer, Discover Attack, Back Rank, Double Check)',
      'Rook & Queen Checkmates & Notations'
    ],
    activities: [
      { name: 'Chess stories', icon: BookOpen },
      { name: 'Piece Race Game', icon: Trophy },
      { name: 'Simple Checkmate exercises', icon: Target },
      { name: 'Study Material, Puzzles & Mini Games', icon: Brain }
    ]
  },
  {
    id: 'joggers',
    name: 'Joggers',
    levelLabel: 'LEVEL 2 — JOGGERS',
    subtitle: 'Intermediate Skill Development',
    subheading: 'Intermediate Level (Level 2)',
    description: 'Students develop positional understanding, opening theory, middle game tactics, and endgame techniques to sharpen their competitive edge.',
    marqueeText: 'BUILD SKILLS • BUILD CONFIDENCE • BUILD CHAMPIONS.',
    piece: '♞',
    themeColor: '#8b5cf6',
    bgImage: '/jogger bg.png',
    ageGroup: '7–15 Years',
    duration: '6 Months',
    fees: '₹21,000/- INR',
    goals: [
      'Can play structured openings',
      'Recognizes common tactical patterns',
      'Ready for beginner tournaments'
    ],
    topics: [
      'Pawn Structure & Chess Patterns',
      'Opening Principles fundamental',
      'Checkmate in 2 & 3 moves',
      'Practice matches & Doubt clearing',
      'Middle Game Tactics (Fork, Remove Defender, Decoy/Deflection, Outpost, etc.)',
      'Endgames & Openings (Ruy Lopez, Sicilian, French, Queen Gambit)'
    ],
    activities: [
      { name: 'Practice games, review & Analysis', icon: TrendingUp },
      { name: 'Online & OTB Tournaments', icon: Trophy },
      { name: 'Study Material and Puzzles', icon: Brain }
    ]
  },
  {
    id: 'runner',
    name: 'Runner',
    levelLabel: 'LEVEL 3 — RUNNER',
    subtitle: 'Advanced Tournament Training',
    subheading: 'Advanced Level (Level 3)',
    description: 'Students compete confidently in school-level and open tournaments, developing deep tactical vision, game preparation, and psychological match readiness.',
    marqueeText: 'CHALLENGE YOUR LIMITS • THINK THREE MOVES AHEAD • MASTER THE BOARD.',
    piece: '♜',
    themeColor: '#4f46e5',
    bgImage: '/runner bg.png',
    ageGroup: '10–15 Years',
    duration: 'Ongoing Training',
    fees: 'Price on request',
    goals: [
      'Compete in FIDE-rated / Open Tournaments',
      'Deep tactical vision & calculation precision',
      'Ready for competitive chess circuits'
    ],
    topics: [
      'Advanced opening systems & positional setups',
      'Complex endgame play (Opposition, King/Rook mates)',
      'Game preparation & analytical review',
      'Psychological match readiness & pressure handling',
      'Tactical pattern mastery (1500+ Chess.com rating targets)'
    ],
    activities: [
      { name: 'FIDE Tournament Preparation', icon: Trophy },
      { name: 'Personalized Game Analysis', icon: TrendingUp },
      { name: 'Advanced Match Play', icon: Zap },
      { name: 'Doubt Solving & Coaching', icon: GraduationCap }
    ]
  },
  {
    id: 'crash',
    name: 'Crash Course',
    levelLabel: 'FAST TRACK PROGRAM',
    subtitle: 'Accelerated Chess Learning',
    subheading: 'Fast Track Program',
    description: 'An intensive learning program designed for talented students who need rapid chess development with focused guidance from expert SckoolChess coaches.',
    marqueeText: 'INTENSIVE TRAINING • ACCELERATED PROGRESSION • SPEED UP YOUR GAME.',
    piece: '♛',
    themeColor: '#f97316',
    bgImage: '/crash course bg.png',
    ageGroup: '5–16 Years (All welcome)',
    duration: '3 Months',
    fees: '₹11,000/- INR',
    goals: [
      'Accelerated progression & learning curves',
      'Build endgame precision quickly',
      'Targeted strategy & tactic improvements'
    ],
    topics: [
      'Learning openings by strategic concepts',
      'Building endgame precision and technique',
      'Result analysis & gameplay review sessions',
      'Intensive practical games and tactical drills'
    ],
    activities: [
      { name: 'Intensive coaching sessions', icon: GraduationCap },
      { name: 'Speed chess practice matches', icon: Zap },
      { name: 'Interactive puzzles & worksheets', icon: Brain }
    ]
  }
];

const coursePrograms = [
  {
    id: "walkers",
    name: "Walkers",
    level: "Beginner Level",
    desc: "Perfect for children starting their chess journey and learning the game step-by-step.",
    points: ["24 Classes", "1 Hour Each", "Basic Tactics", "Foundation Building"],
    fees: "9,000",
    bgImage: "/walkerscr.png"
  },
  {
    id: "joggers",
    name: "Joggers",
    level: "Intermediate Level",
    desc: "Designed for students ready to improve tactical understanding and tournament gameplay.",
    points: ["48 Classes", "Opening & Endgame", "Tournament Prep", "Tactical Improvement"],
    fees: "21,000",
    bgImage: "/joggerscr.png"
  },
  {
    id: "runner",
    name: "Runner",
    level: "Advanced Level",
    desc: "For students aiming to compete seriously and improve advanced strategic understanding.",
    points: ["Advanced Strategy", "FIDE Preparation", "Match Analysis", "Competitive Training"],
    fees: "Price on request",
    bgImage: "/runnerscr.png"
  },
  {
    id: "crash",
    name: "Crash Course",
    level: "Fast Track Learning",
    desc: "An accelerated program for rapid improvement and tournament-focused preparation.",
    points: ["24 Classes", "Intensive Learning", "Tactical Training", "Fast Progression"],
    fees: "11,000",
    bgImage: "/crashcoursecr.png"
  }
];

const schoolLogos = [
  { src: '/apeejay.jpg', alt: 'Apeejay School', className: 'logo-square-sm' },
  { src: '/shri ram global.jpg', alt: 'Shri Ram Global School', className: 'logo-wide-sm' },
  { src: '/the vasant international.png', alt: 'The Vasant International Pre-School', className: 'logo-square-sm' },
];

const curriculumDetails = [
  {
    title: "Fundamentals",
    description: "Students begin by understanding the chessboard, piece movement rules, and essential gameplay concepts required to build a strong foundation for competitive chess at every level.",
    topics: ["Chess board & pieces", "Check, checkmate & stalemate", "Basic gameplay understanding", "Rules of the game", "Castling, promotion & en passant", "Opening principles"],
    image: "/fundamentals.jpg"
  },
  {
    title: "Openings",
    description: "Students learn practical opening systems, positional development, and safe opening habits that help create strong early-game positions in both school and competitive chess.",
    topics: ["Basic opening ideas", "Pawn development", "Indian Game introduction", "Central control concepts", "Common opening traps", "Top-rated opening moves"],
    image: "/opening.jpg"
  },
  {
    title: "Tactics",
    description: "The curriculum focuses heavily on tactical pattern recognition and practical combinations that improve real match performance for students competing across Delhi NCR.",
    topics: ["Forks", "Pins", "Skewers", "Discovered attacks", "Double attacks", "Back-rank checkmates", "Puzzle-solving practice", "Zwischenzug concepts"],
    image: "/tactics.jpg"
  },
  {
    title: "Endgames",
    description: "Students develop the ability to convert winning positions confidently through structured endgame training — a critical skill for every tournament-ready chess player in Delhi NCR.",
    topics: ["King & Queen checkmates", "Rook pawn endgames", "Practical endgame strategies", "King & Rook checkmates", "Opposition concepts", "Pawn promotion technique"],
    image: "/endgame.jpg"
  },
  {
    title: "Tournament Activities",
    description: "Train your child to participate in practice games, puzzle contests, and mini-tournaments that build confidence and competitive exposure across Delhi, Noida and NCR.",
    topics: ["Practice matches", "Result analysis", "Competitive preparation", "Puzzle competitions", "Friendly tournaments", "Post-game debriefs"],
    label: "Activities Included",
    image: "/tournament.jpg"
  }
];

const StatBox = ({ number, suffix, label }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = number;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, number]);

  return (
    <div className="stat-box" ref={elementRef}>
      <span className="stat-box__number">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="stat-box__label">{label}</span>
    </div>
  );
};

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = review.text.length > 180;

  return (
    <article className="review-card" style={{ display: 'flex', flexDirection: 'column', minHeight: '380px', boxSizing: 'border-box' }}>
      <span className="stars" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>{'★'.repeat(review.rating)}</span>
      <h4 style={{ minHeight: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '100%' }}>{review.title}</h4>
      <p 
        className={(!isExpanded && isLongText) ? "review-text-clamp" : ""} 
        style={{ flex: '1 0 auto', margin: '11px auto 0', minHeight: 'unset', textAlign: 'center', width: '100%' }}
      >
        {review.text}
      </p>
      {isLongText && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'none',
            border: 'none',
            color: '#E8750A',
            fontWeight: '700',
            cursor: 'pointer',
            padding: '4px 0',
            fontSize: '13px',
            textDecoration: 'underline',
            marginTop: '8px',
            marginBottom: '8px',
            display: 'block',
            textAlign: 'center',
            width: '100%'
          }}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
      <b style={{ marginTop: 'auto', display: 'block', textAlign: 'center', width: '100%' }}>– {review.name}</b>
    </article>
  );
};

export function CurriculumPage() {
  useEffect(() => {
    document.title = 'SckoolChess Curriculum | NEP-Aligned Chess Courses Delhi'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Explore SckoolChess's structured, NEP-aligned chess curriculum for all skill levels. Best chess courses in Rohini, Pitampura & online across Delhi NCR."
      )
    }
  }, [])

  const [activeFeature, setActiveFeature] = useState(0)
  const [slideDir, setSlideDir] = useState('next')
  const [animKey, setAnimKey] = useState(0)
  const [activeTab, setActiveTab] = useState('walkers')
  const [tabKey, setTabKey] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)
  const [activeTournament, setActiveTournament] = useState(0)
  const [tournamentKey, setTournamentKey] = useState(0)
  const timelineItemsRef = useRef([])
  const reviewGridRef = useRef(null)

  const scrollReviews = (direction) => {
    const grid = reviewGridRef.current
    if (!grid) return

    const firstCard = grid.querySelector('.review-card')
    if (!firstCard) return

    const cardWidth = firstCard.getBoundingClientRect().width
    const gap = parseFloat(window.getComputedStyle(grid).columnGap || '0')
    const scrollAmount = cardWidth + gap

    grid.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }

  const handleTab = useCallback((id) => {
    setActiveTab(id)
    setTabKey(k => k + 1)
  }, [])

  const goNext = useCallback(() => {
    setSlideDir('next')
    setActiveFeature(f => (f + 1) % whyFeatures.length)
    setAnimKey(k => k + 1)
  }, [])

  const goPrev = useCallback(() => {
    setSlideDir('prev')
    setActiveFeature(f => (f - 1 + whyFeatures.length) % whyFeatures.length)
    setAnimKey(k => k + 1)
  }, [])

  const goTo = useCallback((i) => {
    setSlideDir(i > activeFeature ? 'next' : 'prev')
    setActiveFeature(i)
    setAnimKey(k => k + 1)
  }, [activeFeature])

  const tNext = useCallback(() => {
    setActiveTournament(f => (f + 1) % tournamentFeatures.length)
    setTournamentKey(k => k + 1)
  }, [])

  const tPrev = useCallback(() => {
    setActiveTournament(f => (f - 1 + tournamentFeatures.length) % tournamentFeatures.length)
    setTournamentKey(k => k + 1)
  }, [])

  const tGoTo = useCallback((i) => {
    setActiveTournament(i)
    setTournamentKey(k => k + 1)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setSlideDir('next')
      setActiveFeature(f => (f + 1) % whyFeatures.length)
      setAnimKey(k => k + 1)
    }, 5500)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setActiveTournament(f => (f + 1) % tournamentFeatures.length)
      setTournamentKey(k => k + 1)
    }, 5500)
    return () => clearInterval(t)
  }, [])

  // Journey Timeline Scroll Logic
  useEffect(() => {
    const section = document.getElementById('journey-v5');
    if (!section) return;

    const trackFill = section.querySelector('.journey-v5__track-fill');
    const steps = section.querySelectorAll('.journey-v5__step');
    const nodeWrappers = section.querySelectorAll('.journey-v5__node-wrapper');
    const nodes = section.querySelectorAll('.journey-v5__node');

    function updateTimeline() {
      if (window.innerWidth <= 1024) return;
      const windowHeight = window.innerHeight;
      const headerHeight = 86;
      // Use 50% of the AVAILABLE screen (below header) so the line exactly meets the dot
      const activationY = headerHeight + (windowHeight - headerHeight) / 2;

      const track = section.querySelector('.journey-v5__track');
      if (!track) return;

      const trackRect = track.getBoundingClientRect();
      
      // Pin the track top and bottom physically to the first and last node centers
      if (nodeWrappers.length > 0) {
        const parentRect = track.parentElement.getBoundingClientRect();
        
        const firstNodeRect = nodeWrappers[0].getBoundingClientRect();
        const firstNodeCenterY = firstNodeRect.top + firstNodeRect.height / 2;
        const offsetFromTop = firstNodeCenterY - parentRect.top;

        const lastNodeRect = nodeWrappers[nodeWrappers.length - 1].getBoundingClientRect();
        const lastNodeCenterY = lastNodeRect.top + lastNodeRect.height / 2;
        const offsetFromBottom = parentRect.bottom - lastNodeCenterY;

        track.style.top = `${offsetFromTop}px`;
        track.style.bottom = `${offsetFromBottom}px`;
        track.style.height = 'auto'; // Let it stretch between top and bottom offsets
      }
      
      const finalTrackRect = track.getBoundingClientRect();
      const trackHeight = finalTrackRect.height || 1;
      
      let fillPixels = activationY - finalTrackRect.top;
      let fillProgress = Math.max(0, Math.min(1, fillPixels / trackHeight));

      if (trackFill) {
        trackFill.style.transform = `scaleY(${fillProgress})`;
      }

      steps.forEach((step, index) => {
        const node = nodes[index];
        const wrapper = nodeWrappers[index];
        if (!wrapper) return;

        const wrapperRect = wrapper.getBoundingClientRect();
        const nodeCenterY = wrapperRect.top + wrapperRect.height / 2;

        // Node is reached if the activation point has passed its center
        // Add 10px tolerance for floating point scroll math
        const isReached = (activationY + 10) >= nodeCenterY;

        if (isReached) {
          if (node) node.setAttribute('data-reached', 'true');
          step.setAttribute('data-reached', 'true');
        } else {
          if (node) node.setAttribute('data-reached', 'false');
          step.setAttribute('data-reached', 'false');
        }
      });
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateTimeline();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateTimeline();

    // Wheel intercepter for precise step-by-step scrolling
    let isAnimating = false;
    let lastWheelTime = 0;

    const handleWheel = (e) => {
      // Disable wheel snap scroll on mobile/tablet viewports and touch devices
      if (window.innerWidth <= 1024 || 'ontouchstart' in window || navigator.maxTouchPoints > 0) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // 1. Boundary Checks: If we are at the top of the section and scrolling up, 
      // or at the bottom and scrolling down, let native scroll take over immediately.
      const isAtTop = rect.top >= -50; 
      const isAtBottom = rect.bottom <= windowHeight + 50;

      if ((isAtTop && scrollingUp) || (isAtBottom && scrollingDown)) {
        return; 
      }

      // 2. Proximity Check: Only intercept if the section is occupying most of the viewport.
      // This prevents the "sticky" feeling when just passing by the section.
      if (rect.top > windowHeight * 0.15 || rect.bottom < windowHeight * 0.85) {
        return;
      }

      // 3. Rate Limiting & Delta Check
      if (isAnimating || Math.abs(e.deltaY) < 20) return;
      
      const now = Date.now();
      if (now - lastWheelTime < 600) return; // Prevent rapid-fire scrolls

      const nodeWrappers = section.querySelectorAll('.journey-v5__node-wrapper');
      if (nodeWrappers.length === 0) return;

      const headerHeight = 86;
      const viewportCenterY = headerHeight + (windowHeight - headerHeight) / 2;
      let targetIdx = -1;

      if (scrollingDown) {
        for (let i = 0; i < nodeWrappers.length; i++) {
          const wr = nodeWrappers[i].getBoundingClientRect();
          const wrCenter = wr.top + wr.height / 2;
          if (wrCenter > viewportCenterY + 20) {
            targetIdx = i;
            break;
          }
        }
      } else {
        for (let i = nodeWrappers.length - 1; i >= 0; i--) {
          const wr = nodeWrappers[i].getBoundingClientRect();
          const wrCenter = wr.top + wr.height / 2;
          if (wrCenter < viewportCenterY - 20) {
            targetIdx = i;
            break;
          }
        }
      }

      // 4. Actively Snap or Passthrough
      if (targetIdx !== -1) {
        e.preventDefault(); // Only prevent default if we found a valid snap target
        isAnimating = true;
        lastWheelTime = now;

        const targetNode = nodeWrappers[targetIdx];
        const targetRect = targetNode.getBoundingClientRect();
        const targetCenterY = targetRect.top + targetRect.height / 2;
        const scrollAmount = targetCenterY - viewportCenterY;

        window.scrollBy({
          top: scrollAmount,
          behavior: 'smooth'
        });

        setTimeout(() => {
          isAnimating = false;
        }, 800);
      }
      // If targetIdx is -1, we don't prevent default, allowing native exit
    };

    section.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      section.removeEventListener('wheel', handleWheel);

    };
  }, []);

  return (
    <section className="curriculum-page" aria-label="Curriculum page">

      {/* ── New Hero ── */}
      <div className="new-curriculum-hero">
        <div className="nch-container">
          <div className="nch-left">
            <p className="nch-eyebrow">Structured Chess Coaching for Kids</p>
            <h1>
              Structured Chess Curriculum Designed to Build Future Champions
            </h1>
            <p>
              A structured and progressive learning program for students of all ages. Shape their decisions, strategy, thinking, tournament confidence and life skills through SckoolChess — the best chess solution provider in Rohini and across Delhi NCR.
            </p>
            <div className="nch-actions">
              <Link to="/book-class?ref=Curriculum+Page+Hero" className="nch-btn-primary">Book Free Trial</Link>
              <a href="https://www.youtube.com/@sckoolchess" target="_blank" rel="noopener noreferrer" className="nch-btn-youtube">
                <span className="nch-yt-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </span>
                Check Out Free Study Material on YouTube
              </a>
            </div>
          </div>

          <div className="nch-right">
            <div className="nch-image-wrapper">
              <svg className="nch-rotating-dashed-circle" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="49" fill="none" stroke="#ffd04d" strokeWidth="1" strokeDasharray="5 4" />
              </svg>
              <div className="nch-solid-circle"></div>
              <img src="/student4.png" alt="Student playing chess" className="nch-main-img" />

              {/* Floating cards */}
              <div className="nch-floating-card fc-1">
                <div className="fc-icon"><ArrowUpRight size={20} strokeWidth={3} /></div>
                <div className="fc-text">
                  <strong><AnimatedNumber end={5} suffix="+" /></strong>
                  <span>Courses</span>
                </div>
              </div>

              <div className="nch-floating-card fc-2">
                <div className="fc-text">
                  <strong><AnimatedNumber end={500} suffix="+" /></strong>
                  <span>Students</span>
                </div>
                <div className="fc-avatars">
                  <img src="/A1.jpeg" alt="student" />
                  <img src="/A2.jpeg" alt="student" />
                  <img src="/A3.jpeg" alt="student" />
                  <img src="/A4.jpeg" alt="student" />
                </div>
              </div>

              <div className="nch-floating-card fc-3" style={{ cursor: 'pointer' }} onClick={() => window.dispatchEvent(new CustomEvent('open-custom-modal', { detail: { type: 'booking', section: 'Curriculum Hero Floating Card' } }))}>
                <img src="/A3.jpeg" alt="student" className="fc-coach-img" />
                <div className="fc-text">
                  <strong>Book Free Demo</strong>
                  <span>Live 1-on-1 Class</span>
                  <button className="fc-btn">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Animated Journey Timeline Section (Hidden) ── */}
      {false && (
      <section id="journey-v5" className="journey-v5">

        {/* Floating Background Pieces */}
        <div className="journey-bg-pieces">
          <span className="bg-piece p-1">♞</span>
          <span className="bg-piece p-2">♜</span>
          <span className="bg-piece p-3">♟</span>
          <span className="bg-piece p-4">♛</span>
          <span className="bg-piece p-5">♝</span>
          <span className="bg-piece p-6">♚</span>
        </div>

        <div className="journey-v5__container">
          <div className="journey-v5__header">
            <h2 className="journey-v5__heading">What Your Child Will Learn</h2>
            <p className="journey-v5__subheading">A progressive, stage-by-stage journey to chess mastery and beyond.</p>
          </div>

          <div className="journey-v5__body">
            <div className="journey-v5__timeline">
              <div className="journey-v5__track">
                <div className="journey-v5__track-bg"></div>
                <div className="journey-v5__track-fill"></div>
              </div>
            </div>

            <div className="journey-v5__steps">
              {journeySteps.map((step, idx) => {
                const isEven = idx % 2 === 1; // 0-index based, so index 1 is even step
                return (
                  <div key={step.id} className={`journey-v5__step ${isEven ? 'journey-v5__step--even' : 'journey-v5__step--odd'}`}>
                    <div className="journey-v5__content">
                      
                      {/* Left Side */}
                      <div className="journey-v5__left-side">
                        {isEven ? (
                          /* Info Card on Left */
                          <div className="jv5-card jv5-info-card">
                            <div className="jv5-info-text">
                              <div className="jv5-info-header">
                                <span className="jv5-badge-piece">{step.piece}</span>
                                <h4>{step.title}</h4>
                              </div>
                              <h5 className="jv5-subtitle">{step.subtitle}</h5>
                              <p className="jv5-desc">{step.desc}</p>
                            </div>
                            {step.image && (
                              <div className="jv5-info-image">
                                <img src={step.image} alt={step.title} />
                              </div>
                            )}
                          </div>
                        ) : (
                          /* Points Card on Left */
                          <div className="jv5-card jv5-points-card">
                            <div className="jv5-card-lists">
                              <div className="jv5-card-list-group">
                                <h6 className="jv5-points-col-title title-highlights">
                                  <Star size={15} className="jv5-points-icon" fill="currentColor" /> Highlights
                                </h6>
                                <ul>
                                  {step.highlights.map((h, i) => <li key={i}>{h}</li>)}
                                </ul>
                              </div>
                              <div className="jv5-card-list-group details-group">
                                <h6 className="jv5-points-col-title title-details">
                                  <GraduationCap size={16} className="jv5-points-icon" /> Details
                                </h6>
                                <ul>
                                  {step.details.map((d, i) => <li key={i}>{d}</li>)}
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Center Node */}
                      <div className="journey-v5__node-wrapper">
                        <div className="journey-v5__node">
                          <div className="journey-v5__node-ring">
                            <div className="journey-v5__node-dot"></div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side */}
                      <div className="journey-v5__right-side">
                        {isEven ? (
                          /* Points Card on Right */
                          <div className="jv5-card jv5-points-card">
                            <div className="jv5-card-lists">
                              <div className="jv5-card-list-group">
                                <h6 className="jv5-points-col-title title-highlights">
                                  <Star size={15} className="jv5-points-icon" fill="currentColor" /> Highlights
                                </h6>
                                <ul>
                                  {step.highlights.map((h, i) => <li key={i}>{h}</li>)}
                                </ul>
                              </div>
                              <div className="jv5-card-list-group details-group">
                                <h6 className="jv5-points-col-title title-details">
                                  <GraduationCap size={16} className="jv5-points-icon" /> Details
                                </h6>
                                <ul>
                                  {step.details.map((d, i) => <li key={i}>{d}</li>)}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Info Card on Right */
                          <div className="jv5-card jv5-info-card">
                            <div className="jv5-info-text">
                              <div className="jv5-info-header">
                                <span className="jv5-badge-piece">{step.piece}</span>
                                <h4>{step.title}</h4>
                              </div>
                              <h5 className="jv5-subtitle">{step.subtitle}</h5>
                              <p className="jv5-desc">{step.desc}</p>
                            </div>
                            {step.image && (
                              <div className="jv5-info-image">
                                <img src={step.image} alt={step.title} />
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ── New Premium Curriculum Levels Section (v6) ── */}
      <section id="journey-v6" className="journey-v6">
        <div className="journey-v6__container">
          <div className="journey-v6__header">
            <h2 className="journey-v6__heading">What Your Child Will Learn</h2>
            <p className="journey-v6__subheading">A progressive, stage-by-stage journey to chess mastery and beyond.</p>
          </div>

          {/* List of all Levels Stacked Vertically */}
          <div className="journey-v6__levels-list">
            {premiumLevelsData.map((level) => (
              <div 
                id={level.id}
                key={level.id} 
                className="journey-v6__level-row"
                style={{ '--level-theme-color': level.themeColor }}
              >
                {/* Level Row Background Banner Image and Ambient Glow */}
                <div className="journey-v6__level-bg">
                  <img src={level.bgImage} alt="" className="journey-v6__level-bg-img" />
                  <div className="journey-v6__level-bg-overlay"></div>
                  <div className="journey-v6__level-theme-glow"></div>
                </div>

                {/* Left Side: Title, Subtitle, and Topics Covered */}
                <div className="journey-v6__left-col">
                  <div className="journey-v6__level-title-group">
                    <h3 className="journey-v6__level-title">
                      {level.name} <span className="journey-v6__title-piece">{level.piece}</span>
                    </h3>
                    <p className="journey-v6__level-subtitle">{level.subheading}</p>
                  </div>
                  
                  <div className="journey-v6__topics-section">
                    <h4 className="journey-v6__topics-title">Topics Covered</h4>
                    <div className="journey-v6__topics-list">
                      {level.topics.map((topic, index) => (
                        <div key={index} className="journey-v6__topic-item">
                          <span className="journey-v6__topic-number">{index + 1}</span>
                          <span className="journey-v6__topic-text">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Info Stack + Goals, Activities, Book Class Button */}
                <div className="journey-v6__right-col">
                  {/* Marquee Pill Bar */}
                  <div className="journey-v6__marquee-pill">
                    <div className="journey-v6__marquee-content">
                      <span className="journey-v6__marquee-text">{level.marqueeText}</span>
                      <span className="journey-v6__marquee-text" aria-hidden="true">{level.marqueeText}</span>
                    </div>
                  </div>

                  {/* Top Row: Stack of 3 Info Cards + Goals Box */}
                  <div className="journey-v6__right-top-row">
                    {/* Stack of Info Cards */}
                    <div className="journey-v6__info-stack">
                      <div className="journey-v6__info-card journey-v6__info-card--age">
                        <div className="journey-v6__info-icon-wrap">
                          <Users size={20} />
                        </div>
                        <div className="journey-v6__info-content">
                          <span className="journey-v6__info-label">AGE GROUP</span>
                          <strong className="journey-v6__info-value">{level.ageGroup}</strong>
                        </div>
                      </div>

                      <div className="journey-v6__info-card journey-v6__info-card--duration">
                        <div className="journey-v6__info-icon-wrap">
                          <Clock size={20} />
                        </div>
                        <div className="journey-v6__info-content">
                          <span className="journey-v6__info-label">DURATION</span>
                          <strong className="journey-v6__info-value">{level.duration}</strong>
                        </div>
                      </div>

                      <div className="journey-v6__info-card journey-v6__info-card--fees">
                        <div className="journey-v6__info-icon-wrap">
                          <Wallet size={20} />
                        </div>
                        <div className="journey-v6__info-content">
                          <span className="journey-v6__info-label">FEES</span>
                          <strong className="journey-v6__info-value">{level.fees}</strong>
                        </div>
                      </div>
                    </div>

                    {/* Goals Box */}
                    <div className="journey-v6__goals-box">
                      <div className="journey-v6__goals-header">
                        <Target size={20} className="journey-v6__goals-icon" />
                        <h4>GOALS</h4>
                      </div>
                      <ul className="journey-v6__goals-list">
                        {level.goals.map((goal, index) => (
                          <li key={index}>
                            <CheckCircle2 size={15} className="journey-v6__goal-check" />
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Area: Activities Panel + Book Trial Button */}
                  <div className="journey-v6__activities-panel">
                    <h4 className="journey-v6__activities-title">ACTIVITIES</h4>
                    <div className="journey-v6__activities-grid">
                      {level.activities.map((act, index) => {
                        const IconComponent = act.icon;
                        const activityThemes = [
                          { bg: 'rgba(245, 158, 11, 0.1)', color: '#d97706' }, // Yellow
                          { bg: 'rgba(34, 197, 94, 0.1)', color: '#16a34a' }, // Green
                          { bg: 'rgba(239, 68, 68, 0.1)', color: '#dc2626' }, // Red
                          { bg: 'rgba(99, 102, 241, 0.1)', color: '#4f46e5' }  // Blue/Indigo
                        ];
                        const theme = activityThemes[index % activityThemes.length];
                        return (
                          <div key={index} className="journey-v6__activity-card">
                            <div 
                              className="journey-v6__activity-icon-wrap"
                              style={{ backgroundColor: theme.bg, color: theme.color }}
                            >
                              <IconComponent size={20} />
                            </div>
                            <span className="journey-v6__activity-name">{act.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Section ── */}
      <section className="impact-v5">
        <div className="impact-v5__container">
          <div className="impact-v5__grid">
            <div className="impact-v5__content">
              <span className="impact-v5__badge">PROVEN EXCELLENCE</span>
              <h2 className="impact-v5__heading">What Your Child Will Learn</h2>
              <p className="impact-v5__subtext">
                A structured curriculum for every chess learner at every level.
              </p>

              <div className="impact-v5__stats">
                <StatBox number={500} suffix="+" label="Enrolled Students" />
                <StatBox number={10} suffix="+" label="Tournaments Won" />
                <StatBox number={80} suffix="%" label="Customer Retention" />
              </div>
            </div>

            <div className="impact-v5__image-wrap">
              <img 
                src="/curiculum what your child will learn.png" 
                alt="Professional chess coaching session" 
                className="impact-v5__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Curriculum Detail Sections ── */}
      <section className="curriculum-detail-v5">
        <div className="curriculum-detail-v5__container">
          {curriculumDetails.map((detail, idx) => {
            const isReverse = idx % 2 === 0;
            return (
              <div 
                key={detail.title} 
                className={`curriculum-detail-v5__row ${isReverse ? 'curriculum-detail-v5__row--reverse' : ''}`}
              >
                <div className="curriculum-detail-v5__content">
                  <h3 className="curriculum-detail-v5__title">{detail.title}</h3>
                  <div className="curriculum-detail-v5__desc-wrap">
                    <p className="curriculum-detail-v5__desc-label">Description</p>
                    <p className="curriculum-detail-v5__description">{detail.description}</p>
                  </div>
                  <div className="curriculum-detail-v5__topics-wrap">
                    <p className="curriculum-detail-v5__topics-label">{detail.label || "Topics Covered"}</p>
                    <ul className="curriculum-detail-v5__list">
                      {detail.topics.map((topic, tIdx) => (
                        <li key={tIdx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="curriculum-detail-v5__image-wrap">
                  <img src={detail.image} alt={detail.title} className="curriculum-detail-v5__image" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Course Programs Section ── */}
      <section className="course-programs-v5">
        <div className="cp-v5__container">
          <div className="cp-v5__header">
            <p className="cp-v5__kicker">Our Programs</p>
            <h2 className="cp-v5__heading">Chess Programs for Every Skill Level</h2>
            <p className="cp-v5__subheading">Find the right program for your child's current chess level.</p>
          </div>

          <div className="cp-v5__carousel">
            {coursePrograms.map((course, idx) => (
              <div key={idx} className="cp-v5__card">
                <div className="cp-v5__card-main">
                  <div className="cp-v5__card-bg">
                    <img src={course.bgImage} alt={course.name} />
                  </div>
                  <div className="cp-v5__card-overlay"></div>
                  
                  <div className="cp-v5__card-content">
                    <h3 className="cp-v5__card-title">
                      <a href={"#" + course.id} className="cp-v5__card-title-link">{course.name}</a>
                    </h3>
                    <p className="cp-v5__card-desc">{course.desc}</p>
                    <div className="cp-v5__capsules">
                      {course.points.map((p, pIdx) => (
                        <span key={pIdx} className="cp-v5__capsule">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="cp-v5__footer">
                  <div className="cp-v5__price">
                    {course.fees.toLowerCase().includes('price') ? course.fees : `₹${course.fees}`}
                  </div>
                  <Link to="/book-class?ref=Curriculum+Page+Course+Cards" className="cp-v5__book-btn">BOOK TRIAL</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Schools Section (from Home) ── */}
      <section className="figma-section school-row">
        <h3>School Associated With Us</h3>
        <div className="school-logo-marquee" aria-label="Associated schools">
          <div className="school-logo-track">
            {[...schoolLogos, ...schoolLogos].map((logo, idx) => (
              <img
                className={logo.className}
                key={`${logo.src}-${idx}`}
                src={logo.src}
                alt={logo.alt}
              />
            ))}
          </div>
          <div className="school-logo-track" aria-hidden="true">
            {[...schoolLogos, ...schoolLogos].map((logo, idx) => (
              <img
                className={logo.className}
                key={`${logo.src}-copy-${idx}`}
                src={logo.src}
                alt=""
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Customer Reviews (from Home) ── */}
      <section className="figma-section reviews" id="support">
        <h2 style={{ textAlign: 'center' }}>Customer Reviews</h2>
        <p className="sub" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          See what parents and students are saying about learning chess with SckoolChess.
        </p>
        <div className="review-row">
          <button
            className="review-nav review-nav-left"
            aria-label="Previous reviews"
            onClick={() => scrollReviews('prev')}
          >
            ‹
          </button>
          <div className="review-grid" ref={reviewGridRef}>
            {googleReviews.map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </div>
          <button
            className="review-nav review-nav-right"
            aria-label="Next reviews"
            onClick={() => scrollReviews('next')}
          >
            ›
          </button>
        </div>
      </section>

      {/* ── Landscape Banner ── */}
      <section className="curriculum-banner-v5">
        <div className="curriculum-banner-v5__container">
          <img 
            src="/curriculum bottom banner.png" 
            alt="Chess Banner" 
            className="curriculum-banner-v5__image" 
          />
        </div>
      </section>

    </section>
  )
}

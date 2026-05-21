import { useState, useEffect, useCallback, useRef } from 'react'
import { Award, BookOpen, Brain, CalendarDays, CheckCircle2, ChevronLeft, ChevronRight, Clock, GraduationCap, Lightbulb, LayoutGrid, Phone, Plus, Scale, ShieldCheck, Star, Target, TrendingUp, Trophy, Building2, User, Users, Wallet, Zap, ArrowUpRight, PlayCircle, FolderCheck, Globe, ArrowRight } from 'lucide-react'




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
    desc: "Children learn chess fundamentals, board understanding, movement rules, and basic tactical thinking in an engaging and beginner-friendly environment.",
    highlights: ["Learn chess fundamentals", "Basic tactics & gameplay", "Confidence building", "Beginner-friendly learning"],
    details: ["Duration: 3 Months", "Classes: 24 Sessions", "Age Group: 5–12 Years"],
    label: "Level 1",
    name: "Walkers",
    piece: "♟",
    icon: Star
  },
  {
    id: 2,
    title: "Level 2 — Joggers",
    subtitle: "Intermediate Skill Development",
    desc: "Students begin understanding openings, tactics, strategy, and practical gameplay while preparing for competitive chess environments.",
    highlights: ["Opening principles", "Tactical improvement", "Endgame concepts", "Tournament preparation"],
    details: ["Duration: 6 Months", "Classes: 48 Sessions", "Age Group: 8–12 Years"],
    label: "Level 2",
    name: "Joggers",
    piece: "♞",
    icon: FolderCheck
  },
  {
    id: 3,
    title: "Level 3 — Runner",
    subtitle: "Advanced Tournament Training",
    desc: "Advanced students receive high-level chess coaching focused on competitive tournaments, deep positional understanding, and FIDE-level preparation.",
    highlights: ["Advanced openings & strategy", "Competitive match analysis", "FIDE tournament preparation", "Performance-focused coaching"],
    details: ["Ongoing Training", "Practice + Coaching Sessions", "For 1500+ Chess.com Rating", "Age Group: Up to 15 Years"],
    label: "Level 3",
    name: "Runner",
    piece: "♜",
    icon: Globe
  },
  {
    id: 4,
    title: "Fast Track Program",
    subtitle: "Accelerated Chess Learning",
    desc: "An intensive learning program designed for faster improvement, tournament preparation, and rapid skill development.",
    highlights: ["Fast-track learning", "Essential openings & tactics", "Quick tournament preparation", "Intensive practical sessions"],
    details: ["Duration: 3 Months", "Classes: 24 Sessions", "Age Group: 5–12 Years"],
    label: "Crash Course",
    piece: "♛",
    icon: Zap
  }
];

const coursePrograms = [
  {
    name: "Walkers",
    level: "Beginner Level",
    desc: "Perfect for children starting their chess journey and learning the game step-by-step.",
    points: ["24 Classes", "1 Hour Each", "Basic Tactics", "Foundation Building"],
    fees: "9,000",
    bgImage: "/n1.jpg"
  },
  {
    name: "Joggers",
    level: "Intermediate Level",
    desc: "Designed for students ready to improve tactical understanding and tournament gameplay.",
    points: ["48 Classes", "Opening & Endgame", "Tournament Prep", "Tactical Improvement"],
    fees: "21,000",
    bgImage: "/n2.jpg"
  },
  {
    name: "Runner",
    level: "Advanced Level",
    desc: "For students aiming to compete seriously and improve advanced strategic understanding.",
    points: ["Advanced Strategy", "FIDE Preparation", "Match Analysis", "Competitive Training"],
    fees: "Price on request",
    bgImage: "/n3.jpg"
  },
  {
    name: "Crash Course",
    level: "Fast Track Learning",
    desc: "An accelerated program for rapid improvement and tournament-focused preparation.",
    points: ["24 Classes", "Intensive Learning", "Tactical Training", "Fast Progression"],
    fees: "11,000",
    bgImage: "/n4.jpg"
  }
];

const schoolLogos = [
  { src: '/sc1.png', alt: 'Apeejay School', className: 'logo-square-sm' },
  { src: '/sc2.png', alt: 'Shri Ram Global School', className: 'logo-square' },
  { src: '/sc3.png', alt: 'Kingdom of Kids', className: 'logo-square' },
  { src: '/sc4.png', alt: 'Arlington Christian School', className: 'logo-wide' },
  { src: '/sc5.png', alt: 'Partner school', className: 'logo-wide-sm' },
];

const curriculumDetails = [
  {
    title: "Fundamentals",
    description: "Students begin by understanding the chessboard, piece movement, rules, and essential gameplay concepts required to build a strong foundation.",
    topics: ["Chess board & pieces", "Rules of the game", "Check, checkmate & stalemate", "Castling, promotion & en passant", "Basic gameplay understanding", "Opening principles"],
    image: "/fundamentals.jpg"
  },
  {
    title: "Openings",
    description: "Students learn practical opening systems, positional development, and safe opening habits that help create strong early-game positions.",
    topics: ["Basic opening ideas", "Center control concepts", "Piece development", "Common opening traps", "Italian Game introduction", "Ruy Lopez introduction"],
    image: "/opening.jpg"
  },
  {
    title: "Tactics",
    description: "The curriculum focuses heavily on tactical pattern recognition and practical combinations that improve real match performance.",
    topics: ["Forks", "Pins", "Skewers", "Discovered attacks", "Double attacks", "Back rank checkmates", "Puzzle solving practice"],
    image: "/tactics.jpg"
  },
  {
    title: "Endgames",
    description: "Students develop the ability to convert winning positions confidently through structured endgame training.",
    topics: ["King & Queen checkmate", "King & Rook checkmate", "Basic pawn endgames", "Opposition concepts", "Practical endgame strategies"],
    image: "/endgame.jpg"
  },
  {
    title: "Tournament Activities",
    description: "Students regularly participate in practice games, puzzle contests, and mini tournaments to build confidence and competitive exposure.",
    topics: ["Practice matches", "Puzzle competitions", "Match analysis", "Friendly tournaments", "Competitive preparation"],
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

export function CurriculumPage() {
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
      const windowHeight = window.innerHeight;
      const headerHeight = 86;
      // Use 50% of the AVAILABLE screen (below header) so the line exactly meets the dot
      const activationY = headerHeight + (windowHeight - headerHeight) / 2;

      const track = section.querySelector('.journey-v5__track');
      if (!track) return;

      const trackRect = track.getBoundingClientRect();
      
      // Pin the track bottom physically to the last node center
      if (nodeWrappers.length > 0) {
        const lastNodeRect = nodeWrappers[nodeWrappers.length - 1].getBoundingClientRect();
        const lastNodeCenterY = lastNodeRect.top + lastNodeRect.height / 2;
        
        // Calculate how far the node center is from the bottom of its parent container (the timeline)
        // This ensures the offset is accurate regardless of section padding or headers.
        const parentRect = track.parentElement.getBoundingClientRect();
        const offsetFromBottom = parentRect.bottom - lastNodeCenterY - 10;
        
        track.style.bottom = `${offsetFromBottom}px`;
        track.style.height = 'auto'; // Let it stretch from CSS top to this bottom
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
              A carefully designed chess learning program for children aged 5 to 15 years that develops strategic thinking, tournament confidence, and competitive skills through structured progression.
            </p>
            <div className="nch-actions">
              <a href="tel:+918447992702" className="nch-btn-primary">Book Free Trial</a>
              <a href="#about" className="nch-btn-secondary">View Courses</a>
            </div>
          </div>

          <div className="nch-right">
            <div className="nch-image-wrapper">
              <svg className="nch-rotating-dashed-circle" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="49" fill="none" stroke="#ffd04d" strokeWidth="1" strokeDasharray="5 4" />
              </svg>
              <div className="nch-solid-circle"></div>
              <img src="/student2.png" alt="Student playing chess" className="nch-main-img" />

              {/* Floating cards */}
              <div className="nch-floating-card fc-1">
                <div className="fc-icon"><ArrowUpRight size={20} strokeWidth={3} /></div>
                <div className="fc-text">
                  <strong><AnimatedNumber end={50} suffix="+" /></strong>
                  <span>Online Courses</span>
                </div>
              </div>

              <div className="nch-floating-card fc-2">
                <div className="fc-text">
                  <strong><AnimatedNumber end={10} suffix="k+" /></strong>
                  <span>Online Students</span>
                </div>
                <div className="fc-avatars">
                  <img src="/c1.jpg" alt="student" />
                  <img src="/c2.jpg" alt="student" />
                  <img src="/c3.jpg" alt="student" />
                  <img src="/c4.jpg" alt="student" />
                </div>
              </div>

              <div className="nch-floating-card fc-3">
                <img src="/c6.jpeg" alt="coach" className="fc-coach-img" />
                <div className="fc-text">
                  <strong>Chess Masterclass</strong>
                  <span>Today at 02:00 Pm</span>
                  <button className="fc-btn">Join now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* ── Animated Journey Timeline Section ── */}
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
            <p className="journey-v5__subheading">A structured curriculum designed to develop strong chess fundamentals, tactical awareness, strategic thinking, and competitive confidence.</p>
          </div>

          <div className="journey-v5__body">
            <div className="journey-v5__timeline">
              <div className="journey-v5__track">
                <div className="journey-v5__track-bg"></div>
                <div className="journey-v5__track-fill"></div>
              </div>
            </div>

            {/* Steps Content */}
            <div className="journey-v5__steps">
              {journeySteps.map((step, idx) => {
                const isEven = idx % 2 === 1; // 0-index based, so index 1 is even step
                return (
                  <div key={step.id} className={`journey-v5__step ${isEven ? 'journey-v5__step--even' : 'journey-v5__step--odd'}`}>
                    <div className="journey-v5__content">
                      <div className="journey-v5__card-side">
                        <div className="jv5-card">
                          <div className="jv5-card-header">
                            <step.icon size={22} className="jv5-card-icon" strokeWidth={2} />
                            <h4>{step.title}</h4>
                          </div>
                          <h5 className="jv5-card-subtitle">{step.subtitle}</h5>
                          <p>{step.desc}</p>

                          <div className="jv5-card-lists">
                            <div className="jv5-card-list-group">
                              <h6>Highlights</h6>
                              <ul>
                                {step.highlights.map((h, i) => <li key={i}>{h}</li>)}
                              </ul>
                            </div>
                            <div className="jv5-card-list-group">
                              <h6>Details</h6>
                              <ul>
                                {step.details.map((d, i) => <li key={i}>{d}</li>)}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Center Node */}
                      <div className="journey-v5__node-wrapper">
                        <div className="journey-v5__node">
                          <div className="journey-v5__node-ring">
                            <div className="journey-v5__node-dot"></div>
                          </div>
                        </div>
                      </div>

                      <div className="journey-v5__label-side">
                        <span className="jv5-label">
                          <span className="jv5-label-piece">{step.piece}</span>
                          <span className="jv5-label-main">
                            {step.label}
                            {step.name && <span className="jv5-label-sub">{step.name}</span>}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
                A structured curriculum designed to develop strong chess fundamentals, tactical awareness, strategic thinking, and competitive confidence.
              </p>

              <div className="impact-v5__stats">
                <StatBox number={15000} suffix="+" label="Enrolled Students" />
                <StatBox number={500} suffix="+" label="Tournaments Won" />
                <StatBox number={95} suffix="%" label="Success Rate" />
              </div>
            </div>

            <div className="impact-v5__image-wrap">
              <img 
                src="/n2.jpg" 
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
            <p className="cp-v5__subheading">Whether your child is just starting or preparing for competitive tournaments, we offer structured programs for every stage of growth.</p>
          </div>

          <div className="cp-v5__carousel">
            {coursePrograms.map((course, idx) => (
              <div key={idx} className="cp-v5__card">
                {/* Floating Boy Image */}
                <img src="/student2.png" alt="Student" className="cp-v5__floating-img" />
                
                <div className="cp-v5__card-main">
                  <div className="cp-v5__card-bg">
                    <img src={course.bgImage} alt={course.name} />
                  </div>
                  <div className="cp-v5__card-overlay"></div>
                  
                  <div className="cp-v5__card-content">
                    <h3 className="cp-v5__card-title">{course.name}</h3>
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
                  <button className="cp-v5__book-btn">BOOK TRIAL</button>
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
        <h2>Customer Reviews</h2>
        <p className="sub">
          Our students and parents share their experiences learning chess with us.
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
            <article className="review-card">
              <span className="stars">★★★★★</span>
              <h4>Good Style of Edu</h4>
              <p>
                Honored to be featured in Voyage L A for their Inspiring Stories series.
                We talked about how Goldenbird Marketing came to be what it is today
                through a little Q and A.
              </p>
              <b>– Joanna A.</b>
            </article>
            <article className="review-card">
              <span className="stars">★★★★★</span>
              <h4>Loved It!</h4>
              <p>
                Honored to be featured in Voyage L A for their Inspiring Stories series.
                We talked about how Goldenbird Marketing came to be what it is today
                through a little Q and A.
              </p>
              <b>– Brenda</b>
            </article>
            <article className="review-card">
              <span className="stars">★★★★★</span>
              <h4>Highly Recommend</h4>
              <p>
                Honored to be featured in Voyage L A for their Inspiring Stories series.
                We talked about how Goldenbird Marketing came to be what it is today
                through a little Q and A.
              </p>
              <b>– Jessie</b>
            </article>
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
            src="/n5.jpg" 
            alt="Chess Banner" 
            className="curriculum-banner-v5__image" 
          />
        </div>
      </section>

    </section>
  )
}

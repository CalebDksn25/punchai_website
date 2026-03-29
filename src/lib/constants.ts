export const APP_STORE_URL =
  "https://apps.apple.com/app/punch-ai/id0000000000";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
] as const;

export const FEATURES = [
  {
    icon: "Target" as const,
    title: "AI Pad Holding",
    description:
      "Practice combos with an AI partner that calls out shots and reacts in real-time to your punches.",
  },
  {
    icon: "ShieldCheck" as const,
    title: "Defensive Drills",
    description:
      "Sharpen your slips, rolls, and blocks with guided defensive drills designed to build reflexes.",
  },
  {
    icon: "Swords" as const,
    title: "Offensive Drills",
    description:
      "Build power and precision with structured punch sequences from jabs to devastating combos.",
  },
  {
    icon: "Calendar" as const,
    title: "Tailored Training Plans",
    description:
      "Get a personalized program that evolves with your progress, from beginner to advanced.",
  },
  {
    icon: "Video" as const,
    title: "Video Feedback",
    description:
      "Upload your footage and receive AI-powered form analysis with actionable tips to improve.",
  },
  {
    icon: "BarChart3" as const,
    title: "Track Your Progress",
    description:
      "Monitor your training stats, punch accuracy, and improvement over time with detailed performance insights.",
  },
] as const;

export const STEPS = [
  {
    number: 1,
    icon: "Download" as const,
    title: "Download the App",
    description: "Available free on the App Store. Get set up in under a minute.",
  },
  {
    number: 2,
    icon: "UserPlus" as const,
    title: "Set Your Level",
    description:
      "Beginner to advanced — we meet you where you are and build from there.",
  },
  {
    number: 3,
    icon: "Flame" as const,
    title: "Start Training",
    description:
      "Jump into your first AI-powered session and feel the difference immediately.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Marcus T.",
    role: "Amateur Boxer",
    quote:
      "Punch AI completely changed how I train solo. The pad work drills feel like having a real coach calling shots.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Fitness Enthusiast",
    quote:
      "I've never boxed before but the training plans made it so easy to start. I'm hooked and seeing real progress.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "MMA Fighter",
    quote:
      "The video feedback feature is a game changer. It caught flaws in my form that I never would have noticed on my own.",
    rating: 5,
  },
] as const;

export const STATS = [
  { value: "50K+", label: "Downloads" },
  { value: "4.9", label: "Star Rating" },
  { value: "#1", label: "Boxing App" },
] as const;

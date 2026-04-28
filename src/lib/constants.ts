export const APP_STORE_URL =
  "https://apps.apple.com/us/app/punch-ai-boxing-coach/id6761316809";

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
    name: "Mitchell Reed",
    role: "Pro Muay Thai",
    quote:
      "Punch AI is the closest thing to having a coach in your living room. I use it between camps to stay sharp and the drills actually push me.",
    rating: 5,
  },
  {
    name: "James S.",
    role: "Boxer",
    quote:
      "The pad work calls feel real — I'm reacting, not just throwing combos. My solo sessions don't feel like a downgrade from gym days anymore.",
    rating: 5,
  },
  {
    name: "Braydon Johnston",
    role: "MMA",
    quote:
      "Video feedback caught form issues I'd been getting away with for years. It's like having a second set of eyes every round.",
    rating: 5,
  },
] as const;

export const STATS = [
  { value: "100+", label: "Downloads" },
  { value: "5.0", label: "Star Rating" },
  { value: "#1", label: "Boxing App" },
] as const;

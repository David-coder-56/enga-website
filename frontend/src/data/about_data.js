import { Target, Eye, ShieldCheck } from 'lucide-react';

const aboutData = {
  hero: {
    badge: "About ENGA",
    title: "Redefining Digital Excellence.",
    subtitle:
      "Elite Next Gen Agency is a boutique digital studio focused on performance, modern design, and scalable technology."
  },

  cards: [
    {
      title: "Strategic Mission",
      icon: Target,
      desc:
        "We build high-performance digital platforms designed to elevate brands, increase visibility, and drive measurable growth."
    },

    {
      title: "Forward Vision",
      icon: Eye,
      desc:
        "Our goal is to merge immersive design with technical precision — creating experiences that feel modern, refined, and built for scale."
    },

    {
      title: "Core Principles",
      icon: ShieldCheck,
      desc:
        "Clarity. Performance. Integrity. Every project is built with intention, clean architecture, and long-term adaptability in mind."
    },
  ],

  team: [],

  teamFooter: {
    location: "Monrovia, Liberia • Serving Global Clients",
    size: "Boutique Digital Studio"
  }
};
const values = [
  {
    title: "Relentless Performance",
    desc: "Speed and efficiency are non-negotiable. We optimize every layer of the stack to ensure fast load times, smooth interactions, and scalable architecture built for long-term growth."
  },
  {
    title: "Intentional Design",
    desc: "We don’t use templates. Every layout, interaction, and visual element is crafted with purpose—designed to communicate authority, clarity, and trust."
  },
  {
    title: "Strategy Meets Creativity",
    desc: "Design without data is guesswork. We combine analytics, behavioral insight, and creative direction to build digital experiences that convert and perform."
  },
  {
    title: "Built for Evolution",
    desc: "Technology changes fast. We build on modern, extensible frameworks so your platform remains adaptable, scalable, and ready for what’s next."
  }
];
export { aboutData, values };
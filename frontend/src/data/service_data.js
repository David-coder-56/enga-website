import {
  Code,
  Globe,
  PenTool,
  TrendingUp,
  Smartphone,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Digital Marketing",
    desc: "Data-driven campaigns designed to increase visibility, engagement, and measurable growth. We combine strategy, content, and performance marketing to scale brands effectively.",
    icon: Globe,
    color: "from-enga-gold/20 to-transparent",
  },

  {
    id: "02",
    title: "Web Development",
    desc: "High-performance, modern websites built with scalable technologies. Fast, responsive, SEO-optimized, and designed to convert visitors into customers.",
    icon: Code,
    color: "from-enga-maroon/20 to-transparent",
  },

  {
    id: "03",
    title: "Mobile App Development",
    desc: "Intuitive mobile applications engineered for performance and user experience. We build cross-platform solutions that extend your brand beyond the web.",
    icon: Smartphone,
    color: "from-enga-gold/20 to-transparent",
  },

  {
    id: "04",
    title: "Brand Identity & Design",
    desc: "Strategic brand systems that communicate authority and clarity. From logos to full visual ecosystems, we design identities that stand out and endure.",
    icon: PenTool,
    color: "from-enga-maroon/20 to-transparent",
  },

  {
    id: "05",
    title: "SEO & Growth Strategy",
    desc: "Technical optimization and content strategies that position your business where it matters most — at the top of search and ahead of competitors.",
    icon: TrendingUp,
    color: "from-enga-gold/20 to-transparent",
  },

  {
    id: "06",
    title: "E-Commerce Solutions",
    desc: "Custom online stores built for speed, security, and conversion. We create seamless shopping experiences that maximize revenue.",
    icon: ShoppingCart,
    color: "from-enga-maroon/20 to-transparent",
  },
];
const steps = [
  {
    id: "01",
    name: "Discovery & Audit",
    desc: "We analyze your goals, market position, and competitive landscape.",
  },

  {
    id: "02",
    name: "Strategy & Planning",
    desc: "Clear execution roadmap aligned with measurable outcomes.",
  },

  {
    id: "03",
    name: "Design & Development",
    desc: "Premium visual systems and scalable technical implementation.",
  },

  {
    id: "04",
    name: "Launch & Optimization",
    desc: "Deployment, tracking, and continuous performance improvement.",
  },
];
const technologies = [
  "React",
  "Vite",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Shopify",
  "WebGL"
];
export { services, steps, technologies };

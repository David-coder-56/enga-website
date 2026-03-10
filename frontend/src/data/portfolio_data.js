const portfolioData = {
  hero: {
    title: "Our Work.",
    subtitle: "Digital experiences that deliver measurable results.",
    viewAllText: "View All Projects"
  },
  projects: [
    {
      id: 1,
      title: "Apex Global Rebrand",
      category: "Branding",
      size: "md:col-span-2 md:row-span-2",
      image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=1200&q=80",
      silhouette: false,
      type: "Complete Brand Identity",
      slug: { current: "apex-global-rebrand" },
      client: "Apex Global",
      year: "2024",
      description: "A complete brand overhaul transforming Apex Global from a regional player to a recognized global enterprise. We rebuilt their entire visual identity, digital presence, and communication strategy from the ground up — resulting in 3× revenue growth within 12 months.",
      technologies: ["Figma", "Adobe CC", "React", "Next.js", "Framer"],
      metrics: [
        { value: "3×", label: "Revenue Growth" },
        { value: "+180%", label: "Brand Recall" },
        { value: "40+", label: "New Markets" }
      ],
      url: "https://example.com"
    },
    {
      id: 2,
      title: "Lumina E-Commerce",
      category: "Web Development",
      size: "md:col-span-1",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      silhouette: true, // example unsplash shot with people
      type: "Custom Online Store",
      slug: { current: "lumina-ecommerce" },
      client: "Lumina",
      year: "2024",
      description: "Built from scratch, Lumina's e-commerce platform handles thousands of concurrent users while delivering a premium luxury shopping experience. Every interaction is crafted for conversion — from first click to checkout confirmation.",
      technologies: ["React", "Node.js", "Stripe", "PostgreSQL", "Redis"],
      metrics: [
        { value: "+40%", label: "Conversion Rate" },
        { value: "2.1s", label: "Load Time" },
        { value: "$2M+", label: "First Month GMV" }
      ],
      url: "https://example.com"
    },
    {
      id: 3,
      title: "Zenith AI Campaign",
      category: "Digital Marketing",
      size: "md:col-span-1",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80",
      silhouette: false,
      type: "Multi-Platform Campaign",
      slug: { current: "zenith-ai-campaign" },
      client: "Zenith AI",
      year: "2025",
      description: "Zenith AI needed to establish themselves in an overcrowded market. We crafted a multi-platform campaign that positioned them as the definitive AI company for enterprise clients — combining paid media, content strategy, and influencer partnerships.",
      technologies: ["Google Ads", "Meta Ads", "HubSpot", "Analytics", "Notion"],
      metrics: [
        { value: "200%", label: "User Growth" },
        { value: "4.8M", label: "Impressions" },
        { value: "18%", label: "Click-Through Rate" }
      ],
      url: "https://example.com"
    },
    {
      id: 4,
      title: "NeoBank Mobile App",
      category: "Mobile Design",
      size: "md:col-span-1",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      type: "App Interface Design",
      slug: { current: "neobank-mobile" },
      client: "NeoBank",
      year: "2025",
      description: "A fintech app that makes banking beautiful. We designed an award-winning UX that simplifies complex financial operations into elegant, intuitive interactions — reducing support tickets by 65% while achieving a 4.9-star rating.",
      technologies: ["React Native", "Figma", "Firebase", "Plaid", "TypeScript"],
      metrics: [
        { value: "4.9★", label: "App Store Rating" },
        { value: "500K+", label: "Downloads" },
        { value: "-65%", label: "Support Tickets" }
      ],
      url: "https://example.com"
    },
    {
      id: 5,
      title: "Glow Restaurant Chain",
      category: "Web Development",
      size: "md:col-span-1",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      type: "Hospitality Website",
      slug: { current: "glow-restaurant" },
      client: "Glow",
      year: "2024",
      description: "Glow's digital presence now matches the experience inside their doors. An immersive website with seamless reservations, storytelling menus, and local SEO dominance — launching across 3 cities in 90 days.",
      technologies: ["Next.js", "Sanity CMS", "Google Maps API", "Stripe", "Vercel"],
      metrics: [
        { value: "+80%", label: "Reservations" },
        { value: "3 Cities", label: "Launched" },
        { value: "#1", label: "Local Search" }
      ],
      url: "https://example.com"
    },
    {
      id: 6,
      title: "TechFlow SaaS Brand",
      category: "Branding",
      size: "md:col-span-1",
      image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=800&q=80",
      type: "Marketing Collateral",
      slug: { current: "techflow-saas" },
      client: "TechFlow",
      year: "2025",
      description: "TechFlow needed a brand that could stand confidently in enterprise sales rooms. We built a complete marketing ecosystem — from pitch decks to landing pages — that drove demo requests up 120% and helped them raise their Series A.",
      technologies: ["Webflow", "Figma", "HubSpot", "Intercom", "Lottie"],
      metrics: [
        { value: "Series A", label: "Fundraise" },
        { value: "+120%", label: "Demo Requests" },
        { value: "9.2/10", label: "NPS Score" }
      ],
      url: "https://example.com"
    }
  ]
};

export { portfolioData };

const contactInfo = {
hero: {
  badge: "ENGA Contact Portal",
  titleTop: "Let’s Build",
  titleAccent: "Something Elite.",
  subtitle:
    "Elite Next Gen Agency is now onboarding visionary brands and ambitious businesses. Tell us what you're building — and let’s elevate it."
},

  details: {
    generalInquiries: "elitenextgentagency87@gmail.com",
    currentTime: "GMT (Monrovia, Liberia)",
    quote:
      "Every powerful digital presence begins with a bold decision to start."
  },

  form: {
    fields: {
      fullName: {
        label: "Full Name",
        placeholder: "Your full name",
        type: "text"
      },

      email: {
        label: "Email Address",
        placeholder: "you@company.com",
        type: "email"
      },

      service: {
        label: "Select a Service",
        options: [
          "Web Development",
          "Mobile App Development",
          "Digital Marketing Strategy",
          "Brand Identity & Graphic Design",
          "SEO & Performance Optimization",
          "E-Commerce Development",
          "Social Media Growth Management",
          "Custom Software Solutions"
        ],
        type: "select"
      },

      vision: {
        label: "Project Details",
        placeholder:
          "Tell us about your goals, timeline, and what success looks like for you...",
        type: "textarea"
      }
    },

    submitButton: {
      text: "Start Your Project"
    }
  }
};

export { contactInfo };
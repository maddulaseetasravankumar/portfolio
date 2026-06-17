// ===== SERVICES DATA =====
export const services = [
  {
    id: 1,
    icon: "wordpress",
    title: "WordPress Development",
    desc: "Custom theme and plugin development tailored to your brand. Performance-optimized, secure, and scalable WordPress solutions for any business size.",
  },
  {
    id: 2,
    icon: "mobile",
    title: "Responsive Web Design",
    desc: "Pixel-perfect, mobile-first designs that look stunning across all devices. From wireframe to final product with meticulous attention to detail.",
  },
  {
    id: 3,
    icon: "cart",
    title: "WooCommerce Stores",
    desc: "Full-featured e-commerce solutions built on WooCommerce. Custom payment gateways, inventory management, and conversion-optimized checkout flows.",
  },
  {
    id: 4,
    icon: "speed",
    title: "Performance Optimization",
    desc: "Speed up your existing website with advanced caching, image optimization, and code minification. Achieve 90+ scores on Google PageSpeed Insights.",
  },
  {
    id: 5,
    icon: "shield",
    title: "Security & Maintenance",
    desc: "Proactive security hardening, regular backups, plugin updates, and uptime monitoring to keep your website safe and running 24/7.",
  },
  {
    id: 6,
    icon: "search",
    title: " CMS & Full Stack Development",
    desc: "Building modern CMS-powered websites and scalable full stack applications using React, Node.js, APIs, databases, and responsive frontend architectures for high-performance digital experiences.",
  },
];

// ===== SKILLS DATA =====
export const skillPills = [
  "HTML5", "CSS3", "JavaScript", "WordPress", "Elementor",
  "React", "PHP", "WooCommerce", "REST APIs", "GITHUB",
];

export const expBars = [
  { label: "WordPress Development", width: 95 },
  { label: "Frontend (HTML/CSS/JS)", width: 95 },
  { label: "React", width: 80 },
  { label: "Backend (Node.js/MongoDB)", width: 75 },
];

export const logoStrip = [
  { icon: "wordpress", label: "WordPress" },
  { icon: "elementor", label: "Elementor" },
  { icon: "react", label: "React" },
  { icon: "js", label: "JavaScript" },
  { icon: "node", label: "Node.js" },
  { icon: "figma", label: "Figma" },
  { icon: "html5", label: "Html" },
  { icon: "css3", label: "CSS" },
  { icon: "git", label: "Git" },
  { icon: "github", label: "Github" },
];

// ===== STATS DATA =====
export const stats = [
  { target: 100, suffix: "+", label: "Projects Completed" },
  { target: 2, suffix: "+", label: "Years Experience" },
  { target: 100, suffix: "%", label: "Client Satisfaction" },
];

// ===== PROJECTS DATA =====
export const projects = [
 
  {
    id: 1,
    title: "Ford Bergner",
    image: "/fordbergner-project.webp",
    url: "https://fordbergner.com/",
    cat: ["wordpress"],
    catLabel: "WordPress",
    gradient: "linear-gradient(135deg,#2e1a0d,#4d3016)",
  },
  {
    id: 2,
    title: "Pemberton",
    image: "/pemberton-project.webp",
    url: "https://pembertonpi.com/",
    cat: ["elementor"],
    catLabel: "Elementor",
    gradient: "linear-gradient(135deg,#1a2e1a,#2e4d2e)",
  },
  {
    id: 3,
    title: "Injury and Pains",
    image: "/injuryandpains-project.webp",
    url: "https://injuryandpainsa.com/",
    cat: ["wordpress"],
    catLabel: "WordPress",
    gradient: "linear-gradient(135deg,#0d1a2e,#16324d)",
  },
  {
    id: 4,
    title: "Pelley Law",
    image: "/pelleylaw-project.webp",
    url: "https://pelleylaw.com/",
    cat: ["wordpress"],
    catLabel: "WordPress",
    gradient: "linear-gradient(135deg,#1a1a2e,#16213e)",
  },
  {
   id: 5,
   title: "EduCase",
   image: "/educase-project.webp",
   url: "https://educase.42web.io/",
   cat: ["elementor", "landing"],
   catLabel: "Elementor / Landing Page",
   gradient: "linear-gradient(135deg,#2e0d1a,#4d1630)",
 },
  {
    id: 6,
    title: "HGC Law",
    image: "/hgclaw-project.webp",
    url: "https://hgclaw.com/",
    cat: ["wordpress"],
    catLabel: "WordPress",
    gradient: "linear-gradient(135deg,#0d2e18,#1a4d2e)",
  },
  {
    id: 7,
    title: "paraquat ",
    image: "/paraquat-landingpage.webp",
    url: "https://ourwebsitepreview.net/MassTortLandingPage/",
    cat: ["elementor", "landing"],
    catLabel: "Elementor / Landing Page",
    gradient: "linear-gradient(135deg,#1a2e1a,#2e4d2e)",
  },
  {
    id: 8,
    title: "Drowning Accident Lawyers",
    image: "/drowning-image.webp",
    url: "https://drowningaccidentlawfirm.com/",
    cat: ["elementor", "landing"],
    catLabel: "Elementor / Landing Page",
    gradient: "linear-gradient(135deg,#0d2e18,#1a4d2e)",
  },
   {
    id: 9,
    title: "Pediatric Dentistry",
    image: "/pediatric-dentistry.webp",
    url: "https://www.dds4kids.com/",
    cat: ["elementor"],
    catLabel: "Elementor",
    gradient: "linear-gradient(135deg,#0d2e18,#1a4d2e)",
  },
];

export const filterCategories = [
  { value: "all", label: "All" },
  { value: "wordpress", label: "WordPress" },
  { value: "elementor", label: "Elementor" },
  { value: "landing", label: "Landing Pages" },
];

// ===== TESTIMONIALS DATA =====
export const testimonialSlides = [
  [
    {
      id: 1,
      initials: "SK",
      text: "Alex completely transformed our online presence. The WordPress site he built is blazing fast, looks incredible, and has increased our leads by 300% in just three months. Exceptional work!",
      name: "Sarah Kowalski",
      role: "CEO, NexGen Solutions",
    },
  ],
  [
    {
      id: 2,
      initials: "MR",
      text: "Delivered our WooCommerce store ahead of schedule with zero bugs. The custom checkout flow he designed reduced cart abandonment by 40%. Alex is the real deal — highly recommended.",
      name: "Marcus Reid",
      role: "Founder, Urban Threads",
    },
  ],
  [
    {
      id: 3,
      initials: "LP",
      text: "Our PageSpeed score went from 38 to 96 after Alex optimized our site. Revenue from organic search doubled within 2 months. His attention to performance is unmatched in the industry.",
      name: "Lena Petrov",
      role: "Marketing Director, BrightScale",
    },
  ],
  [
    {
      id: 4,
      initials: "JO",
      text: "From concept to launch in 3 weeks. Alex built exactly what we envisioned and more. His communication throughout the project was perfect — always responsive, always professional.",
      name: "James O'Brien",
      role: "CTO, FinFlow Technologies",
    },
  ],
];

// ===== HERO STATS CARDS =====
export const heroCards = [
  { type: "stat", label: "Revenue saved", value: "$840K", desc: "Through optimization", accent: true },
  { type: "orb" },
  { type: "stat", label: "Projects shipped", value: "200+", desc: "Worldwide clients", accent: false },
  { type: "stat", label: "Experience", value: "10+", desc: "Years of expertise", accent: true },
  { type: "wide", label: "Quality Guarantee", desc: "100% code quality & clean architecture" },
];

// ===== NAV LINKS =====
export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

// ===== FOOTER LINKS =====
export const footerQuickLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const footerServiceLinks = [
  { href: "#services", label: "WordPress Development" },
  { href: "#services", label: "Performance Optimization" },
  { href: "#services", label: " CMS & Full Stack Development" },
  { href: "#services", label: "Security & Maintenance" },
];

// ===== SOCIAL LINKS =====
export const socialLinks = {
  github: "https://github.com/maddulaseetasravankumar/",
  linkedin: "https://www.linkedin.com/in/maddula-seeta-sravan-kumar/",
  whatsapp: "https://wa.me/916300892375",
  email: "https://mail.google.com/mail/?view=cm&fs=1&to=maddulaseetasravankumar@gmail.com",
};

// ===== EDUCATION DATA =====

export const educationData = [
{
  id: 1,
  Degree: "Bachelor’s Degree",
  University: "Government Degree College",
  Percentage: "9.36 CGPA",
  Mainsubject: "Computer Science",
  Note:"building a strong academic foundation in problem-solving and application development.",
},
{
id: 2,
Degree: "Intermediate",
University: "Government Junior College",
Percentage: "724 Marks",
Mainsubject: "MPC",
Note: "completed with distinction in the science stream.",
},
{
id: 3,
Degree: "SSC",
University: "Surya Deep English High School",
Percentage: "9.5 CGPA",
Mainsubject: "General",
Note: "graduated with high honors, demonstrating strong academic performance across all subjects.",
},
]
-- Seed data for ScratchWeb

-- Seed Services
INSERT INTO services (title, slug, description, icon, features, price_starting, is_active, display_order) VALUES
(
  'Custom Website Development',
  'custom-website',
  'We build fully custom websites tailored to your unique business needs. From simple landing pages to complex web applications.',
  'Globe',
  '["Responsive Design", "SEO Optimized", "Fast Loading", "Custom CMS", "Analytics Integration"]',
  '$2,999',
  true,
  1
),
(
  'E-Commerce Solutions',
  'ecommerce',
  'Launch your online store with our powerful e-commerce solutions. Secure payments, inventory management, and seamless user experience.',
  'ShoppingCart',
  '["Payment Gateway Integration", "Inventory Management", "Order Tracking", "Mobile Commerce", "Multi-currency Support"]',
  '$4,999',
  true,
  2
),
(
  'Mobile-First Design',
  'mobile-first',
  'We design with mobile users in mind first, ensuring your website looks and works perfectly on all devices.',
  'Smartphone',
  '["Responsive Layouts", "Touch-Friendly UI", "Fast Mobile Loading", "PWA Support", "App-like Experience"]',
  '$1,999',
  true,
  3
),
(
  'Performance Optimization',
  'performance',
  'Speed up your existing website with our performance optimization services. Better speed means better conversions.',
  'Zap',
  '["Core Web Vitals", "Image Optimization", "Code Splitting", "CDN Setup", "Caching Strategies"]',
  '$999',
  true,
  4
),
(
  'Security & Maintenance',
  'security-maintenance',
  'Keep your website secure and up-to-date with our maintenance packages. Regular updates, backups, and security monitoring.',
  'Shield',
  '["SSL Certificates", "Regular Backups", "Security Monitoring", "Software Updates", "Malware Protection"]',
  '$299/mo',
  true,
  5
),
(
  'UI/UX Design',
  'ui-ux-design',
  'Create stunning user interfaces and seamless user experiences that convert visitors into customers.',
  'Palette',
  '["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"]',
  '$1,499',
  true,
  6
);

-- Seed Projects
INSERT INTO projects (title, slug, description, client_name, category, image_url, live_url, technologies, featured, display_order) VALUES
(
  'TechStart E-Commerce Platform',
  'techstart-ecommerce',
  'A modern e-commerce platform for a tech startup, featuring real-time inventory, secure checkout, and AI-powered product recommendations.',
  'TechStart Inc.',
  'E-Commerce',
  '/images/projects/techstart.jpg',
  'https://techstart-demo.com',
  '["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS", "Vercel"]',
  true,
  1
),
(
  'HealthCare Plus Portal',
  'healthcare-plus',
  'Patient management portal with appointment scheduling, medical records, and telemedicine integration.',
  'HealthCare Plus',
  'Healthcare',
  '/images/projects/healthcare.jpg',
  'https://healthcare-demo.com',
  '["React", "Node.js", "MongoDB", "WebRTC", "AWS"]',
  true,
  2
),
(
  'FinanceFlow Dashboard',
  'financeflow',
  'Real-time financial analytics dashboard with interactive charts, portfolio tracking, and automated reporting.',
  'FinanceFlow LLC',
  'Finance',
  '/images/projects/financeflow.jpg',
  'https://financeflow-demo.com',
  '["Next.js", "D3.js", "Supabase", "Recharts", "TypeScript"]',
  true,
  3
),
(
  'EduLearn LMS',
  'edulearn-lms',
  'Comprehensive learning management system with course creation, student progress tracking, and live sessions.',
  'EduLearn Academy',
  'Education',
  '/images/projects/edulearn.jpg',
  'https://edulearn-demo.com',
  '["Next.js", "PostgreSQL", "Prisma", "Socket.io", "Vercel"]',
  false,
  4
),
(
  'FoodieSpot Delivery App',
  'foodiespot',
  'Food delivery platform with real-time order tracking, restaurant management, and driver coordination.',
  'FoodieSpot',
  'Food & Delivery',
  '/images/projects/foodiespot.jpg',
  'https://foodiespot-demo.com',
  '["React Native", "Node.js", "PostgreSQL", "Google Maps API", "Stripe"]',
  true,
  5
),
(
  'RealEstate Pro',
  'realestate-pro',
  'Property listing platform with virtual tours, mortgage calculator, and agent management system.',
  'RealEstate Pro',
  'Real Estate',
  '/images/projects/realestate.jpg',
  'https://realestate-demo.com',
  '["Next.js", "Three.js", "Supabase", "Mapbox", "Cloudinary"]',
  false,
  6
);

-- Seed Testimonials
INSERT INTO testimonials (client_name, client_role, company, content, rating, avatar_url, is_featured) VALUES
(
  'Sarah Johnson',
  'CEO',
  'TechStart Inc.',
  'ScratchWeb transformed our online presence completely. Our e-commerce platform now handles 10x more traffic with better performance. Their team was professional, responsive, and delivered beyond our expectations.',
  5,
  '/images/avatars/sarah.jpg',
  true
),
(
  'Michael Chen',
  'Founder',
  'HealthCare Plus',
  'Working with ScratchWeb was a game-changer for our healthcare portal. They understood our complex requirements and delivered a secure, HIPAA-compliant solution that our patients love.',
  5,
  '/images/avatars/michael.jpg',
  true
),
(
  'Emily Rodriguez',
  'Marketing Director',
  'FinanceFlow LLC',
  'The dashboard ScratchWeb built for us is incredible. Real-time data visualization, intuitive interface, and rock-solid performance. Our clients are impressed every time they log in.',
  5,
  '/images/avatars/emily.jpg',
  true
),
(
  'David Park',
  'CTO',
  'EduLearn Academy',
  'ScratchWeb delivered our LMS on time and within budget. The platform handles thousands of concurrent users without breaking a sweat. Highly recommend their services!',
  5,
  '/images/avatars/david.jpg',
  false
),
(
  'Lisa Thompson',
  'Operations Manager',
  'FoodieSpot',
  'Our delivery app needed to be fast and reliable. ScratchWeb delivered exactly that. Real-time tracking works flawlessly, and our driver coordination has never been smoother.',
  5,
  '/images/avatars/lisa.jpg',
  true
),
(
  'James Wilson',
  'Broker',
  'RealEstate Pro',
  'The virtual tour feature ScratchWeb implemented increased our property inquiries by 300%. Their attention to detail and technical expertise is unmatched.',
  4,
  '/images/avatars/james.jpg',
  false
);

-- Seed Team Members
INSERT INTO team_members (name, role, bio, avatar_url, social_links, display_order, is_active) VALUES
(
  'Alex Rivera',
  'Founder & Lead Developer',
  'Full-stack developer with 10+ years of experience building scalable web applications. Passionate about clean code and user experience.',
  '/images/team/alex.jpg',
  '{"twitter": "https://twitter.com/alexr", "linkedin": "https://linkedin.com/in/alexr", "github": "https://github.com/alexr"}',
  1,
  true
),
(
  'Priya Sharma',
  'UI/UX Designer',
  'Award-winning designer specializing in creating beautiful, intuitive interfaces. Believes that great design is invisible.',
  '/images/team/priya.jpg',
  '{"twitter": "https://twitter.com/priyas", "linkedin": "https://linkedin.com/in/priyas", "dribbble": "https://dribbble.com/priyas"}',
  2,
  true
),
(
  'Marcus Johnson',
  'Backend Engineer',
  'Database architect and API specialist. Expert in building high-performance, secure backend systems.',
  '/images/team/marcus.jpg',
  '{"linkedin": "https://linkedin.com/in/marcusj", "github": "https://github.com/marcusj"}',
  3,
  true
),
(
  'Sophie Chen',
  'Project Manager',
  'Certified PMP with expertise in agile methodologies. Ensures every project is delivered on time and exceeds expectations.',
  '/images/team/sophie.jpg',
  '{"twitter": "https://twitter.com/sophiec", "linkedin": "https://linkedin.com/in/sophiec"}',
  4,
  true
);

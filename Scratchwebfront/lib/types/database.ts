export interface Contact {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  service_interest?: string
  budget_range?: string
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed'
  created_at: string
  updated_at: string
}

export interface Service {
  id: string
  title: string
  slug: string
  description: string
  icon?: string
  features: string[]
  price_starting?: string
  is_active: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  client_name?: string
  category: string
  image_url?: string
  live_url?: string
  technologies: string[]
  featured: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  client_name: string
  client_role?: string
  company?: string
  content: string
  rating: number
  avatar_url?: string
  project_id?: string
  is_featured: boolean
  created_at: string
}

export interface NewsletterSubscriber {
  id: string
  email: string
  is_active: boolean
  subscribed_at: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio?: string
  avatar_url?: string
  social_links: Record<string, string>
  display_order: number
  is_active: boolean
  created_at: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  service_interest?: string
  budget_range?: string
}

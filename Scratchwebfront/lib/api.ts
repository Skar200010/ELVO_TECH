const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

async function fetchApi(endpoint: string, options?: RequestInit) {
  const url = `${API_URL}${endpoint}`
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }))
    throw new Error(error.error || `HTTP ${response.status}`)
  }

  return response.json()
}

export const api = {
  services: {
    getAll: (active = true) => 
      fetchApi(`/api/services${active ? '?active=true' : ''}`),
  },
  projects: {
    getAll: (filters?: { featured?: boolean; category?: string }) => {
      const params = new URLSearchParams()
      if (filters?.featured) params.set('featured', 'true')
      if (filters?.category) params.set('category', filters.category)
      const query = params.toString()
      return fetchApi(`/api/projects${query ? `?${query}` : ''}`)
    },
  },
  testimonials: {
    getAll: (featured = false) =>
      fetchApi(`/api/testimonials${featured ? '?featured=true' : ''}`),
  },
  team: {
    getAll: () => fetchApi('/api/team'),
  },
  contacts: {
    create: (data: {
      name: string
      email: string
      phone?: string
      company?: string
      message: string
      service_interest?: string
      budget_range?: string
    }) =>
      fetchApi('/api/contacts', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },
  newsletter: {
    subscribe: (email: string) =>
      fetchApi('/api/newsletter/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email }),
      }),
  },
}

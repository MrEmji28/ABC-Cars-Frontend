const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export interface Car {
  id: number;
  title: string;
  description: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  rental_price_per_day?: number;
  type: 'sale' | 'rental' | 'both';
  status: 'available' | 'sold' | 'rented';
  image_url?: string;
  user_id: number;
  created_at: string;
  updated_at: string;
}

export interface SearchFilters {
  brand?: string;
  model?: string;
  year?: string;
  type?: string;
  min_price?: number;
  max_price?: number;
}

class ApiService {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }

  async getCars(filters?: SearchFilters): Promise<Car[]> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value.toString());
      });
    }
    
    const endpoint = params.toString() ? `/cars?${params}` : '/cars';
    return this.request<Car[]>(endpoint);
  }

  async getCar(id: number): Promise<Car> {
    return this.request<Car>(`/cars/${id}`);
  }
}

export const apiService = new ApiService();
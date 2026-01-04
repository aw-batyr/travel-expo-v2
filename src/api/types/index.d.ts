export interface FeaturedImage {
  id: number;
  disk_name: string;
  file_name: string;
  file_size: number;
  content_type: string;
  title: string | null;
  description: string | null;
  field: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
  path: string;
  extension: string;
}

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  published_at: string;
  featured_images: FeaturedImage[];
}

export interface Pagination {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

export interface NewsResponse {
  status: string;
  data: NewsItem[];
  pagination: Pagination;
}

export interface ContactsFormType {
  name: string;
  email: string;
  phone: string;
  company: string;
  msg: string;
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: string;
  category: string;
  description?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export type Theme = 'light' | 'dark'; 
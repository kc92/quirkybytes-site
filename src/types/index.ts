export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  preview: 'western' | 'tech' | 'space' | 'retro';
  status: 'live' | 'soon' | 'development';
  tech: string[];
  features: string[];
  challenges: string[];
  liveUrl?: string;
  githubUrl?: string;
  isNew?: boolean;
  isHot?: boolean;
}

export interface Service {
  icon: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
}

export interface Award {
  icon: string;
  title: string;
  subtitle: string;
}

export interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  website?: string;
  createdAt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: 'website' | 'webapp' | 'game' | 'ai' | 'other';
  budget?: string;
  message: string;
}

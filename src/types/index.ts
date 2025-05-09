export interface Community {
  id: string;
  name: string;
  description: string;
  members: number;
  category: string;
  image: string;
  featured?: boolean;
}

export interface App {
  id: string;
  name: string;
  description: string;
  communityId: string;
  communityName: string;
  image: string;
  stars: number;
  downloads: number;
}

export interface RepoData {
  author: string;
  avatar: string;
  builtBy: {
    href: string;
    avatar: string;
    username: string;
  }[];
  currentPeriodStars: number;
  description: string;
  forks: number;
  language: string;
  languageColor: string;
  name: string;
  stars: number;
  url: string;
}

export interface DevData {
  avatar: string;
  index?: number;
  name: string;
  repo: {
    name: string;
    description: string;
    url: string;
  };
  type: string;
  url: string;
  username: string;
}

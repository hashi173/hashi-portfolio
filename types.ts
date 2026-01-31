
export interface Project {
  id: string;
  title: string;
  japaneseTitle: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface Education {
  period: string;
  school: string;
  major: string;
  description: string;
}

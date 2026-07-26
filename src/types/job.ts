export interface Job {
  id: number;
  title: string;
  company: string;
  salary: string;
  location: string;
  employmentType: string;
  postedAt: string;
  experienceLevel: string;
  description: string;
  requirements: string[];
  skills?: string[];
}
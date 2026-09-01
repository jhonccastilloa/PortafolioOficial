export interface IconProps {
  color: string;
  class?: string;
}

export interface Technology {
  name: string;
  icon?: string;
  Icon?: (_props: IconProps) => any;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface CaseStudyLink {
  href: string;
  label: string;
}

export interface CaseStudy {
  eyebrow: string;
  title: string;
  summary: string;
  role: string;
  period: string;
  status: string;
  highlights: string[];
  technologies: string[];
  featured?: boolean;
  links?: CaseStudyLink[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Capability {
  title: string;
  description: string;
  technologies: string[];
  primary?: boolean;
}

export interface ContactLink {
  href: string;
  label: string;
  value: string;
  external?: boolean;
}
